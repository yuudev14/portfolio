import { Inter } from "next/font/google";
import ProjectLists from "@/components/pages/index/ProjectList";
import Timeline from "@/components/pages/index/Timeline";
import Banner from "@/components/pages/index/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full max-w-[1080px] m-auto px-3 overflow-hidden flex mb-[100px] flex-col gap-16">
      <Banner />
      <Timeline />
      <ProjectLists />
    </main>
  );
}
