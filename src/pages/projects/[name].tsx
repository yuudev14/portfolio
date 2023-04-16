import React, { useEffect, useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import requireContext from "require-context.macro";
import { Project, projects } from "@/resources/projects";
import { projectsType } from "@/types/global";
import { GetServerSideProps } from "next";
import { Props } from "next/script";
import path from "path";
import fs from "fs";

interface ProjectProps {
  imagePaths: string[];
  slug: string;
}

const Project: React.FC<ProjectProps> = ({ imagePaths, slug }) => {
  const [projectDetail, setProjectDetail] = useState<Project>({
    slug: "",
    images: "",
    name: "",
    description: "",
    demo: null,
    github: null,
    type: "freelance",
    tech: [],
  });
  useEffect(() => {
    const projectDetail = projects.filter((proj) => proj.slug === slug)[0];
    setProjectDetail(projectDetail);
  }, []);
  return (
    <main className="relative w-full min-h-screen max-w-[980px] m-auto px-3 overflow-hidden flex mb-[100px] flex-col gap-20">
      <figure className="w-full rounded-br-[30px] rounded-bl-[30px] overflow-hidden shadow-md shadow-[#12ffb071]">
        {"images" in projectDetail && (
          <Image
            src={`/${projectDetail.images}`}
            className="min-h-full min-w-full object-cover"
            alt="skill"
            height={300}
            width={300}
            unoptimized
          />
        )}
      </figure>
      <div className="">
        <h2 className="border-b-2 font-bold text-[40px] md:text-[50px] leading[70px] text-white">
          {projectDetail.name}
        </h2>
      </div>
      <ul>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3 }}>
          <Masonry>
            {imagePaths.map((image) => (
              <li className="m-3 overflow-hidden mb-12" key={image}>
                <Image
                  src={image}
                  className="min-h-full min-w-full object-cover"
                  alt="project image"
                  height={300}
                  width={300}
                />
              </li>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </ul>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name } = ctx.params!;
  const publicDir = path.join(process.cwd(), "public");
  const imagesDir = path.join(publicDir, "images/projects/" + name);
  const imageFileNames = fs.readdirSync(imagesDir);
  const imagePaths = imageFileNames.map(
    (fileName) => `/images/projects/${name}/${fileName}`
  );

  console.log(imagePaths);

  return {
    props: {
      imagePaths,
      slug: name,
    },
  };
};
export default Project;
