export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  points: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "digiwagon",
    role: "Software Engineer (Frontend)",
    company: "Digiwagon Technologies",
    date: "Sep 2023 – Present",
    points: [
      "Led frontend architecture for 5+ enterprise and SaaS products using React.js, Redux, and Context API; established reusable component libraries reducing development time across projects.",
      "Delivered complex dashboards with MUI charts, real-time data visualization, CSV/PDF export, and advanced multi-filter UIs for data-intensive enterprise platforms.",
      "Built OTP-based authentication, JWT session management, role-based access control, and protected route patterns used across multi-tenant SaaS products.",
      "Developed interactive eBook reader interface with integrated calculators, dynamic content delivery, and payment flow using Razorpay/Stripe.",
      "Collaborated with UX/design (Figma) and backend teams to translate requirements into pixel-accurate, accessible, and performant UIs.",
      "Maintained CI/CD deployments on AWS EC2 and managed static assets on S3."
    ]
  },
  {
    id: "pninfosys",
    role: "Frontend Developer",
    company: "PNInfosys, Gwalior",
    date: "Jul 2022 – Sep 2023",
    points: [
      "Built responsive, cross-browser web interfaces using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap.",
      "Integrated REST APIs to power dynamic data-driven components with form validation, error handling, and real-time updates.",
      "Worked closely with backend developers to define API contracts and improve data-rendering performance."
    ]
  }
];

export const educationData = {
  degree: "B.Tech — Computer Science Engineering",
  date: "2018 – 2022",
  grade: "CGPA: 8.6 / 10"
};
