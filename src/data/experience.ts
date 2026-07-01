import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    organization: "Rakuten Mobile",
    role: "Software Engineer",
    date: "05/2022 - Present",
    location: "Tokyo, Japan",
    type: "work",
    description:
      "Built an AI Gateway for internal LLM workloads, OAuth2/OIDC auth across 10+ microservices, and SOAR/UEBA/threat-intel tooling for the Security Operations Center; improved API performance ~80% through query tuning and caching.",
    tech: [
      "Go",
      "Python",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Jenkins",
      "OAuth2/OIDC",
      "CI/CD",
    ],
    color: "var(--chart-2)",
  },
  {
    organization: "Sustainability Page",
    role: "Frontend Engineer (Part Time)",
    date: "09/2023 - 05/2024",
    location: "Japan",
    type: "work",
    description:
      "Led frontend architecture for a production web platform, collaborated with backend engineers on API design, and shipped features end-to-end with rendering and data-fetching optimizations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "var(--chart-3)",
  },
  {
    organization: "Code Chrysalis",
    role: "Student",
    date: "2021 - 2021",
    location: "Tokyo, Japan",
    type: "education",
    description: "Full Stack Engineering with Agile Methodology",
    tech: [
 
    ],
    color: "var(--chart-1)",
  },
  {
    organization: "Technological Institute of the Philippines",
    role: "Computer Engineering Student",
    date: "2018 - 2019",
    location: "Quezon City, Philippines",
    type: "education",
    description:
      "Basic Programming, Database Management System, Data Structures and Algorithms",
    tech: [],
    color: "var(--chart-1)",
  },
];
