export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      activity_log: {
        Row: {
          activity_type: string
          created_at: string
          details: Json | null
          id: string
          user_email: string
          website_id: string | null
          website_url: string
        }
        Insert: {
          activity_type: string
          created_at?: string
          details?: Json | null
          id?: string
          user_email: string
          website_id?: string | null
          website_url: string
        }
        Update: {
          activity_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          user_email?: string
          website_id?: string | null
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_log_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_audit_sessions: {
        Row: {
          actions_performed: Json | null
          admin_email: string
          created_at: string
          id: string
          pages_viewed: Json | null
          read_only_mode: boolean | null
          session_ended_at: string | null
          session_notes: string | null
          session_started_at: string
          session_type: string
          updated_at: string
          user_email: string
        }
        Insert: {
          actions_performed?: Json | null
          admin_email: string
          created_at?: string
          id?: string
          pages_viewed?: Json | null
          read_only_mode?: boolean | null
          session_ended_at?: string | null
          session_notes?: string | null
          session_started_at?: string
          session_type?: string
          updated_at?: string
          user_email: string
        }
        Update: {
          actions_performed?: Json | null
          admin_email?: string
          created_at?: string
          id?: string
          pages_viewed?: Json | null
          read_only_mode?: boolean | null
          session_ended_at?: string | null
          session_notes?: string | null
          session_started_at?: string
          session_type?: string
          updated_at?: string
          user_email?: string
        }
        Relationships: []
      }
      admin_error_logs: {
        Row: {
          created_at: string
          error_message: string
          error_type: string
          id: string
          metadata: Json | null
          resolved: boolean
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          stack_trace: string | null
          timestamp: string
          updated_at: string
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          error_message: string
          error_type: string
          id?: string
          metadata?: Json | null
          resolved?: boolean
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          stack_trace?: string | null
          timestamp?: string
          updated_at?: string
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          error_message?: string
          error_type?: string
          id?: string
          metadata?: Json | null
          resolved?: boolean
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          stack_trace?: string | null
          timestamp?: string
          updated_at?: string
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      admin_page_views: {
        Row: {
          created_at: string | null
          id: string
          page_path: string
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          page_path: string
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          page_path?: string
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      admin_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["admin_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      admin_tool_configurations: {
        Row: {
          configuration: Json
          created_at: string | null
          created_by: string
          id: string
          is_active: boolean | null
          tool_type: Database["public"]["Enums"]["tool_type"]
          updated_at: string | null
        }
        Insert: {
          configuration: Json
          created_at?: string | null
          created_by: string
          id?: string
          is_active?: boolean | null
          tool_type: Database["public"]["Enums"]["tool_type"]
          updated_at?: string | null
        }
        Update: {
          configuration?: Json
          created_at?: string | null
          created_by?: string
          id?: string
          is_active?: boolean | null
          tool_type?: Database["public"]["Enums"]["tool_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      admin_user_insights: {
        Row: {
          account_health_score: number | null
          created_at: string
          feature_usage_summary: Json | null
          growth_metrics: Json | null
          id: string
          last_active_at: string | null
          risk_factors: Json | null
          total_audits: number | null
          total_websites: number | null
          updated_at: string
          user_email: string
          user_id: string
        }
        Insert: {
          account_health_score?: number | null
          created_at?: string
          feature_usage_summary?: Json | null
          growth_metrics?: Json | null
          id?: string
          last_active_at?: string | null
          risk_factors?: Json | null
          total_audits?: number | null
          total_websites?: number | null
          updated_at?: string
          user_email: string
          user_id: string
        }
        Update: {
          account_health_score?: number | null
          created_at?: string
          feature_usage_summary?: Json | null
          growth_metrics?: Json | null
          id?: string
          last_active_at?: string | null
          risk_factors?: Json | null
          total_audits?: number | null
          total_websites?: number | null
          updated_at?: string
          user_email?: string
          user_id?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          role: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_competitor_tracking: {
        Row: {
          competitor_domain: string
          created_at: string
          id: string
          last_updated: string
          mention_count: number | null
          platform: string
          visibility_share: number | null
          website_id: string
        }
        Insert: {
          competitor_domain: string
          created_at?: string
          id?: string
          last_updated?: string
          mention_count?: number | null
          platform: string
          visibility_share?: number | null
          website_id: string
        }
        Update: {
          competitor_domain?: string
          created_at?: string
          id?: string
          last_updated?: string
          mention_count?: number | null
          platform?: string
          visibility_share?: number | null
          website_id?: string
        }
        Relationships: []
      }
      ai_platform_configs: {
        Row: {
          api_endpoint: string | null
          color_theme: string
          created_at: string
          id: string
          platform_name: string
          rate_limits: Json | null
          status: string
          updated_at: string
        }
        Insert: {
          api_endpoint?: string | null
          color_theme?: string
          created_at?: string
          id?: string
          platform_name: string
          rate_limits?: Json | null
          status?: string
          updated_at?: string
        }
        Update: {
          api_endpoint?: string | null
          color_theme?: string
          created_at?: string
          id?: string
          platform_name?: string
          rate_limits?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      ai_prompt_templates: {
        Row: {
          average_cost: number | null
          average_latency_ms: number | null
          created_at: string | null
          id: string
          is_active: boolean | null
          model_preference: string | null
          prompt_template: string
          success_rate: number | null
          template_category: string | null
          template_name: string
          total_uses: number | null
          updated_at: string | null
          user_satisfaction_score: number | null
        }
        Insert: {
          average_cost?: number | null
          average_latency_ms?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          model_preference?: string | null
          prompt_template: string
          success_rate?: number | null
          template_category?: string | null
          template_name: string
          total_uses?: number | null
          updated_at?: string | null
          user_satisfaction_score?: number | null
        }
        Update: {
          average_cost?: number | null
          average_latency_ms?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          model_preference?: string | null
          prompt_template?: string
          success_rate?: number | null
          template_category?: string | null
          template_name?: string
          total_uses?: number | null
          updated_at?: string | null
          user_satisfaction_score?: number | null
        }
        Relationships: []
      }
      ai_request_logs: {
        Row: {
          completion_tokens: number | null
          cost_usd: number | null
          created_at: string | null
          error_message: string | null
          id: string
          latency_ms: number | null
          metadata: Json | null
          model_used: string | null
          prompt_tokens: number | null
          request_type: string | null
          status: string | null
          total_tokens: number | null
          user_id: string | null
          website_id: string | null
        }
        Insert: {
          completion_tokens?: number | null
          cost_usd?: number | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          metadata?: Json | null
          model_used?: string | null
          prompt_tokens?: number | null
          request_type?: string | null
          status?: string | null
          total_tokens?: number | null
          user_id?: string | null
          website_id?: string | null
        }
        Update: {
          completion_tokens?: number | null
          cost_usd?: number | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          latency_ms?: number | null
          metadata?: Json | null
          model_used?: string | null
          prompt_tokens?: number | null
          request_type?: string | null
          status?: string | null
          total_tokens?: number | null
          user_id?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_request_logs_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_usage_tracking: {
        Row: {
          cost_usd: number
          created_at: string | null
          id: string
          model_name: string
          request_type: string
          service_type: string
          tokens_used: number
          user_email: string
          user_id: string | null
          website_id: string | null
        }
        Insert: {
          cost_usd: number
          created_at?: string | null
          id?: string
          model_name: string
          request_type: string
          service_type: string
          tokens_used: number
          user_email: string
          user_id?: string | null
          website_id?: string | null
        }
        Update: {
          cost_usd?: number
          created_at?: string | null
          id?: string
          model_name?: string
          request_type?: string
          service_type?: string
          tokens_used?: number
          user_email?: string
          user_id?: string | null
          website_id?: string | null
        }
        Relationships: []
      }
      ai_visibility_alerts: {
        Row: {
          alert_type: string
          created_at: string
          id: string
          is_active: boolean
          last_triggered: string | null
          notification_settings: Json | null
          trigger_conditions: Json | null
          updated_at: string
          website_id: string
        }
        Insert: {
          alert_type?: string
          created_at?: string
          id?: string
          is_active?: boolean
          last_triggered?: string | null
          notification_settings?: Json | null
          trigger_conditions?: Json | null
          updated_at?: string
          website_id: string
        }
        Update: {
          alert_type?: string
          created_at?: string
          id?: string
          is_active?: boolean
          last_triggered?: string | null
          notification_settings?: Json | null
          trigger_conditions?: Json | null
          updated_at?: string
          website_id?: string
        }
        Relationships: []
      }
      ai_visibility_tracking: {
        Row: {
          brand_mentioned: boolean
          citation_url: string | null
          created_at: string
          full_response_text: string | null
          id: string
          platform: string
          query_context: Json | null
          query_tested: string
          response_metadata: Json | null
          updated_at: string
          visibility_score: number | null
          website_id: string
        }
        Insert: {
          brand_mentioned?: boolean
          citation_url?: string | null
          created_at?: string
          full_response_text?: string | null
          id?: string
          platform: string
          query_context?: Json | null
          query_tested: string
          response_metadata?: Json | null
          updated_at?: string
          visibility_score?: number | null
          website_id: string
        }
        Update: {
          brand_mentioned?: boolean
          citation_url?: string | null
          created_at?: string
          full_response_text?: string | null
          id?: string
          platform?: string
          query_context?: Json | null
          query_tested?: string
          response_metadata?: Json | null
          updated_at?: string
          visibility_score?: number | null
          website_id?: string
        }
        Relationships: []
      }
      api_config: {
        Row: {
          created_at: string
          google_oauth_client_id: string | null
          google_oauth_client_secret: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          google_oauth_client_id?: string | null
          google_oauth_client_secret?: string | null
          id?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          google_oauth_client_id?: string | null
          google_oauth_client_secret?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      api_configurations: {
        Row: {
          api_id: string
          api_name: string
          cost_limit: number
          created_at: string
          daily_limit: number
          enabled: boolean
          hourly_limit: number
          id: string
          priority: string
          updated_at: string
        }
        Insert: {
          api_id: string
          api_name: string
          cost_limit?: number
          created_at?: string
          daily_limit?: number
          enabled?: boolean
          hourly_limit?: number
          id?: string
          priority?: string
          updated_at?: string
        }
        Update: {
          api_id?: string
          api_name?: string
          cost_limit?: number
          created_at?: string
          daily_limit?: number
          enabled?: boolean
          hourly_limit?: number
          id?: string
          priority?: string
          updated_at?: string
        }
        Relationships: []
      }
      api_credit_sources: {
        Row: {
          api_name: string
          balance_raw: number
          balance_unit: string
          conversion_rate: number
          created_at: string | null
          id: string
          last_synced: string | null
          metadata: Json | null
          monthly_quota: number | null
          monthly_used: number | null
          status: string | null
          sync_frequency_minutes: number | null
          threshold_critical: number | null
          threshold_warning: number | null
          updated_at: string | null
          zentrocredits_available: number | null
        }
        Insert: {
          api_name: string
          balance_raw: number
          balance_unit: string
          conversion_rate: number
          created_at?: string | null
          id?: string
          last_synced?: string | null
          metadata?: Json | null
          monthly_quota?: number | null
          monthly_used?: number | null
          status?: string | null
          sync_frequency_minutes?: number | null
          threshold_critical?: number | null
          threshold_warning?: number | null
          updated_at?: string | null
          zentrocredits_available?: number | null
        }
        Update: {
          api_name?: string
          balance_raw?: number
          balance_unit?: string
          conversion_rate?: number
          created_at?: string | null
          id?: string
          last_synced?: string | null
          metadata?: Json | null
          monthly_quota?: number | null
          monthly_used?: number | null
          status?: string | null
          sync_frequency_minutes?: number | null
          threshold_critical?: number | null
          threshold_warning?: number | null
          updated_at?: string | null
          zentrocredits_available?: number | null
        }
        Relationships: []
      }
      api_feature_budgets: {
        Row: {
          api_provider: string | null
          budget_allocated: number
          budget_percentage: number | null
          budget_used: number | null
          created_at: string | null
          display_name: string
          enabled: boolean | null
          feature_name: string
          id: string
          updated_at: string | null
        }
        Insert: {
          api_provider?: string | null
          budget_allocated: number
          budget_percentage?: number | null
          budget_used?: number | null
          created_at?: string | null
          display_name: string
          enabled?: boolean | null
          feature_name: string
          id?: string
          updated_at?: string | null
        }
        Update: {
          api_provider?: string | null
          budget_allocated?: number
          budget_percentage?: number | null
          budget_used?: number | null
          created_at?: string | null
          display_name?: string
          enabled?: boolean | null
          feature_name?: string
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      api_global_settings: {
        Row: {
          created_at: string
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string
        }
        Relationships: []
      }
      api_health_checks: {
        Row: {
          api_id: string
          checked_at: string
          endpoint_url: string
          error_message: string | null
          id: string
          response_time: number | null
          status_code: number | null
          success: boolean
        }
        Insert: {
          api_id: string
          checked_at?: string
          endpoint_url: string
          error_message?: string | null
          id?: string
          response_time?: number | null
          status_code?: number | null
          success?: boolean
        }
        Update: {
          api_id?: string
          checked_at?: string
          endpoint_url?: string
          error_message?: string | null
          id?: string
          response_time?: number | null
          status_code?: number | null
          success?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "api_health_checks_api_id_fkey"
            columns: ["api_id"]
            isOneToOne: false
            referencedRelation: "api_configurations"
            referencedColumns: ["api_id"]
          },
        ]
      }
      api_health_status: {
        Row: {
          api_id: string
          avg_response_time: number
          created_at: string
          error_rate: number
          id: string
          last_checked_at: string
          status: string
          updated_at: string
          uptime_percentage: number
        }
        Insert: {
          api_id: string
          avg_response_time?: number
          created_at?: string
          error_rate?: number
          id?: string
          last_checked_at?: string
          status: string
          updated_at?: string
          uptime_percentage?: number
        }
        Update: {
          api_id?: string
          avg_response_time?: number
          created_at?: string
          error_rate?: number
          id?: string
          last_checked_at?: string
          status?: string
          updated_at?: string
          uptime_percentage?: number
        }
        Relationships: [
          {
            foreignKeyName: "api_health_status_api_id_fkey"
            columns: ["api_id"]
            isOneToOne: false
            referencedRelation: "api_configurations"
            referencedColumns: ["api_id"]
          },
        ]
      }
      api_incidents: {
        Row: {
          api_id: string
          created_at: string
          description: string | null
          id: string
          resolved_at: string | null
          severity: string
          started_at: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          api_id: string
          created_at?: string
          description?: string | null
          id?: string
          resolved_at?: string | null
          severity: string
          started_at?: string
          status: string
          title: string
          updated_at?: string
        }
        Update: {
          api_id?: string
          created_at?: string
          description?: string | null
          id?: string
          resolved_at?: string | null
          severity?: string
          started_at?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_incidents_api_id_fkey"
            columns: ["api_id"]
            isOneToOne: false
            referencedRelation: "api_configurations"
            referencedColumns: ["api_id"]
          },
        ]
      }
      api_provider_metrics: {
        Row: {
          avg_credits_per_call: number | null
          avg_response_time_ms: number | null
          created_at: string | null
          data_quality_score: number | null
          error_rate: number | null
          evaluated_at: string | null
          feature: string
          id: string
          provider: string
          sample_size: number | null
          total_cost_usd: number | null
          updated_at: string | null
        }
        Insert: {
          avg_credits_per_call?: number | null
          avg_response_time_ms?: number | null
          created_at?: string | null
          data_quality_score?: number | null
          error_rate?: number | null
          evaluated_at?: string | null
          feature: string
          id?: string
          provider: string
          sample_size?: number | null
          total_cost_usd?: number | null
          updated_at?: string | null
        }
        Update: {
          avg_credits_per_call?: number | null
          avg_response_time_ms?: number | null
          created_at?: string | null
          data_quality_score?: number | null
          error_rate?: number | null
          evaluated_at?: string | null
          feature?: string
          id?: string
          provider?: string
          sample_size?: number | null
          total_cost_usd?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      api_rate_limits: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          limit_exceeded: boolean | null
          requests_count: number
          user_email: string
          user_id: string | null
          window_end: string
          window_start: string
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          limit_exceeded?: boolean | null
          requests_count?: number
          user_email: string
          user_id?: string | null
          window_end: string
          window_start: string
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          limit_exceeded?: boolean | null
          requests_count?: number
          user_email?: string
          user_id?: string | null
          window_end?: string
          window_start?: string
        }
        Relationships: []
      }
      api_rate_tracking: {
        Row: {
          api_provider: string
          created_at: string
          endpoint: string
          id: string
          limit_exceeded: boolean | null
          requests_count: number
          window_end: string
          window_start: string
        }
        Insert: {
          api_provider: string
          created_at?: string
          endpoint: string
          id?: string
          limit_exceeded?: boolean | null
          requests_count?: number
          window_end: string
          window_start: string
        }
        Update: {
          api_provider?: string
          created_at?: string
          endpoint?: string
          id?: string
          limit_exceeded?: boolean | null
          requests_count?: number
          window_end?: string
          window_start?: string
        }
        Relationships: []
      }
      api_response_archive: {
        Row: {
          ai_entities: Json | null
          ai_insights: Json | null
          ai_processed: boolean | null
          api_provider: string
          created_at: string | null
          credits_consumed: number | null
          endpoint: string
          id: string
          is_test_data: boolean | null
          metadata: Json | null
          processed_response: Json | null
          raw_response: Json
          request_payload: Json
          request_timestamp: string | null
          response_time_ms: number | null
          user_id: string | null
          website_id: string | null
        }
        Insert: {
          ai_entities?: Json | null
          ai_insights?: Json | null
          ai_processed?: boolean | null
          api_provider: string
          created_at?: string | null
          credits_consumed?: number | null
          endpoint: string
          id?: string
          is_test_data?: boolean | null
          metadata?: Json | null
          processed_response?: Json | null
          raw_response: Json
          request_payload: Json
          request_timestamp?: string | null
          response_time_ms?: number | null
          user_id?: string | null
          website_id?: string | null
        }
        Update: {
          ai_entities?: Json | null
          ai_insights?: Json | null
          ai_processed?: boolean | null
          api_provider?: string
          created_at?: string | null
          credits_consumed?: number | null
          endpoint?: string
          id?: string
          is_test_data?: boolean | null
          metadata?: Json | null
          processed_response?: Json | null
          raw_response?: Json
          request_payload?: Json
          request_timestamp?: string | null
          response_time_ms?: number | null
          user_id?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_response_archive_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "api_response_archive_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      api_test_mode_config: {
        Row: {
          allowed_test_emails: Json | null
          created_at: string | null
          enabled: boolean | null
          id: string
          kill_switch_enabled: boolean | null
          test_budget_percentage: number | null
          test_budget_remaining: number | null
          test_budget_total: number | null
          test_budget_used: number | null
          updated_at: string | null
        }
        Insert: {
          allowed_test_emails?: Json | null
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          kill_switch_enabled?: boolean | null
          test_budget_percentage?: number | null
          test_budget_remaining?: number | null
          test_budget_total?: number | null
          test_budget_used?: number | null
          updated_at?: string | null
        }
        Update: {
          allowed_test_emails?: Json | null
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          kill_switch_enabled?: boolean | null
          test_budget_percentage?: number | null
          test_budget_remaining?: number | null
          test_budget_total?: number | null
          test_budget_used?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      api_usage: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          ip_address: string | null
          method: string
          request_size_bytes: number | null
          response_size_bytes: number | null
          response_time_ms: number
          status_code: number
          user_agent: string | null
          user_email: string | null
          user_id: string | null
          user_plan: string | null
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          ip_address?: string | null
          method?: string
          request_size_bytes?: number | null
          response_size_bytes?: number | null
          response_time_ms: number
          status_code: number
          user_agent?: string | null
          user_email?: string | null
          user_id?: string | null
          user_plan?: string | null
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          ip_address?: string | null
          method?: string
          request_size_bytes?: number | null
          response_size_bytes?: number | null
          response_time_ms?: number
          status_code?: number
          user_agent?: string | null
          user_email?: string | null
          user_id?: string | null
          user_plan?: string | null
        }
        Relationships: []
      }
      api_usage_logs: {
        Row: {
          api_name: string
          cost_usd: number
          created_at: string | null
          credits_used: number
          endpoint: string
          error_message: string | null
          feature_type: string
          id: string
          latency_ms: number | null
          request_metadata: Json | null
          response_metadata: Json | null
          status: string | null
          units_used: number
          user_id: string | null
          website_id: string | null
        }
        Insert: {
          api_name: string
          cost_usd: number
          created_at?: string | null
          credits_used: number
          endpoint: string
          error_message?: string | null
          feature_type: string
          id?: string
          latency_ms?: number | null
          request_metadata?: Json | null
          response_metadata?: Json | null
          status?: string | null
          units_used: number
          user_id?: string | null
          website_id?: string | null
        }
        Update: {
          api_name?: string
          cost_usd?: number
          created_at?: string | null
          credits_used?: number
          endpoint?: string
          error_message?: string | null
          feature_type?: string
          id?: string
          latency_ms?: number | null
          request_metadata?: Json | null
          response_metadata?: Json | null
          status?: string | null
          units_used?: number
          user_id?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "api_usage_logs_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      api_usage_monitoring: {
        Row: {
          api_provider: string
          cost_total: number | null
          created_at: string | null
          date: string | null
          endpoint: string
          id: string
          requests_count: number | null
        }
        Insert: {
          api_provider: string
          cost_total?: number | null
          created_at?: string | null
          date?: string | null
          endpoint: string
          id?: string
          requests_count?: number | null
        }
        Update: {
          api_provider?: string
          cost_total?: number | null
          created_at?: string | null
          date?: string | null
          endpoint?: string
          id?: string
          requests_count?: number | null
        }
        Relationships: []
      }
      artifacts: {
        Row: {
          action_id: string | null
          artifact_type: string
          content: string | null
          created_at: string | null
          id: string
          job_run_id: string | null
          metadata: Json | null
          storage_location: string | null
        }
        Insert: {
          action_id?: string | null
          artifact_type: string
          content?: string | null
          created_at?: string | null
          id?: string
          job_run_id?: string | null
          metadata?: Json | null
          storage_location?: string | null
        }
        Update: {
          action_id?: string | null
          artifact_type?: string
          content?: string | null
          created_at?: string | null
          id?: string
          job_run_id?: string | null
          metadata?: Json | null
          storage_location?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artifacts_action_id_fkey"
            columns: ["action_id"]
            isOneToOne: false
            referencedRelation: "job_actions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artifacts_job_run_id_fkey"
            columns: ["job_run_id"]
            isOneToOne: false
            referencedRelation: "job_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_checks: {
        Row: {
          audit_id: string
          check_type: string
          created_at: string
          details: Json | null
          id: string
          message: string | null
          score: number
          status: string
        }
        Insert: {
          audit_id: string
          check_type: string
          created_at?: string
          details?: Json | null
          id?: string
          message?: string | null
          score?: number
          status: string
        }
        Update: {
          audit_id?: string
          check_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          message?: string | null
          score?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_checks_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_configurations: {
        Row: {
          config_data: Json
          created_at: string
          id: string
          is_default: boolean | null
          updated_at: string
          user_email: string
          website_id: string
        }
        Insert: {
          config_data?: Json
          created_at?: string
          id?: string
          is_default?: boolean | null
          updated_at?: string
          user_email: string
          website_id: string
        }
        Update: {
          config_data?: Json
          created_at?: string
          id?: string
          is_default?: boolean | null
          updated_at?: string
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_audit_config_website"
            columns: ["website_id"]
            isOneToOne: true
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_crawl_logs: {
        Row: {
          audit_id: string | null
          content_length: number | null
          created_at: string
          discovered_links: Json | null
          error_details: Json | null
          id: string
          issues_detected: number | null
          page_type: string | null
          page_url: string
          processing_stage: string | null
          response_time: number | null
          session_id: string | null
          status: string
          status_code: number | null
        }
        Insert: {
          audit_id?: string | null
          content_length?: number | null
          created_at?: string
          discovered_links?: Json | null
          error_details?: Json | null
          id?: string
          issues_detected?: number | null
          page_type?: string | null
          page_url: string
          processing_stage?: string | null
          response_time?: number | null
          session_id?: string | null
          status: string
          status_code?: number | null
        }
        Update: {
          audit_id?: string | null
          content_length?: number | null
          created_at?: string
          discovered_links?: Json | null
          error_details?: Json | null
          id?: string
          issues_detected?: number | null
          page_type?: string | null
          page_url?: string
          processing_stage?: string | null
          response_time?: number | null
          session_id?: string | null
          status?: string
          status_code?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_crawl_logs_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_crawl_logs_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "audit_progress_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_issues: {
        Row: {
          affected_pages_count: number | null
          affected_url: string | null
          audit_id: string
          business_benefit: string | null
          category: Database["public"]["Enums"]["issue_category"]
          created_at: string | null
          description: string
          estimated_effort: string | null
          estimated_time_minutes: number | null
          fix_location: string | null
          id: string
          is_quick_win: boolean | null
          marked_done_at: string | null
          marked_done_by: string | null
          page_element: string | null
          page_title: string | null
          recommended_fix: string
          rule_id: string | null
          semantic_seo_tip: string | null
          severity: Database["public"]["Enums"]["issue_severity"]
          status: Database["public"]["Enums"]["issue_status"] | null
          suggested_content: string | null
          technical_details: Json | null
          title: string
          updated_at: string | null
          zentrowrite_prompt: string | null
        }
        Insert: {
          affected_pages_count?: number | null
          affected_url?: string | null
          audit_id: string
          business_benefit?: string | null
          category: Database["public"]["Enums"]["issue_category"]
          created_at?: string | null
          description: string
          estimated_effort?: string | null
          estimated_time_minutes?: number | null
          fix_location?: string | null
          id?: string
          is_quick_win?: boolean | null
          marked_done_at?: string | null
          marked_done_by?: string | null
          page_element?: string | null
          page_title?: string | null
          recommended_fix: string
          rule_id?: string | null
          semantic_seo_tip?: string | null
          severity: Database["public"]["Enums"]["issue_severity"]
          status?: Database["public"]["Enums"]["issue_status"] | null
          suggested_content?: string | null
          technical_details?: Json | null
          title: string
          updated_at?: string | null
          zentrowrite_prompt?: string | null
        }
        Update: {
          affected_pages_count?: number | null
          affected_url?: string | null
          audit_id?: string
          business_benefit?: string | null
          category?: Database["public"]["Enums"]["issue_category"]
          created_at?: string | null
          description?: string
          estimated_effort?: string | null
          estimated_time_minutes?: number | null
          fix_location?: string | null
          id?: string
          is_quick_win?: boolean | null
          marked_done_at?: string | null
          marked_done_by?: string | null
          page_element?: string | null
          page_title?: string | null
          recommended_fix?: string
          rule_id?: string | null
          semantic_seo_tip?: string | null
          severity?: Database["public"]["Enums"]["issue_severity"]
          status?: Database["public"]["Enums"]["issue_status"] | null
          suggested_content?: string | null
          technical_details?: Json | null
          title?: string
          updated_at?: string | null
          zentrowrite_prompt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_issues_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_issues_rule_id_fkey"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "audit_rules_registry"
            referencedColumns: ["rule_id"]
          },
        ]
      }
      audit_keyword_discovery: {
        Row: {
          audit_id: string
          combined_score: number | null
          competition_level: string | null
          context_snippet: string | null
          cpc: number | null
          created_at: string
          data_source: string | null
          ease_score: number
          enrichment_status: string | null
          gap_score: number
          id: string
          intent: string | null
          is_selected: boolean | null
          keyword: string
          keyword_difficulty: number | null
          opportunity_score: number
          relevance_score: number
          search_volume: number | null
          source_location: string | null
          term_type: string | null
          updated_at: string
          website_id: string | null
        }
        Insert: {
          audit_id: string
          combined_score?: number | null
          competition_level?: string | null
          context_snippet?: string | null
          cpc?: number | null
          created_at?: string
          data_source?: string | null
          ease_score?: number
          enrichment_status?: string | null
          gap_score?: number
          id?: string
          intent?: string | null
          is_selected?: boolean | null
          keyword: string
          keyword_difficulty?: number | null
          opportunity_score?: number
          relevance_score?: number
          search_volume?: number | null
          source_location?: string | null
          term_type?: string | null
          updated_at?: string
          website_id?: string | null
        }
        Update: {
          audit_id?: string
          combined_score?: number | null
          competition_level?: string | null
          context_snippet?: string | null
          cpc?: number | null
          created_at?: string
          data_source?: string | null
          ease_score?: number
          enrichment_status?: string | null
          gap_score?: number
          id?: string
          intent?: string | null
          is_selected?: boolean | null
          keyword?: string
          keyword_difficulty?: number | null
          opportunity_score?: number
          relevance_score?: number
          search_volume?: number | null
          source_location?: string | null
          term_type?: string | null
          updated_at?: string
          website_id?: string | null
        }
        Relationships: []
      }
      audit_live_progress: {
        Row: {
          created_at: string | null
          id: string
          issues_data: Json | null
          page_title: string | null
          page_type: string | null
          page_url: string | null
          progress_type: string
          session_id: string
          timestamp_ms: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          issues_data?: Json | null
          page_title?: string | null
          page_type?: string | null
          page_url?: string | null
          progress_type: string
          session_id: string
          timestamp_ms: number
        }
        Update: {
          created_at?: string | null
          id?: string
          issues_data?: Json | null
          page_title?: string | null
          page_type?: string | null
          page_url?: string | null
          progress_type?: string
          session_id?: string
          timestamp_ms?: number
        }
        Relationships: [
          {
            foreignKeyName: "audit_live_progress_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "audit_progress_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_page_analysis: {
        Row: {
          audit_id: string
          content_word_count: number | null
          created_at: string | null
          entities_found: Json | null
          header_structure: Json | null
          id: string
          internal_links: number | null
          main_keyword: string | null
          meta_analysis: Json | null
          outbound_links: number | null
          page_title: string | null
          page_url: string
          questions_addressed: Json | null
          schema_types: Json | null
          semantic_completeness_score: number | null
          subtopics_covered: Json | null
          topical_coverage_score: number | null
        }
        Insert: {
          audit_id: string
          content_word_count?: number | null
          created_at?: string | null
          entities_found?: Json | null
          header_structure?: Json | null
          id?: string
          internal_links?: number | null
          main_keyword?: string | null
          meta_analysis?: Json | null
          outbound_links?: number | null
          page_title?: string | null
          page_url: string
          questions_addressed?: Json | null
          schema_types?: Json | null
          semantic_completeness_score?: number | null
          subtopics_covered?: Json | null
          topical_coverage_score?: number | null
        }
        Update: {
          audit_id?: string
          content_word_count?: number | null
          created_at?: string | null
          entities_found?: Json | null
          header_structure?: Json | null
          id?: string
          internal_links?: number | null
          main_keyword?: string | null
          meta_analysis?: Json | null
          outbound_links?: number | null
          page_title?: string | null
          page_url?: string
          questions_addressed?: Json | null
          schema_types?: Json | null
          semantic_completeness_score?: number | null
          subtopics_covered?: Json | null
          topical_coverage_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_page_analysis_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_performance_cache: {
        Row: {
          cache_data: Json
          cache_key: string
          created_at: string
          expires_at: string
          id: string
        }
        Insert: {
          cache_data: Json
          cache_key: string
          created_at?: string
          expires_at: string
          id?: string
        }
        Update: {
          cache_data?: Json
          cache_key?: string
          created_at?: string
          expires_at?: string
          id?: string
        }
        Relationships: []
      }
      audit_progress: {
        Row: {
          audit_id: string
          completion_percentage: number | null
          created_at: string | null
          critical_issues: number | null
          fixed_issues: number | null
          id: string
          ignored_issues: number | null
          in_progress_issues: number | null
          info_issues: number | null
          last_updated: string | null
          total_issues: number | null
          warning_issues: number | null
        }
        Insert: {
          audit_id: string
          completion_percentage?: number | null
          created_at?: string | null
          critical_issues?: number | null
          fixed_issues?: number | null
          id?: string
          ignored_issues?: number | null
          in_progress_issues?: number | null
          info_issues?: number | null
          last_updated?: string | null
          total_issues?: number | null
          warning_issues?: number | null
        }
        Update: {
          audit_id?: string
          completion_percentage?: number | null
          created_at?: string | null
          critical_issues?: number | null
          fixed_issues?: number | null
          id?: string
          ignored_issues?: number | null
          in_progress_issues?: number | null
          info_issues?: number | null
          last_updated?: string | null
          total_issues?: number | null
          warning_issues?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_progress_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: true
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_progress_sessions: {
        Row: {
          actual_max_depth_reached: number | null
          audit_id: string | null
          competitive_analysis: boolean | null
          completed_at: string | null
          content_filters: Json | null
          crawl_budget: number | null
          crawl_depth: number | null
          crawl_schedule: Json | null
          crawl_settings: Json | null
          crawl_speed_pps: number | null
          created_at: string
          current_page: string | null
          discovered_pages: Json | null
          discovered_pages_count: number | null
          discovery_method: string | null
          error_log: Json | null
          estimated_pages: number | null
          estimated_time_left: number | null
          id: string
          issues_found: number | null
          last_activity_at: string | null
          max_crawl_depth: number | null
          page_types: Json | null
          pages_crawled: number | null
          pages_discovered: number | null
          pages_per_second: number | null
          pages_queue: Json | null
          paused_at: string | null
          performance_metrics: Json | null
          scheduled_crawl: boolean | null
          started_at: string
          status: string
          updated_at: string
          url_patterns: Json | null
          user_email: string
          user_website_id: string | null
          website_url: string
        }
        Insert: {
          actual_max_depth_reached?: number | null
          audit_id?: string | null
          competitive_analysis?: boolean | null
          completed_at?: string | null
          content_filters?: Json | null
          crawl_budget?: number | null
          crawl_depth?: number | null
          crawl_schedule?: Json | null
          crawl_settings?: Json | null
          crawl_speed_pps?: number | null
          created_at?: string
          current_page?: string | null
          discovered_pages?: Json | null
          discovered_pages_count?: number | null
          discovery_method?: string | null
          error_log?: Json | null
          estimated_pages?: number | null
          estimated_time_left?: number | null
          id?: string
          issues_found?: number | null
          last_activity_at?: string | null
          max_crawl_depth?: number | null
          page_types?: Json | null
          pages_crawled?: number | null
          pages_discovered?: number | null
          pages_per_second?: number | null
          pages_queue?: Json | null
          paused_at?: string | null
          performance_metrics?: Json | null
          scheduled_crawl?: boolean | null
          started_at?: string
          status?: string
          updated_at?: string
          url_patterns?: Json | null
          user_email: string
          user_website_id?: string | null
          website_url: string
        }
        Update: {
          actual_max_depth_reached?: number | null
          audit_id?: string | null
          competitive_analysis?: boolean | null
          completed_at?: string | null
          content_filters?: Json | null
          crawl_budget?: number | null
          crawl_depth?: number | null
          crawl_schedule?: Json | null
          crawl_settings?: Json | null
          crawl_speed_pps?: number | null
          created_at?: string
          current_page?: string | null
          discovered_pages?: Json | null
          discovered_pages_count?: number | null
          discovery_method?: string | null
          error_log?: Json | null
          estimated_pages?: number | null
          estimated_time_left?: number | null
          id?: string
          issues_found?: number | null
          last_activity_at?: string | null
          max_crawl_depth?: number | null
          page_types?: Json | null
          pages_crawled?: number | null
          pages_discovered?: number | null
          pages_per_second?: number | null
          pages_queue?: Json | null
          paused_at?: string | null
          performance_metrics?: Json | null
          scheduled_crawl?: boolean | null
          started_at?: string
          status?: string
          updated_at?: string
          url_patterns?: Json | null
          user_email?: string
          user_website_id?: string | null
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_progress_sessions_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_progress_sessions_user_website_id_fkey"
            columns: ["user_website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_rule_results: {
        Row: {
          audit_id: string
          completed_at: string | null
          created_at: string
          execution_time_ms: number | null
          id: string
          pages_affected: number | null
          pages_checked: number | null
          rule_id: string
          started_at: string | null
          status: Database["public"]["Enums"]["audit_rule_status"]
        }
        Insert: {
          audit_id: string
          completed_at?: string | null
          created_at?: string
          execution_time_ms?: number | null
          id?: string
          pages_affected?: number | null
          pages_checked?: number | null
          rule_id: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["audit_rule_status"]
        }
        Update: {
          audit_id?: string
          completed_at?: string | null
          created_at?: string
          execution_time_ms?: number | null
          id?: string
          pages_affected?: number | null
          pages_checked?: number | null
          rule_id?: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["audit_rule_status"]
        }
        Relationships: [
          {
            foreignKeyName: "audit_rule_results_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_rule_results_rule_id_fkey"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "audit_rules_registry"
            referencedColumns: ["rule_id"]
          },
        ]
      }
      audit_rules_registry: {
        Row: {
          category: Database["public"]["Enums"]["audit_rule_category"]
          created_at: string
          description: string
          enabled: boolean
          how_to_fix: string
          name: string
          rule_id: string
          scope: Database["public"]["Enums"]["audit_rule_scope"]
          severity_default: Database["public"]["Enums"]["audit_rule_severity"]
          updated_at: string
          weight: number
        }
        Insert: {
          category: Database["public"]["Enums"]["audit_rule_category"]
          created_at?: string
          description: string
          enabled?: boolean
          how_to_fix: string
          name: string
          rule_id: string
          scope?: Database["public"]["Enums"]["audit_rule_scope"]
          severity_default?: Database["public"]["Enums"]["audit_rule_severity"]
          updated_at?: string
          weight?: number
        }
        Update: {
          category?: Database["public"]["Enums"]["audit_rule_category"]
          created_at?: string
          description?: string
          enabled?: boolean
          how_to_fix?: string
          name?: string
          rule_id?: string
          scope?: Database["public"]["Enums"]["audit_rule_scope"]
          severity_default?: Database["public"]["Enums"]["audit_rule_severity"]
          updated_at?: string
          weight?: number
        }
        Relationships: []
      }
      audit_semantic_data: {
        Row: {
          audit_id: string
          content_themes: Json | null
          created_at: string | null
          id: string
          page_url: string
          primary_entities: Json | null
          related_keywords: Json | null
          secondary_entities: Json | null
          semantic_gaps: Json | null
          topic_clusters: Json | null
        }
        Insert: {
          audit_id: string
          content_themes?: Json | null
          created_at?: string | null
          id?: string
          page_url: string
          primary_entities?: Json | null
          related_keywords?: Json | null
          secondary_entities?: Json | null
          semantic_gaps?: Json | null
          topic_clusters?: Json | null
        }
        Update: {
          audit_id?: string
          content_themes?: Json | null
          created_at?: string | null
          id?: string
          page_url?: string
          primary_entities?: Json | null
          related_keywords?: Json | null
          secondary_entities?: Json | null
          semantic_gaps?: Json | null
          topic_clusters?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_semantic_data_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_success_metrics: {
        Row: {
          avg_completion_time: number | null
          avg_issues_found: number | null
          avg_pages_crawled: number | null
          created_at: string
          date_bucket: string
          failed_audits: number
          id: string
          success_rate: number | null
          successful_audits: number
          total_audits: number
          updated_at: string
        }
        Insert: {
          avg_completion_time?: number | null
          avg_issues_found?: number | null
          avg_pages_crawled?: number | null
          created_at?: string
          date_bucket?: string
          failed_audits?: number
          id?: string
          success_rate?: number | null
          successful_audits?: number
          total_audits?: number
          updated_at?: string
        }
        Update: {
          avg_completion_time?: number | null
          avg_issues_found?: number | null
          avg_pages_crawled?: number | null
          created_at?: string
          date_bucket?: string
          failed_audits?: number
          id?: string
          success_rate?: number | null
          successful_audits?: number
          total_audits?: number
          updated_at?: string
        }
        Relationships: []
      }
      audit_usage: {
        Row: {
          audit_date: string
          created_at: string
          id: string
          monthly_count: number
          updated_at: string
          user_email: string
          weekly_count: number
        }
        Insert: {
          audit_date?: string
          created_at?: string
          id?: string
          monthly_count?: number
          updated_at?: string
          user_email: string
          weekly_count?: number
        }
        Update: {
          audit_date?: string
          created_at?: string
          id?: string
          monthly_count?: number
          updated_at?: string
          user_email?: string
          weekly_count?: number
        }
        Relationships: []
      }
      audit_user_analytics: {
        Row: {
          created_at: string
          duration_seconds: number | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: string | null
          page_url: string | null
          referrer: string | null
          session_id: string | null
          user_agent: string | null
          user_email: string
          website_id: string | null
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: string | null
          page_url?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_email: string
          website_id?: string | null
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: string | null
          page_url?: string | null
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_email?: string
          website_id?: string | null
        }
        Relationships: []
      }
      backup_profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          onboarding_completed: boolean | null
          onboarding_step: number | null
          phone: string | null
          seo_goal: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string | null
          last_name?: string | null
          onboarding_completed?: boolean | null
          onboarding_step?: number | null
          phone?: string | null
          seo_goal?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string | null
          last_name?: string | null
          onboarding_completed?: boolean | null
          onboarding_step?: number | null
          phone?: string | null
          seo_goal?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      backup_user_websites: {
        Row: {
          created_at: string | null
          email: string | null
          favicon_url: string | null
          id: string | null
          last_audit_date: string | null
          name: string | null
          seo_health_score: number | null
          status: string | null
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          favicon_url?: string | null
          id?: string | null
          last_audit_date?: string | null
          name?: string | null
          seo_health_score?: number | null
          status?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          favicon_url?: string | null
          id?: string | null
          last_audit_date?: string | null
          name?: string | null
          seo_health_score?: number | null
          status?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      beta_waitlist: {
        Row: {
          created_at: string
          feature_key: string
          id: string
          reason: string | null
          status: string | null
          user_email: string
          user_name: string | null
        }
        Insert: {
          created_at?: string
          feature_key: string
          id?: string
          reason?: string | null
          status?: string | null
          user_email: string
          user_name?: string | null
        }
        Update: {
          created_at?: string
          feature_key?: string
          id?: string
          reason?: string | null
          status?: string | null
          user_email?: string
          user_name?: string | null
        }
        Relationships: []
      }
      billing_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string
        }
        Relationships: []
      }
      billing_webhooks: {
        Row: {
          created_at: string
          error_message: string | null
          event_type: string
          id: string
          payload: Json
          processed: boolean | null
          processed_at: string | null
          retry_count: number | null
          webhook_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          event_type: string
          id?: string
          payload: Json
          processed?: boolean | null
          processed_at?: string | null
          retry_count?: number | null
          webhook_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          event_type?: string
          id?: string
          payload?: Json
          processed?: boolean | null
          processed_at?: string | null
          retry_count?: number | null
          webhook_id?: string
        }
        Relationships: []
      }
      blog_draft_versions: {
        Row: {
          change_description: string | null
          content: string
          created_at: string
          created_by: string
          draft_id: string
          id: string
          keywords: Json | null
          meta_description: string | null
          title: string
          version_number: number
          word_count: number | null
        }
        Insert: {
          change_description?: string | null
          content: string
          created_at?: string
          created_by: string
          draft_id: string
          id?: string
          keywords?: Json | null
          meta_description?: string | null
          title: string
          version_number: number
          word_count?: number | null
        }
        Update: {
          change_description?: string | null
          content?: string
          created_at?: string
          created_by?: string
          draft_id?: string
          id?: string
          keywords?: Json | null
          meta_description?: string | null
          title?: string
          version_number?: number
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_blog_versions_draft"
            columns: ["draft_id"]
            isOneToOne: false
            referencedRelation: "blog_drafts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_drafts: {
        Row: {
          brief_data: Json | null
          content: string
          content_length: Database["public"]["Enums"]["content_length"]
          created_at: string
          id: string
          keywords: Json | null
          last_performance_check: string | null
          meta_description: string | null
          performance_data: Json | null
          published_at: string | null
          published_url: string | null
          seo_title: string | null
          status: Database["public"]["Enums"]["blog_status"]
          title: string
          tone: Database["public"]["Enums"]["content_tone"]
          updated_at: string
          user_id: string
          version_number: number
          website_id: string
          word_count: number | null
        }
        Insert: {
          brief_data?: Json | null
          content?: string
          content_length?: Database["public"]["Enums"]["content_length"]
          created_at?: string
          id?: string
          keywords?: Json | null
          last_performance_check?: string | null
          meta_description?: string | null
          performance_data?: Json | null
          published_at?: string | null
          published_url?: string | null
          seo_title?: string | null
          status?: Database["public"]["Enums"]["blog_status"]
          title: string
          tone?: Database["public"]["Enums"]["content_tone"]
          updated_at?: string
          user_id: string
          version_number?: number
          website_id: string
          word_count?: number | null
        }
        Update: {
          brief_data?: Json | null
          content?: string
          content_length?: Database["public"]["Enums"]["content_length"]
          created_at?: string
          id?: string
          keywords?: Json | null
          last_performance_check?: string | null
          meta_description?: string | null
          performance_data?: Json | null
          published_at?: string | null
          published_url?: string | null
          seo_title?: string | null
          status?: Database["public"]["Enums"]["blog_status"]
          title?: string
          tone?: Database["public"]["Enums"]["content_tone"]
          updated_at?: string
          user_id?: string
          version_number?: number
          website_id?: string
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_blog_drafts_website"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      brand_option_values: {
        Row: {
          created_at: string | null
          display_label: string
          id: string
          is_active: boolean | null
          is_predefined: boolean | null
          option_type: string
          option_value: string
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          created_at?: string | null
          display_label: string
          id?: string
          is_active?: boolean | null
          is_predefined?: boolean | null
          option_type: string
          option_value: string
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          created_at?: string | null
          display_label?: string
          id?: string
          is_active?: boolean | null
          is_predefined?: boolean | null
          option_type?: string
          option_value?: string
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: []
      }
      bulk_admin_actions: {
        Row: {
          action_parameters: Json | null
          action_type: string
          admin_email: string
          affected_items: Json
          created_at: string
          error_details: string | null
          execution_completed_at: string | null
          execution_started_at: string
          id: string
          status: string
          target_count: number
        }
        Insert: {
          action_parameters?: Json | null
          action_type: string
          admin_email: string
          affected_items: Json
          created_at?: string
          error_details?: string | null
          execution_completed_at?: string | null
          execution_started_at?: string
          id?: string
          status?: string
          target_count: number
        }
        Update: {
          action_parameters?: Json | null
          action_type?: string
          admin_email?: string
          affected_items?: Json
          created_at?: string
          error_details?: string | null
          execution_completed_at?: string | null
          execution_started_at?: string
          id?: string
          status?: string
          target_count?: number
        }
        Relationships: []
      }
      cache_performance: {
        Row: {
          average_response_time: number
          cache_key: string
          cache_size: number
          created_at: string
          eviction_count: number
          hit_count: number
          id: string
          last_hit_at: string | null
          miss_count: number
          total_requests: number
          updated_at: string
        }
        Insert: {
          average_response_time?: number
          cache_key: string
          cache_size?: number
          created_at?: string
          eviction_count?: number
          hit_count?: number
          id?: string
          last_hit_at?: string | null
          miss_count?: number
          total_requests?: number
          updated_at?: string
        }
        Update: {
          average_response_time?: number
          cache_key?: string
          cache_size?: number
          created_at?: string
          eviction_count?: number
          hit_count?: number
          id?: string
          last_hit_at?: string | null
          miss_count?: number
          total_requests?: number
          updated_at?: string
        }
        Relationships: []
      }
      churn_risk_indicators: {
        Row: {
          audits_run_30d: number | null
          churn_probability: number | null
          created_at: string | null
          days_since_last_audit: number | null
          days_since_last_feature_use: number | null
          days_since_last_login: number | null
          days_until_renewal: number | null
          engagement_score: number | null
          feature_adoption_score: number | null
          features_used_30d: number | null
          has_valid_payment_method: boolean | null
          id: string
          inactivity_score: number | null
          intervention_notes: string | null
          intervention_result: string | null
          intervention_sent_at: string | null
          intervention_type: string | null
          last_evaluated_at: string | null
          last_nps_at: string | null
          last_payment_failed_at: string | null
          login_frequency_30d: number | null
          nps_score: number | null
          payment_failures_30d: number | null
          payment_failures_count: number | null
          payment_health_score: number | null
          predicted_churn_date: string | null
          risk_level: string | null
          risk_score: number | null
          stuck_at_stage: string | null
          subscription_age_days: number | null
          subscription_plan: string | null
          subscription_status: string | null
          support_tickets_30d: number | null
          support_tickets_open: number | null
          updated_at: string | null
          user_email: string
          user_id: string | null
        }
        Insert: {
          audits_run_30d?: number | null
          churn_probability?: number | null
          created_at?: string | null
          days_since_last_audit?: number | null
          days_since_last_feature_use?: number | null
          days_since_last_login?: number | null
          days_until_renewal?: number | null
          engagement_score?: number | null
          feature_adoption_score?: number | null
          features_used_30d?: number | null
          has_valid_payment_method?: boolean | null
          id?: string
          inactivity_score?: number | null
          intervention_notes?: string | null
          intervention_result?: string | null
          intervention_sent_at?: string | null
          intervention_type?: string | null
          last_evaluated_at?: string | null
          last_nps_at?: string | null
          last_payment_failed_at?: string | null
          login_frequency_30d?: number | null
          nps_score?: number | null
          payment_failures_30d?: number | null
          payment_failures_count?: number | null
          payment_health_score?: number | null
          predicted_churn_date?: string | null
          risk_level?: string | null
          risk_score?: number | null
          stuck_at_stage?: string | null
          subscription_age_days?: number | null
          subscription_plan?: string | null
          subscription_status?: string | null
          support_tickets_30d?: number | null
          support_tickets_open?: number | null
          updated_at?: string | null
          user_email: string
          user_id?: string | null
        }
        Update: {
          audits_run_30d?: number | null
          churn_probability?: number | null
          created_at?: string | null
          days_since_last_audit?: number | null
          days_since_last_feature_use?: number | null
          days_since_last_login?: number | null
          days_until_renewal?: number | null
          engagement_score?: number | null
          feature_adoption_score?: number | null
          features_used_30d?: number | null
          has_valid_payment_method?: boolean | null
          id?: string
          inactivity_score?: number | null
          intervention_notes?: string | null
          intervention_result?: string | null
          intervention_sent_at?: string | null
          intervention_type?: string | null
          last_evaluated_at?: string | null
          last_nps_at?: string | null
          last_payment_failed_at?: string | null
          login_frequency_30d?: number | null
          nps_score?: number | null
          payment_failures_30d?: number | null
          payment_failures_count?: number | null
          payment_health_score?: number | null
          predicted_churn_date?: string | null
          risk_level?: string | null
          risk_score?: number | null
          stuck_at_stage?: string | null
          subscription_age_days?: number | null
          subscription_plan?: string | null
          subscription_status?: string | null
          support_tickets_30d?: number | null
          support_tickets_open?: number | null
          updated_at?: string | null
          user_email?: string
          user_id?: string | null
        }
        Relationships: []
      }
      cluster_insights: {
        Row: {
          cluster_id: string
          created_at: string
          id: string
          insights: Json
          model: string | null
          website_id: string
        }
        Insert: {
          cluster_id: string
          created_at?: string
          id?: string
          insights?: Json
          model?: string | null
          website_id: string
        }
        Update: {
          cluster_id?: string
          created_at?: string
          id?: string
          insights?: Json
          model?: string | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cluster_insights_cluster_id_fkey"
            columns: ["cluster_id"]
            isOneToOne: false
            referencedRelation: "keyword_clusters"
            referencedColumns: ["id"]
          },
        ]
      }
      cluster_jobs: {
        Row: {
          created_at: string
          error: string | null
          id: string
          metadata: Json | null
          progress: Json | null
          result: Json | null
          status: string
          updated_at: string
          website_id: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          id?: string
          metadata?: Json | null
          progress?: Json | null
          result?: Json | null
          status?: string
          updated_at?: string
          website_id: string
        }
        Update: {
          created_at?: string
          error?: string | null
          id?: string
          metadata?: Json | null
          progress?: Json | null
          result?: Json | null
          status?: string
          updated_at?: string
          website_id?: string
        }
        Relationships: []
      }
      competitor_alerts: {
        Row: {
          alert_type: string
          competitor_domain: string
          competitor_position: number
          created_at: string | null
          domain: string
          id: string
          is_read: boolean | null
          keyword: string
          previous_competitor_position: number | null
          updated_at: string | null
          user_email: string
          website_id: string | null
          your_position: number | null
        }
        Insert: {
          alert_type: string
          competitor_domain: string
          competitor_position: number
          created_at?: string | null
          domain: string
          id?: string
          is_read?: boolean | null
          keyword: string
          previous_competitor_position?: number | null
          updated_at?: string | null
          user_email: string
          website_id?: string | null
          your_position?: number | null
        }
        Update: {
          alert_type?: string
          competitor_domain?: string
          competitor_position?: number
          created_at?: string | null
          domain?: string
          id?: string
          is_read?: boolean | null
          keyword?: string
          previous_competitor_position?: number | null
          updated_at?: string | null
          user_email?: string
          website_id?: string | null
          your_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "competitor_alerts_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      competitor_analysis: {
        Row: {
          analysis_date: string
          backlink_count: number | null
          competitive_insights: Json | null
          competitor_name: string | null
          competitor_url: string
          content_gaps: Json | null
          created_at: string
          id: string
          keyword_overlap: Json | null
          pages_analyzed: number
          performance_score: number | null
          seo_score: number | null
          technical_comparison: Json | null
          website_id: string
        }
        Insert: {
          analysis_date?: string
          backlink_count?: number | null
          competitive_insights?: Json | null
          competitor_name?: string | null
          competitor_url: string
          content_gaps?: Json | null
          created_at?: string
          id?: string
          keyword_overlap?: Json | null
          pages_analyzed?: number
          performance_score?: number | null
          seo_score?: number | null
          technical_comparison?: Json | null
          website_id: string
        }
        Update: {
          analysis_date?: string
          backlink_count?: number | null
          competitive_insights?: Json | null
          competitor_name?: string | null
          competitor_url?: string
          content_gaps?: Json | null
          created_at?: string
          id?: string
          keyword_overlap?: Json | null
          pages_analyzed?: number
          performance_score?: number | null
          seo_score?: number | null
          technical_comparison?: Json | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "competitor_analysis_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      competitor_analysis_results: {
        Row: {
          analysis_date: string | null
          benchmarks: Json | null
          competitors: Json | null
          created_at: string | null
          gaps: Json | null
          id: string
          recommendations: Json | null
          target_url: string
          updated_at: string | null
          website_id: string | null
        }
        Insert: {
          analysis_date?: string | null
          benchmarks?: Json | null
          competitors?: Json | null
          created_at?: string | null
          gaps?: Json | null
          id?: string
          recommendations?: Json | null
          target_url: string
          updated_at?: string | null
          website_id?: string | null
        }
        Update: {
          analysis_date?: string | null
          benchmarks?: Json | null
          competitors?: Json | null
          created_at?: string | null
          gaps?: Json | null
          id?: string
          recommendations?: Json | null
          target_url?: string
          updated_at?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "competitor_analysis_results_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      competitor_keywords: {
        Row: {
          audit_id: string | null
          competitor_domain: string
          created_at: string
          estimated_traffic: number | null
          id: string
          keyword: string
          keyword_difficulty: number | null
          ranking_position: number | null
        }
        Insert: {
          audit_id?: string | null
          competitor_domain: string
          created_at?: string
          estimated_traffic?: number | null
          id?: string
          keyword: string
          keyword_difficulty?: number | null
          ranking_position?: number | null
        }
        Update: {
          audit_id?: string | null
          competitor_domain?: string
          created_at?: string
          estimated_traffic?: number | null
          id?: string
          keyword?: string
          keyword_difficulty?: number | null
          ranking_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "competitor_keywords_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      comprehensive_crawl_data: {
        Row: {
          audit_id: string
          crawl_summary: Json
          created_at: string
          id: string
          page_details: Json
          session_id: string | null
          site_architecture: Json
          updated_at: string
        }
        Insert: {
          audit_id: string
          crawl_summary?: Json
          created_at?: string
          id?: string
          page_details?: Json
          session_id?: string | null
          site_architecture?: Json
          updated_at?: string
        }
        Update: {
          audit_id?: string
          crawl_summary?: Json
          created_at?: string
          id?: string
          page_details?: Json
          session_id?: string | null
          site_architecture?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_comprehensive_crawl_audit"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      content_analysis: {
        Row: {
          audit_id: string
          content_freshness_days: number | null
          content_gaps: Json | null
          content_length: number | null
          content_quality_score: number | null
          content_recommendations: string[] | null
          created_at: string | null
          duplicate_content_percentage: number | null
          id: string
          keyword_density: Json | null
          page_url: string
          readability_score: number | null
          semantic_keywords: Json | null
          topic_coverage_score: number | null
        }
        Insert: {
          audit_id: string
          content_freshness_days?: number | null
          content_gaps?: Json | null
          content_length?: number | null
          content_quality_score?: number | null
          content_recommendations?: string[] | null
          created_at?: string | null
          duplicate_content_percentage?: number | null
          id?: string
          keyword_density?: Json | null
          page_url: string
          readability_score?: number | null
          semantic_keywords?: Json | null
          topic_coverage_score?: number | null
        }
        Update: {
          audit_id?: string
          content_freshness_days?: number | null
          content_gaps?: Json | null
          content_length?: number | null
          content_quality_score?: number | null
          content_recommendations?: string[] | null
          created_at?: string | null
          duplicate_content_percentage?: number | null
          id?: string
          keyword_density?: Json | null
          page_url?: string
          readability_score?: number | null
          semantic_keywords?: Json | null
          topic_coverage_score?: number | null
        }
        Relationships: []
      }
      content_comments: {
        Row: {
          comment_text: string
          content_id: string
          content_type: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comment_text: string
          content_id: string
          content_type?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          comment_text?: string
          content_id?: string
          content_type?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      content_performance: {
        Row: {
          created_at: string
          date_bucket: string
          ga4_bounce_rate: number | null
          ga4_page_views: number | null
          ga4_sessions: number | null
          ga4_time_on_page: number | null
          ga4_users: number | null
          gsc_clicks: number | null
          gsc_ctr: number | null
          gsc_impressions: number | null
          gsc_position: number | null
          id: string
          page_url: string
          top_keywords: Json | null
          updated_at: string
          website_id: string
        }
        Insert: {
          created_at?: string
          date_bucket: string
          ga4_bounce_rate?: number | null
          ga4_page_views?: number | null
          ga4_sessions?: number | null
          ga4_time_on_page?: number | null
          ga4_users?: number | null
          gsc_clicks?: number | null
          gsc_ctr?: number | null
          gsc_impressions?: number | null
          gsc_position?: number | null
          id?: string
          page_url: string
          top_keywords?: Json | null
          updated_at?: string
          website_id: string
        }
        Update: {
          created_at?: string
          date_bucket?: string
          ga4_bounce_rate?: number | null
          ga4_page_views?: number | null
          ga4_sessions?: number | null
          ga4_time_on_page?: number | null
          ga4_users?: number | null
          gsc_clicks?: number | null
          gsc_ctr?: number | null
          gsc_impressions?: number | null
          gsc_position?: number | null
          id?: string
          page_url?: string
          top_keywords?: Json | null
          updated_at?: string
          website_id?: string
        }
        Relationships: []
      }
      content_plan_items: {
        Row: {
          content_id: string | null
          content_table: string | null
          content_type: string
          created_at: string | null
          id: string
          plan_id: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          content_id?: string | null
          content_table?: string | null
          content_type: string
          created_at?: string | null
          id?: string
          plan_id: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          content_id?: string | null
          content_table?: string | null
          content_type?: string
          created_at?: string | null
          id?: string
          plan_id?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_plan_items_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "content_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      content_plans: {
        Row: {
          brief_id: string | null
          created_at: string | null
          gap_notes: string | null
          id: string
          opportunity_score: number | null
          outline_data: Json | null
          page_subtype: string | null
          primary_content_type: string
          primary_keyword: string
          priority: string | null
          search_intent: string | null
          secondary_keywords: Json | null
          serp_snapshot: Json | null
          source_id: string | null
          source_type: string | null
          status: string | null
          strategy_notes: string | null
          target_audience: string | null
          updated_at: string | null
          user_id: string
          website_id: string
        }
        Insert: {
          brief_id?: string | null
          created_at?: string | null
          gap_notes?: string | null
          id?: string
          opportunity_score?: number | null
          outline_data?: Json | null
          page_subtype?: string | null
          primary_content_type: string
          primary_keyword: string
          priority?: string | null
          search_intent?: string | null
          secondary_keywords?: Json | null
          serp_snapshot?: Json | null
          source_id?: string | null
          source_type?: string | null
          status?: string | null
          strategy_notes?: string | null
          target_audience?: string | null
          updated_at?: string | null
          user_id: string
          website_id: string
        }
        Update: {
          brief_id?: string | null
          created_at?: string | null
          gap_notes?: string | null
          id?: string
          opportunity_score?: number | null
          outline_data?: Json | null
          page_subtype?: string | null
          primary_content_type?: string
          primary_keyword?: string
          priority?: string | null
          search_intent?: string | null
          secondary_keywords?: Json | null
          serp_snapshot?: Json | null
          source_id?: string | null
          source_type?: string | null
          status?: string | null
          strategy_notes?: string | null
          target_audience?: string | null
          updated_at?: string | null
          user_id?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_plans_brief_id_fkey"
            columns: ["brief_id"]
            isOneToOne: false
            referencedRelation: "zentrowrite_content_briefs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_plans_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      content_templates: {
        Row: {
          created_at: string
          id: string
          is_favorite: boolean | null
          keywords: string[] | null
          template_name: string
          template_structure: Json
          template_type: string
          tone: string | null
          updated_at: string
          user_id: string
          website_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_favorite?: boolean | null
          keywords?: string[] | null
          template_name: string
          template_structure?: Json
          template_type?: string
          tone?: string | null
          updated_at?: string
          user_id: string
          website_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_favorite?: boolean | null
          keywords?: string[] | null
          template_name?: string
          template_structure?: Json
          template_type?: string
          tone?: string | null
          updated_at?: string
          user_id?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_templates_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      crawl_cache: {
        Row: {
          cache_key: string
          cache_type: string
          created_at: string
          data: Json
          domain: string
          expires_at: string
          id: string
          updated_at: string
        }
        Insert: {
          cache_key: string
          cache_type: string
          created_at?: string
          data: Json
          domain: string
          expires_at: string
          id?: string
          updated_at?: string
        }
        Update: {
          cache_key?: string
          cache_type?: string
          created_at?: string
          data?: Json
          domain?: string
          expires_at?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      crawl_checkpoints: {
        Row: {
          checkpoint_type: string
          crawl_stats: Json | null
          crawled_pages: Json | null
          created_at: string | null
          discovered_urls: Json | null
          failed_urls: Json | null
          id: string
          session_id: string
          visited_urls: Json | null
        }
        Insert: {
          checkpoint_type: string
          crawl_stats?: Json | null
          crawled_pages?: Json | null
          created_at?: string | null
          discovered_urls?: Json | null
          failed_urls?: Json | null
          id?: string
          session_id: string
          visited_urls?: Json | null
        }
        Update: {
          checkpoint_type?: string
          crawl_stats?: Json | null
          crawled_pages?: Json | null
          created_at?: string | null
          discovered_urls?: Json | null
          failed_urls?: Json | null
          id?: string
          session_id?: string
          visited_urls?: Json | null
        }
        Relationships: []
      }
      crawl_configurations: {
        Row: {
          config_name: string
          crawl_budget: number
          crawl_css: boolean | null
          crawl_images: boolean | null
          crawl_js: boolean | null
          crawl_speed: string
          created_at: string | null
          enable_alerts: boolean | null
          enable_scheduling: boolean | null
          exclude_patterns: Json | null
          id: string
          include_patterns: Json | null
          include_subdomains: boolean | null
          is_default: boolean | null
          max_depth: number
          priority_urls: Json | null
          schedule_frequency: string | null
          schedule_time: string | null
          sitemap_first: boolean | null
          skip_file_types: Json | null
          updated_at: string | null
          user_email: string
          website_id: string
        }
        Insert: {
          config_name: string
          crawl_budget?: number
          crawl_css?: boolean | null
          crawl_images?: boolean | null
          crawl_js?: boolean | null
          crawl_speed?: string
          created_at?: string | null
          enable_alerts?: boolean | null
          enable_scheduling?: boolean | null
          exclude_patterns?: Json | null
          id?: string
          include_patterns?: Json | null
          include_subdomains?: boolean | null
          is_default?: boolean | null
          max_depth?: number
          priority_urls?: Json | null
          schedule_frequency?: string | null
          schedule_time?: string | null
          sitemap_first?: boolean | null
          skip_file_types?: Json | null
          updated_at?: string | null
          user_email: string
          website_id: string
        }
        Update: {
          config_name?: string
          crawl_budget?: number
          crawl_css?: boolean | null
          crawl_images?: boolean | null
          crawl_js?: boolean | null
          crawl_speed?: string
          created_at?: string | null
          enable_alerts?: boolean | null
          enable_scheduling?: boolean | null
          exclude_patterns?: Json | null
          id?: string
          include_patterns?: Json | null
          include_subdomains?: boolean | null
          is_default?: boolean | null
          max_depth?: number
          priority_urls?: Json | null
          schedule_frequency?: string | null
          schedule_time?: string | null
          sitemap_first?: boolean | null
          skip_file_types?: Json | null
          updated_at?: string | null
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crawl_configurations_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      crawl_history: {
        Row: {
          avg_load_time: number | null
          crawl_date: string
          crawl_duration_seconds: number | null
          created_at: string | null
          id: string
          issues_fixed: number | null
          issues_found: number
          issues_new: number | null
          pages_added: number | null
          pages_crawled: number
          pages_removed: number | null
          score_change: number | null
          seo_score: number | null
          session_id: string
          total_pages: number
          website_id: string
        }
        Insert: {
          avg_load_time?: number | null
          crawl_date?: string
          crawl_duration_seconds?: number | null
          created_at?: string | null
          id?: string
          issues_fixed?: number | null
          issues_found?: number
          issues_new?: number | null
          pages_added?: number | null
          pages_crawled?: number
          pages_removed?: number | null
          score_change?: number | null
          seo_score?: number | null
          session_id: string
          total_pages?: number
          website_id: string
        }
        Update: {
          avg_load_time?: number | null
          crawl_date?: string
          crawl_duration_seconds?: number | null
          created_at?: string | null
          id?: string
          issues_fixed?: number | null
          issues_found?: number
          issues_new?: number | null
          pages_added?: number | null
          pages_crawled?: number
          pages_removed?: number | null
          score_change?: number | null
          seo_score?: number | null
          session_id?: string
          total_pages?: number
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crawl_history_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "audit_progress_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crawl_history_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      crawl_job_queue: {
        Row: {
          assigned_worker_id: string | null
          completed_at: string | null
          crawl_settings: Json | null
          created_at: string
          error_log: Json | null
          id: string
          job_type: string
          max_retries: number
          priority: number
          retry_count: number
          started_at: string | null
          status: string
          user_email: string
          website_id: string
        }
        Insert: {
          assigned_worker_id?: string | null
          completed_at?: string | null
          crawl_settings?: Json | null
          created_at?: string
          error_log?: Json | null
          id?: string
          job_type?: string
          max_retries?: number
          priority?: number
          retry_count?: number
          started_at?: string | null
          status: string
          user_email: string
          website_id: string
        }
        Update: {
          assigned_worker_id?: string | null
          completed_at?: string | null
          crawl_settings?: Json | null
          created_at?: string
          error_log?: Json | null
          id?: string
          job_type?: string
          max_retries?: number
          priority?: number
          retry_count?: number
          started_at?: string | null
          status?: string
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crawl_job_queue_assigned_worker_id_fkey"
            columns: ["assigned_worker_id"]
            isOneToOne: false
            referencedRelation: "crawl_workers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crawl_job_queue_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      crawl_queue: {
        Row: {
          completed_at: string | null
          created_at: string
          depth: number
          error_message: string | null
          id: string
          max_retries: number
          priority: number
          retry_count: number
          session_id: string
          started_at: string | null
          status: string
          updated_at: string
          url: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          depth?: number
          error_message?: string | null
          id?: string
          max_retries?: number
          priority?: number
          retry_count?: number
          session_id: string
          started_at?: string | null
          status?: string
          updated_at?: string
          url: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          depth?: number
          error_message?: string | null
          id?: string
          max_retries?: number
          priority?: number
          retry_count?: number
          session_id?: string
          started_at?: string | null
          status?: string
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "crawl_queue_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "audit_progress_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      crawl_queues: {
        Row: {
          completed_at: string | null
          created_at: string | null
          depth: number | null
          error_message: string | null
          id: string
          max_retries: number | null
          priority: number | null
          retry_count: number | null
          session_id: string
          started_at: string | null
          status: string
          updated_at: string | null
          url: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          depth?: number | null
          error_message?: string | null
          id?: string
          max_retries?: number | null
          priority?: number | null
          retry_count?: number | null
          session_id: string
          started_at?: string | null
          status?: string
          updated_at?: string | null
          url: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          depth?: number | null
          error_message?: string | null
          id?: string
          max_retries?: number | null
          priority?: number | null
          retry_count?: number | null
          session_id?: string
          started_at?: string | null
          status?: string
          updated_at?: string | null
          url?: string
        }
        Relationships: []
      }
      crawl_request_dedupe: {
        Row: {
          count: number
          first_seen: string
          id: string
          last_seen: string
          session_id: string
          url: string
          url_hash: string
        }
        Insert: {
          count?: number
          first_seen?: string
          id?: string
          last_seen?: string
          session_id: string
          url: string
          url_hash: string
        }
        Update: {
          count?: number
          first_seen?: string
          id?: string
          last_seen?: string
          session_id?: string
          url?: string
          url_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "crawl_request_dedupe_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "audit_progress_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      crawl_scheduling: {
        Row: {
          config_id: string | null
          created_at: string | null
          failed_runs: number | null
          frequency: string
          id: string
          is_active: boolean | null
          last_run_at: string | null
          next_run_at: string
          schedule_time: string
          successful_runs: number | null
          timezone: string | null
          total_runs: number | null
          updated_at: string | null
          user_email: string
          website_id: string
        }
        Insert: {
          config_id?: string | null
          created_at?: string | null
          failed_runs?: number | null
          frequency: string
          id?: string
          is_active?: boolean | null
          last_run_at?: string | null
          next_run_at: string
          schedule_time: string
          successful_runs?: number | null
          timezone?: string | null
          total_runs?: number | null
          updated_at?: string | null
          user_email: string
          website_id: string
        }
        Update: {
          config_id?: string | null
          created_at?: string | null
          failed_runs?: number | null
          frequency?: string
          id?: string
          is_active?: boolean | null
          last_run_at?: string | null
          next_run_at?: string
          schedule_time?: string
          successful_runs?: number | null
          timezone?: string | null
          total_runs?: number | null
          updated_at?: string | null
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crawl_scheduling_config_id_fkey"
            columns: ["config_id"]
            isOneToOne: false
            referencedRelation: "crawl_configurations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crawl_scheduling_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: true
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      crawl_workers: {
        Row: {
          current_url: string | null
          error_count: number | null
          id: string
          last_heartbeat: string | null
          processed_count: number | null
          session_id: string
          started_at: string | null
          status: string
          worker_id: string
        }
        Insert: {
          current_url?: string | null
          error_count?: number | null
          id?: string
          last_heartbeat?: string | null
          processed_count?: number | null
          session_id: string
          started_at?: string | null
          status?: string
          worker_id: string
        }
        Update: {
          current_url?: string | null
          error_count?: number | null
          id?: string
          last_heartbeat?: string | null
          processed_count?: number | null
          session_id?: string
          started_at?: string | null
          status?: string
          worker_id?: string
        }
        Relationships: []
      }
      crawled_pages: {
        Row: {
          audit_id: string
          content_length: number | null
          crawled_at: string | null
          created_at: string | null
          external_links: number | null
          h1_tags: string[] | null
          h2_tags: string[] | null
          h3_tags: string[] | null
          http_status: number
          id: string
          images_count: number | null
          images_without_alt: number | null
          internal_links: number | null
          load_time_ms: number | null
          meta_description: string | null
          meta_title: string | null
          page_depth: number | null
          page_title: string | null
          page_type: string | null
          page_url: string
          word_count: number | null
        }
        Insert: {
          audit_id: string
          content_length?: number | null
          crawled_at?: string | null
          created_at?: string | null
          external_links?: number | null
          h1_tags?: string[] | null
          h2_tags?: string[] | null
          h3_tags?: string[] | null
          http_status: number
          id?: string
          images_count?: number | null
          images_without_alt?: number | null
          internal_links?: number | null
          load_time_ms?: number | null
          meta_description?: string | null
          meta_title?: string | null
          page_depth?: number | null
          page_title?: string | null
          page_type?: string | null
          page_url: string
          word_count?: number | null
        }
        Update: {
          audit_id?: string
          content_length?: number | null
          crawled_at?: string | null
          created_at?: string | null
          external_links?: number | null
          h1_tags?: string[] | null
          h2_tags?: string[] | null
          h3_tags?: string[] | null
          http_status?: number
          id?: string
          images_count?: number | null
          images_without_alt?: number | null
          internal_links?: number | null
          load_time_ms?: number | null
          meta_description?: string | null
          meta_title?: string | null
          page_depth?: number | null
          page_title?: string | null
          page_type?: string | null
          page_url?: string
          word_count?: number | null
        }
        Relationships: []
      }
      credit_burn_rate: {
        Row: {
          active_users: number | null
          api_breakdown: Json | null
          created_at: string | null
          date: string
          feature_breakdown: Json | null
          id: string
          total_cost_usd: number
          total_credits_used: number
        }
        Insert: {
          active_users?: number | null
          api_breakdown?: Json | null
          created_at?: string | null
          date: string
          feature_breakdown?: Json | null
          id?: string
          total_cost_usd: number
          total_credits_used: number
        }
        Update: {
          active_users?: number | null
          api_breakdown?: Json | null
          created_at?: string | null
          date?: string
          feature_breakdown?: Json | null
          id?: string
          total_cost_usd?: number
          total_credits_used?: number
        }
        Relationships: []
      }
      credit_pricing: {
        Row: {
          active: boolean | null
          api_source: string
          base_cost_usd: number
          created_at: string | null
          credit_cost: number
          feature_type: string
          id: string
          unit_description: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          api_source: string
          base_cost_usd: number
          created_at?: string | null
          credit_cost: number
          feature_type: string
          id?: string
          unit_description?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          api_source?: string
          base_cost_usd?: number
          created_at?: string | null
          credit_cost?: number
          feature_type?: string
          id?: string
          unit_description?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      credit_transactions: {
        Row: {
          amount: number
          balance_after: number
          balance_before: number
          created_at: string | null
          feature_type: string | null
          id: string
          job_id: string | null
          metadata: Json | null
          source: string
          transaction_type: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          amount: number
          balance_after: number
          balance_before: number
          created_at?: string | null
          feature_type?: string | null
          id?: string
          job_id?: string | null
          metadata?: Json | null
          source: string
          transaction_type?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          balance_after?: number
          balance_before?: number
          created_at?: string | null
          feature_type?: string | null
          id?: string
          job_id?: string | null
          metadata?: Json | null
          source?: string
          transaction_type?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "credit_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_usage: {
        Row: {
          action_id: string | null
          credits_used: number
          description: string | null
          id: string
          job_run_id: string | null
          provider: string
          recorded_at: string | null
          user_id: string
        }
        Insert: {
          action_id?: string | null
          credits_used: number
          description?: string | null
          id?: string
          job_run_id?: string | null
          provider: string
          recorded_at?: string | null
          user_id: string
        }
        Update: {
          action_id?: string | null
          credits_used?: number
          description?: string | null
          id?: string
          job_run_id?: string | null
          provider?: string
          recorded_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_usage_action_id_fkey"
            columns: ["action_id"]
            isOneToOne: false
            referencedRelation: "job_actions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "credit_usage_job_run_id_fkey"
            columns: ["job_run_id"]
            isOneToOne: false
            referencedRelation: "job_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      cross_website_keyword_rankings: {
        Row: {
          checked_at: string
          cross_keyword_id: string
          current_position: number | null
          device: string | null
          difficulty_score: number | null
          id: string
          keyword: string
          location: string | null
          previous_position: number | null
          ranking_data: Json | null
          search_engine: string | null
          search_volume: number | null
          url: string | null
          website_id: string
        }
        Insert: {
          checked_at?: string
          cross_keyword_id: string
          current_position?: number | null
          device?: string | null
          difficulty_score?: number | null
          id?: string
          keyword: string
          location?: string | null
          previous_position?: number | null
          ranking_data?: Json | null
          search_engine?: string | null
          search_volume?: number | null
          url?: string | null
          website_id: string
        }
        Update: {
          checked_at?: string
          cross_keyword_id?: string
          current_position?: number | null
          device?: string | null
          difficulty_score?: number | null
          id?: string
          keyword?: string
          location?: string | null
          previous_position?: number | null
          ranking_data?: Json | null
          search_engine?: string | null
          search_volume?: number | null
          url?: string | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cross_website_keyword_rankings_cross_keyword_id_fkey"
            columns: ["cross_keyword_id"]
            isOneToOne: false
            referencedRelation: "cross_website_keywords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cross_website_keyword_rankings_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      cross_website_keywords: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          keyword: string
          last_checked_at: string | null
          notes: string | null
          tracking_settings: Json | null
          updated_at: string
          user_email: string
          website_ids: string[]
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          keyword: string
          last_checked_at?: string | null
          notes?: string | null
          tracking_settings?: Json | null
          updated_at?: string
          user_email: string
          website_ids?: string[]
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          keyword?: string
          last_checked_at?: string | null
          notes?: string | null
          tracking_settings?: Json | null
          updated_at?: string
          user_email?: string
          website_ids?: string[]
        }
        Relationships: []
      }
      domain_analytics: {
        Row: {
          competitor_analysis: Json | null
          created_at: string
          domain: string
          domain_rank: number | null
          id: string
          keyword_distribution: Json | null
          organic_cost: number | null
          organic_keywords: number | null
          organic_traffic: number | null
          organic_visibility: number | null
          pages_in_serp: number | null
          top_keywords: Json | null
          traffic_trends: Json | null
          updated_at: string
          website_id: string
        }
        Insert: {
          competitor_analysis?: Json | null
          created_at?: string
          domain: string
          domain_rank?: number | null
          id?: string
          keyword_distribution?: Json | null
          organic_cost?: number | null
          organic_keywords?: number | null
          organic_traffic?: number | null
          organic_visibility?: number | null
          pages_in_serp?: number | null
          top_keywords?: Json | null
          traffic_trends?: Json | null
          updated_at?: string
          website_id: string
        }
        Update: {
          competitor_analysis?: Json | null
          created_at?: string
          domain?: string
          domain_rank?: number | null
          id?: string
          keyword_distribution?: Json | null
          organic_cost?: number | null
          organic_keywords?: number | null
          organic_traffic?: number | null
          organic_visibility?: number | null
          pages_in_serp?: number | null
          top_keywords?: Json | null
          traffic_trends?: Json | null
          updated_at?: string
          website_id?: string
        }
        Relationships: []
      }
      edge_function_health: {
        Row: {
          created_at: string
          error_rate: number | null
          failure_count: number | null
          function_name: string
          health_score: number | null
          id: string
          last_failure_at: string | null
          last_success_at: string | null
          response_time_ms: number | null
          status: string
          success_count: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          error_rate?: number | null
          failure_count?: number | null
          function_name: string
          health_score?: number | null
          id?: string
          last_failure_at?: string | null
          last_success_at?: string | null
          response_time_ms?: number | null
          status: string
          success_count?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          error_rate?: number | null
          failure_count?: number | null
          function_name?: string
          health_score?: number | null
          id?: string
          last_failure_at?: string | null
          last_success_at?: string | null
          response_time_ms?: number | null
          status?: string
          success_count?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      eeat_scan_requests: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          input_content: string
          input_type: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          progress: number
          session_token: string | null
          started_at: string | null
          status: string
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          input_content: string
          input_type: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number
          session_token?: string | null
          started_at?: string | null
          status?: string
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          input_content?: string
          input_type?: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number
          session_token?: string | null
          started_at?: string | null
          status?: string
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      eeat_scan_results: {
        Row: {
          category_scores: Json
          content_preview: string | null
          created_at: string
          fix_first_count: number
          fix_next_count: number
          fixes: Json
          id: string
          optional_count: number
          risk_level: string | null
          scan_id: string
          source_url: string | null
          top_fixes: Json
          total_issues: number
          word_count: number | null
        }
        Insert: {
          category_scores?: Json
          content_preview?: string | null
          created_at?: string
          fix_first_count?: number
          fix_next_count?: number
          fixes?: Json
          id?: string
          optional_count?: number
          risk_level?: string | null
          scan_id: string
          source_url?: string | null
          top_fixes?: Json
          total_issues?: number
          word_count?: number | null
        }
        Update: {
          category_scores?: Json
          content_preview?: string | null
          created_at?: string
          fix_first_count?: number
          fix_next_count?: number
          fixes?: Json
          id?: string
          optional_count?: number
          risk_level?: string | null
          scan_id?: string
          source_url?: string | null
          top_fixes?: Json
          total_issues?: number
          word_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "eeat_scan_results_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "eeat_scan_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      email_brand_settings: {
        Row: {
          created_at: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      email_template_versions: {
        Row: {
          change_notes: string | null
          changed_by: string | null
          created_at: string | null
          html_template: string
          id: string
          promotional_section: Json | null
          subject_template: string
          template_id: string | null
          version: number
        }
        Insert: {
          change_notes?: string | null
          changed_by?: string | null
          created_at?: string | null
          html_template: string
          id?: string
          promotional_section?: Json | null
          subject_template: string
          template_id?: string | null
          version: number
        }
        Update: {
          change_notes?: string | null
          changed_by?: string | null
          created_at?: string | null
          html_template?: string
          id?: string
          promotional_section?: Json | null
          subject_template?: string
          template_id?: string | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "email_template_versions_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          category: string
          created_at: string | null
          html_template: string
          id: string
          is_active: boolean | null
          promotional_section: Json | null
          subject_template: string
          template_key: string
          template_name: string
          updated_at: string | null
          updated_by: string | null
          variables: Json | null
          version: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          html_template: string
          id?: string
          is_active?: boolean | null
          promotional_section?: Json | null
          subject_template: string
          template_key: string
          template_name: string
          updated_at?: string | null
          updated_by?: string | null
          variables?: Json | null
          version?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          html_template?: string
          id?: string
          is_active?: boolean | null
          promotional_section?: Json | null
          subject_template?: string
          template_key?: string
          template_name?: string
          updated_at?: string | null
          updated_by?: string | null
          variables?: Json | null
          version?: number | null
        }
        Relationships: []
      }
      explorer_results: {
        Row: {
          backlinks_count: number | null
          competitors: Json | null
          created_at: string
          id: string
          keyword: string
          session_id: string
          top_pages: Json | null
          traffic_estimate: number | null
        }
        Insert: {
          backlinks_count?: number | null
          competitors?: Json | null
          created_at?: string
          id?: string
          keyword: string
          session_id: string
          top_pages?: Json | null
          traffic_estimate?: number | null
        }
        Update: {
          backlinks_count?: number | null
          competitors?: Json | null
          created_at?: string
          id?: string
          keyword?: string
          session_id?: string
          top_pages?: Json | null
          traffic_estimate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "explorer_results_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "explorer_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      explorer_sessions: {
        Row: {
          analysis_type: string
          completed_at: string | null
          created_at: string
          id: string
          processed_insights: Json | null
          raw_results: Json | null
          started_at: string
          target_domain: string
          updated_at: string
          website_id: string
        }
        Insert: {
          analysis_type: string
          completed_at?: string | null
          created_at?: string
          id?: string
          processed_insights?: Json | null
          raw_results?: Json | null
          started_at?: string
          target_domain: string
          updated_at?: string
          website_id: string
        }
        Update: {
          analysis_type?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          processed_insights?: Json | null
          raw_results?: Json | null
          started_at?: string
          target_domain?: string
          updated_at?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "explorer_sessions_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      export_logs: {
        Row: {
          created_at: string
          export_type: string
          file_name: string
          file_size_bytes: number
          id: string
          record_count: number
          user_email: string
          website_id: string | null
        }
        Insert: {
          created_at?: string
          export_type: string
          file_name: string
          file_size_bytes?: number
          id?: string
          record_count?: number
          user_email: string
          website_id?: string | null
        }
        Update: {
          created_at?: string
          export_type?: string
          file_name?: string
          file_size_bytes?: number
          id?: string
          record_count?: number
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "export_logs_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      exports_log: {
        Row: {
          created_at: string
          export_type: string
          file_name: string
          filters_applied: Json | null
          id: string
          record_count: number
          user_email: string
          website_id: string | null
        }
        Insert: {
          created_at?: string
          export_type: string
          file_name: string
          filters_applied?: Json | null
          id?: string
          record_count?: number
          user_email: string
          website_id?: string | null
        }
        Update: {
          created_at?: string
          export_type?: string
          file_name?: string
          filters_applied?: Json | null
          id?: string
          record_count?: number
          user_email?: string
          website_id?: string | null
        }
        Relationships: []
      }
      external_validation_results: {
        Row: {
          accessibility_score: number | null
          audit_id: string | null
          best_practices_score: number | null
          created_at: string
          id: string
          performance_score: number | null
          seo_score: number | null
          validated_at: string
          validation_data: Json
          validation_source: string
          website_id: string
        }
        Insert: {
          accessibility_score?: number | null
          audit_id?: string | null
          best_practices_score?: number | null
          created_at?: string
          id?: string
          performance_score?: number | null
          seo_score?: number | null
          validated_at?: string
          validation_data?: Json
          validation_source: string
          website_id: string
        }
        Update: {
          accessibility_score?: number | null
          audit_id?: string | null
          best_practices_score?: number | null
          created_at?: string
          id?: string
          performance_score?: number | null
          seo_score?: number | null
          validated_at?: string
          validation_data?: Json
          validation_source?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "external_validation_results_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_validation_results_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      failed_payments: {
        Row: {
          amount: number | null
          created_at: string
          currency: string | null
          failure_reason: string | null
          id: string
          next_retry_at: string | null
          resolved_at: string | null
          retry_count: number | null
          subscription_id: string | null
          updated_at: string
          user_email: string
        }
        Insert: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          failure_reason?: string | null
          id?: string
          next_retry_at?: string | null
          resolved_at?: string | null
          retry_count?: number | null
          subscription_id?: string | null
          updated_at?: string
          user_email: string
        }
        Update: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          failure_reason?: string | null
          id?: string
          next_retry_at?: string | null
          resolved_at?: string | null
          retry_count?: number | null
          subscription_id?: string | null
          updated_at?: string
          user_email?: string
        }
        Relationships: []
      }
      feature_flag_audit_log: {
        Row: {
          change_type: string
          changed_by_email: string | null
          changed_by_user_id: string | null
          created_at: string
          feature_key: string
          id: string
          new_value: Json | null
          previous_value: Json | null
        }
        Insert: {
          change_type: string
          changed_by_email?: string | null
          changed_by_user_id?: string | null
          created_at?: string
          feature_key: string
          id?: string
          new_value?: Json | null
          previous_value?: Json | null
        }
        Update: {
          change_type?: string
          changed_by_email?: string | null
          changed_by_user_id?: string | null
          created_at?: string
          feature_key?: string
          id?: string
          new_value?: Json | null
          previous_value?: Json | null
        }
        Relationships: []
      }
      feature_flags: {
        Row: {
          allowlist: Json | null
          beta: boolean
          created_at: string
          description: string | null
          enabled: boolean
          feature_key: string
          feature_name: string | null
          id: string
          metadata: Json | null
          rollout_percent: number | null
          updated_at: string
        }
        Insert: {
          allowlist?: Json | null
          beta?: boolean
          created_at?: string
          description?: string | null
          enabled?: boolean
          feature_key: string
          feature_name?: string | null
          id?: string
          metadata?: Json | null
          rollout_percent?: number | null
          updated_at?: string
        }
        Update: {
          allowlist?: Json | null
          beta?: boolean
          created_at?: string
          description?: string | null
          enabled?: boolean
          feature_key?: string
          feature_name?: string | null
          id?: string
          metadata?: Json | null
          rollout_percent?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      feature_usage_tracking: {
        Row: {
          created_at: string
          date_bucket: string
          feature_name: string
          id: string
          metadata: Json | null
          session_id: string | null
          usage_count: number
          user_email: string | null
          user_id: string | null
          website_id: string | null
        }
        Insert: {
          created_at?: string
          date_bucket?: string
          feature_name: string
          id?: string
          metadata?: Json | null
          session_id?: string | null
          usage_count?: number
          user_email?: string | null
          user_id?: string | null
          website_id?: string | null
        }
        Update: {
          created_at?: string
          date_bucket?: string
          feature_name?: string
          id?: string
          metadata?: Json | null
          session_id?: string | null
          usage_count?: number
          user_email?: string | null
          user_id?: string | null
          website_id?: string | null
        }
        Relationships: []
      }
      fix_scan_requests: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          id: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          progress: number | null
          session_token: string
          started_at: string | null
          status: string | null
          url: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number | null
          session_token: string
          started_at?: string | null
          status?: string | null
          url: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number | null
          session_token?: string
          started_at?: string | null
          status?: string | null
          url?: string
          user_id?: string | null
        }
        Relationships: []
      }
      fix_scan_results: {
        Row: {
          caching_detected: boolean | null
          cdn_detected: string | null
          cms_confidence: number | null
          cms_theme: string | null
          cms_version: string | null
          created_at: string | null
          critical_issues: number | null
          detected_cms: string | null
          detected_plugins: Json | null
          fix_first_count: number | null
          fix_next_count: number | null
          fixes: Json | null
          hosting_provider: string | null
          id: string
          load_time_ms: number | null
          optional_count: number | null
          page_size_bytes: number | null
          pages_scanned: number | null
          plugin_impact_report: Json | null
          request_count: number | null
          resource_analysis: Json | null
          scan_id: string
          server_type: string | null
          speed_root_causes: Json | null
          total_issues: number | null
        }
        Insert: {
          caching_detected?: boolean | null
          cdn_detected?: string | null
          cms_confidence?: number | null
          cms_theme?: string | null
          cms_version?: string | null
          created_at?: string | null
          critical_issues?: number | null
          detected_cms?: string | null
          detected_plugins?: Json | null
          fix_first_count?: number | null
          fix_next_count?: number | null
          fixes?: Json | null
          hosting_provider?: string | null
          id?: string
          load_time_ms?: number | null
          optional_count?: number | null
          page_size_bytes?: number | null
          pages_scanned?: number | null
          plugin_impact_report?: Json | null
          request_count?: number | null
          resource_analysis?: Json | null
          scan_id: string
          server_type?: string | null
          speed_root_causes?: Json | null
          total_issues?: number | null
        }
        Update: {
          caching_detected?: boolean | null
          cdn_detected?: string | null
          cms_confidence?: number | null
          cms_theme?: string | null
          cms_version?: string | null
          created_at?: string | null
          critical_issues?: number | null
          detected_cms?: string | null
          detected_plugins?: Json | null
          fix_first_count?: number | null
          fix_next_count?: number | null
          fixes?: Json | null
          hosting_provider?: string | null
          id?: string
          load_time_ms?: number | null
          optional_count?: number | null
          page_size_bytes?: number | null
          pages_scanned?: number | null
          plugin_impact_report?: Json | null
          request_count?: number | null
          resource_analysis?: Json | null
          scan_id?: string
          server_type?: string | null
          speed_root_causes?: Json | null
          total_issues?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fix_scan_results_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "fix_scan_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      generated_blog_topics: {
        Row: {
          created_at: string | null
          generated_topics: Json
          id: string
          industry_focus: string | null
          input_keyword: string | null
          input_niche: string
          input_url: string | null
          tone_setting: string | null
          user_email: string
        }
        Insert: {
          created_at?: string | null
          generated_topics: Json
          id?: string
          industry_focus?: string | null
          input_keyword?: string | null
          input_niche: string
          input_url?: string | null
          tone_setting?: string | null
          user_email: string
        }
        Update: {
          created_at?: string | null
          generated_topics?: Json
          id?: string
          industry_focus?: string | null
          input_keyword?: string | null
          input_niche?: string
          input_url?: string | null
          tone_setting?: string | null
          user_email?: string
        }
        Relationships: []
      }
      generated_meta_tags: {
        Row: {
          character_limit_description: number | null
          character_limit_title: number | null
          created_at: string | null
          creativity_level: string | null
          generated_descriptions: Json
          generated_titles: Json
          id: string
          input_keyword: string | null
          input_title: string
          user_email: string
          website_id: string | null
        }
        Insert: {
          character_limit_description?: number | null
          character_limit_title?: number | null
          created_at?: string | null
          creativity_level?: string | null
          generated_descriptions: Json
          generated_titles: Json
          id?: string
          input_keyword?: string | null
          input_title: string
          user_email: string
          website_id?: string | null
        }
        Update: {
          character_limit_description?: number | null
          character_limit_title?: number | null
          created_at?: string | null
          creativity_level?: string | null
          generated_descriptions?: Json
          generated_titles?: Json
          id?: string
          input_keyword?: string | null
          input_title?: string
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "generated_meta_tags_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      generated_reports: {
        Row: {
          audit_id: string
          created_at: string
          generated_at: string
          id: string
          report_data: Json | null
          report_type: string
          report_url: string | null
          template_id: string | null
          website_id: string
        }
        Insert: {
          audit_id: string
          created_at?: string
          generated_at?: string
          id?: string
          report_data?: Json | null
          report_type?: string
          report_url?: string | null
          template_id?: string | null
          website_id: string
        }
        Update: {
          audit_id?: string
          created_at?: string
          generated_at?: string
          id?: string
          report_data?: Json | null
          report_type?: string
          report_url?: string | null
          template_id?: string | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "generated_reports_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "generated_reports_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "report_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "generated_reports_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      generated_schemas: {
        Row: {
          created_at: string | null
          generated_schema: Json
          id: string
          implementation_guide: string | null
          input_data: Json
          schema_type: string
          user_email: string
          website_id: string | null
        }
        Insert: {
          created_at?: string | null
          generated_schema: Json
          id?: string
          implementation_guide?: string | null
          input_data: Json
          schema_type: string
          user_email: string
          website_id?: string | null
        }
        Update: {
          created_at?: string | null
          generated_schema?: Json
          id?: string
          implementation_guide?: string | null
          input_data?: Json
          schema_type?: string
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "generated_schemas_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      goal_tasks: {
        Row: {
          category: string
          created_at: string
          description: string
          goal_id: string
          id: string
          order_index: number
          severity: string | null
          task_key: string
          title: string
          tool_link: string | null
        }
        Insert: {
          category?: string
          created_at?: string
          description: string
          goal_id: string
          id?: string
          order_index?: number
          severity?: string | null
          task_key: string
          title: string
          tool_link?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          goal_id?: string
          id?: string
          order_index?: number
          severity?: string | null
          task_key?: string
          title?: string
          tool_link?: string | null
        }
        Relationships: []
      }
      industry_benchmarks: {
        Row: {
          avg_backlink_score: number
          avg_content_score: number
          avg_conversion_rate: number | null
          avg_monthly_traffic: number | null
          avg_overall_score: number
          avg_ranking_score: number
          avg_technical_score: number
          created_at: string
          id: string
          industry_category: string
          industry_name: string
          last_updated: string
          sample_size: number
          seo_score_impact_multiplier: number | null
          target_seo_score: number | null
          typical_customer_value: number | null
        }
        Insert: {
          avg_backlink_score?: number
          avg_content_score?: number
          avg_conversion_rate?: number | null
          avg_monthly_traffic?: number | null
          avg_overall_score?: number
          avg_ranking_score?: number
          avg_technical_score?: number
          created_at?: string
          id?: string
          industry_category: string
          industry_name: string
          last_updated?: string
          sample_size?: number
          seo_score_impact_multiplier?: number | null
          target_seo_score?: number | null
          typical_customer_value?: number | null
        }
        Update: {
          avg_backlink_score?: number
          avg_content_score?: number
          avg_conversion_rate?: number | null
          avg_monthly_traffic?: number | null
          avg_overall_score?: number
          avg_ranking_score?: number
          avg_technical_score?: number
          created_at?: string
          id?: string
          industry_category?: string
          industry_name?: string
          last_updated?: string
          sample_size?: number
          seo_score_impact_multiplier?: number | null
          target_seo_score?: number | null
          typical_customer_value?: number | null
        }
        Relationships: []
      }
      integration_sync_logs: {
        Row: {
          created_at: string
          data: Json
          id: string
          integration_type: string
          synced_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data?: Json
          id?: string
          integration_type: string
          synced_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          integration_type?: string
          synced_at?: string
          user_id?: string
        }
        Relationships: []
      }
      internal_link_scan_requests: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          id: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          progress: number | null
          session_token: string
          started_at: string | null
          status: string
          url: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number | null
          session_token: string
          started_at?: string | null
          status?: string
          url: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number | null
          session_token?: string
          started_at?: string | null
          status?: string
          url?: string
          user_id?: string | null
        }
        Relationships: []
      }
      internal_link_scan_results: {
        Row: {
          created_at: string | null
          entities: string[] | null
          id: string
          pages_crawled: number | null
          primary_topic: string | null
          scan_id: string
          search_intent: string | null
          secondary_topics: string[] | null
          sitemap_found: boolean | null
          source_title: string | null
          source_url: string
          suggestion_count: number | null
          suggestions: Json
        }
        Insert: {
          created_at?: string | null
          entities?: string[] | null
          id?: string
          pages_crawled?: number | null
          primary_topic?: string | null
          scan_id: string
          search_intent?: string | null
          secondary_topics?: string[] | null
          sitemap_found?: boolean | null
          source_title?: string | null
          source_url: string
          suggestion_count?: number | null
          suggestions?: Json
        }
        Update: {
          created_at?: string | null
          entities?: string[] | null
          id?: string
          pages_crawled?: number | null
          primary_topic?: string | null
          scan_id?: string
          search_intent?: string | null
          secondary_topics?: string[] | null
          sitemap_found?: boolean | null
          source_title?: string | null
          source_url?: string
          suggestion_count?: number | null
          suggestions?: Json
        }
        Relationships: [
          {
            foreignKeyName: "internal_link_scan_results_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "internal_link_scan_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      issue_resolution_tracking: {
        Row: {
          created_at: string
          id: string
          issue_id: string
          issue_title: string
          ranking_impact: Json | null
          resolution_method: string | null
          resolved_at: string
          resolved_by: string
          traffic_impact: Json | null
          website_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          issue_id: string
          issue_title: string
          ranking_impact?: Json | null
          resolution_method?: string | null
          resolved_at?: string
          resolved_by: string
          traffic_impact?: Json | null
          website_id: string
        }
        Update: {
          created_at?: string
          id?: string
          issue_id?: string
          issue_title?: string
          ranking_impact?: Json | null
          resolution_method?: string | null
          resolved_at?: string
          resolved_by?: string
          traffic_impact?: Json | null
          website_id?: string
        }
        Relationships: []
      }
      job_actions: {
        Row: {
          action_type: string
          created_at: string | null
          finished_at: string | null
          id: string
          input: Json | null
          job_run_id: string
          output: Json | null
          sequence_order: number
          started_at: string | null
          status: string
        }
        Insert: {
          action_type: string
          created_at?: string | null
          finished_at?: string | null
          id?: string
          input?: Json | null
          job_run_id: string
          output?: Json | null
          sequence_order?: number
          started_at?: string | null
          status?: string
        }
        Update: {
          action_type?: string
          created_at?: string | null
          finished_at?: string | null
          id?: string
          input?: Json | null
          job_run_id?: string
          output?: Json | null
          sequence_order?: number
          started_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_actions_job_run_id_fkey"
            columns: ["job_run_id"]
            isOneToOne: false
            referencedRelation: "job_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_runs: {
        Row: {
          created_at: string | null
          error_message: string | null
          finished_at: string | null
          id: string
          job_id: string
          retryable: boolean | null
          run_number: number
          started_at: string | null
          status: string
          worker_id: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          finished_at?: string | null
          id?: string
          job_id: string
          retryable?: boolean | null
          run_number?: number
          started_at?: string | null
          status?: string
          worker_id?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          finished_at?: string | null
          id?: string
          job_id?: string
          retryable?: boolean | null
          run_number?: number
          started_at?: string | null
          status?: string
          worker_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_runs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_types: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          display_name: string
          id: string
          is_active: boolean | null
          type_key: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          display_name: string
          id?: string
          is_active?: boolean | null
          type_key: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          display_name?: string
          id?: string
          is_active?: boolean | null
          type_key?: string
        }
        Relationships: []
      }
      jobs: {
        Row: {
          created_at: string | null
          created_by: string
          cron_expression: string | null
          id: string
          is_recurring: boolean | null
          job_category: string | null
          job_type: string
          parent_job_id: string | null
          payload: Json
          priority: string
          project_id: string | null
          scheduled_at: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string
          cron_expression?: string | null
          id?: string
          is_recurring?: boolean | null
          job_category?: string | null
          job_type: string
          parent_job_id?: string | null
          payload?: Json
          priority?: string
          project_id?: string | null
          scheduled_at?: string | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          cron_expression?: string | null
          id?: string
          is_recurring?: boolean | null
          job_category?: string | null
          job_type?: string
          parent_job_id?: string | null
          payload?: Json
          priority?: string
          project_id?: string | null
          scheduled_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "jobs_parent_job_id_fkey"
            columns: ["parent_job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_cache: {
        Row: {
          api_credits_consumed: number | null
          api_provider: string | null
          competition: string | null
          country_code: string
          cpc: number | null
          expires_at: string
          fetch_count: number | null
          fetch_timestamp: string | null
          history_trend: Json | null
          id: string
          intent: string | null
          keyword: string
          keyword_difficulty: number | null
          longtail_keywords: Json | null
          question_keywords: Json | null
          related_keywords: Json | null
          search_volume: number | null
          serp_features: Json | null
          similar_keywords: Json | null
          trending_score: number | null
        }
        Insert: {
          api_credits_consumed?: number | null
          api_provider?: string | null
          competition?: string | null
          country_code?: string
          cpc?: number | null
          expires_at: string
          fetch_count?: number | null
          fetch_timestamp?: string | null
          history_trend?: Json | null
          id?: string
          intent?: string | null
          keyword: string
          keyword_difficulty?: number | null
          longtail_keywords?: Json | null
          question_keywords?: Json | null
          related_keywords?: Json | null
          search_volume?: number | null
          serp_features?: Json | null
          similar_keywords?: Json | null
          trending_score?: number | null
        }
        Update: {
          api_credits_consumed?: number | null
          api_provider?: string | null
          competition?: string | null
          country_code?: string
          cpc?: number | null
          expires_at?: string
          fetch_count?: number | null
          fetch_timestamp?: string | null
          history_trend?: Json | null
          id?: string
          intent?: string | null
          keyword?: string
          keyword_difficulty?: number | null
          longtail_keywords?: Json | null
          question_keywords?: Json | null
          related_keywords?: Json | null
          search_volume?: number | null
          serp_features?: Json | null
          similar_keywords?: Json | null
          trending_score?: number | null
        }
        Relationships: []
      }
      keyword_cluster_items: {
        Row: {
          cluster_id: string
          created_at: string
          id: string
          intent: string | null
          kd: number | null
          keyword: string
          score: number | null
          serp_features: Json | null
          volume: number | null
          website_id: string
        }
        Insert: {
          cluster_id: string
          created_at?: string
          id?: string
          intent?: string | null
          kd?: number | null
          keyword: string
          score?: number | null
          serp_features?: Json | null
          volume?: number | null
          website_id: string
        }
        Update: {
          cluster_id?: string
          created_at?: string
          id?: string
          intent?: string | null
          kd?: number | null
          keyword?: string
          score?: number | null
          serp_features?: Json | null
          volume?: number | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keyword_cluster_items_cluster_id_fkey"
            columns: ["cluster_id"]
            isOneToOne: false
            referencedRelation: "keyword_clusters"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_clusters: {
        Row: {
          agg_metrics: Json
          ai_suggested_name: string | null
          created_at: string
          created_by: string
          id: string
          keywords_count: number
          merge_candidates: Json | null
          method: string
          name: string
          params: Json
          updated_at: string
          website_id: string
        }
        Insert: {
          agg_metrics?: Json
          ai_suggested_name?: string | null
          created_at?: string
          created_by: string
          id?: string
          keywords_count?: number
          merge_candidates?: Json | null
          method?: string
          name: string
          params?: Json
          updated_at?: string
          website_id: string
        }
        Update: {
          agg_metrics?: Json
          ai_suggested_name?: string | null
          created_at?: string
          created_by?: string
          id?: string
          keywords_count?: number
          merge_candidates?: Json | null
          method?: string
          name?: string
          params?: Json
          updated_at?: string
          website_id?: string
        }
        Relationships: []
      }
      keyword_fetch_locks: {
        Row: {
          country_code: string
          id: string
          keyword: string
          lock_acquired_at: string | null
          lock_expires_at: string
          request_id: string
          status: string | null
        }
        Insert: {
          country_code: string
          id?: string
          keyword: string
          lock_acquired_at?: string | null
          lock_expires_at: string
          request_id: string
          status?: string | null
        }
        Update: {
          country_code?: string
          id?: string
          keyword?: string
          lock_acquired_at?: string | null
          lock_expires_at?: string
          request_id?: string
          status?: string | null
        }
        Relationships: []
      }
      keyword_groups: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
          user_email: string
          website_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
          user_email: string
          website_id: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keyword_groups_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_projects: {
        Row: {
          created_at: string
          description: string | null
          goal: string | null
          id: string
          name: string
          status: string | null
          target_date: string | null
          updated_at: string
          website_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          goal?: string | null
          id?: string
          name: string
          status?: string | null
          target_date?: string | null
          updated_at?: string
          website_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          goal?: string | null
          id?: string
          name?: string
          status?: string | null
          target_date?: string | null
          updated_at?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keyword_projects_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_ranking_history: {
        Row: {
          audit_correlation_id: string | null
          created_at: string
          id: string
          impact: string | null
          keyword: string
          new_position: number | null
          old_position: number | null
          position_change: number
          tracked_at: string
          website_id: string
        }
        Insert: {
          audit_correlation_id?: string | null
          created_at?: string
          id?: string
          impact?: string | null
          keyword: string
          new_position?: number | null
          old_position?: number | null
          position_change?: number
          tracked_at?: string
          website_id: string
        }
        Update: {
          audit_correlation_id?: string | null
          created_at?: string
          id?: string
          impact?: string | null
          keyword?: string
          new_position?: number | null
          old_position?: number | null
          position_change?: number
          tracked_at?: string
          website_id?: string
        }
        Relationships: []
      }
      keyword_rankings: {
        Row: {
          audit_id: string
          best_position: number | null
          competitor_position: number | null
          competitor_url: string | null
          created_at: string
          id: string
          keyword: string
          last_checked_at: string | null
          last_serp_check: string | null
          position_change: number | null
          ranking_position: number | null
          serp_features: Json | null
          serp_features_history: Json | null
          tracking_status: string | null
          user_email: string | null
          website_id: string | null
          worst_position: number | null
        }
        Insert: {
          audit_id: string
          best_position?: number | null
          competitor_position?: number | null
          competitor_url?: string | null
          created_at?: string
          id?: string
          keyword: string
          last_checked_at?: string | null
          last_serp_check?: string | null
          position_change?: number | null
          ranking_position?: number | null
          serp_features?: Json | null
          serp_features_history?: Json | null
          tracking_status?: string | null
          user_email?: string | null
          website_id?: string | null
          worst_position?: number | null
        }
        Update: {
          audit_id?: string
          best_position?: number | null
          competitor_position?: number | null
          competitor_url?: string | null
          created_at?: string
          id?: string
          keyword?: string
          last_checked_at?: string | null
          last_serp_check?: string | null
          position_change?: number | null
          ranking_position?: number | null
          serp_features?: Json | null
          serp_features_history?: Json | null
          tracking_status?: string | null
          user_email?: string | null
          website_id?: string | null
          worst_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_rankings_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_research: {
        Row: {
          competition_level: string | null
          cpc: number | null
          created_at: string
          id: string
          keyword: string
          keyword_difficulty: number | null
          language: string | null
          location: string | null
          search_volume: number | null
          trending_score: number | null
          updated_at: string
        }
        Insert: {
          competition_level?: string | null
          cpc?: number | null
          created_at?: string
          id?: string
          keyword: string
          keyword_difficulty?: number | null
          language?: string | null
          location?: string | null
          search_volume?: number | null
          trending_score?: number | null
          updated_at?: string
        }
        Update: {
          competition_level?: string | null
          cpc?: number | null
          created_at?: string
          id?: string
          keyword?: string
          keyword_difficulty?: number | null
          language?: string | null
          location?: string | null
          search_volume?: number | null
          trending_score?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      keyword_research_history: {
        Row: {
          competition: string | null
          country: string
          cpc: number | null
          created_at: string
          id: string
          intent: string | null
          is_tracked: boolean | null
          keyword: string
          language: string
          search_volume: number | null
          serp_features: Json | null
          source: string | null
          tracking_status: string | null
          trend: string | null
          user_id: string
        }
        Insert: {
          competition?: string | null
          country?: string
          cpc?: number | null
          created_at?: string
          id?: string
          intent?: string | null
          is_tracked?: boolean | null
          keyword: string
          language?: string
          search_volume?: number | null
          serp_features?: Json | null
          source?: string | null
          tracking_status?: string | null
          trend?: string | null
          user_id: string
        }
        Update: {
          competition?: string | null
          country?: string
          cpc?: number | null
          created_at?: string
          id?: string
          intent?: string | null
          is_tracked?: boolean | null
          keyword?: string
          language?: string
          search_volume?: number | null
          serp_features?: Json | null
          source?: string | null
          tracking_status?: string | null
          trend?: string | null
          user_id?: string
        }
        Relationships: []
      }
      keyword_research_preferences: {
        Row: {
          created_at: string
          default_analysis_type: string | null
          favorite_locations: string[] | null
          id: string
          last_language: string | null
          last_location: string | null
          updated_at: string
          user_id: string
          website_id: string | null
        }
        Insert: {
          created_at?: string
          default_analysis_type?: string | null
          favorite_locations?: string[] | null
          id?: string
          last_language?: string | null
          last_location?: string | null
          updated_at?: string
          user_id: string
          website_id?: string | null
        }
        Update: {
          created_at?: string
          default_analysis_type?: string | null
          favorite_locations?: string[] | null
          id?: string
          last_language?: string | null
          last_location?: string | null
          updated_at?: string
          user_id?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_research_preferences_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_research_results: {
        Row: {
          api_source: string | null
          created_at: string | null
          id: string
          keyword_difficulty: number | null
          language: string | null
          location: string | null
          related_keywords: Json | null
          search_volume: number | null
          searched_keyword: string
          session_id: string | null
          user_email: string
          website_id: string | null
        }
        Insert: {
          api_source?: string | null
          created_at?: string | null
          id?: string
          keyword_difficulty?: number | null
          language?: string | null
          location?: string | null
          related_keywords?: Json | null
          search_volume?: number | null
          searched_keyword: string
          session_id?: string | null
          user_email: string
          website_id?: string | null
        }
        Update: {
          api_source?: string | null
          created_at?: string | null
          id?: string
          keyword_difficulty?: number | null
          language?: string | null
          location?: string | null
          related_keywords?: Json | null
          search_volume?: number | null
          searched_keyword?: string
          session_id?: string | null
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_research_results_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "keyword_research_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "keyword_research_results_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_research_sessions: {
        Row: {
          api_note: string | null
          created_at: string
          data_source: string | null
          id: string
          results_summary: Json
          search_params: Json
          session_name: string
          total_competitors: number | null
          total_keywords: number | null
          total_suggestions: number | null
          updated_at: string
          user_id: string
          website_id: string | null
        }
        Insert: {
          api_note?: string | null
          created_at?: string
          data_source?: string | null
          id?: string
          results_summary?: Json
          search_params?: Json
          session_name: string
          total_competitors?: number | null
          total_keywords?: number | null
          total_suggestions?: number | null
          updated_at?: string
          user_id: string
          website_id?: string | null
        }
        Update: {
          api_note?: string | null
          created_at?: string
          data_source?: string | null
          id?: string
          results_summary?: Json
          search_params?: Json
          session_name?: string
          total_competitors?: number | null
          total_keywords?: number | null
          total_suggestions?: number | null
          updated_at?: string
          user_id?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keyword_research_sessions_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_suggestions: {
        Row: {
          created_at: string
          id: string
          keyword_difficulty: number | null
          keyword_type: string | null
          location: string | null
          relevance_score: number | null
          search_volume: number | null
          seed_keyword: string
          suggested_keyword: string
        }
        Insert: {
          created_at?: string
          id?: string
          keyword_difficulty?: number | null
          keyword_type?: string | null
          location?: string | null
          relevance_score?: number | null
          search_volume?: number | null
          seed_keyword: string
          suggested_keyword: string
        }
        Update: {
          created_at?: string
          id?: string
          keyword_difficulty?: number | null
          keyword_type?: string | null
          location?: string | null
          relevance_score?: number | null
          search_volume?: number | null
          seed_keyword?: string
          suggested_keyword?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          audit_id: string | null
          business_name: string | null
          created_at: string
          email: string
          email_sent: boolean | null
          id: string
          notes: string | null
          phone: string | null
          source: string | null
          status: string | null
          updated_at: string
          website_url: string | null
        }
        Insert: {
          audit_id?: string | null
          business_name?: string | null
          created_at?: string
          email: string
          email_sent?: boolean | null
          id?: string
          notes?: string | null
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          audit_id?: string | null
          business_name?: string | null
          created_at?: string
          email?: string
          email_sent?: boolean | null
          id?: string
          notes?: string | null
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_campaigns: {
        Row: {
          budget: number | null
          campaign_name: string
          campaign_type: string | null
          conversions_attributed: number | null
          created_at: string | null
          end_date: string | null
          id: string
          signups_attributed: number | null
          spend: number | null
          start_date: string | null
          updated_at: string | null
        }
        Insert: {
          budget?: number | null
          campaign_name: string
          campaign_type?: string | null
          conversions_attributed?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          signups_attributed?: number | null
          spend?: number | null
          start_date?: string | null
          updated_at?: string | null
        }
        Update: {
          budget?: number | null
          campaign_name?: string
          campaign_type?: string | null
          conversions_attributed?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          signups_attributed?: number | null
          spend?: number | null
          start_date?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      notification_preferences: {
        Row: {
          alert_types_enabled: Json | null
          created_at: string | null
          email_enabled: boolean | null
          email_frequency: string | null
          enabled: boolean | null
          id: string
          in_app_enabled: boolean | null
          notification_channels: Json | null
          push_enabled: boolean | null
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          updated_at: string | null
          user_email: string
          website_id: string | null
        }
        Insert: {
          alert_types_enabled?: Json | null
          created_at?: string | null
          email_enabled?: boolean | null
          email_frequency?: string | null
          enabled?: boolean | null
          id?: string
          in_app_enabled?: boolean | null
          notification_channels?: Json | null
          push_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          updated_at?: string | null
          user_email: string
          website_id?: string | null
        }
        Update: {
          alert_types_enabled?: Json | null
          created_at?: string | null
          email_enabled?: boolean | null
          email_frequency?: string | null
          enabled?: boolean | null
          id?: string
          in_app_enabled?: boolean | null
          notification_channels?: Json | null
          push_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          updated_at?: string | null
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_preferences_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding_cohorts: {
        Row: {
          account_created: number | null
          advanced_count: number | null
          avg_revenue_per_user: number | null
          churn_rate: number | null
          churned_count: number | null
          cohort_date: string
          cohort_type: string | null
          completed_account_form: number | null
          completed_payment: number | null
          created_at: string | null
          day_1_retention: number | null
          day_14_retention: number | null
          day_30_retention: number | null
          day_60_retention: number | null
          day_7_retention: number | null
          day_90_retention: number | null
          email_verified: number | null
          enterprise_count: number | null
          first_audit: number | null
          first_issue_fixed: number | null
          first_login: number | null
          first_website: number | null
          fully_activated: number | null
          id: string
          overall_conversion_rate: number | null
          payment_to_activation_rate: number | null
          pro_count: number | null
          selected_plan: number | null
          signup_to_payment_rate: number | null
          standard_count: number | null
          started_payment: number | null
          started_signup: number | null
          starter_count: number | null
          total_ltv: number | null
          total_mrr: number | null
          total_visitors: number | null
          updated_at: string | null
        }
        Insert: {
          account_created?: number | null
          advanced_count?: number | null
          avg_revenue_per_user?: number | null
          churn_rate?: number | null
          churned_count?: number | null
          cohort_date: string
          cohort_type?: string | null
          completed_account_form?: number | null
          completed_payment?: number | null
          created_at?: string | null
          day_1_retention?: number | null
          day_14_retention?: number | null
          day_30_retention?: number | null
          day_60_retention?: number | null
          day_7_retention?: number | null
          day_90_retention?: number | null
          email_verified?: number | null
          enterprise_count?: number | null
          first_audit?: number | null
          first_issue_fixed?: number | null
          first_login?: number | null
          first_website?: number | null
          fully_activated?: number | null
          id?: string
          overall_conversion_rate?: number | null
          payment_to_activation_rate?: number | null
          pro_count?: number | null
          selected_plan?: number | null
          signup_to_payment_rate?: number | null
          standard_count?: number | null
          started_payment?: number | null
          started_signup?: number | null
          starter_count?: number | null
          total_ltv?: number | null
          total_mrr?: number | null
          total_visitors?: number | null
          updated_at?: string | null
        }
        Update: {
          account_created?: number | null
          advanced_count?: number | null
          avg_revenue_per_user?: number | null
          churn_rate?: number | null
          churned_count?: number | null
          cohort_date?: string
          cohort_type?: string | null
          completed_account_form?: number | null
          completed_payment?: number | null
          created_at?: string | null
          day_1_retention?: number | null
          day_14_retention?: number | null
          day_30_retention?: number | null
          day_60_retention?: number | null
          day_7_retention?: number | null
          day_90_retention?: number | null
          email_verified?: number | null
          enterprise_count?: number | null
          first_audit?: number | null
          first_issue_fixed?: number | null
          first_login?: number | null
          first_website?: number | null
          fully_activated?: number | null
          id?: string
          overall_conversion_rate?: number | null
          payment_to_activation_rate?: number | null
          pro_count?: number | null
          selected_plan?: number | null
          signup_to_payment_rate?: number | null
          standard_count?: number | null
          started_payment?: number | null
          started_signup?: number | null
          starter_count?: number | null
          total_ltv?: number | null
          total_mrr?: number | null
          total_visitors?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      onpage_audits: {
        Row: {
          analyzed_url: string
          audit_results: Json
          competitor_data: Json | null
          created_at: string | null
          id: string
          page_speed_data: Json | null
          recommendations: Json | null
          seo_score: number | null
          target_keywords: string[] | null
          updated_at: string | null
          website_id: string | null
        }
        Insert: {
          analyzed_url: string
          audit_results?: Json
          competitor_data?: Json | null
          created_at?: string | null
          id?: string
          page_speed_data?: Json | null
          recommendations?: Json | null
          seo_score?: number | null
          target_keywords?: string[] | null
          updated_at?: string | null
          website_id?: string | null
        }
        Update: {
          analyzed_url?: string
          audit_results?: Json
          competitor_data?: Json | null
          created_at?: string | null
          id?: string
          page_speed_data?: Json | null
          recommendations?: Json | null
          seo_score?: number | null
          target_keywords?: string[] | null
          updated_at?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onpage_audits_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      paa_extraction_requests: {
        Row: {
          completed_at: string | null
          country: string
          created_at: string | null
          error_message: string | null
          id: string
          keyword: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          progress: number | null
          session_token: string
          started_at: string | null
          status: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          country?: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          keyword: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number | null
          session_token: string
          started_at?: string | null
          status?: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          country?: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          keyword?: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          progress?: number | null
          session_token?: string
          started_at?: string | null
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      paa_extraction_results: {
        Row: {
          country: string
          created_at: string | null
          data_source: string | null
          id: string
          keyword: string
          question_count: number | null
          questions: Json
          scan_id: string
        }
        Insert: {
          country: string
          created_at?: string | null
          data_source?: string | null
          id?: string
          keyword: string
          question_count?: number | null
          questions?: Json
          scan_id: string
        }
        Update: {
          country?: string
          created_at?: string | null
          data_source?: string | null
          id?: string
          keyword?: string
          question_count?: number | null
          questions?: Json
          scan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "paa_extraction_results_scan_id_fkey"
            columns: ["scan_id"]
            isOneToOne: false
            referencedRelation: "paa_extraction_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      page_assets: {
        Row: {
          asset_size_bytes: number | null
          asset_type: string
          asset_url: string
          audit_id: string
          compression_ratio: number | null
          created_at: string | null
          id: string
          is_optimized: boolean | null
          load_time_ms: number | null
          page_url: string
          recommendations: string[] | null
          status_code: number | null
        }
        Insert: {
          asset_size_bytes?: number | null
          asset_type: string
          asset_url: string
          audit_id: string
          compression_ratio?: number | null
          created_at?: string | null
          id?: string
          is_optimized?: boolean | null
          load_time_ms?: number | null
          page_url: string
          recommendations?: string[] | null
          status_code?: number | null
        }
        Update: {
          asset_size_bytes?: number | null
          asset_type?: string
          asset_url?: string
          audit_id?: string
          compression_ratio?: number | null
          created_at?: string | null
          id?: string
          is_optimized?: boolean | null
          load_time_ms?: number | null
          page_url?: string
          recommendations?: string[] | null
          status_code?: number | null
        }
        Relationships: []
      }
      page_speed_analysis: {
        Row: {
          audit_id: string
          created_at: string | null
          cumulative_layout_shift: number | null
          desktop_score: number | null
          diagnostics: Json | null
          first_contentful_paint: number | null
          first_input_delay: number | null
          id: string
          largest_contentful_paint: number | null
          mobile_score: number | null
          opportunities: Json | null
          page_url: string
          performance_score: number | null
          speed_index: number | null
          time_to_interactive: number | null
          total_blocking_time: number | null
        }
        Insert: {
          audit_id: string
          created_at?: string | null
          cumulative_layout_shift?: number | null
          desktop_score?: number | null
          diagnostics?: Json | null
          first_contentful_paint?: number | null
          first_input_delay?: number | null
          id?: string
          largest_contentful_paint?: number | null
          mobile_score?: number | null
          opportunities?: Json | null
          page_url: string
          performance_score?: number | null
          speed_index?: number | null
          time_to_interactive?: number | null
          total_blocking_time?: number | null
        }
        Update: {
          audit_id?: string
          created_at?: string | null
          cumulative_layout_shift?: number | null
          desktop_score?: number | null
          diagnostics?: Json | null
          first_contentful_paint?: number | null
          first_input_delay?: number | null
          id?: string
          largest_contentful_paint?: number | null
          mobile_score?: number | null
          opportunities?: Json | null
          page_url?: string
          performance_score?: number | null
          speed_index?: number | null
          time_to_interactive?: number | null
          total_blocking_time?: number | null
        }
        Relationships: []
      }
      plan_allowances: {
        Row: {
          audit_frequency: string
          audit_pages_monthly: number
          content_pieces_monthly: number | null
          created_at: string | null
          id: string
          keyword_research_monthly: number | null
          plan_name: string
          rank_keywords_total: number
          rank_update_frequency: string
        }
        Insert: {
          audit_frequency: string
          audit_pages_monthly: number
          content_pieces_monthly?: number | null
          created_at?: string | null
          id?: string
          keyword_research_monthly?: number | null
          plan_name: string
          rank_keywords_total: number
          rank_update_frequency: string
        }
        Update: {
          audit_frequency?: string
          audit_pages_monthly?: number
          content_pieces_monthly?: number | null
          created_at?: string | null
          id?: string
          keyword_research_monthly?: number | null
          plan_name?: string
          rank_keywords_total?: number
          rank_update_frequency?: string
        }
        Relationships: []
      }
      plan_configurations: {
        Row: {
          created_at: string
          features: Json | null
          id: string
          is_active: boolean | null
          keyword_limit_per_day: number
          plan_name: string
          updated_at: string
          website_limit: number
        }
        Insert: {
          created_at?: string
          features?: Json | null
          id?: string
          is_active?: boolean | null
          keyword_limit_per_day?: number
          plan_name: string
          updated_at?: string
          website_limit?: number
        }
        Update: {
          created_at?: string
          features?: Json | null
          id?: string
          is_active?: boolean | null
          keyword_limit_per_day?: number
          plan_name?: string
          updated_at?: string
          website_limit?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          ai_tokens_used: number | null
          api_credits_used: number | null
          avatar_url: string | null
          bio: string | null
          company: string | null
          created_at: string
          credit_balance: number | null
          email: string
          first_name: string | null
          has_seen_free_results: boolean | null
          id: string
          is_test_user: boolean | null
          last_name: string | null
          onboarding_completed: boolean | null
          onboarding_step: number | null
          paddle_customer_id: string | null
          phone: string | null
          plan: string | null
          plan_selected: boolean | null
          selected_plan_id: string | null
          seo_goal: string | null
          signup_completed_at: string | null
          subscription_status: string | null
          test_data_tag: string | null
          trial_ends_at: string | null
          trial_used: boolean
          updated_at: string
          website: string | null
        }
        Insert: {
          ai_tokens_used?: number | null
          api_credits_used?: number | null
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          credit_balance?: number | null
          email: string
          first_name?: string | null
          has_seen_free_results?: boolean | null
          id: string
          is_test_user?: boolean | null
          last_name?: string | null
          onboarding_completed?: boolean | null
          onboarding_step?: number | null
          paddle_customer_id?: string | null
          phone?: string | null
          plan?: string | null
          plan_selected?: boolean | null
          selected_plan_id?: string | null
          seo_goal?: string | null
          signup_completed_at?: string | null
          subscription_status?: string | null
          test_data_tag?: string | null
          trial_ends_at?: string | null
          trial_used?: boolean
          updated_at?: string
          website?: string | null
        }
        Update: {
          ai_tokens_used?: number | null
          api_credits_used?: number | null
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          credit_balance?: number | null
          email?: string
          first_name?: string | null
          has_seen_free_results?: boolean | null
          id?: string
          is_test_user?: boolean | null
          last_name?: string | null
          onboarding_completed?: boolean | null
          onboarding_step?: number | null
          paddle_customer_id?: string | null
          phone?: string | null
          plan?: string | null
          plan_selected?: boolean | null
          selected_plan_id?: string | null
          seo_goal?: string | null
          signup_completed_at?: string | null
          subscription_status?: string | null
          test_data_tag?: string | null
          trial_ends_at?: string | null
          trial_used?: boolean
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      project_clusters: {
        Row: {
          added_at: string
          cluster_id: string
          project_id: string
        }
        Insert: {
          added_at?: string
          cluster_id: string
          project_id: string
        }
        Update: {
          added_at?: string
          cluster_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_clusters_cluster_id_fkey"
            columns: ["cluster_id"]
            isOneToOne: false
            referencedRelation: "keyword_clusters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_clusters_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "keyword_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_keywords: {
        Row: {
          added_at: string
          keyword_id: string
          project_id: string
        }
        Insert: {
          added_at?: string
          keyword_id: string
          project_id: string
        }
        Update: {
          added_at?: string
          keyword_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_keywords_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "user_keywords"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_keywords_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "keyword_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      provider_calls: {
        Row: {
          action_id: string | null
          created_at: string | null
          credits_consumed: number | null
          endpoint: string
          error_message: string | null
          external_request_id: string | null
          id: string
          job_run_id: string | null
          provider: string
          request_payload: Json | null
          response_payload: Json | null
          response_time_ms: number | null
          status: string
        }
        Insert: {
          action_id?: string | null
          created_at?: string | null
          credits_consumed?: number | null
          endpoint: string
          error_message?: string | null
          external_request_id?: string | null
          id?: string
          job_run_id?: string | null
          provider: string
          request_payload?: Json | null
          response_payload?: Json | null
          response_time_ms?: number | null
          status?: string
        }
        Update: {
          action_id?: string | null
          created_at?: string | null
          credits_consumed?: number | null
          endpoint?: string
          error_message?: string | null
          external_request_id?: string | null
          id?: string
          job_run_id?: string | null
          provider?: string
          request_payload?: Json | null
          response_payload?: Json | null
          response_time_ms?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "provider_calls_action_id_fkey"
            columns: ["action_id"]
            isOneToOne: false
            referencedRelation: "job_actions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "provider_calls_job_run_id_fkey"
            columns: ["job_run_id"]
            isOneToOne: false
            referencedRelation: "job_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      push_subscriptions: {
        Row: {
          created_at: string | null
          id: string
          last_used_at: string | null
          subscription_data: Json
          user_agent: string | null
          user_email: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_used_at?: string | null
          subscription_data: Json
          user_agent?: string | null
          user_email: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_used_at?: string | null
          subscription_data?: Json
          user_agent?: string | null
          user_email?: string
        }
        Relationships: []
      }
      queue_jobs: {
        Row: {
          backoff_ms: number | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          estimated_duration: number | null
          id: string
          idempotency_key: string | null
          job_type: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          max_retries: number | null
          meta: Json | null
          payload: Json
          priority: string | null
          progress: number | null
          result: Json | null
          retry_count: number | null
          scheduled_at: string | null
          started_at: string | null
          status: string | null
          updated_at: string
          user_id: string | null
          website_id: string
        }
        Insert: {
          backoff_ms?: number | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          estimated_duration?: number | null
          id?: string
          idempotency_key?: string | null
          job_type: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          max_retries?: number | null
          meta?: Json | null
          payload?: Json
          priority?: string | null
          progress?: number | null
          result?: Json | null
          retry_count?: number | null
          scheduled_at?: string | null
          started_at?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
          website_id: string
        }
        Update: {
          backoff_ms?: number | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          estimated_duration?: number | null
          id?: string
          idempotency_key?: string | null
          job_type?: string
          last_heartbeat_at?: string | null
          locked_at?: string | null
          locked_by?: string | null
          max_retries?: number | null
          meta?: Json | null
          payload?: Json
          priority?: string | null
          progress?: number | null
          result?: Json | null
          retry_count?: number | null
          scheduled_at?: string | null
          started_at?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "queue_jobs_type_fkey"
            columns: ["job_type"]
            isOneToOne: false
            referencedRelation: "job_types"
            referencedColumns: ["type_key"]
          },
        ]
      }
      rank_tracking: {
        Row: {
          audit_id: string | null
          best_position: number | null
          cache_expires_at: string | null
          cached_at: string | null
          competitor_data: Json | null
          created_at: string | null
          current_position: number | null
          domain: string
          estimated_traffic: number | null
          group_id: string | null
          id: string
          is_active: boolean | null
          keyword: string
          last_checked: string | null
          last_scheduled_at: string | null
          location: string | null
          next_check: string | null
          page_url: string | null
          position_change: number | null
          position_status: string | null
          previous_position: number | null
          priority_score: number | null
          search_engine: string | null
          search_volume: number | null
          serp_features: Json | null
          tracking_frequency: string | null
          tracking_status: string | null
          user_email: string
          website_id: string | null
          worst_position: number | null
        }
        Insert: {
          audit_id?: string | null
          best_position?: number | null
          cache_expires_at?: string | null
          cached_at?: string | null
          competitor_data?: Json | null
          created_at?: string | null
          current_position?: number | null
          domain: string
          estimated_traffic?: number | null
          group_id?: string | null
          id?: string
          is_active?: boolean | null
          keyword: string
          last_checked?: string | null
          last_scheduled_at?: string | null
          location?: string | null
          next_check?: string | null
          page_url?: string | null
          position_change?: number | null
          position_status?: string | null
          previous_position?: number | null
          priority_score?: number | null
          search_engine?: string | null
          search_volume?: number | null
          serp_features?: Json | null
          tracking_frequency?: string | null
          tracking_status?: string | null
          user_email: string
          website_id?: string | null
          worst_position?: number | null
        }
        Update: {
          audit_id?: string | null
          best_position?: number | null
          cache_expires_at?: string | null
          cached_at?: string | null
          competitor_data?: Json | null
          created_at?: string | null
          current_position?: number | null
          domain?: string
          estimated_traffic?: number | null
          group_id?: string | null
          id?: string
          is_active?: boolean | null
          keyword?: string
          last_checked?: string | null
          last_scheduled_at?: string | null
          location?: string | null
          next_check?: string | null
          page_url?: string | null
          position_change?: number | null
          position_status?: string | null
          previous_position?: number | null
          priority_score?: number | null
          search_engine?: string | null
          search_volume?: number | null
          serp_features?: Json | null
          tracking_frequency?: string | null
          tracking_status?: string | null
          user_email?: string
          website_id?: string | null
          worst_position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rank_tracking_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rank_tracking_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "keyword_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rank_tracking_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      rank_tracking_api_usage: {
        Row: {
          api_provider: string
          created_at: string | null
          endpoint: string
          error_count: number | null
          error_details: Json | null
          id: string
          keywords_processed: number | null
          response_time_ms: number | null
          status_code: number | null
          success_count: number | null
          user_email: string | null
          website_id: string | null
        }
        Insert: {
          api_provider: string
          created_at?: string | null
          endpoint: string
          error_count?: number | null
          error_details?: Json | null
          id?: string
          keywords_processed?: number | null
          response_time_ms?: number | null
          status_code?: number | null
          success_count?: number | null
          user_email?: string | null
          website_id?: string | null
        }
        Update: {
          api_provider?: string
          created_at?: string | null
          endpoint?: string
          error_count?: number | null
          error_details?: Json | null
          id?: string
          keywords_processed?: number | null
          response_time_ms?: number | null
          status_code?: number | null
          success_count?: number | null
          user_email?: string | null
          website_id?: string | null
        }
        Relationships: []
      }
      rank_tracking_cache: {
        Row: {
          cached_at: string | null
          competitor_data: Json | null
          created_at: string | null
          domain: string
          estimated_traffic: number | null
          expires_at: string | null
          id: string
          keyword: string
          language: string
          last_accessed: string | null
          location: string
          position: number | null
          search_volume: number | null
          serp_features: Json | null
          url: string | null
        }
        Insert: {
          cached_at?: string | null
          competitor_data?: Json | null
          created_at?: string | null
          domain: string
          estimated_traffic?: number | null
          expires_at?: string | null
          id?: string
          keyword: string
          language?: string
          last_accessed?: string | null
          location?: string
          position?: number | null
          search_volume?: number | null
          serp_features?: Json | null
          url?: string | null
        }
        Update: {
          cached_at?: string | null
          competitor_data?: Json | null
          created_at?: string | null
          domain?: string
          estimated_traffic?: number | null
          expires_at?: string | null
          id?: string
          keyword?: string
          language?: string
          last_accessed?: string | null
          location?: string
          position?: number | null
          search_volume?: number | null
          serp_features?: Json | null
          url?: string | null
        }
        Relationships: []
      }
      rank_tracking_runs: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          keywords_dropped: number | null
          keywords_improved: number | null
          keywords_processed: number | null
          keywords_unchanged: number | null
          run_type: string
          started_at: string
          status: string
          user_email: string
          website_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          keywords_dropped?: number | null
          keywords_improved?: number | null
          keywords_processed?: number | null
          keywords_unchanged?: number | null
          run_type?: string
          started_at?: string
          status?: string
          user_email: string
          website_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          keywords_dropped?: number | null
          keywords_improved?: number | null
          keywords_processed?: number | null
          keywords_unchanged?: number | null
          run_type?: string
          started_at?: string
          status?: string
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rank_tracking_runs_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      rank_tracking_tasks: {
        Row: {
          completed_at: string | null
          created_at: string | null
          dataforseo_task_id: string | null
          domain: string
          error_message: string | null
          id: string
          keyword: string
          keyword_id: string | null
          language: string | null
          language_code: string | null
          location: string | null
          location_code: number | null
          result: Json | null
          retry_count: number | null
          status: string | null
          submitted_at: string | null
          updated_at: string | null
          user_email: string | null
          website_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          dataforseo_task_id?: string | null
          domain: string
          error_message?: string | null
          id?: string
          keyword: string
          keyword_id?: string | null
          language?: string | null
          language_code?: string | null
          location?: string | null
          location_code?: number | null
          result?: Json | null
          retry_count?: number | null
          status?: string | null
          submitted_at?: string | null
          updated_at?: string | null
          user_email?: string | null
          website_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          dataforseo_task_id?: string | null
          domain?: string
          error_message?: string | null
          id?: string
          keyword?: string
          keyword_id?: string | null
          language?: string | null
          language_code?: string | null
          location?: string | null
          location_code?: number | null
          result?: Json | null
          retry_count?: number | null
          status?: string | null
          submitted_at?: string | null
          updated_at?: string | null
          user_email?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rank_tracking_tasks_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "rank_tracking"
            referencedColumns: ["id"]
          },
        ]
      }
      ranking_alerts: {
        Row: {
          alert_type: string
          created_at: string
          id: string
          is_active: boolean
          keyword: string
          last_triggered_at: string | null
          notification_methods: Json | null
          position_change_threshold: number | null
          threshold_value: number | null
          updated_at: string
          user_email: string
          website_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string
          id?: string
          is_active?: boolean
          keyword: string
          last_triggered_at?: string | null
          notification_methods?: Json | null
          position_change_threshold?: number | null
          threshold_value?: number | null
          updated_at?: string
          user_email: string
          website_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string
          id?: string
          is_active?: boolean
          keyword?: string
          last_triggered_at?: string | null
          notification_methods?: Json | null
          position_change_threshold?: number | null
          threshold_value?: number | null
          updated_at?: string
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ranking_alerts_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      ranking_history: {
        Row: {
          checked_at: string
          competitor_data: Json | null
          domain: string
          estimated_traffic: number | null
          id: string
          keyword: string
          language: string | null
          location: string | null
          position: number | null
          position_status: string | null
          search_volume: number | null
          url: string | null
          user_email: string | null
          user_id: string
        }
        Insert: {
          checked_at?: string
          competitor_data?: Json | null
          domain: string
          estimated_traffic?: number | null
          id?: string
          keyword: string
          language?: string | null
          location?: string | null
          position?: number | null
          position_status?: string | null
          search_volume?: number | null
          url?: string | null
          user_email?: string | null
          user_id: string
        }
        Update: {
          checked_at?: string
          competitor_data?: Json | null
          domain?: string
          estimated_traffic?: number | null
          id?: string
          keyword?: string
          language?: string | null
          location?: string | null
          position?: number | null
          position_status?: string | null
          search_volume?: number | null
          url?: string | null
          user_email?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ranking_notifications: {
        Row: {
          alert_id: string | null
          data: Json | null
          id: string
          is_read: boolean
          message: string
          notification_category: string | null
          notification_type: string
          priority: string | null
          read_at: string | null
          sent_at: string
          title: string
          user_email: string
          website_id: string | null
        }
        Insert: {
          alert_id?: string | null
          data?: Json | null
          id?: string
          is_read?: boolean
          message: string
          notification_category?: string | null
          notification_type: string
          priority?: string | null
          read_at?: string | null
          sent_at?: string
          title: string
          user_email: string
          website_id?: string | null
        }
        Update: {
          alert_id?: string | null
          data?: Json | null
          id?: string
          is_read?: boolean
          message?: string
          notification_category?: string | null
          notification_type?: string
          priority?: string | null
          read_at?: string | null
          sent_at?: string
          title?: string
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ranking_notifications_alert_id_fkey"
            columns: ["alert_id"]
            isOneToOne: false
            referencedRelation: "ranking_alerts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_notifications_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      rate_limits: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          limit_count: number
          request_count: number
          reset_at: string
          updated_at: string
          user_id: string | null
          window_size: number
          window_start: string
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          limit_count?: number
          request_count?: number
          reset_at: string
          updated_at?: string
          user_id?: string | null
          window_size?: number
          window_start?: string
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          limit_count?: number
          request_count?: number
          reset_at?: string
          updated_at?: string
          user_id?: string | null
          window_size?: number
          window_start?: string
        }
        Relationships: []
      }
      report_templates: {
        Row: {
          brand_colors: Json | null
          company_name: string | null
          created_at: string
          footer_text: string | null
          id: string
          include_sections: Json | null
          is_default: boolean | null
          logo_url: string | null
          template_name: string
          updated_at: string
          user_email: string
        }
        Insert: {
          brand_colors?: Json | null
          company_name?: string | null
          created_at?: string
          footer_text?: string | null
          id?: string
          include_sections?: Json | null
          is_default?: boolean | null
          logo_url?: string | null
          template_name: string
          updated_at?: string
          user_email: string
        }
        Update: {
          brand_colors?: Json | null
          company_name?: string | null
          created_at?: string
          footer_text?: string | null
          id?: string
          include_sections?: Json | null
          is_default?: boolean | null
          logo_url?: string | null
          template_name?: string
          updated_at?: string
          user_email?: string
        }
        Relationships: []
      }
      scheduled_crawls: {
        Row: {
          crawl_settings: Json | null
          created_at: string
          id: string
          is_active: boolean
          last_run_at: string | null
          next_run_at: string | null
          notification_settings: Json | null
          schedule_config: Json
          schedule_type: string
          updated_at: string
          user_email: string
          website_id: string
        }
        Insert: {
          crawl_settings?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean
          last_run_at?: string | null
          next_run_at?: string | null
          notification_settings?: Json | null
          schedule_config?: Json
          schedule_type: string
          updated_at?: string
          user_email: string
          website_id: string
        }
        Update: {
          crawl_settings?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean
          last_run_at?: string | null
          next_run_at?: string | null
          notification_settings?: Json | null
          schedule_config?: Json
          schedule_type?: string
          updated_at?: string
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_crawls_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      scheduled_reports: {
        Row: {
          created_at: string
          frequency: string
          id: string
          is_enabled: boolean
          last_sent_at: string | null
          next_send_at: string | null
          recipient_email: string | null
          report_type: string
          updated_at: string
          user_email: string
          websites: string | null
        }
        Insert: {
          created_at?: string
          frequency: string
          id?: string
          is_enabled?: boolean
          last_sent_at?: string | null
          next_send_at?: string | null
          recipient_email?: string | null
          report_type: string
          updated_at?: string
          user_email: string
          websites?: string | null
        }
        Update: {
          created_at?: string
          frequency?: string
          id?: string
          is_enabled?: boolean
          last_sent_at?: string | null
          next_send_at?: string | null
          recipient_email?: string | null
          report_type?: string
          updated_at?: string
          user_email?: string
          websites?: string | null
        }
        Relationships: []
      }
      score_confidence_metrics: {
        Row: {
          audit_id: string | null
          confidence_score: number
          created_at: string
          data_completeness_score: number
          data_sources: Json
          external_validation_score: number
          id: string
          recency_score: number
          score_range_max: number
          score_range_min: number
          updated_at: string
          validation_details: Json
          website_id: string
        }
        Insert: {
          audit_id?: string | null
          confidence_score?: number
          created_at?: string
          data_completeness_score?: number
          data_sources?: Json
          external_validation_score?: number
          id?: string
          recency_score?: number
          score_range_max: number
          score_range_min: number
          updated_at?: string
          validation_details?: Json
          website_id: string
        }
        Update: {
          audit_id?: string | null
          confidence_score?: number
          created_at?: string
          data_completeness_score?: number
          data_sources?: Json
          external_validation_score?: number
          id?: string
          recency_score?: number
          score_range_max?: number
          score_range_min?: number
          updated_at?: string
          validation_details?: Json
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "score_confidence_metrics_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "seo_audits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "score_confidence_metrics_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_audit_history: {
        Row: {
          audit_id: string | null
          created_at: string
          critical_issues: number
          date: string
          id: string
          info_issues: number
          issues_fixed: number
          metadata: Json | null
          score_change: number
          seo_score: number
          total_issues: number
          updated_at: string
          warning_issues: number
          website_id: string
        }
        Insert: {
          audit_id?: string | null
          created_at?: string
          critical_issues?: number
          date?: string
          id?: string
          info_issues?: number
          issues_fixed?: number
          metadata?: Json | null
          score_change?: number
          seo_score?: number
          total_issues?: number
          updated_at?: string
          warning_issues?: number
          website_id: string
        }
        Update: {
          audit_id?: string | null
          created_at?: string
          critical_issues?: number
          date?: string
          id?: string
          info_issues?: number
          issues_fixed?: number
          metadata?: Json | null
          score_change?: number
          seo_score?: number
          total_issues?: number
          updated_at?: string
          warning_issues?: number
          website_id?: string
        }
        Relationships: []
      }
      seo_audits: {
        Row: {
          audit_results: Json | null
          audit_status: Database["public"]["Enums"]["audit_status"]
          business_name: string | null
          created_at: string
          email: string
          id: string
          phone: string | null
          seo_score: number | null
          updated_at: string
          user_website_id: string | null
          website_id: string | null
          website_url: string
        }
        Insert: {
          audit_results?: Json | null
          audit_status?: Database["public"]["Enums"]["audit_status"]
          business_name?: string | null
          created_at?: string
          email: string
          id?: string
          phone?: string | null
          seo_score?: number | null
          updated_at?: string
          user_website_id?: string | null
          website_id?: string | null
          website_url: string
        }
        Update: {
          audit_results?: Json | null
          audit_status?: Database["public"]["Enums"]["audit_status"]
          business_name?: string | null
          created_at?: string
          email?: string
          id?: string
          phone?: string | null
          seo_score?: number | null
          updated_at?: string
          user_website_id?: string | null
          website_id?: string | null
          website_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_seo_audits_user_website"
            columns: ["user_website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seo_audits_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_goals: {
        Row: {
          category: string
          created_at: string
          description: string
          goal_key: string
          id: string
          is_active: boolean
          order_index: number
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description: string
          goal_key: string
          id?: string
          is_active?: boolean
          order_index?: number
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          goal_key?: string
          id?: string
          is_active?: boolean
          order_index?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      serp_cache: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          keyword: string
          language: string
          last_accessed: string
          location: string
          serp_data: Json
        }
        Insert: {
          created_at?: string
          expires_at?: string
          id?: string
          keyword: string
          language?: string
          last_accessed?: string
          location?: string
          serp_data: Json
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          keyword?: string
          language?: string
          last_accessed?: string
          location?: string
          serp_data?: Json
        }
        Relationships: []
      }
      serp_feature_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          current_state: Json | null
          feature_type: string
          id: string
          is_read: boolean | null
          keyword: string
          keyword_id: string | null
          metadata: Json | null
          previous_state: Json | null
          website_id: string
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          current_state?: Json | null
          feature_type: string
          id?: string
          is_read?: boolean | null
          keyword: string
          keyword_id?: string | null
          metadata?: Json | null
          previous_state?: Json | null
          website_id: string
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          current_state?: Json | null
          feature_type?: string
          id?: string
          is_read?: boolean | null
          keyword?: string
          keyword_id?: string | null
          metadata?: Json | null
          previous_state?: Json | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "serp_feature_alerts_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "keyword_rankings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "serp_feature_alerts_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      serp_snapshots: {
        Row: {
          created_at: string | null
          id: string
          keyword_id: string
          paa_questions: Json | null
          serp_features: Json | null
          snapshot_date: string | null
          top_results: Json | null
          volatility_score: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          keyword_id: string
          paa_questions?: Json | null
          serp_features?: Json | null
          snapshot_date?: string | null
          top_results?: Json | null
          volatility_score?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          keyword_id?: string
          paa_questions?: Json | null
          serp_features?: Json | null
          snapshot_date?: string | null
          top_results?: Json | null
          volatility_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "serp_snapshots_keyword_id_fkey"
            columns: ["keyword_id"]
            isOneToOne: false
            referencedRelation: "user_keywords"
            referencedColumns: ["id"]
          },
        ]
      }
      signup_funnel_events: {
        Row: {
          browser: string | null
          country_code: string | null
          created_at: string | null
          device_type: string | null
          error_code: string | null
          error_message: string | null
          event_at: string | null
          event_type: string
          id: string
          landing_page: string | null
          metadata: Json | null
          payment_method: string | null
          plan_selected: string | null
          referrer_url: string | null
          session_id: string
          step_name: string
          step_number: number | null
          time_on_step_seconds: number | null
          user_email: string | null
          user_id: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          browser?: string | null
          country_code?: string | null
          created_at?: string | null
          device_type?: string | null
          error_code?: string | null
          error_message?: string | null
          event_at?: string | null
          event_type: string
          id?: string
          landing_page?: string | null
          metadata?: Json | null
          payment_method?: string | null
          plan_selected?: string | null
          referrer_url?: string | null
          session_id: string
          step_name: string
          step_number?: number | null
          time_on_step_seconds?: number | null
          user_email?: string | null
          user_id?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          browser?: string | null
          country_code?: string | null
          created_at?: string | null
          device_type?: string | null
          error_code?: string | null
          error_message?: string | null
          event_at?: string | null
          event_type?: string
          id?: string
          landing_page?: string | null
          metadata?: Json | null
          payment_method?: string | null
          plan_selected?: string | null
          referrer_url?: string | null
          session_id?: string
          step_name?: string
          step_number?: number | null
          time_on_step_seconds?: number | null
          user_email?: string | null
          user_id?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: []
      }
      site_architecture: {
        Row: {
          audit_id: string
          broken_internal_links: number | null
          created_at: string | null
          id: string
          internal_linking_score: number | null
          max_depth: number | null
          orphaned_pages: number | null
          page_type_distribution: Json | null
          redirect_chains: number | null
          site_speed_analysis: Json | null
          total_pages: number | null
          url_structure_analysis: Json | null
        }
        Insert: {
          audit_id: string
          broken_internal_links?: number | null
          created_at?: string | null
          id?: string
          internal_linking_score?: number | null
          max_depth?: number | null
          orphaned_pages?: number | null
          page_type_distribution?: Json | null
          redirect_chains?: number | null
          site_speed_analysis?: Json | null
          total_pages?: number | null
          url_structure_analysis?: Json | null
        }
        Update: {
          audit_id?: string
          broken_internal_links?: number | null
          created_at?: string | null
          id?: string
          internal_linking_score?: number | null
          max_depth?: number | null
          orphaned_pages?: number | null
          page_type_distribution?: Json | null
          redirect_chains?: number | null
          site_speed_analysis?: Json | null
          total_pages?: number | null
          url_structure_analysis?: Json | null
        }
        Relationships: []
      }
      subscription_events: {
        Row: {
          billing_period: string | null
          created_at: string | null
          event_at: string | null
          event_type: string
          failure_code: string | null
          failure_message: string | null
          from_mrr: number | null
          from_plan: string | null
          id: string
          metadata: Json | null
          mrr_change: number | null
          next_billing_date: string | null
          paddle_event_id: string | null
          paddle_event_type: string | null
          paddle_subscription_id: string | null
          reason: string | null
          retry_count: number | null
          subscription_id: string | null
          to_mrr: number | null
          to_plan: string | null
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          billing_period?: string | null
          created_at?: string | null
          event_at?: string | null
          event_type: string
          failure_code?: string | null
          failure_message?: string | null
          from_mrr?: number | null
          from_plan?: string | null
          id?: string
          metadata?: Json | null
          mrr_change?: number | null
          next_billing_date?: string | null
          paddle_event_id?: string | null
          paddle_event_type?: string | null
          paddle_subscription_id?: string | null
          reason?: string | null
          retry_count?: number | null
          subscription_id?: string | null
          to_mrr?: number | null
          to_plan?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          billing_period?: string | null
          created_at?: string | null
          event_at?: string | null
          event_type?: string
          failure_code?: string | null
          failure_message?: string | null
          from_mrr?: number | null
          from_plan?: string | null
          id?: string
          metadata?: Json | null
          mrr_change?: number | null
          next_billing_date?: string | null
          paddle_event_id?: string | null
          paddle_event_type?: string | null
          paddle_subscription_id?: string | null
          reason?: string | null
          retry_count?: number | null
          subscription_id?: string | null
          to_mrr?: number | null
          to_plan?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created_at: string
          current_period_end: string
          current_period_start: string
          id: string
          metadata: Json | null
          paddle_customer_id: string
          paddle_subscription_id: string
          plan_id: string
          plan_name: string
          quantity: number | null
          status: string
          trial_end: string | null
          trial_start: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created_at?: string
          current_period_end: string
          current_period_start: string
          id?: string
          metadata?: Json | null
          paddle_customer_id: string
          paddle_subscription_id: string
          plan_id: string
          plan_name: string
          quantity?: number | null
          status?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          id?: string
          metadata?: Json | null
          paddle_customer_id?: string
          paddle_subscription_id?: string
          plan_id?: string
          plan_name?: string
          quantity?: number | null
          status?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      success_stories: {
        Row: {
          after_score: number | null
          before_score: number | null
          business_name: string
          business_type: string
          created_at: string | null
          customer_increase_percentage: number | null
          id: string
          issue_category: string
          quote: string | null
          timeframe_days: number | null
        }
        Insert: {
          after_score?: number | null
          before_score?: number | null
          business_name: string
          business_type: string
          created_at?: string | null
          customer_increase_percentage?: number | null
          id?: string
          issue_category: string
          quote?: string | null
          timeframe_days?: number | null
        }
        Update: {
          after_score?: number | null
          before_score?: number | null
          business_name?: string
          business_type?: string
          created_at?: string | null
          customer_increase_percentage?: number | null
          id?: string
          issue_category?: string
          quote?: string | null
          timeframe_days?: number | null
        }
        Relationships: []
      }
      success_story_templates: {
        Row: {
          after_score: number
          before_score: number
          business_name: string
          business_type: string | null
          category: string
          created_at: string | null
          customer_increase_percentage: number
          id: string
          quote: string | null
          timeframe_days: number
        }
        Insert: {
          after_score: number
          before_score: number
          business_name: string
          business_type?: string | null
          category: string
          created_at?: string | null
          customer_increase_percentage: number
          id?: string
          quote?: string | null
          timeframe_days: number
        }
        Update: {
          after_score?: number
          before_score?: number
          business_name?: string
          business_type?: string | null
          category?: string
          created_at?: string | null
          customer_increase_percentage?: number
          id?: string
          quote?: string | null
          timeframe_days?: number
        }
        Relationships: []
      }
      support_ticket_comments: {
        Row: {
          comment_text: string
          created_at: string | null
          id: string
          is_from_admin: boolean | null
          is_internal: boolean | null
          ticket_id: string | null
          user_id: string | null
        }
        Insert: {
          comment_text: string
          created_at?: string | null
          id?: string
          is_from_admin?: boolean | null
          is_internal?: boolean | null
          ticket_id?: string | null
          user_id?: string | null
        }
        Update: {
          comment_text?: string
          created_at?: string | null
          id?: string
          is_from_admin?: boolean | null
          is_internal?: boolean | null
          ticket_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_ticket_comments_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          assigned_to_admin_id: string | null
          category: string | null
          closed_at: string | null
          created_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          priority: string | null
          resolved_at: string | null
          status: string | null
          subject: string
          tags: string[] | null
          ticket_number: string
          updated_at: string | null
          user_email: string
          user_id: string | null
        }
        Insert: {
          assigned_to_admin_id?: string | null
          category?: string | null
          closed_at?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          priority?: string | null
          resolved_at?: string | null
          status?: string | null
          subject: string
          tags?: string[] | null
          ticket_number: string
          updated_at?: string | null
          user_email: string
          user_id?: string | null
        }
        Update: {
          assigned_to_admin_id?: string | null
          category?: string | null
          closed_at?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          priority?: string | null
          resolved_at?: string | null
          status?: string | null
          subject?: string
          tags?: string[] | null
          ticket_number?: string
          updated_at?: string | null
          user_email?: string
          user_id?: string | null
        }
        Relationships: []
      }
      system_alert_rules: {
        Row: {
          alert_name: string
          alert_type: string | null
          comparison_operator: string | null
          condition_metric: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          notification_channels: string[] | null
          severity: string | null
          threshold_value: number | null
          updated_at: string | null
        }
        Insert: {
          alert_name: string
          alert_type?: string | null
          comparison_operator?: string | null
          condition_metric?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_channels?: string[] | null
          severity?: string | null
          threshold_value?: number | null
          updated_at?: string | null
        }
        Update: {
          alert_name?: string
          alert_type?: string | null
          comparison_operator?: string | null
          condition_metric?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_channels?: string[] | null
          severity?: string | null
          threshold_value?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      system_alerts: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by_admin_id: string | null
          affected_component: string | null
          alert_message: string | null
          alert_rule_id: string | null
          alert_title: string
          created_at: string | null
          id: string
          metadata: Json | null
          metric_value: number | null
          resolved_at: string | null
          severity: string | null
          status: string | null
          threshold_value: number | null
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by_admin_id?: string | null
          affected_component?: string | null
          alert_message?: string | null
          alert_rule_id?: string | null
          alert_title: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          metric_value?: number | null
          resolved_at?: string | null
          severity?: string | null
          status?: string | null
          threshold_value?: number | null
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by_admin_id?: string | null
          affected_component?: string | null
          alert_message?: string | null
          alert_rule_id?: string | null
          alert_title?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          metric_value?: number | null
          resolved_at?: string | null
          severity?: string | null
          status?: string | null
          threshold_value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "system_alerts_alert_rule_id_fkey"
            columns: ["alert_rule_id"]
            isOneToOne: false
            referencedRelation: "system_alert_rules"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_audits: {
        Row: {
          audit_results: Json | null
          audit_status: Database["public"]["Enums"]["audit_status_type"] | null
          created_at: string | null
          critical_issues: number | null
          id: string
          issues_found: number | null
          last_audit: string | null
          next_audit: string | null
          pagespeed_score: number | null
          recommendations: Json | null
          user_email: string
          warnings: number | null
          website_url: string
        }
        Insert: {
          audit_results?: Json | null
          audit_status?: Database["public"]["Enums"]["audit_status_type"] | null
          created_at?: string | null
          critical_issues?: number | null
          id?: string
          issues_found?: number | null
          last_audit?: string | null
          next_audit?: string | null
          pagespeed_score?: number | null
          recommendations?: Json | null
          user_email: string
          warnings?: number | null
          website_url: string
        }
        Update: {
          audit_results?: Json | null
          audit_status?: Database["public"]["Enums"]["audit_status_type"] | null
          created_at?: string | null
          critical_issues?: number | null
          id?: string
          issues_found?: number | null
          last_audit?: string | null
          next_audit?: string | null
          pagespeed_score?: number | null
          recommendations?: Json | null
          user_email?: string
          warnings?: number | null
          website_url?: string
        }
        Relationships: []
      }
      tool_usage_stats: {
        Row: {
          avg_session_duration_seconds: number | null
          created_at: string | null
          id: string
          last_used_at: string | null
          tool_name: string
          total_results_generated: number | null
          updated_at: string | null
          usage_count_30d: number | null
          user_email: string
          user_id: string | null
          website_id: string
        }
        Insert: {
          avg_session_duration_seconds?: number | null
          created_at?: string | null
          id?: string
          last_used_at?: string | null
          tool_name: string
          total_results_generated?: number | null
          updated_at?: string | null
          usage_count_30d?: number | null
          user_email: string
          user_id?: string | null
          website_id: string
        }
        Update: {
          avg_session_duration_seconds?: number | null
          created_at?: string | null
          id?: string
          last_used_at?: string | null
          tool_name?: string
          total_results_generated?: number | null
          updated_at?: string | null
          usage_count_30d?: number | null
          user_email?: string
          user_id?: string | null
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tool_usage_stats_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      tool_usage_tracking: {
        Row: {
          action_type: string
          created_at: string
          id: string
          metadata: Json | null
          session_duration: number | null
          tool_name: string
          updated_at: string
          user_id: string
          website_id: string
        }
        Insert: {
          action_type: string
          created_at?: string
          id?: string
          metadata?: Json | null
          session_duration?: number | null
          tool_name: string
          updated_at?: string
          user_id: string
          website_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          session_duration?: number | null
          tool_name?: string
          updated_at?: string
          user_id?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tool_usage_tracking_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      traffic_analytics: {
        Row: {
          avg_session_duration: number | null
          bounce_rate: number | null
          created_at: string
          date_bucket: string
          device_breakdown: Json | null
          id: string
          page_views: number | null
          sessions: number | null
          top_pages: Json | null
          total_users: number | null
          traffic_sources: Json | null
          updated_at: string
          website_id: string
        }
        Insert: {
          avg_session_duration?: number | null
          bounce_rate?: number | null
          created_at?: string
          date_bucket: string
          device_breakdown?: Json | null
          id?: string
          page_views?: number | null
          sessions?: number | null
          top_pages?: Json | null
          total_users?: number | null
          traffic_sources?: Json | null
          updated_at?: string
          website_id: string
        }
        Update: {
          avg_session_duration?: number | null
          bounce_rate?: number | null
          created_at?: string
          date_bucket?: string
          device_breakdown?: Json | null
          id?: string
          page_views?: number | null
          sessions?: number | null
          top_pages?: Json | null
          total_users?: number | null
          traffic_sources?: Json | null
          updated_at?: string
          website_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string
          currency: string
          description: string | null
          id: string
          invoice_url: string | null
          metadata: Json | null
          paddle_customer_id: string
          paddle_transaction_id: string
          payment_method: string | null
          processed_at: string | null
          receipt_url: string | null
          status: string
          subscription_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          invoice_url?: string | null
          metadata?: Json | null
          paddle_customer_id: string
          paddle_transaction_id: string
          payment_method?: string | null
          processed_at?: string | null
          receipt_url?: string | null
          status: string
          subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          description?: string | null
          id?: string
          invoice_url?: string | null
          metadata?: Json | null
          paddle_customer_id?: string
          paddle_transaction_id?: string
          payment_method?: string | null
          processed_at?: string | null
          receipt_url?: string | null
          status?: string
          subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_acquisition: {
        Row: {
          browser: string | null
          country_code: string | null
          created_at: string | null
          device_type: string | null
          id: string
          landing_page: string | null
          referral_url: string | null
          region: string | null
          signup_source: string | null
          user_id: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          browser?: string | null
          country_code?: string | null
          created_at?: string | null
          device_type?: string | null
          id?: string
          landing_page?: string | null
          referral_url?: string | null
          region?: string | null
          signup_source?: string | null
          user_id?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          browser?: string | null
          country_code?: string | null
          created_at?: string | null
          device_type?: string | null
          id?: string
          landing_page?: string | null
          referral_url?: string | null
          region?: string | null
          signup_source?: string | null
          user_id?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: []
      }
      user_activation_milestones: {
        Row: {
          acquisition_source: string | null
          activation_score: number | null
          cancellation_requested_at: string | null
          checkout_opened_at: string | null
          churn_reason: string | null
          churned_at: string | null
          created_at: string | null
          days_in_current_stage: number | null
          device_type: string | null
          downgrade_at: string | null
          downgrade_from: string | null
          downgrade_to: string | null
          email_submitted_at: string | null
          email_verified_at: string | null
          first_audit_completed_at: string | null
          first_audit_started_at: string | null
          first_backlink_analyzed_at: string | null
          first_content_generated_at: string | null
          first_issue_fixed_at: string | null
          first_issue_viewed_at: string | null
          first_keyword_tracked_at: string | null
          first_login_at: string | null
          first_renewal_at: string | null
          first_visit_at: string | null
          first_website_added_at: string | null
          id: string
          is_activated: boolean | null
          landing_page: string | null
          last_active_at: string | null
          payment_attempted_at: string | null
          payment_completed_at: string | null
          payment_failed_at: string | null
          payment_failure_reason: string | null
          payment_method: string | null
          plan_selected: string | null
          plan_selected_at: string | null
          referrer_url: string | null
          signed_up_at: string
          signup_started_at: string | null
          stuck_at_stage: string | null
          subscription_mrr: number | null
          subscription_plan: string | null
          subscription_started_at: string | null
          total_audits_run: number | null
          total_content_generated: number | null
          total_keywords_tracked: number | null
          total_sessions: number | null
          updated_at: string | null
          upgrade_at: string | null
          upgrade_from: string | null
          upgrade_to: string | null
          user_email: string
          user_id: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          acquisition_source?: string | null
          activation_score?: number | null
          cancellation_requested_at?: string | null
          checkout_opened_at?: string | null
          churn_reason?: string | null
          churned_at?: string | null
          created_at?: string | null
          days_in_current_stage?: number | null
          device_type?: string | null
          downgrade_at?: string | null
          downgrade_from?: string | null
          downgrade_to?: string | null
          email_submitted_at?: string | null
          email_verified_at?: string | null
          first_audit_completed_at?: string | null
          first_audit_started_at?: string | null
          first_backlink_analyzed_at?: string | null
          first_content_generated_at?: string | null
          first_issue_fixed_at?: string | null
          first_issue_viewed_at?: string | null
          first_keyword_tracked_at?: string | null
          first_login_at?: string | null
          first_renewal_at?: string | null
          first_visit_at?: string | null
          first_website_added_at?: string | null
          id?: string
          is_activated?: boolean | null
          landing_page?: string | null
          last_active_at?: string | null
          payment_attempted_at?: string | null
          payment_completed_at?: string | null
          payment_failed_at?: string | null
          payment_failure_reason?: string | null
          payment_method?: string | null
          plan_selected?: string | null
          plan_selected_at?: string | null
          referrer_url?: string | null
          signed_up_at?: string
          signup_started_at?: string | null
          stuck_at_stage?: string | null
          subscription_mrr?: number | null
          subscription_plan?: string | null
          subscription_started_at?: string | null
          total_audits_run?: number | null
          total_content_generated?: number | null
          total_keywords_tracked?: number | null
          total_sessions?: number | null
          updated_at?: string | null
          upgrade_at?: string | null
          upgrade_from?: string | null
          upgrade_to?: string | null
          user_email: string
          user_id?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          acquisition_source?: string | null
          activation_score?: number | null
          cancellation_requested_at?: string | null
          checkout_opened_at?: string | null
          churn_reason?: string | null
          churned_at?: string | null
          created_at?: string | null
          days_in_current_stage?: number | null
          device_type?: string | null
          downgrade_at?: string | null
          downgrade_from?: string | null
          downgrade_to?: string | null
          email_submitted_at?: string | null
          email_verified_at?: string | null
          first_audit_completed_at?: string | null
          first_audit_started_at?: string | null
          first_backlink_analyzed_at?: string | null
          first_content_generated_at?: string | null
          first_issue_fixed_at?: string | null
          first_issue_viewed_at?: string | null
          first_keyword_tracked_at?: string | null
          first_login_at?: string | null
          first_renewal_at?: string | null
          first_visit_at?: string | null
          first_website_added_at?: string | null
          id?: string
          is_activated?: boolean | null
          landing_page?: string | null
          last_active_at?: string | null
          payment_attempted_at?: string | null
          payment_completed_at?: string | null
          payment_failed_at?: string | null
          payment_failure_reason?: string | null
          payment_method?: string | null
          plan_selected?: string | null
          plan_selected_at?: string | null
          referrer_url?: string | null
          signed_up_at?: string
          signup_started_at?: string | null
          stuck_at_stage?: string | null
          subscription_mrr?: number | null
          subscription_plan?: string | null
          subscription_started_at?: string | null
          total_audits_run?: number | null
          total_content_generated?: number | null
          total_keywords_tracked?: number | null
          total_sessions?: number | null
          updated_at?: string | null
          upgrade_at?: string | null
          upgrade_from?: string | null
          upgrade_to?: string | null
          user_email?: string
          user_id?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      user_credit_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          current_balance: number | null
          id: string
          is_read: boolean | null
          message: string
          threshold_triggered: number | null
          user_id: string | null
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          current_balance?: number | null
          id?: string
          is_read?: boolean | null
          message: string
          threshold_triggered?: number | null
          user_id?: string | null
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          current_balance?: number | null
          id?: string
          is_read?: boolean | null
          message?: string
          threshold_triggered?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_credit_alerts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_credits: {
        Row: {
          created_at: string
          current_balance: number
          id: string
          lifetime_credits: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_balance?: number
          id?: string
          lifetime_credits?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_balance?: number
          id?: string
          lifetime_credits?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_dynamic_tasks: {
        Row: {
          created_at: string | null
          description: string | null
          goal_id: string | null
          id: string
          linked_entity_id: string | null
          linked_entity_text: string | null
          linked_entity_type: string
          metadata: Json | null
          priority: string
          status: string
          title: string
          updated_at: string | null
          user_id: string
          website_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          goal_id?: string | null
          id?: string
          linked_entity_id?: string | null
          linked_entity_text?: string | null
          linked_entity_type: string
          metadata?: Json | null
          priority?: string
          status?: string
          title: string
          updated_at?: string | null
          user_id: string
          website_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          goal_id?: string | null
          id?: string
          linked_entity_id?: string | null
          linked_entity_text?: string | null
          linked_entity_type?: string
          metadata?: Json | null
          priority?: string
          status?: string
          title?: string
          updated_at?: string | null
          user_id?: string
          website_id?: string
        }
        Relationships: []
      }
      user_feedback: {
        Row: {
          created_at: string | null
          description: string | null
          feedback_type: string | null
          id: string
          metadata: Json | null
          module: string | null
          nps_score: number | null
          sentiment: string | null
          status: string | null
          title: string | null
          updated_at: string | null
          upvotes: number | null
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          feedback_type?: string | null
          id?: string
          metadata?: Json | null
          module?: string | null
          nps_score?: number | null
          sentiment?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          upvotes?: number | null
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          feedback_type?: string | null
          id?: string
          metadata?: Json | null
          module?: string | null
          nps_score?: number | null
          sentiment?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          upvotes?: number | null
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_goals: {
        Row: {
          goal_id: string
          id: string
          is_active: boolean
          progress_percentage: number | null
          selected_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          goal_id: string
          id?: string
          is_active?: boolean
          progress_percentage?: number | null
          selected_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          goal_id?: string
          id?: string
          is_active?: boolean
          progress_percentage?: number | null
          selected_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_google_oauth: {
        Row: {
          access_token: string
          created_at: string
          id: string
          provider: string
          refresh_token: string | null
          scope: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          id?: string
          provider?: string
          refresh_token?: string | null
          scope?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          id?: string
          provider?: string
          refresh_token?: string | null
          scope?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_keyword_quota: {
        Row: {
          api_calls: number | null
          cache_hits: number | null
          daily_limit: number
          date: string
          id: string
          requests_made: number | null
          user_id: string
        }
        Insert: {
          api_calls?: number | null
          cache_hits?: number | null
          daily_limit: number
          date?: string
          id?: string
          requests_made?: number | null
          user_id: string
        }
        Update: {
          api_calls?: number | null
          cache_hits?: number | null
          daily_limit?: number
          date?: string
          id?: string
          requests_made?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_keywords: {
        Row: {
          competition_level: string | null
          country: string | null
          cpc: number | null
          created_at: string
          group_id: string | null
          id: string
          intent: string | null
          keyword: string
          keyword_difficulty: number | null
          language: string | null
          last_fetched_at: string | null
          location: string | null
          notes: string | null
          search_volume: number | null
          serp_features: Json | null
          session_id: string | null
          source_api: string | null
          source_query: string | null
          tags: string[] | null
          target_url: string | null
          trending_score: number | null
          user_id: string
          website_id: string | null
        }
        Insert: {
          competition_level?: string | null
          country?: string | null
          cpc?: number | null
          created_at?: string
          group_id?: string | null
          id?: string
          intent?: string | null
          keyword: string
          keyword_difficulty?: number | null
          language?: string | null
          last_fetched_at?: string | null
          location?: string | null
          notes?: string | null
          search_volume?: number | null
          serp_features?: Json | null
          session_id?: string | null
          source_api?: string | null
          source_query?: string | null
          tags?: string[] | null
          target_url?: string | null
          trending_score?: number | null
          user_id: string
          website_id?: string | null
        }
        Update: {
          competition_level?: string | null
          country?: string | null
          cpc?: number | null
          created_at?: string
          group_id?: string | null
          id?: string
          intent?: string | null
          keyword?: string
          keyword_difficulty?: number | null
          language?: string | null
          last_fetched_at?: string | null
          location?: string | null
          notes?: string | null
          search_volume?: number | null
          serp_features?: Json | null
          session_id?: string | null
          source_api?: string | null
          source_query?: string | null
          tags?: string[] | null
          target_url?: string | null
          trending_score?: number | null
          user_id?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_keywords_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "keyword_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_keywords_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "keyword_research_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_keywords_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      user_progress_tracking: {
        Row: {
          action_date: string | null
          action_type: string
          created_at: string | null
          id: string
          metadata: Json | null
          user_id: string | null
          website_id: string | null
        }
        Insert: {
          action_date?: string | null
          action_type: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          user_id?: string | null
          website_id?: string | null
        }
        Update: {
          action_date?: string | null
          action_type?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          user_id?: string | null
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_tracking_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_tracking_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      user_status_history: {
        Row: {
          changed_by_admin: string
          created_at: string
          effective_date: string
          id: string
          metadata: Json | null
          new_status: string
          previous_status: string | null
          reason: string | null
          user_email: string
          user_id: string
        }
        Insert: {
          changed_by_admin: string
          created_at?: string
          effective_date?: string
          id?: string
          metadata?: Json | null
          new_status: string
          previous_status?: string | null
          reason?: string | null
          user_email: string
          user_id: string
        }
        Update: {
          changed_by_admin?: string
          created_at?: string
          effective_date?: string
          id?: string
          metadata?: Json | null
          new_status?: string
          previous_status?: string | null
          reason?: string | null
          user_email?: string
          user_id?: string
        }
        Relationships: []
      }
      user_task_progress: {
        Row: {
          completed_at: string | null
          id: string
          is_completed: boolean
          notes: string | null
          task_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          id?: string
          is_completed?: boolean
          notes?: string | null
          task_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          is_completed?: boolean
          notes?: string | null
          task_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_task_progress_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "goal_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      user_tool_permissions: {
        Row: {
          created_at: string | null
          daily_limit: number | null
          id: string
          is_enabled: boolean | null
          monthly_limit: number | null
          tool_type: Database["public"]["Enums"]["tool_type"]
          updated_at: string | null
          user_email: string
        }
        Insert: {
          created_at?: string | null
          daily_limit?: number | null
          id?: string
          is_enabled?: boolean | null
          monthly_limit?: number | null
          tool_type: Database["public"]["Enums"]["tool_type"]
          updated_at?: string | null
          user_email: string
        }
        Update: {
          created_at?: string | null
          daily_limit?: number | null
          id?: string
          is_enabled?: boolean | null
          monthly_limit?: number | null
          tool_type?: Database["public"]["Enums"]["tool_type"]
          updated_at?: string | null
          user_email?: string
        }
        Relationships: []
      }
      user_tracking_preferences: {
        Row: {
          created_at: string
          default_tracking_frequency: string
          email_notification_enabled: boolean | null
          email_notification_time: string | null
          id: string
          last_manual_check: string | null
          preferred_check_time: string
          timezone: string
          updated_at: string
          user_email: string
          website_id: string | null
        }
        Insert: {
          created_at?: string
          default_tracking_frequency?: string
          email_notification_enabled?: boolean | null
          email_notification_time?: string | null
          id?: string
          last_manual_check?: string | null
          preferred_check_time?: string
          timezone?: string
          updated_at?: string
          user_email: string
          website_id?: string | null
        }
        Update: {
          created_at?: string
          default_tracking_frequency?: string
          email_notification_enabled?: boolean | null
          email_notification_time?: string | null
          id?: string
          last_manual_check?: string | null
          preferred_check_time?: string
          timezone?: string
          updated_at?: string
          user_email?: string
          website_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_tracking_preferences_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      user_usage: {
        Row: {
          audit_pages_used: number | null
          content_pieces_used: number | null
          created_at: string | null
          id: string
          keyword_research_used: number | null
          last_audit_at: string | null
          period_end: string
          period_start: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          audit_pages_used?: number | null
          content_pieces_used?: number | null
          created_at?: string | null
          id?: string
          keyword_research_used?: number | null
          last_audit_at?: string | null
          period_end: string
          period_start: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          audit_pages_used?: number | null
          content_pieces_used?: number | null
          created_at?: string | null
          id?: string
          keyword_research_used?: number | null
          last_audit_at?: string | null
          period_end?: string
          period_start?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_websites: {
        Row: {
          brand_description: string | null
          brand_voice: string | null
          business_type: string | null
          content_tone: string | null
          created_at: string
          detected_industry: string | null
          domain_authority: number | null
          domain_metrics_updated_at: string | null
          domain_rating: number | null
          email: string
          favicon_url: string | null
          id: string
          industry_confidence: number | null
          industry_detection_data: Json | null
          last_audit_date: string | null
          main_competitors: string[] | null
          name: string | null
          primary_keywords: string[] | null
          rank_tracking_next_run_at: string | null
          seo_health_score: number | null
          status: string | null
          target_audience: string | null
          updated_at: string
          website_url: string
          zentro_health_breakdown: Json | null
          zentro_health_score: number | null
          zentro_health_updated_at: string | null
        }
        Insert: {
          brand_description?: string | null
          brand_voice?: string | null
          business_type?: string | null
          content_tone?: string | null
          created_at?: string
          detected_industry?: string | null
          domain_authority?: number | null
          domain_metrics_updated_at?: string | null
          domain_rating?: number | null
          email: string
          favicon_url?: string | null
          id?: string
          industry_confidence?: number | null
          industry_detection_data?: Json | null
          last_audit_date?: string | null
          main_competitors?: string[] | null
          name?: string | null
          primary_keywords?: string[] | null
          rank_tracking_next_run_at?: string | null
          seo_health_score?: number | null
          status?: string | null
          target_audience?: string | null
          updated_at?: string
          website_url: string
          zentro_health_breakdown?: Json | null
          zentro_health_score?: number | null
          zentro_health_updated_at?: string | null
        }
        Update: {
          brand_description?: string | null
          brand_voice?: string | null
          business_type?: string | null
          content_tone?: string | null
          created_at?: string
          detected_industry?: string | null
          domain_authority?: number | null
          domain_metrics_updated_at?: string | null
          domain_rating?: number | null
          email?: string
          favicon_url?: string | null
          id?: string
          industry_confidence?: number | null
          industry_detection_data?: Json | null
          last_audit_date?: string | null
          main_competitors?: string[] | null
          name?: string | null
          primary_keywords?: string[] | null
          rank_tracking_next_run_at?: string | null
          seo_health_score?: number | null
          status?: string | null
          target_audience?: string | null
          updated_at?: string
          website_url?: string
          zentro_health_breakdown?: Json | null
          zentro_health_score?: number | null
          zentro_health_updated_at?: string | null
        }
        Relationships: []
      }
      website_comparisons: {
        Row: {
          comparison_metrics: Json
          comparison_name: string
          comparison_type: string | null
          created_at: string
          id: string
          snapshot_data: Json
          updated_at: string
          user_email: string
          website_ids: string[]
        }
        Insert: {
          comparison_metrics?: Json
          comparison_name: string
          comparison_type?: string | null
          created_at?: string
          id?: string
          snapshot_data?: Json
          updated_at?: string
          user_email: string
          website_ids?: string[]
        }
        Update: {
          comparison_metrics?: Json
          comparison_name?: string
          comparison_type?: string | null
          created_at?: string
          id?: string
          snapshot_data?: Json
          updated_at?: string
          user_email?: string
          website_ids?: string[]
        }
        Relationships: []
      }
      website_goal_progress: {
        Row: {
          data_source: string | null
          goal_id: string
          id: string
          metadata: Json | null
          notes: string | null
          progress_percentage: number
          recorded_at: string
          recorded_value: number
        }
        Insert: {
          data_source?: string | null
          goal_id: string
          id?: string
          metadata?: Json | null
          notes?: string | null
          progress_percentage: number
          recorded_at?: string
          recorded_value: number
        }
        Update: {
          data_source?: string | null
          goal_id?: string
          id?: string
          metadata?: Json | null
          notes?: string | null
          progress_percentage?: number
          recorded_at?: string
          recorded_value?: number
        }
        Relationships: [
          {
            foreignKeyName: "website_goal_progress_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "website_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      website_goals: {
        Row: {
          created_at: string
          current_value: number | null
          description: string | null
          goal_data: Json | null
          goal_name: string
          goal_type: string
          id: string
          is_active: boolean
          progress_percentage: number | null
          target_date: string | null
          target_value: number
          updated_at: string
          website_id: string
        }
        Insert: {
          created_at?: string
          current_value?: number | null
          description?: string | null
          goal_data?: Json | null
          goal_name: string
          goal_type: string
          id?: string
          is_active?: boolean
          progress_percentage?: number | null
          target_date?: string | null
          target_value: number
          updated_at?: string
          website_id: string
        }
        Update: {
          created_at?: string
          current_value?: number | null
          description?: string | null
          goal_data?: Json | null
          goal_name?: string
          goal_type?: string
          id?: string
          is_active?: boolean
          progress_percentage?: number | null
          target_date?: string | null
          target_value?: number
          updated_at?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "website_goals_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      website_portfolios: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          portfolio_name: string
          portfolio_settings: Json | null
          updated_at: string
          user_email: string
          website_ids: string[]
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          portfolio_name: string
          portfolio_settings?: Json | null
          updated_at?: string
          user_email: string
          website_ids?: string[]
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          portfolio_name?: string
          portfolio_settings?: Json | null
          updated_at?: string
          user_email?: string
          website_ids?: string[]
        }
        Relationships: []
      }
      website_setup_progress: {
        Row: {
          completion_percentage: number | null
          created_at: string
          id: string
          last_step_completed: string | null
          last_updated: string
          setup_steps: Json
          user_email: string
          website_id: string
        }
        Insert: {
          completion_percentage?: number | null
          created_at?: string
          id?: string
          last_step_completed?: string | null
          last_updated?: string
          setup_steps?: Json
          user_email: string
          website_id: string
        }
        Update: {
          completion_percentage?: number | null
          created_at?: string
          id?: string
          last_step_completed?: string | null
          last_updated?: string
          setup_steps?: Json
          user_email?: string
          website_id?: string
        }
        Relationships: []
      }
      workflow_progress: {
        Row: {
          completed_at: string | null
          completed_steps: string[] | null
          created_at: string
          current_step: number | null
          id: string
          last_updated: string
          metadata: Json | null
          started_at: string
          user_id: string
          website_id: string
          workflow_id: string
        }
        Insert: {
          completed_at?: string | null
          completed_steps?: string[] | null
          created_at?: string
          current_step?: number | null
          id?: string
          last_updated?: string
          metadata?: Json | null
          started_at?: string
          user_id: string
          website_id: string
          workflow_id: string
        }
        Update: {
          completed_at?: string | null
          completed_steps?: string[] | null
          created_at?: string
          current_step?: number | null
          id?: string
          last_updated?: string
          metadata?: Json | null
          started_at?: string
          user_id?: string
          website_id?: string
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_progress_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      zentrowrite_content_briefs: {
        Row: {
          assigned_at: string | null
          assigned_to: string | null
          brief_data: Json | null
          brief_type: string
          content_objectives: Json | null
          created_at: string
          id: string
          optimization_targets: Json | null
          recommended_meta_description: string | null
          recommended_seo_title: string | null
          source_issue_id: string | null
          status: string
          target_keywords: Json | null
          title: string
          updated_at: string
          user_email: string
          website_id: string
        }
        Insert: {
          assigned_at?: string | null
          assigned_to?: string | null
          brief_data?: Json | null
          brief_type?: string
          content_objectives?: Json | null
          created_at?: string
          id?: string
          optimization_targets?: Json | null
          recommended_meta_description?: string | null
          recommended_seo_title?: string | null
          source_issue_id?: string | null
          status?: string
          target_keywords?: Json | null
          title: string
          updated_at?: string
          user_email: string
          website_id: string
        }
        Update: {
          assigned_at?: string | null
          assigned_to?: string | null
          brief_data?: Json | null
          brief_type?: string
          content_objectives?: Json | null
          created_at?: string
          id?: string
          optimization_targets?: Json | null
          recommended_meta_description?: string | null
          recommended_seo_title?: string | null
          source_issue_id?: string | null
          status?: string
          target_keywords?: Json | null
          title?: string
          updated_at?: string
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "zentrowrite_content_briefs_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      zentrowrite_content_gaps: {
        Row: {
          competitor_coverage: Json | null
          content_suggestions: Json | null
          created_at: string
          gap_type: string
          id: string
          missing_keywords: Json | null
          opportunity_score: number | null
          priority_level: string
          status: string
          topic_cluster: string
          updated_at: string
          user_email: string
          website_id: string
        }
        Insert: {
          competitor_coverage?: Json | null
          content_suggestions?: Json | null
          created_at?: string
          gap_type: string
          id?: string
          missing_keywords?: Json | null
          opportunity_score?: number | null
          priority_level?: string
          status?: string
          topic_cluster: string
          updated_at?: string
          user_email: string
          website_id: string
        }
        Update: {
          competitor_coverage?: Json | null
          content_suggestions?: Json | null
          created_at?: string
          gap_type?: string
          id?: string
          missing_keywords?: Json | null
          opportunity_score?: number | null
          priority_level?: string
          status?: string
          topic_cluster?: string
          updated_at?: string
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "zentrowrite_content_gaps_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      zentrowrite_content_impact: {
        Row: {
          after_metrics: Json | null
          before_metrics: Json | null
          content_brief_id: string | null
          created_at: string
          id: string
          implementation_date: string | null
          improvement_type: string
          measurement_date: string | null
          page_url: string
          ranking_improvements: Json | null
          seo_impact_score: number | null
          traffic_change_percentage: number | null
          updated_at: string
          user_email: string
          website_id: string
        }
        Insert: {
          after_metrics?: Json | null
          before_metrics?: Json | null
          content_brief_id?: string | null
          created_at?: string
          id?: string
          implementation_date?: string | null
          improvement_type: string
          measurement_date?: string | null
          page_url: string
          ranking_improvements?: Json | null
          seo_impact_score?: number | null
          traffic_change_percentage?: number | null
          updated_at?: string
          user_email: string
          website_id: string
        }
        Update: {
          after_metrics?: Json | null
          before_metrics?: Json | null
          content_brief_id?: string | null
          created_at?: string
          id?: string
          implementation_date?: string | null
          improvement_type?: string
          measurement_date?: string | null
          page_url?: string
          ranking_improvements?: Json | null
          seo_impact_score?: number | null
          traffic_change_percentage?: number | null
          updated_at?: string
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "zentrowrite_content_impact_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
      zentrowrite_contexts: {
        Row: {
          content_suggestions: Json | null
          context_data: Json
          created_at: string
          id: string
          issue_id: string
          meta_optimizations: Json | null
          schema_generated: Json | null
          status: string | null
          updated_at: string
          website_id: string
        }
        Insert: {
          content_suggestions?: Json | null
          context_data?: Json
          created_at?: string
          id?: string
          issue_id: string
          meta_optimizations?: Json | null
          schema_generated?: Json | null
          status?: string | null
          updated_at?: string
          website_id: string
        }
        Update: {
          content_suggestions?: Json | null
          context_data?: Json
          created_at?: string
          id?: string
          issue_id?: string
          meta_optimizations?: Json | null
          schema_generated?: Json | null
          status?: string | null
          updated_at?: string
          website_id?: string
        }
        Relationships: []
      }
      zentrowrite_internal_links: {
        Row: {
          anchor_text_suggestion: string
          created_at: string
          id: string
          implementation_status: string
          keyword_relevance: Json | null
          link_type: string
          relevance_score: number | null
          seo_value: string
          source_page_url: string
          target_page_url: string
          updated_at: string
          user_email: string
          website_id: string
        }
        Insert: {
          anchor_text_suggestion: string
          created_at?: string
          id?: string
          implementation_status?: string
          keyword_relevance?: Json | null
          link_type?: string
          relevance_score?: number | null
          seo_value?: string
          source_page_url: string
          target_page_url: string
          updated_at?: string
          user_email: string
          website_id: string
        }
        Update: {
          anchor_text_suggestion?: string
          created_at?: string
          id?: string
          implementation_status?: string
          keyword_relevance?: Json | null
          link_type?: string
          relevance_score?: number | null
          seo_value?: string
          source_page_url?: string
          target_page_url?: string
          updated_at?: string
          user_email?: string
          website_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "zentrowrite_internal_links_website_id_fkey"
            columns: ["website_id"]
            isOneToOne: false
            referencedRelation: "user_websites"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      acquire_automation_job: {
        Args: { p_limit?: number; p_worker_id: string }
        Returns: {
          created_at: string | null
          created_by: string
          cron_expression: string | null
          id: string
          is_recurring: boolean | null
          job_category: string | null
          job_type: string
          parent_job_id: string | null
          payload: Json
          priority: string
          project_id: string | null
          scheduled_at: string | null
          status: string
          updated_at: string | null
          user_id: string
        }[]
        SetofOptions: {
          from: "*"
          to: "jobs"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      acquire_job: {
        Args: { p_job_type: string; p_worker_id: string }
        Returns: {
          backoff_ms: number | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          estimated_duration: number | null
          id: string
          idempotency_key: string | null
          job_type: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          max_retries: number | null
          meta: Json | null
          payload: Json
          priority: string | null
          progress: number | null
          result: Json | null
          retry_count: number | null
          scheduled_at: string | null
          started_at: string | null
          status: string | null
          updated_at: string
          user_id: string | null
          website_id: string
        }[]
        SetofOptions: {
          from: "*"
          to: "queue_jobs"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      acquire_job_lock:
        | {
            Args: { p_job_type: string; p_worker_id: string }
            Returns: {
              job_id: string
              job_payload: Json
              job_priority: string
              job_retry_count: number
              job_type: string
            }[]
          }
        | {
            Args: { p_max_jobs?: number; p_worker_id: string }
            Returns: {
              backoff_ms: number | null
              completed_at: string | null
              created_at: string
              error_message: string | null
              estimated_duration: number | null
              id: string
              idempotency_key: string | null
              job_type: string
              last_heartbeat_at: string | null
              locked_at: string | null
              locked_by: string | null
              max_retries: number | null
              meta: Json | null
              payload: Json
              priority: string | null
              progress: number | null
              result: Json | null
              retry_count: number | null
              scheduled_at: string | null
              started_at: string | null
              status: string | null
              updated_at: string
              user_id: string | null
              website_id: string
            }[]
            SetofOptions: {
              from: "*"
              to: "queue_jobs"
              isOneToOne: false
              isSetofReturn: true
            }
          }
      activate_stale_keywords: { Args: never; Returns: undefined }
      aggregate_daily_audit_metrics: { Args: never; Returns: undefined }
      calculate_activation_score: {
        Args: { p_user_email: string }
        Returns: number
      }
      check_active_audit_session: {
        Args: { p_user_email: string; p_website_url: string }
        Returns: {
          active_session_id: string
          has_active_session: boolean
          session_status: string
          started_at: string
        }[]
      }
      check_fix_scan_rate_limit: {
        Args: { p_session_token: string }
        Returns: boolean
      }
      check_is_admin: { Args: { check_user_id: string }; Returns: boolean }
      check_is_super_admin: {
        Args: { check_user_id: string }
        Returns: boolean
      }
      check_keyword_quota: {
        Args: { p_daily_limit: number; p_user_id: string }
        Returns: Json
      }
      cleanup_expired_cache: { Args: never; Returns: undefined }
      cleanup_expired_keyword_locks: { Args: never; Returns: undefined }
      cleanup_expired_rank_cache: { Args: never; Returns: undefined }
      cleanup_expired_serp_cache: { Args: never; Returns: undefined }
      commit_job_credits: {
        Args: {
          p_actual_credits: number
          p_description?: string
          p_job_id: string
        }
        Returns: boolean
      }
      complete_job: {
        Args: { p_job_id: string; p_progress?: number; p_result?: Json }
        Returns: {
          backoff_ms: number | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          estimated_duration: number | null
          id: string
          idempotency_key: string | null
          job_type: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          max_retries: number | null
          meta: Json | null
          payload: Json
          priority: string | null
          progress: number | null
          result: Json | null
          retry_count: number | null
          scheduled_at: string | null
          started_at: string | null
          status: string | null
          updated_at: string
          user_id: string | null
          website_id: string
        }
        SetofOptions: {
          from: "*"
          to: "queue_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      create_eeat_scan_request: {
        Args: {
          p_input_content: string
          p_input_type: string
          p_session_token?: string
          p_user_email?: string
        }
        Returns: string
      }
      create_fix_scan_request: {
        Args: { p_session_token: string; p_url: string }
        Returns: string
      }
      create_internal_link_scan_request: {
        Args: { p_session_token: string; p_url: string }
        Returns: string
      }
      create_onpage_audit_partition: {
        Args: { end_date: string; start_date: string }
        Returns: undefined
      }
      create_paa_extraction_request: {
        Args: { p_country: string; p_keyword: string; p_session_token: string }
        Returns: string
      }
      detect_stalled_jobs: {
        Args: never
        Returns: {
          job_id: string
          stalled_at: string
        }[]
      }
      determine_stuck_stage: { Args: { p_user_email: string }; Returns: string }
      evaluate_all_churn_risks: { Args: never; Returns: undefined }
      evaluate_user_churn_risk: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      fail_job: {
        Args: {
          p_error_message: string
          p_job_id: string
          p_should_retry?: boolean
        }
        Returns: {
          backoff_ms: number | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          estimated_duration: number | null
          id: string
          idempotency_key: string | null
          job_type: string
          last_heartbeat_at: string | null
          locked_at: string | null
          locked_by: string | null
          max_retries: number | null
          meta: Json | null
          payload: Json
          priority: string | null
          progress: number | null
          result: Json | null
          retry_count: number | null
          scheduled_at: string | null
          started_at: string | null
          status: string | null
          updated_at: string
          user_id: string | null
          website_id: string
        }
        SetofOptions: {
          from: "*"
          to: "queue_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      get_keyword_cache: {
        Args: { p_country_code: string; p_keyword: string }
        Returns: Json
      }
      get_next_run_number: { Args: { p_job_id: string }; Returns: number }
      get_user_admin_roles: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["admin_role"][]
      }
      get_user_audit_usage: {
        Args: { p_user_email: string }
        Returns: {
          monthly_count: number
          monthly_limit: number
          user_plan: string
          weekly_count: number
          weekly_limit: number
        }[]
      }
      get_user_usage_with_limits: {
        Args: { p_user_id: string }
        Returns: {
          audit_pages_limit: number
          audit_pages_used: number
          content_pieces_limit: number
          content_pieces_used: number
          keyword_research_limit: number
          keyword_research_used: number
          period_end: string
          period_start: string
          plan_name: string
          rank_keywords_limit: number
          rank_keywords_used: number
        }[]
      }
      has_admin_role: {
        Args: {
          _role: Database["public"]["Enums"]["admin_role"]
          _user_id: string
        }
        Returns: boolean
      }
      has_valid_plan: { Args: { p_user_id: string }; Returns: boolean }
      increment_audit_usage: {
        Args: { p_pages: number; p_user_id: string }
        Returns: undefined
      }
      increment_content_usage: {
        Args: { p_pieces_used: number; p_user_id: string }
        Returns: undefined
      }
      increment_keyword_usage: {
        Args: { p_keywords_used: number; p_user_id: string }
        Returns: undefined
      }
      is_admin: { Args: { check_user_id: string }; Returns: boolean }
      is_api_kill_switch_enabled: { Args: never; Returns: boolean }
      manual_sync_ranking_goals: { Args: never; Returns: string }
      migrate_existing_data_to_websites: { Args: never; Returns: undefined }
      promote_to_admin: {
        Args: { admin_role?: string; user_email: string }
        Returns: undefined
      }
      recalculate_audit_progress: {
        Args: { p_audit_id: string }
        Returns: undefined
      }
      recover_stalled_jobs: {
        Args: never
        Returns: {
          job_id: string
          recovered_at: string
        }[]
      }
      release_keyword_lock: {
        Args: {
          p_country_code: string
          p_keyword: string
          p_request_id: string
          p_status?: string
        }
        Returns: boolean
      }
      requeue_stale_jobs: {
        Args: { p_stale_threshold_minutes?: number }
        Returns: number
      }
      schedule_due_rank_tracking: { Args: never; Returns: number }
      set_keyword_cache: {
        Args: {
          p_api_credits: number
          p_competition: string
          p_country_code: string
          p_cpc: number
          p_history_trend: Json
          p_intent: string
          p_keyword: string
          p_keyword_difficulty: number
          p_longtail_keywords: Json
          p_question_keywords: Json
          p_related_keywords: Json
          p_search_volume: number
          p_serp_features: Json
          p_similar_keywords: Json
          p_trending_score: number
          p_ttl_days?: number
        }
        Returns: string
      }
      sync_ranking_goal_progress: { Args: never; Returns: undefined }
      track_keyword_api_usage: {
        Args: { p_credits: number; p_was_cache_hit: boolean }
        Returns: undefined
      }
      trigger_content_performance_tracking: { Args: never; Returns: string }
      trigger_rank_tracking_now: { Args: never; Returns: string }
      trigger_reprioritization_now: { Args: never; Returns: string }
      try_acquire_keyword_lock: {
        Args: {
          p_country_code: string
          p_keyword: string
          p_lock_duration_seconds?: number
          p_request_id: string
        }
        Returns: Json
      }
      update_feature_budget_usage: {
        Args: { p_credits_used: number; p_feature_name: string }
        Returns: undefined
      }
      update_job_heartbeat: {
        Args: {
          p_job_id: string
          p_meta?: Json
          p_progress?: number
          p_worker_id: string
        }
        Returns: boolean
      }
      update_keyword_quota_stats: {
        Args: { p_user_id: string; p_was_cache_hit: boolean }
        Returns: undefined
      }
      update_test_budget_usage: {
        Args: { credits_used: number }
        Returns: undefined
      }
      update_tool_usage_stats: {
        Args: {
          p_results_count?: number
          p_session_duration?: number
          p_tool_name: string
          p_user_email: string
          p_website_id: string
        }
        Returns: undefined
      }
      update_website_health_score: {
        Args: { target_website_id: string }
        Returns: undefined
      }
      validate_or_recreate_reservation: {
        Args: { p_estimated_credits: number; p_job_id: string }
        Returns: {
          error_message: string
          reservation_id: string
          reservation_valid: boolean
        }[]
      }
    }
    Enums: {
      admin_role: "super_admin" | "admin" | "finance" | "support"
      audit_rule_category:
        | "crawlability"
        | "technical"
        | "onpage"
        | "content"
        | "internal_linking"
        | "schema"
        | "performance"
        | "trust"
        | "internationalization"
        | "content_structure"
        | "spam_quality"
      audit_rule_scope: "page" | "site"
      audit_rule_severity: "critical" | "warning" | "info"
      audit_rule_status: "pending" | "running" | "passed" | "failed" | "skipped"
      audit_status: "pending" | "completed" | "failed" | "running"
      audit_status_type: "pending" | "running" | "completed" | "failed"
      blog_status: "draft" | "review" | "published"
      content_length: "short" | "medium" | "long"
      content_tone: "professional" | "casual" | "technical" | "friendly"
      issue_category:
        | "semantic"
        | "technical"
        | "content"
        | "schema"
        | "meta"
        | "structure"
        | "linking"
        | "performance"
        | "accessibility"
        | "meta_tags"
        | "headings"
      issue_severity: "critical" | "warning" | "info"
      issue_status: "open" | "in_progress" | "fixed" | "ignored"
      plan_type: "free" | "basic" | "pro" | "enterprise"
      tool_type:
        | "blog_generator"
        | "meta_generator"
        | "keyword_explorer"
        | "schema_generator"
        | "rank_tracker"
        | "technical_audit"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: ["super_admin", "admin", "finance", "support"],
      audit_rule_category: [
        "crawlability",
        "technical",
        "onpage",
        "content",
        "internal_linking",
        "schema",
        "performance",
        "trust",
        "internationalization",
        "content_structure",
        "spam_quality",
      ],
      audit_rule_scope: ["page", "site"],
      audit_rule_severity: ["critical", "warning", "info"],
      audit_rule_status: ["pending", "running", "passed", "failed", "skipped"],
      audit_status: ["pending", "completed", "failed", "running"],
      audit_status_type: ["pending", "running", "completed", "failed"],
      blog_status: ["draft", "review", "published"],
      content_length: ["short", "medium", "long"],
      content_tone: ["professional", "casual", "technical", "friendly"],
      issue_category: [
        "semantic",
        "technical",
        "content",
        "schema",
        "meta",
        "structure",
        "linking",
        "performance",
        "accessibility",
        "meta_tags",
        "headings",
      ],
      issue_severity: ["critical", "warning", "info"],
      issue_status: ["open", "in_progress", "fixed", "ignored"],
      plan_type: ["free", "basic", "pro", "enterprise"],
      tool_type: [
        "blog_generator",
        "meta_generator",
        "keyword_explorer",
        "schema_generator",
        "rank_tracker",
        "technical_audit",
      ],
    },
  },
} as const
