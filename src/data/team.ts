export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  authorSlug: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Tomisin Sode",
    role: "CEO & Co-founder",
    authorSlug: "tomisin-sode",
    bio: "Tomisin is a global business leader and analyst with over 10 years of experience driving digital transformation across industries. He leads ZentroSEO's vision and strategy, combining deep expertise in data analytics and business development with a passion for making technology accessible. His mission is to democratize SEO for non-technical users worldwide, ensuring every business — from solo freelancers to growing agencies — can compete in organic search without enterprise budgets.",
    photo: "https://secure.gravatar.com/avatar/5e0ed3b5c6f2a1d4c8b9f0e3a7d6c5b4?s=200&d=mm&r=g",
    socials: {
      linkedin: "https://www.linkedin.com/in/tomisinsode/",
      twitter: "https://x.com/tomisinsode",
    },
  },
  {
    name: "Olayinka Olayokun",
    role: "CTO & Co-founder",
    authorSlug: "olayinka-olayokun",
    bio: "Olayinka is a product specialist and marketing professional with over 10 years of experience in software engineering, machine learning, and web technologies. He leads the engineering team, architecting ZentroSEO's AI-powered SEO engine from the ground up. His expertise ensures the platform delivers fast, accurate, and actionable SEO insights — from automated audits and schema deployment to real-time performance monitoring and intelligent content optimization.",
    photo: "https://secure.gravatar.com/avatar/f200f0a5fb0ac1f87435065c46f6f3243d4d4b5b1d12e325b50db3373d852af6?s=200&d=mm&r=g",
    socials: {
      linkedin: "https://www.linkedin.com/in/olayinkaolayokun/",
      twitter: "https://x.com/olayinkaolayokun",
    },
  },
];
