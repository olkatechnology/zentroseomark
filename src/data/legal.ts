export interface LegalSection {
  title: string;
  content: string;
}

export interface LegalPageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const legalPages: Record<string, LegalPageData> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy - ZentroSEO",
    metaDescription: "ZentroSEO's privacy policy. Learn how we collect, use, and protect your personal data.",
    lastUpdated: "January 1, 2025",
    sections: [
      { title: "Information We Collect", content: "We collect information you provide directly, such as your name, email address, and website URL when you create an account. We also collect usage data including pages visited, features used, and audit results to improve our services. Technical data such as IP address, browser type, and device information is collected automatically." },
      { title: "How We Use Your Information", content: "We use your information to provide and improve ZentroSEO's services, including running SEO audits, generating reports, and personalizing your experience. We may use your email to send service updates, feature announcements, and educational SEO content. We never sell your personal data to third parties." },
      { title: "Data Storage and Security", content: "Your data is stored on secure servers with industry-standard encryption. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
      { title: "Cookies and Tracking", content: "We use essential cookies for authentication and session management. Analytics cookies help us understand how you use ZentroSEO so we can improve the experience. You can manage cookie preferences through your browser settings." },
      { title: "Third-Party Services", content: "ZentroSEO integrates with third-party services for payment processing (Stripe), analytics, and email delivery. These services have their own privacy policies and we encourage you to review them." },
      { title: "Your Rights", content: "You have the right to access, correct, or delete your personal data at any time. You can export your data, close your account, or request data deletion by contacting us at privacy@zentroseo.com." },
      { title: "Changes to This Policy", content: "We may update this privacy policy from time to time. We will notify you of significant changes via email or through a notice on our website." },
      { title: "Contact Us", content: "If you have questions about this privacy policy, please contact us at privacy@zentroseo.com." },
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    metaTitle: "Terms of Service - ZentroSEO",
    metaDescription: "ZentroSEO's terms of service. Read our terms and conditions for using the platform.",
    lastUpdated: "January 1, 2025",
    sections: [
      { title: "Acceptance of Terms", content: "By accessing or using ZentroSEO, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
      { title: "Description of Service", content: "ZentroSEO provides an AI-powered SEO platform including website auditing, keyword research, rank tracking, content optimization, backlink analysis, schema generation, and related SEO tools." },
      { title: "Account Registration", content: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account." },
      { title: "Acceptable Use", content: "You agree to use ZentroSEO only for lawful purposes and in accordance with these terms. You may not use the service to scrape or crawl websites you do not own or have permission to audit. You may not attempt to reverse-engineer, decompile, or disassemble any part of the service." },
      { title: "Subscription and Billing", content: "Paid plans are billed on a monthly or annual basis. All fees are non-refundable except as stated in our Refund Policy. We reserve the right to change pricing with 30 days' notice." },
      { title: "Intellectual Property", content: "ZentroSEO and its original content, features, and functionality are owned by ZentroSEO and are protected by international copyright, trademark, and other intellectual property laws." },
      { title: "Limitation of Liability", content: "ZentroSEO provides SEO analysis and recommendations based on automated algorithms. We do not guarantee specific ranking results. The service is provided 'as is' without warranties of any kind." },
      { title: "Termination", content: "We may terminate or suspend your account at any time for violation of these terms. You may cancel your account at any time through your account settings." },
      { title: "Contact", content: "For questions about these terms, contact us at legal@zentroseo.com." },
    ],
  },
  "refund-policy": {
    slug: "refund-policy",
    title: "Refund Policy",
    metaTitle: "Refund Policy - ZentroSEO",
    metaDescription: "ZentroSEO's refund policy. Understand our refund terms and conditions.",
    lastUpdated: "January 1, 2025",
    sections: [
      { title: "Refund Eligibility", content: "If you are not satisfied with ZentroSEO, you may request a full refund within 14 days of your initial purchase. This applies to first-time subscriptions only." },
      { title: "How to Request a Refund", content: "To request a refund, email billing@zentroseo.com with your account email and reason for the refund. Refunds are processed within 5-10 business days." },
      { title: "Non-Refundable Items", content: "Renewals after the first billing cycle, account upgrades mid-cycle, and any add-on services purchased separately are non-refundable." },
      { title: "Cancellation", content: "You can cancel your subscription at any time. After cancellation, you'll retain access to paid features until the end of your current billing period." },
      { title: "Contact", content: "For billing questions, contact billing@zentroseo.com." },
    ],
  },
};
