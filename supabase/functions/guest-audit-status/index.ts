import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function plainEnglish(title: string | undefined): string {
  if (!title) return "";
  const map: Record<string, string> = {
    "Missing meta description":
      "Your Google shop window text is missing",
    "Missing H1 tag": "Your page headline is missing",
    "Slow page speed": "Your site loads slowly on phones",
    "Missing alt text": "Your images need descriptions",
    "No SSL certificate":
      "Your site security certificate is missing",
    "Broken internal links": "Some of your links go nowhere",
    "Duplicate title tags":
      "Two pages have the same Google title",
    "Large image files":
      "Your images are slowing your site down",
  };
  return map[title] || title;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { guest_token } = await req.json();

    if (!guest_token) {
      return new Response(
        JSON.stringify({ error: "guest_token required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Find the queue job
    const { data: job } = await supabase
      .from("queue_jobs")
      .select("id, status, result")
      .eq("guest_token", guest_token)
      .eq("job_type", "site_audit")
      .single();

    if (!job) {
      return new Response(
        JSON.stringify({ status: "not_found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (job.status !== "completed") {
      return new Response(
        JSON.stringify({ status: job.status }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Job complete — fetch audit data
    const { data: audit } = await supabase
      .from("seo_audits")
      .select("id, seo_score, audit_results")
      .eq("guest_token", guest_token)
      .single();

    if (!audit) {
      return new Response(
        JSON.stringify({ status: "completed", error: "Audit data not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { data: issues } = await supabase
      .from("audit_issues")
      .select("title, severity, category")
      .eq("audit_id", audit.id)
      .order("severity", { ascending: false })
      .limit(20);

    // Derive verdict from score
    const score = audit.seo_score || 0;
    const verdict =
      score >= 70 ? "Easy to Find" :
      score >= 40 ? "Needs Some Work" : "Hard to Find";
    const verdictColour =
      score >= 70 ? "green" :
      score >= 40 ? "amber" : "red";

    // Derive visitor estimate (rough proxy from score)
    const visitorsPerDay = Math.max(1, Math.round(score / 10));
    const potentialPerDay = Math.round(visitorsPerDay * 3);

    // Build 3 insight cards
    const passing = issues?.filter((i) =>
      i.severity === "info" || i.severity === "low") || [];
    const blocking = issues?.filter((i) =>
      i.severity === "critical" || i.severity === "high") || [];
    const opportunity = issues?.filter((i) =>
      i.severity === "medium") || [];

    return new Response(JSON.stringify({
      status: "completed",
      audit_id: audit.id,
      verdict,
      verdictColour,
      visitorsPerDay,
      potentialPerDay,
      cards: {
        working: plainEnglish(passing[0]?.title) ||
          "Your website is live and Google can reach it",
        blocking: plainEnglish(blocking[0]?.title) ||
          "We found some things stopping customers finding you",
        opportunity: plainEnglish(opportunity[0]?.title) ||
          "There are quick wins available for your site",
      },
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    console.error("guest-audit-status error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
