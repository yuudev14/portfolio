import { Suspense } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import ProjectLists from "@/components/pages/index/ProjectLists";
import Timeline from "@/components/pages/index/Timeline";
import Banner from "@/components/pages/index/Banner";
import AboutMe from "@/components/pages/index/AboutMe";
import Skills from "@/components/pages/index/Skills";
import Contact from "@/components/pages/index/Contact";
import Menu from "@/components/common/Menu";
import Socials from "@/components/pages/index/Socials";
import Footer from "@/components/pages/index/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yu Takaki</title>
        <meta property="og:site_name" content="Yu Takaki" />
        <meta name="description" content="Yu Takaki's Portfolio" />
        <meta property="og:image" content="/images/banner.png" />
        <meta
          name="keywords"
          content="yu, yu takaki, takaki, yu's portfolio, yu developer"
        />
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="relative w-full max-w-[1080px] m-auto px-3 overflow-hidden flex mb-[100px] flex-col gap-32">
          {/* <Header /> */}
          <Banner />
          <Skills />
          <Timeline />
          <ProjectLists />
          <AboutMe />
          <Contact />
          <Menu />
          <Socials />
          <Footer />
        </main>
      </Suspense>
    </>
  );
}
