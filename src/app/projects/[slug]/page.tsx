import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { TerminalWindow } from "@/components/terminal/terminal-window";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

async function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Link
          href="/projects"
          className="font-mono text-sm text-muted-foreground hover:text-primary"
        >
          &lt; back to ~/projects
        </Link>

        <div className="mt-6">
          <TerminalWindow title={`yu@portfolio: ~/projects/${project.slug}`}>
            <Image
              src={project.previewImage}
              alt={`Preview of ${project.name}`}
              width={960}
              height={540}
              className="w-full rounded-md border border-border"
            />
            <h1 className="font-heading mt-6 border-b border-border pb-3 text-2xl font-semibold text-foreground">
              {project.name}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="font-mono text-[0.7rem]">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.demoUrl && (
                <Button
                  render={
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  &gt; view_demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  render={
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  <FaGithub /> source
                </Button>
              )}
            </div>
          </TerminalWindow>
        </div>
      </main>
      <Footer />
    </>
  );
}
