import { Inter } from "next/font/google";
import ProjectLists from "@/components/pages/index/ProjectList";
import Timeline from "@/components/pages/index/Timeline";
import Banner from "@/components/pages/index/Banner";
import AboutMe from "@/components/pages/index/AboutMe";
import Header from "@/components/common/Header";
import Skills from "@/components/pages/index/Skills";
import Contact from "@/components/pages/index/Contact";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
      <main className="w-full max-w-[1080px] m-auto px-3 overflow-hidden flex mb-[100px] flex-col gap-16">
        <Header />
        <Banner />
        <Skills />
        <Timeline />
        <ProjectLists />
        <AboutMe />
        <Contact />
      </main>
    </>
  );
}
