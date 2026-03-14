import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
}

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response("ok", { headers: corsHeaders })

  try {
    const { url, guest_token } = await req.json()

    if (!url || !guest_token) return new Response(
      JSON.stringify({ error: "url and guest_token required" }),
      { status: 400, headers: corsHeaders }
    )

    // Basic URL validation
    let cleanUrl = url.trim()
    if (!cleanUrl.startsWith('http://') && 
        !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    )

    // Step 1: Check if a website record already exists for this URL
    // (handles retries gracefully)
    let websiteId: string

    const { data: existingWebsite } = await supabase
      .from("user_websites")
      .select("id")
      .eq("website_url", cleanUrl)
      .is("email", null)
      .maybeSingle()

    if (existingWebsite) {
      websiteId = existingWebsite.id
    } else {
      // Step 2: Create placeholder website record
      // email is null — filled in by claim-guest-audit after sign-up
      const { data: website, error: websiteError } = await supabase
        .from("user_websites")
        .insert({
          website_url: cleanUrl,
          email: null,
          status: 'pending',
          seo_health_score: 0,
        })
        .select("id")
        .single()

      if (websiteError) return new Response(
        JSON.stringify({ error: websiteError.message }),
        { status: 500, headers: corsHeaders }
      )

      websiteId = website.id
    }

    // Step 3: Check for an existing recent guest job for this URL
    // Prevents duplicate scans if user refreshes the page
    const { data: existingJob } = await supabase
      .from("queue_jobs")
      .select("id, status, guest_token")
      .eq("website_id", websiteId)
      .eq("job_type", "site_audit")
      .in("status", ["created", "running", "completed"])
      .gte("created_at", 
        new Date(Date.now() - 24*60*60*1000).toISOString())
      .maybeSingle()

    if (existingJob) {
      // Return existing job — no duplicate scan
      return new Response(
        JSON.stringify({ 
          job_id: existingJob.id, 
          guest_token: existingJob.guest_token ?? guest_token,
          website_id: websiteId,
          reused: true
        }),
        { headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        }}
      )
    }

    // Step 4: Insert the queue job
    const { data: job, error: jobError } = await supabase
      .from("queue_jobs")
      .insert({
        job_type: "site_audit",
        status: "created",
        user_id: null,
        guest_token: guest_token,
        website_id: websiteId,
        payload: { 
          website_url: cleanUrl, 
          website_id: websiteId,
          guest: true 
        },
        expires_at: new Date(
          Date.now() + 24*60*60*1000).toISOString()
      })
      .select("id")
      .single()

    if (jobError) return new Response(
      JSON.stringify({ error: jobError.message }),
      { status: 500, headers: corsHeaders }
    )

    return new Response(
      JSON.stringify({ 
        job_id: job.id, 
        guest_token,
        website_id: websiteId
      }),
      { headers: { 
        ...corsHeaders, 
        "Content-Type": "application/json" 
      }}
    )

  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: corsHeaders }
    )
  }
})
