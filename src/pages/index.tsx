import { Inter } from "next/font/google";
import ProjectLists from "@/components/pages/index/ProjectList";
import Timeline from "@/components/pages/index/Timeline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full max-w-[1080px] m-auto px-3 overflow-hidden flex flex-col gap-16">
      <section>
        <div className="relative">
          <h1 className="font-bold text-[70px] leading[70px] text-white">
            {"Hi, I'm Yu Takaki"}
          </h1>
          <h2 className="text-[#15513d] text-lg bg-[#12ffb0] w-max px-2 font-medium">
            Full Stack Software Engineer
          </h2>
        </div>
      </section>
      <Timeline />
      <ProjectLists />
    </main>
  );
}
