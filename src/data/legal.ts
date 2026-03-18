import { td } from "@/lib/i18n-data";

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
    metaDescription: "ZentroSEO's privacy policy. Learn how we collect, use, store, and protect your personal data under GDPR, CCPA, and other global privacy regulations.",
    lastUpdated: "March 18, 2026",
    sections: [
      {
        title: "Introduction and Data Controller",
        content: "This Privacy Policy describes how ZentroSEO (\"we,\" \"us,\" or \"our\") collects, uses, shares, and protects your personal data when you use our website and services at zentroseo.com. ZentroSEO acts as the data controller for the personal data processed through our platform. If you have questions about this policy or our data practices, you may contact our Data Protection Officer (DPO) at dpo@zentroseo.com."
      },
      {
        title: "Information We Collect",
        content: "We collect the following categories of information:\n\n• Personal Data You Provide: Name, email address, billing address, payment information (processed by Stripe), company name, website URL, and any other information you voluntarily submit when creating an account, contacting support, or using our services.\n\n• Usage Data: Pages visited, features used, audit results, search queries, click patterns, session duration, referring URLs, and interaction data collected automatically as you use ZentroSEO.\n\n• Device and Technical Data: IP address, browser type and version, operating system, device type, screen resolution, language preferences, time zone, and unique device identifiers.\n\n• Cookies and Similar Technologies: Data collected through cookies, web beacons, pixels, and similar tracking technologies as described in the 'Cookies and Tracking Technologies' section below."
      },
      {
        title: "Legal Basis for Processing (GDPR)",
        content: "Under the General Data Protection Regulation (GDPR), we process your personal data based on the following legal grounds:\n\n• Contract Performance (Article 6(1)(b)): Processing necessary to provide our services, manage your account, process payments, and deliver SEO audit results.\n\n• Legitimate Interests (Article 6(1)(f)): Processing for fraud prevention, platform security, service improvement, analytics, and direct marketing to existing customers (with opt-out). Our legitimate interests do not override your fundamental rights and freedoms.\n\n• Consent (Article 6(1)(a)): Processing based on your explicit consent, such as for marketing communications, non-essential cookies, and newsletter subscriptions. You may withdraw consent at any time without affecting the lawfulness of prior processing.\n\n• Legal Obligation (Article 6(1)(c)): Processing required to comply with applicable laws, regulations, or legal proceedings, including tax and accounting obligations."
      },
      {
        title: "How We Use Your Information",
        content: "We use your information for the following purposes:\n\n• Service Delivery: To provide, maintain, and improve ZentroSEO's features, including SEO audits, keyword research, rank tracking, content optimization, and reporting.\n\n• Account Management: To create, maintain, and secure your account; authenticate your identity; and process subscription payments.\n\n• Communications: To send transactional emails (account verification, password resets, billing receipts), service updates, feature announcements, and, with your consent, marketing and educational SEO content.\n\n• Analytics and Improvement: To analyze usage patterns, diagnose technical issues, measure feature adoption, and improve the overall user experience.\n\n• Security and Fraud Prevention: To detect, prevent, and respond to security incidents, abuse, fraud, and violations of our Terms of Service.\n\n• Legal Compliance: To comply with applicable laws, regulations, legal processes, or enforceable governmental requests."
      },
      {
        title: "Data Retention",
        content: "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:\n\n• Account Data: Retained for the duration of your active account plus 30 days after account deletion to allow for recovery.\n\n• Billing and Transaction Records: Retained for 7 years to comply with tax and accounting regulations.\n\n• SEO Audit Data and Reports: Retained for the duration of your subscription. Historical audit data is deleted 90 days after account closure.\n\n• Usage and Analytics Data: Aggregated and anonymized after 26 months. Non-aggregated usage logs are deleted after 12 months.\n\n• Support Correspondence: Retained for 3 years after resolution for quality assurance and legal purposes.\n\n• Cookie Data: Retention periods vary by cookie type (see Cookies section).\n\nYou may request earlier deletion of your data at any time by contacting privacy@zentroseo.com."
      },
      {
        title: "International Data Transfers",
        content: "ZentroSEO operates globally and may transfer your personal data to countries outside of your country of residence, including to countries that may not provide the same level of data protection as your home country.\n\nFor transfers from the European Economic Area (EEA), United Kingdom, or Switzerland to countries without an adequacy decision from the European Commission, we implement appropriate safeguards including:\n\n• Standard Contractual Clauses (SCCs) approved by the European Commission.\n• Supplementary technical and organizational measures where required.\n• Data Processing Agreements with all sub-processors that include adequate transfer mechanisms.\n\nYou may request a copy of the safeguards we use for international transfers by contacting dpo@zentroseo.com."
      },
      {
        title: "Data Sharing and Third-Party Services",
        content: "We do not sell your personal data to third parties. We may share your data with the following categories of recipients:\n\n• Payment Processors: Stripe processes payment information on our behalf. Stripe's privacy policy governs their use of your payment data.\n\n• Cloud Infrastructure: Our services are hosted on secure cloud infrastructure providers that process data on our behalf under Data Processing Agreements.\n\n• Analytics Providers: We use analytics services to understand usage patterns. Where possible, we anonymize or pseudonymize data before sharing.\n\n• Email Service Providers: We use third-party services for transactional and marketing email delivery.\n\n• Legal and Regulatory: We may disclose data when required by law, subpoena, court order, or to protect our rights, property, or safety.\n\n• Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity. We will notify you before your data is transferred and becomes subject to a different privacy policy.\n\nA current list of our sub-processors is available upon request at privacy@zentroseo.com."
      },
      {
        title: "Cookies and Tracking Technologies",
        content: "We use cookies and similar technologies to operate and improve our platform:\n\n• Essential Cookies: Required for authentication, session management, security, and core functionality. These cannot be disabled.\n\n• Analytics Cookies: Help us understand how you use ZentroSEO, which features are most popular, and how we can improve the experience. These are only set with your consent.\n\n• Marketing Cookies: Used to deliver relevant advertisements and measure campaign effectiveness. These are only set with your consent.\n\nYou can manage your cookie preferences at any time using the cookie consent banner on our website or through your browser settings. Note that disabling essential cookies may impair the functionality of our services.\n\nFor detailed information about each cookie we use, including its purpose and expiration, please contact privacy@zentroseo.com."
      },
      {
        title: "Your Rights Under GDPR",
        content: "If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have the following rights under the GDPR:\n\n• Right of Access (Article 15): Request a copy of the personal data we hold about you.\n\n• Right to Rectification (Article 16): Request correction of inaccurate or incomplete personal data.\n\n• Right to Erasure (Article 17): Request deletion of your personal data, subject to legal retention obligations.\n\n• Right to Restriction (Article 18): Request that we restrict the processing of your personal data in certain circumstances.\n\n• Right to Data Portability (Article 20): Receive your personal data in a structured, commonly used, machine-readable format.\n\n• Right to Object (Article 21): Object to processing based on legitimate interests or for direct marketing purposes.\n\n• Rights Related to Automated Decision-Making (Article 22): You have the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects.\n\n• Right to Lodge a Complaint: You have the right to lodge a complaint with your local data protection supervisory authority.\n\nTo exercise any of these rights, contact dpo@zentroseo.com. We will respond within 30 days."
      },
      {
        title: "Your Rights Under CCPA/CPRA",
        content: "If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):\n\n• Right to Know: You may request that we disclose the categories and specific pieces of personal information we have collected about you, the sources of collection, the purposes for collection, and the categories of third parties with whom we share your data.\n\n• Right to Delete: You may request that we delete your personal information, subject to certain exceptions.\n\n• Right to Correct: You may request that we correct inaccurate personal information.\n\n• Right to Opt-Out of Sale or Sharing: We do not sell or share your personal information for cross-context behavioral advertising. If this changes, we will provide a \"Do Not Sell or Share My Personal Information\" link.\n\n• Right to Non-Discrimination: We will not discriminate against you for exercising your privacy rights.\n\n• Authorized Agents: You may designate an authorized agent to submit requests on your behalf, subject to verification.\n\nTo exercise your rights, email privacy@zentroseo.com or use the contact methods provided. We will verify your identity before processing requests and respond within 45 days."
      },
      {
        title: "Children's Privacy",
        content: "ZentroSEO is not directed to individuals under the age of 16. We do not knowingly collect personal data from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at privacy@zentroseo.com, and we will promptly delete such information. If we become aware that we have collected personal data from a child under 16 without verification of parental consent, we will take steps to remove that data from our servers."
      },
      {
        title: "Do Not Track Signals",
        content: "Some web browsers transmit \"Do Not Track\" (DNT) signals. Because there is no uniform standard for interpreting DNT signals, ZentroSEO does not currently respond to DNT signals. However, you can manage your tracking preferences through our cookie consent mechanism and your browser privacy settings."
      },
      {
        title: "Data Security",
        content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:\n\n• Encryption of data in transit (TLS 1.2+) and at rest (AES-256).\n• Regular security assessments and penetration testing.\n• Access controls and authentication mechanisms for internal systems.\n• Employee training on data protection and security best practices.\n• Incident response procedures for detecting and responding to data breaches.\n\nWhile we strive to protect your personal data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security."
      },
      {
        title: "Data Breach Notification",
        content: "In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:\n\n• Notify the relevant supervisory authority within 72 hours of becoming aware of the breach, as required by GDPR Article 33.\n\n• Notify affected individuals without undue delay if the breach is likely to result in a high risk to their rights and freedoms, as required by GDPR Article 34.\n\n• Document all breaches, including the facts, effects, and remedial actions taken.\n\nFor California residents, we will provide notification in accordance with California Civil Code § 1798.82."
      },
      {
        title: "Changes to This Policy",
        content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will:\n\n• Update the \"Last Updated\" date at the top of this policy.\n• Notify you via email or a prominent notice on our website at least 30 days before the changes take effect.\n• Where required by law, obtain your consent to material changes.\n\nWe encourage you to review this policy periodically."
      },
      {
        title: "Contact Us",
        content: "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\n• Data Protection Officer: dpo@zentroseo.com\n• Privacy Inquiries: privacy@zentroseo.com\n• General Support: support@zentroseo.com\n\nYou also have the right to lodge a complaint with your local data protection supervisory authority."
      },
    ],
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    metaTitle: "Terms of Service - ZentroSEO",
    metaDescription: "ZentroSEO's terms of service. Read our complete terms and conditions including acceptable use, liability, dispute resolution, and more.",
    lastUpdated: "March 18, 2026",
    sections: [
      {
        title: "Acceptance of Terms",
        content: "By accessing or using ZentroSEO's website, platform, or any related services (collectively, the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to all of these Terms, you must not access or use the Service. These Terms constitute a legally binding agreement between you and ZentroSEO. Your continued use of the Service after any modifications to these Terms constitutes acceptance of the revised Terms."
      },
      {
        title: "Description of Service",
        content: "ZentroSEO provides an AI-powered SEO platform including, but not limited to, website auditing, keyword research, rank tracking, content optimization, backlink analysis, schema markup generation, SERP simulation, internal link analysis, and related SEO tools and reporting features. The specific features available to you depend on your subscription plan. We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice."
      },
      {
        title: "Eligibility",
        content: "You must be at least 18 years of age (or the age of legal majority in your jurisdiction) to use the Service. By using ZentroSEO, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms. If you are using the Service on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms, in which case \"you\" refers to that entity."
      },
      {
        title: "Account Registration and Security",
        content: "To access certain features of the Service, you must create an account. You agree to:\n\n• Provide accurate, current, and complete registration information.\n• Maintain and promptly update your account information to keep it accurate.\n• Maintain the security and confidentiality of your login credentials.\n• Immediately notify us of any unauthorized use of your account.\n• Accept responsibility for all activities that occur under your account.\n\nWe reserve the right to suspend or terminate accounts that contain inaccurate information or that we reasonably believe have been compromised."
      },
      {
        title: "Subscription, Billing, and Taxes",
        content: "Paid plans are billed on a monthly or annual basis as selected at the time of purchase. By subscribing to a paid plan, you authorize us to charge your designated payment method on a recurring basis until you cancel.\n\n• Pricing: All prices are listed in USD unless otherwise stated. We reserve the right to change pricing with at least 30 days' prior notice. Price changes will apply to your next billing cycle after the notice period.\n\n• Taxes: You are responsible for all applicable taxes, duties, and levies associated with your subscription. If we are required to collect taxes, they will be added to your invoice.\n\n• Failed Payments: If a payment fails, we will attempt to charge your payment method again. After multiple failed attempts, your account may be downgraded or suspended.\n\n• Upgrades and Downgrades: Plan changes take effect at the start of your next billing cycle unless otherwise specified. Upgrades may be prorated for the remainder of the current billing period."
      },
      {
        title: "Free Trials and Promotional Offers",
        content: "We may offer free trials or promotional pricing at our discretion. Free trial terms, duration, and feature access will be specified at the time of enrollment. Unless you cancel before the trial period ends, your payment method will be charged at the standard subscription rate. Promotional offers are subject to specific terms communicated at the time of the offer and may not be combined with other discounts. We reserve the right to modify or discontinue free trial offers at any time."
      },
      {
        title: "Acceptable Use Policy",
        content: "You agree to use ZentroSEO only for lawful purposes and in accordance with these Terms. You may not:\n\n• Use the Service to violate any applicable local, state, national, or international law or regulation.\n• Scrape, crawl, or audit websites that you do not own or do not have explicit authorization to analyze.\n• Attempt to gain unauthorized access to any part of the Service, other accounts, computer systems, or networks.\n• Reverse-engineer, decompile, disassemble, or attempt to derive the source code of the Service.\n• Use the Service to transmit malware, viruses, or other malicious code.\n• Interfere with or disrupt the integrity or performance of the Service or its underlying infrastructure.\n• Use automated tools (bots, scripts) to access the Service in a manner that exceeds reasonable use or circumvents rate limits.\n• Resell, sublicense, or redistribute access to the Service without our prior written consent.\n• Use the Service to generate spam, unsolicited communications, or engage in any deceptive practices.\n• Impersonate any person or entity or misrepresent your affiliation with a person or entity.\n\nViolation of this Acceptable Use Policy may result in immediate suspension or termination of your account without refund."
      },
      {
        title: "Intellectual Property Rights",
        content: "ZentroSEO and its original content, features, functionality, branding, logos, and documentation are owned by ZentroSEO and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.\n\nYour subscription grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes during your subscription term. This license does not include the right to:\n\n• Modify, copy, or create derivative works based on the Service.\n• Use ZentroSEO's trademarks, logos, or branding without prior written consent.\n• Remove or alter any proprietary notices from the Service."
      },
      {
        title: "User Content and Data Ownership",
        content: "You retain all ownership rights to the data you submit to ZentroSEO, including website URLs, content, and configurations (\"User Content\"). By using the Service, you grant us a limited, non-exclusive license to process your User Content solely for the purpose of providing and improving the Service.\n\nYou represent and warrant that you have the right to submit your User Content and that it does not infringe upon the rights of any third party.\n\nSEO reports, audit results, and recommendations generated by ZentroSEO based on your User Content are provided for your use and may be exported. However, the underlying algorithms, methodologies, and scoring systems remain our intellectual property."
      },
      {
        title: "Indemnification",
        content: "You agree to indemnify, defend, and hold harmless ZentroSEO, its officers, directors, employees, agents, licensors, and service providers from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:\n\n• Your use or misuse of the Service.\n• Your violation of these Terms.\n• Your violation of any applicable law or regulation.\n• Your User Content or your use of data obtained through the Service.\n• Any claim that your User Content infringes or misappropriates the intellectual property rights of a third party.\n\nThis indemnification obligation survives the termination of these Terms and your use of the Service."
      },
      {
        title: "Disclaimer of Warranties",
        content: "THE SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY LAW, ZENTROSEO DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:\n\n• IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.\n• WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.\n• WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF SEO RECOMMENDATIONS, AUDIT RESULTS, OR RANKING PREDICTIONS.\n\nZentroSEO provides SEO analysis and recommendations based on automated algorithms and publicly available data. We do not guarantee specific search engine ranking results, traffic increases, or business outcomes."
      },
      {
        title: "Limitation of Liability",
        content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:\n\n• IN NO EVENT SHALL ZENTROSEO, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY.\n\n• ZENTROSEO'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID TO ZENTROSEO IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).\n\n• THESE LIMITATIONS APPLY EVEN IF ZENTROSEO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.\n\nSome jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you."
      },
      {
        title: "Dispute Resolution and Arbitration",
        content: "PLEASE READ THIS SECTION CAREFULLY — IT AFFECTS YOUR LEGAL RIGHTS.\n\n• Informal Resolution: Before filing any formal dispute, you agree to contact us at legal@zentroseo.com and attempt to resolve the dispute informally for at least 30 days.\n\n• Binding Arbitration: Any dispute, claim, or controversy arising out of or relating to these Terms or the Service that cannot be resolved informally shall be resolved by binding arbitration, rather than in court. The arbitration shall be conducted under the rules of the International Chamber of Commerce (ICC) or a mutually agreed alternative arbitration body.\n\n• Class Action Waiver: YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. If this class action waiver is found to be unenforceable, then the entirety of this arbitration provision shall be null and void.\n\n• Small Claims Exception: Notwithstanding the above, either party may bring an individual action in small claims court for disputes within the court's jurisdictional limits.\n\n• Opt-Out: You may opt out of this arbitration provision by sending written notice to legal@zentroseo.com within 30 days of first accepting these Terms."
      },
      {
        title: "Governing Law and Jurisdiction",
        content: "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles. To the extent that arbitration does not apply, you consent to the exclusive jurisdiction and venue of the state and federal courts located in Delaware for the resolution of any disputes.\n\nIf you are located in the European Union, nothing in these Terms affects your rights as a consumer under mandatory local laws, including the right to bring proceedings in the courts of your country of residence."
      },
      {
        title: "Export Controls and Sanctions",
        content: "You agree to comply with all applicable export control laws and trade sanctions regulations. You may not use, export, re-export, or transfer the Service or any related technical data in violation of any applicable export control laws or sanctions, including those maintained by the United States, the European Union, the United Kingdom, or any other relevant jurisdiction. You represent that you are not located in, under the control of, or a national or resident of any country subject to comprehensive trade sanctions."
      },
      {
        title: "Force Majeure",
        content: "ZentroSEO shall not be liable for any failure or delay in performance of its obligations under these Terms arising out of or caused by circumstances beyond its reasonable control, including but not limited to: natural disasters, acts of war or terrorism, epidemics or pandemics, government actions, power failures, internet or telecommunications failures, cyberattacks, or third-party service provider outages."
      },
      {
        title: "Severability and Waiver",
        content: "If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.\n\nThe failure of ZentroSEO to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of ZentroSEO."
      },
      {
        title: "Modifications to Terms",
        content: "We reserve the right to modify these Terms at any time. When we make material changes, we will:\n\n• Update the \"Last Updated\" date at the top of these Terms.\n• Notify you via email or a prominent notice on the Service at least 30 days before the changes take effect.\n• Provide you with the opportunity to review the changes before they become effective.\n\nYour continued use of the Service after the effective date of revised Terms constitutes acceptance. If you do not agree with the revised Terms, you must stop using the Service and may cancel your subscription."
      },
      {
        title: "Termination",
        content: "We may suspend or terminate your access to the Service immediately, without prior notice or liability, if you breach any provision of these Terms. You may cancel your account at any time through your account settings or by contacting support@zentroseo.com.\n\nUpon termination:\n\n• Your right to access and use the Service will cease immediately.\n• We may delete your account data after a 30-day grace period, unless retention is required by law.\n• Provisions that by their nature should survive termination shall survive, including but not limited to: Indemnification, Limitation of Liability, Dispute Resolution, and Governing Law."
      },
      {
        title: "Contact",
        content: "For questions about these Terms of Service, please contact us:\n\n• Legal Inquiries: legal@zentroseo.com\n• General Support: support@zentroseo.com"
      },
    ],
  },
  "refund-policy": {
    slug: "refund-policy",
    title: "Refund Policy",
    metaTitle: "Refund Policy - ZentroSEO",
    metaDescription: "ZentroSEO's refund policy. Understand our 14-day money-back guarantee, annual plan refunds, and cancellation terms.",
    lastUpdated: "March 18, 2026",
    sections: [
      {
        title: "Overview",
        content: "At ZentroSEO, we want you to be fully satisfied with our service. This Refund Policy outlines the terms and conditions for refunds on our subscription plans. Please read it carefully before making a purchase. By subscribing to ZentroSEO, you agree to the refund terms described below."
      },
      {
        title: "14-Day Money-Back Guarantee",
        content: "We offer a 14-day money-back guarantee on all first-time subscription purchases. If you are not satisfied with ZentroSEO for any reason within 14 days of your initial subscription purchase, you may request a full refund.\n\nThis guarantee applies to:\n\n• First-time monthly subscriptions.\n• First-time annual subscriptions.\n\nThis guarantee does not apply to subscription renewals, plan upgrades after the initial 14-day period, or accounts that have been suspended for Terms of Service violations."
      },
      {
        title: "Annual Plan Pro-Rata Refunds",
        content: "If you have an annual subscription and wish to cancel after the 14-day money-back guarantee period, you may be eligible for a pro-rata refund of the unused portion of your subscription, calculated as follows:\n\n• The refund amount equals the annual fee minus the cost of the months used at the standard monthly rate.\n• Pro-rata refunds are available only within the first 6 months of an annual subscription.\n• After 6 months, annual subscriptions are non-refundable for the remainder of the billing period, though you retain access until the end of your paid term.\n\nExample: If you paid $240/year and cancel after 3 months, your refund would be $240 minus (3 × $29/month standard rate) = $240 - $87 = $153."
      },
      {
        title: "Non-Refundable Items",
        content: "The following are not eligible for refunds:\n\n• Monthly subscription renewals after the initial 14-day guarantee period.\n• Annual subscription renewals (a new 14-day window applies to the first subscription only).\n• Plan upgrades or add-on purchases made after the initial 14-day period.\n• Accounts terminated for violation of our Terms of Service or Acceptable Use Policy.\n• Unused credits, tokens, or API usage allocations within your billing period."
      },
      {
        title: "How to Request a Refund",
        content: "To request a refund:\n\n1. Email billing@zentroseo.com from the email address associated with your ZentroSEO account.\n2. Include your account email, subscription type (monthly or annual), and the reason for your refund request.\n3. Our billing team will review your request and respond within 2 business days.\n\nRefund requests must be submitted within the eligible refund window as described in this policy."
      },
      {
        title: "Refund Processing Timeline",
        content: "Once your refund request is approved:\n\n• Credit/Debit Card Payments: Refunds are processed within 5–10 business days. The exact timing depends on your bank or card issuer.\n• The refund will be credited to the original payment method used for the purchase.\n• You will receive an email confirmation once the refund has been initiated.\n\nPlease note that processing times are determined by your financial institution and may vary."
      },
      {
        title: "Chargebacks",
        content: "We encourage you to contact us directly at billing@zentroseo.com before initiating a chargeback with your bank or credit card company. We are committed to resolving billing disputes promptly and fairly.\n\nIf a chargeback is filed without first contacting us:\n\n• Your ZentroSEO account may be immediately suspended pending resolution.\n• We will provide evidence of the valid subscription and service delivery to the payment processor.\n• Accounts associated with fraudulent or abusive chargebacks may be permanently terminated.\n\nFiling a chargeback does not relieve you of your obligations under these Terms."
      },
      {
        title: "Cancellation and Access",
        content: "You can cancel your subscription at any time through your account settings or by contacting support@zentroseo.com.\n\nUpon cancellation:\n\n• You will retain access to all paid features until the end of your current billing period.\n• Your account will be downgraded to a free plan (if available) after the billing period ends.\n• Your data will be retained for 30 days after the end of your billing period, after which it may be permanently deleted.\n• You will not be charged for subsequent billing periods after cancellation.\n\nCancellation does not entitle you to a refund unless it falls within the eligible refund windows described above."
      },
      {
        title: "Contact",
        content: "For billing questions, refund requests, or payment issues, please contact us:\n\n• Billing Support: billing@zentroseo.com\n• General Support: support@zentroseo.com\n\nWe aim to respond to all billing inquiries within 2 business days."
      },
    ],
  },
};

export function getLegalPage(slug: string): LegalPageData | null {
  const base = legalPages[slug];
  if (!base) return null;
  return {
    ...base,
    title: td(`legal.${slug}.title`, base.title),
    metaTitle: td(`legal.${slug}.metaTitle`, base.metaTitle),
    metaDescription: td(`legal.${slug}.metaDescription`, base.metaDescription),
    sections: base.sections.map((s, i) => ({
      title: td(`legal.${slug}.section${i}.title`, s.title),
      content: td(`legal.${slug}.section${i}.content`, s.content),
    })),
  };
}
