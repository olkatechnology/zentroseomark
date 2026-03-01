import tomisinPhoto from "@/assets/tomisin-sode.png";
import olayinkaPhoto from "@/assets/olayinka-olayokun.png";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  authorSlug: string;
  jobTitle: string;
  knowsAbout: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
  };
  sameAs: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Tomisin Sode",
    role: "CEO & Co-founder",
    authorSlug: "tomisin-sode",
    jobTitle: "CEO & Co-founder",
    knowsAbout: [
      "Digital Transformation",
      "Business Strategy",
      "Data Analytics",
      "SEO Strategy",
      "Business Development",
      "Product Management",
    ],
    bio: "Tomisin is a global business leader and analyst with over 10 years of experience driving digital transformation across industries. He leads ZentroSEO's vision and strategy, combining deep expertise in data analytics and business development with a passion for making technology accessible. His mission is to democratize SEO for non-technical users worldwide, ensuring every business — from solo freelancers to growing agencies — can compete in organic search without enterprise budgets.",
    photo: tomisinPhoto,
    socials: {
      linkedin: "https://www.linkedin.com/in/tomisinsode/",
      twitter: "https://x.com/tomisinsode",
    },
    sameAs: [
      "https://www.linkedin.com/in/tomisinsode/",
      "https://x.com/tomisinsode",
    ],
  },
  {
    name: "Olayinka Olayokun",
    role: "CTO & Co-founder",
    authorSlug: "olayinka-olayokun",
    jobTitle: "CTO & Co-founder",
    knowsAbout: [
      "Software Engineering",
      "Machine Learning",
      "Technical SEO",
      "Schema Markup",
      "Web Performance",
      "Semantic SEO",
      "Entity-Based SEO",
      "AI-Powered SEO",
    ],
    bio: "Olayinka is a product specialist and marketing professional with over 10 years of experience in software engineering, machine learning, and web technologies. He leads the engineering team, architecting ZentroSEO's AI-powered SEO engine from the ground up. His expertise ensures the platform delivers fast, accurate, and actionable SEO insights — from automated audits and schema deployment to real-time performance monitoring and intelligent content optimization.",
    photo: olayinkaPhoto,
    socials: {
      linkedin: "https://www.linkedin.com/in/olayinkaolayokun/",
      twitter: "https://x.com/olayinkaolayokun",
    },
    sameAs: [
      "https://www.linkedin.com/in/olayinkaolayokun/",
      "https://x.com/olayinkaolayokun",
    ],
  },
];
