export interface Project {
  slug: string;
  name: string;
  techStack: string[];
  shortDescription: string;
  fullDescription: string[];
  role: string;
  outcome?: string;
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    slug: "kyc-identity-saas",
    name: "KYC / Identity Verification SaaS",
    techStack: ["React", "MUI", "Redux", "REST APIs"],
    shortDescription: "Admin Dashboard & Module Builder for fintechs and NBFCs.",
    fullDescription: [
      "Built component-driven admin dashboards, module builders, and verification template designers enabling multi-tenant KYC workflow configuration for fintechs and NBFCs.",
      "Implemented dynamic forms, state-managed workflow builders, and session orchestration UIs with complex nested routing."
    ],
    role: "Frontend Software Engineer",
    image: "/projects/kyc-identity-saas.png"
  },
  {
    slug: "kms-ebooks",
    name: "KMS eBooks Platform",
    techStack: ["React", "Tailwind CSS", "REST APIs", "Razorpay"],
    shortDescription: "Reader UI & Admin Dashboard with integrated payment flows.",
    fullDescription: [
      "Designed and developed a dynamic eBook reader interface, integrated calculators (GST, Income Tax), book discovery pages, and a complete admin content management dashboard.",
      "Implemented PCI-DSS compliant checkout flow and entitlement-based content access controls on the frontend."
    ],
    role: "Frontend Software Engineer",
    image: "/projects/kms-ebooks.png"
  },
  {
    slug: "ul-intel",
    name: "UL Intel",
    techStack: ["React", "MUI", "Context API"],
    shortDescription: "Product Analytics & Comparison Platform.",
    fullDescription: [
      "Built analytics dashboards with MUI charts, product comparison tables, and filter-driven views; added one-click PDF export of visual reports.",
      "Implemented OTP authentication, dynamic route protection, and Intel–Sensory module handoff with deep-linked navigation."
    ],
    role: "Frontend Software Engineer",
    image: "/projects/ul-intel.png"
  },
  {
    slug: "xanado",
    name: "Xanado",
    techStack: ["React", "REST APIs", "SCSS"],
    shortDescription: "B2B International Trade Marketplace.",
    fullDescription: [
      "Developed purchase/sell order management modules, buyer wallet UI, license compliance forms, and warehouse management screens.",
      "Implemented multi-step authentication flows ensuring secure and compliant operations for international traders."
    ],
    role: "Frontend Software Engineer",
    image: "/projects/xanado.png"
  },
  {
    slug: "ul-search",
    name: "UL Search",
    techStack: ["React", "MUI", "REST APIs"],
    shortDescription: "GPT-Enabled Enterprise Search Platform.",
    fullDescription: [
      "Built search analytics dashboard, feedback UIs, and data export flows; integrated search API and statistics reporting with real time updates."
    ],
    role: "Frontend Software Engineer",
    image: "/projects/ul-search.png"
  },
  {
    slug: "tractor-seva",
    name: "Tractor Seva",
    techStack: ["React", "Node.js", "MySQL"],
    shortDescription: "Multi-Portal Service Platform.",
    fullDescription: [
      "Developed three distinct React frontends (Admin, Workshop, Customer) with responsive layouts and full API integration."
    ],
    role: "Frontend Software Engineer",
    image: "/projects/tractor-seva.png"
  }
];
