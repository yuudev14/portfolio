import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "python", label: "Python", category: "languages" },
  { name: "go", label: "Go", category: "languages" },
  { name: "sql", label: "SQL", category: "languages" },
  { name: "typescript", label: "TypeScript", category: "languages" },
  { name: "javascript", label: "JavaScript", category: "languages" },
  { name: "html", label: "HTML", category: "languages" },
  { name: "css", label: "CSS", category: "languages" },

  // Backend
  { name: "fastapi", label: "FastAPI", category: "backend" },
  { name: "gin", label: "Gin", category: "backend" },
  { name: "nodejs", label: "Node.js", category: "backend" },
  { name: "expressjs", label: "Express.js", category: "backend" },

  // Frontend
  { name: "nextjs", label: "Next.js", category: "frontend" },
  { name: "reactjs", label: "React.js", category: "frontend" },
  { name: "materialui", label: "Material UI", category: "frontend" },
  { name: "tailwindcss", label: "Tailwind CSS", category: "frontend" },

  // Database & Messaging
  { name: "postgresql", label: "PostgreSQL", category: "database" },
  { name: "redis", label: "Redis", category: "database" },
  { name: "rabbitmq", label: "RabbitMQ", category: "database" },
  { name: "mongodb", label: "MongoDB", category: "database" },
  { name: "celery", label: "Celery", category: "database" },

  // Infrastructure & Tools
  { name: "docker", label: "Docker", category: "infrastructure" },
  { name: "kubernetes", label: "Kubernetes", category: "infrastructure" },
  { name: "jenkins", label: "Jenkins", category: "infrastructure" },
  { name: "git", label: "Git", category: "infrastructure" },
  { name: "github", label: "GitHub", category: "infrastructure" },
];
