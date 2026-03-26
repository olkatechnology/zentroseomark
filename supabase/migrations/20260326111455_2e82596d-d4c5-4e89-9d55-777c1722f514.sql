
-- ============================================================
-- discover_categories
-- ============================================================
CREATE TABLE public.discover_categories (
  slug text PRIMARY KEY,
  label text NOT NULL,
  description text NOT NULL DEFAULT '',
  icon text NOT NULL DEFAULT 'Globe',
  sort_order integer NOT NULL DEFAULT 0
);

ALTER TABLE public.discover_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read discover_categories"
  ON public.discover_categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admin insert discover_categories"
  ON public.discover_categories FOR INSERT
  TO authenticated
  WITH CHECK (public.has_admin_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admin update discover_categories"
  ON public.discover_categories FOR UPDATE
  TO authenticated
  USING (public.has_admin_role(auth.uid(), 'super_admin'))
  WITH CHECK (public.has_admin_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admin delete discover_categories"
  ON public.discover_categories FOR DELETE
  TO authenticated
  USING (public.has_admin_role(auth.uid(), 'super_admin'));

-- ============================================================
-- discover_listings
-- ============================================================
CREATE TABLE public.discover_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  domain text NOT NULL,
  logo text,
  category_slug text NOT NULL REFERENCES public.discover_categories(slug) ON DELETE CASCADE,
  subcategory text NOT NULL DEFAULT '',
  industry text NOT NULL DEFAULT '',
  location text,
  location_slug text,
  description text NOT NULL DEFAULT '',
  seo_score integer NOT NULL DEFAULT 0,
  ai_visibility integer NOT NULL DEFAULT 0,
  technical_health integer NOT NULL DEFAULT 0,
  content_strength integer NOT NULL DEFAULT 0,
  local_seo integer NOT NULL DEFAULT 0,
  backlinks integer NOT NULL DEFAULT 0,
  keywords integer NOT NULL DEFAULT 0,
  claimed boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.discover_listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published discover_listings"
  ON public.discover_listings FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Admin read all discover_listings"
  ON public.discover_listings FOR SELECT
  TO authenticated
  USING (public.has_admin_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admin insert discover_listings"
  ON public.discover_listings FOR INSERT
  TO authenticated
  WITH CHECK (public.has_admin_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admin update discover_listings"
  ON public.discover_listings FOR UPDATE
  TO authenticated
  USING (public.has_admin_role(auth.uid(), 'super_admin'))
  WITH CHECK (public.has_admin_role(auth.uid(), 'super_admin'));

CREATE POLICY "Admin delete discover_listings"
  ON public.discover_listings FOR DELETE
  TO authenticated
  USING (public.has_admin_role(auth.uid(), 'super_admin'));

-- Indexes
CREATE INDEX idx_discover_listings_category ON public.discover_listings(category_slug);
CREATE INDEX idx_discover_listings_location ON public.discover_listings(location_slug);
CREATE INDEX idx_discover_listings_subcategory ON public.discover_listings(subcategory);
CREATE INDEX idx_discover_listings_published ON public.discover_listings(published);

-- Updated_at trigger
CREATE TRIGGER update_discover_listings_updated_at
  BEFORE UPDATE ON public.discover_listings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================
-- Seed categories
-- ============================================================
INSERT INTO public.discover_categories (slug, label, description, icon, sort_order) VALUES
  ('saas', 'SaaS Tools', 'Software-as-a-Service platforms and tools', 'Cloud', 1),
  ('startup', 'Startups', 'Early-stage and growth-phase startups', 'Rocket', 2),
  ('sme', 'SMEs', 'Small and medium-sized enterprises', 'Briefcase', 3),
  ('agency', 'Agencies', 'Marketing, design, and digital agencies', 'Users', 4),
  ('restaurant', 'Restaurants', 'Restaurants, cafés, and food businesses', 'UtensilsCrossed', 5),
  ('clinic', 'Clinics', 'Healthcare clinics and medical practices', 'Heart', 6),
  ('law-firm', 'Law Firms', 'Legal practices and law firms', 'Scale', 7),
  ('store', 'Stores', 'Retail shops, e-commerce, and online stores', 'ShoppingBag', 8),
  ('local-business', 'Local Businesses', 'Gyms, salons, repair shops, and local services', 'MapPin', 9),
  ('domain', 'Domains', 'Domain names and web properties', 'Globe', 10);

-- ============================================================
-- Seed listings
-- ============================================================
INSERT INTO public.discover_listings (slug, name, domain, category_slug, subcategory, industry, location, location_slug, description, seo_score, ai_visibility, technical_health, content_strength, local_seo, backlinks, keywords, claimed) VALUES
  ('zentroseo', 'ZentroSEO', 'zentroseo.com', 'saas', 'seo-tools', 'SEO Software', NULL, NULL, 'AI-powered SEO platform for smarter rankings. Built for beginners, loved by pros.', 92, 88, 95, 90, 72, 85, 91, true),
  ('rebraspace', 'Rebraspace', 'rebraspace.com', 'saas', 'design-tools', 'Branding & Design', NULL, NULL, 'AI-powered brand identity platform for startups and agencies.', 68, 55, 74, 62, 40, 58, 65, false),
  ('cloudmetrics', 'CloudMetrics', 'cloudmetrics.io', 'saas', 'analytics', 'Analytics', NULL, NULL, 'Real-time cloud infrastructure monitoring and analytics platform.', 81, 72, 88, 76, 35, 79, 83, false),
  ('taskflow-app', 'TaskFlow', 'taskflow.app', 'saas', 'project-management', 'Project Management', NULL, NULL, 'Lightweight project management tool for agile teams and remote workers.', 77, 65, 85, 72, 30, 70, 78, false),
  ('datapulse-ai', 'DataPulse AI', 'datapulse.ai', 'saas', 'ai-tools', 'Artificial Intelligence', NULL, NULL, 'Enterprise AI data pipeline and model deployment platform.', 84, 78, 90, 80, 25, 82, 86, false),
  ('mailwing', 'MailWing', 'mailwing.io', 'saas', 'marketing-tools', 'Email Marketing', NULL, NULL, 'AI-driven email marketing automation for growing e-commerce brands.', 73, 60, 80, 68, 20, 65, 70, false),
  ('paystream', 'PayStream', 'paystream.co', 'startup', 'fintech', 'Fintech', 'San Francisco, CA', 'san-francisco-ca', 'Next-gen payment infrastructure for embedded finance.', 65, 52, 72, 58, 35, 55, 60, false),
  ('medvault', 'MedVault', 'medvault.health', 'startup', 'healthtech', 'HealthTech', 'Boston, MA', 'boston-ma', 'Secure patient data exchange platform for healthcare providers.', 58, 45, 65, 52, 40, 48, 55, false),
  ('greenbyte', 'GreenByte', 'greenbyte.eco', 'startup', 'cleantech', 'CleanTech', 'Berlin, Germany', 'berlin-germany', 'Carbon footprint tracking and offset platform for businesses.', 55, 40, 60, 48, 30, 42, 50, false),
  ('shipfast-logistics', 'ShipFast Logistics', 'shipfastlogistics.com', 'sme', 'logistics', 'Logistics & Shipping', 'Miami, FL', 'miami-fl', 'Last-mile delivery and e-commerce fulfillment services for growing brands.', 58, 42, 65, 50, 60, 48, 55, false),
  ('sunridge-solar', 'Sunridge Solar', 'sunridgesolar.com', 'sme', 'energy', 'Renewable Energy', 'Phoenix, AZ', 'phoenix-az', 'Residential and commercial solar panel installation company.', 50, 35, 55, 42, 68, 38, 45, false),
  ('alpine-manufacturing', 'Alpine Manufacturing', 'alpinemfg.com', 'sme', 'manufacturing', 'Manufacturing', 'Detroit, MI', 'detroit-mi', 'Precision CNC machining and custom metal fabrication.', 42, 28, 48, 35, 55, 30, 38, false),
  ('olika-digital', 'Olika Digital', 'olika.digital', 'agency', 'digital-marketing', 'Digital Agency', 'Stockholm, Sweden', 'stockholm-sweden', 'Full-service digital agency specializing in web development and digital marketing.', 75, 60, 82, 70, 65, 68, 72, false),
  ('pixelcraft-studio', 'PixelCraft Studio', 'pixelcraftstudio.com', 'agency', 'creative-agency', 'Creative Agency', 'Los Angeles, CA', 'los-angeles-ca', 'Creative design studio specializing in brand identity, UI/UX, and motion graphics.', 70, 55, 78, 65, 50, 60, 68, false),
  ('nova-consulting', 'Nova Consulting Group', 'novaconsulting.com', 'agency', 'management-consulting', 'Management Consulting', 'New York, NY', 'new-york-ny', 'Strategic management consulting for mid-market companies pursuing digital transformation.', 63, 48, 70, 58, 55, 62, 60, false),
  ('brightmedia-agency', 'BrightMedia', 'brightmedia.co', 'agency', 'digital-marketing', 'Digital Marketing', 'Toronto, Canada', 'toronto-canada', 'Performance marketing agency for SaaS and e-commerce brands.', 72, 58, 76, 66, 45, 64, 70, false),
  ('greenleaf-cafe', 'Greenleaf Café', 'greenleafcafe.com', 'restaurant', 'cafe', 'Restaurant', 'Austin, TX', 'austin-tx', 'Organic farm-to-table restaurant with seasonal menus and locally sourced ingredients.', 52, 30, 58, 45, 78, 35, 42, false),
  ('sakura-sushi-london', 'Sakura Sushi', 'sakurasushi.co.uk', 'restaurant', 'japanese', 'Japanese Restaurant', 'London, UK', 'london-uk', 'Authentic Japanese sushi and ramen restaurant in central London.', 48, 25, 52, 40, 80, 30, 38, false),
  ('bella-cucina-nyc', 'Bella Cucina', 'bellacucina.nyc', 'restaurant', 'italian', 'Italian Restaurant', 'New York, NY', 'new-york-ny', 'Classic Italian dining experience with handmade pasta and wood-fired pizzas.', 45, 22, 50, 38, 82, 28, 35, false),
  ('brightpath-dental', 'BrightPath Dental', 'brightpathdental.com', 'clinic', 'dental', 'Healthcare', 'Denver, CO', 'denver-co', 'Family dental practice offering general and cosmetic dentistry services.', 45, 22, 50, 38, 82, 28, 35, false),
  ('clearview-optometry', 'ClearView Optometry', 'clearvieweyes.com', 'clinic', 'optometry', 'Eye Care', 'Seattle, WA', 'seattle-wa', 'Comprehensive eye exams, contact lenses, and designer eyewear.', 40, 18, 45, 32, 78, 22, 30, false),
  ('harmony-physio', 'Harmony Physiotherapy', 'harmonyphysio.ca', 'clinic', 'physiotherapy', 'Physiotherapy', 'Vancouver, Canada', 'vancouver-canada', 'Sports injury rehabilitation and chronic pain management clinic.', 38, 15, 42, 28, 75, 20, 25, false),
  ('smith-law', 'Smith & Associates Law', 'smithlaw.com', 'law-firm', 'corporate-law', 'Corporate Law', 'Chicago, IL', 'chicago-il', 'Full-service corporate law firm specializing in mergers, acquisitions, and business litigation.', 60, 42, 68, 55, 70, 58, 62, false),
  ('garcia-family-law', 'Garcia Family Law', 'garciafamilylaw.com', 'law-firm', 'family-law', 'Family Law', 'Houston, TX', 'houston-tx', 'Compassionate family law attorneys handling divorce, custody, and adoption cases.', 48, 30, 52, 42, 76, 35, 40, false),
  ('reeves-ip-law', 'Reeves IP Law', 'reevesiplaw.com', 'law-firm', 'intellectual-property', 'Intellectual Property', 'San Jose, CA', 'san-jose-ca', 'Patent, trademark, and copyright attorneys serving tech companies.', 55, 38, 60, 48, 62, 45, 50, false),
  ('urbanthread', 'UrbanThread', 'urbanthread.shop', 'store', 'fashion', 'Fashion Retail', 'Portland, OR', 'portland-or', 'Sustainable fashion boutique with curated collections from independent designers.', 55, 38, 60, 50, 68, 42, 52, false),
  ('techhaven-electronics', 'TechHaven', 'techhaven.store', 'store', 'electronics', 'Electronics Retail', NULL, NULL, 'Online electronics store with competitive prices on gadgets and accessories.', 62, 45, 70, 55, 30, 50, 58, false),
  ('petpals-supply', 'PetPals Supply', 'petpalssupply.com', 'store', 'pet-supplies', 'Pet Supplies', 'Dallas, TX', 'dallas-tx', 'Premium pet food, toys, and accessories for dogs, cats, and small animals.', 50, 32, 55, 44, 72, 36, 48, false),
  ('ironforge-fitness', 'IronForge Fitness', 'ironforgefitness.com', 'local-business', 'fitness', 'Fitness', 'Chicago, IL', 'chicago-il', 'Boutique gym and personal training studio specializing in strength and conditioning.', 41, 18, 45, 32, 75, 22, 30, false),
  ('luxe-salon-spa', 'Luxe Salon & Spa', 'luxesalonspa.com', 'local-business', 'beauty', 'Beauty & Wellness', 'Miami, FL', 'miami-fl', 'Full-service hair salon and day spa offering premium beauty treatments.', 44, 20, 48, 35, 80, 25, 32, false),
  ('quickfix-auto', 'QuickFix Auto', 'quickfixauto.com', 'local-business', 'auto-repair', 'Auto Repair', 'Atlanta, GA', 'atlanta-ga', 'Trusted auto repair and maintenance shop serving the metro area since 2005.', 38, 15, 42, 30, 78, 18, 28, false),
  ('seotools-com', 'seotools.com', 'seotools.com', 'domain', 'seo', 'SEO', NULL, NULL, 'Premium domain for SEO tools and services.', 70, 55, 75, 60, 20, 65, 72, false),
  ('aiwriter-io', 'aiwriter.io', 'aiwriter.io', 'domain', 'ai-tools', 'AI Writing', NULL, NULL, 'Domain name for AI-powered writing and content tools.', 62, 48, 68, 52, 15, 55, 60, false),
  ('localrank-co', 'localrank.co', 'localrank.co', 'domain', 'local-seo', 'Local SEO', NULL, NULL, 'Domain targeting local SEO ranking and visibility services.', 58, 42, 62, 48, 35, 45, 55, false);
