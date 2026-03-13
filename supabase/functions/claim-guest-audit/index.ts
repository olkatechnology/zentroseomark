import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Requires valid JWT
    const authHeader = req.headers.get("Authorization");
    const supabaseAuth = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader! } } }
    );
    const { data: { user } } = await supabaseAuth.auth.getUser();
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Unauthorised" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { guest_token } = await req.json();
    if (!guest_token) {
      return new Response(
        JSON.stringify({ error: "guest_token required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use service role to update (bypasses RLS)
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Update queue_job ownership
    await supabaseAdmin
      .from("queue_jobs")
      .update({ user_id: user.id })
      .eq("guest_token", guest_token)
      .is("user_id", null);

    // Update seo_audit ownership
    const { data: audit } = await supabaseAdmin
      .from("seo_audits")
      .update({
        email: user.email,
        claimed_at: new Date().toISOString(),
      })
      .eq("guest_token", guest_token)
      .is("claimed_at", null)
      .select("id, website_id")
      .single();

    if (!audit) {
      return new Response(
        JSON.stringify({ error: "Audit not found or already claimed" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Link website to user
    await supabaseAdmin
      .from("user_websites")
      .update({ email: user.email })
      .eq("id", audit.website_id);

    return new Response(
      JSON.stringify({
        success: true,
        audit_id: audit.id,
        website_id: audit.website_id,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("claim-guest-audit error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
