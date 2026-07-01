import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Socials } from "@/components/layout/socials";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <About />
        <Contact />
      </main>
      <Socials />
      <Footer />
    </>
  );
}
