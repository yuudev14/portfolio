import { Inter } from "next/font/google";
import ProjectLists from "@/components/pages/index/ProjectLists";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full max-w-[1080px] m-auto px-3">
      <section>
        <div>
          <h1 className=" font-bold text-[40px] leading[70px]">
            {"Hi, I'm Yu Takaki"}
          </h1>
          <h2 className="text-gray-400">Full Stack Software Engineer</h2>
        </div>
      </section>
      <ProjectLists />
    </main>
  );
}
