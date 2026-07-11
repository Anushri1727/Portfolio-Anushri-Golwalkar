export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Core Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"]
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Material UI (v5)", "Tailwind CSS", "Bootstrap"]
  },
  {
    name: "State Management",
    skills: ["Redux", "Zustand", "Context API"]
  },
  {
    name: "Build & Tooling",
    skills: ["Vite", "Webpack", "Git", "GitHub", "VS Code", "Figma"]
  },
  {
    name: "API & Integration",
    skills: ["REST APIs", "Axios", "WebSocket", "Postman"]
  },
  {
    name: "Backend Exposure",
    skills: ["Node.js", "Express.js", "MySQL"]
  },
  {
    name: "Cloud / DevOps",
    skills: ["AWS S3", "Docker", "CI/CD pipelines"]
  }
];
