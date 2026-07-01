export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "facebook";
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string[];
  photo: string;
  socials: SocialLink[];
}

export type SkillCategory =
  | "languages"
  | "backend"
  | "frontend"
  | "database"
  | "infrastructure";

export interface Skill {
  name: string;
  label: string;
  category: SkillCategory;
}

export type ExperienceType = "work" | "volunteer" | "education";

export interface ExperienceEntry {
  organization: string;
  role: string;
  date: string;
  location: string;
  type: ExperienceType;
  description: string;
  tech: string[];
  color: string;
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

export type ProjectType = "freelance" | "personal";

export interface Project {
  slug: string;
  name: string;
  description: string;
  type: ProjectType;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  previewImage: string;
}
