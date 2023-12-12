import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import path from "path";
import fs from "fs";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Project, projects } from "@/resources/projects";

import { FaArrowLeft } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
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
    <Suspense fallback={<div>Loading...</div>}>
      <main className="relative w-full min-h-screen max-w-[980px] m-auto px-3 overflow-hidden flex mb-[100px] flex-col">
        <figure className="w-full max-h-[451px] rounded-br-[30px] rounded-bl-[30px] overflow-hidden shadow-md">
          <Image
            src={`/${projectDetail.images}`}
            className="min-h-full min-w-full object-cover"
            alt="skill"
            height={300}
            width={300}
            unoptimized
          />
        </figure>
        <div className="mt-12 py-3">
          <h2 className="border-b-2 border-b-text_light_neon font-bold text-[40px] md:text-[50px] leading[70px] text-text_light_neon">
            {projectDetail.name}
          </h2>
          <p className="text-text_light_bluish text-lg">
            {projectDetail.description}
          </p>
          <ul className="mt-5 flex gap-3 flex-wrap mb-2 text-lg">
            {projectDetail.tech.map((Icon, x) => (
              <Icon key={`project-${x}`} className="text-[#6288b4]" />
            ))}
          </ul>
          <div className="mt-12 flex justify-between items-center">
            {projectDetail.demo && (
              <a
                className="text-[#15513d] bg-[#12ffb0] px-2 rounded-md"
                href={projectDetail.demo}
                target="_blank">
                <span>demo</span>
              </a>
            )}
            {projectDetail.github && (
              <a href={projectDetail.github} target="_blank">
                <BsGithub className="text-[#6288b4] mr-auto text-xl cursor-pointer" />
              </a>
            )}
          </div>
        </div>
        <div className="border-t-2 pt-12 border-t-text_light_neon">
          <h2 className="font-bold text-[20px] leading[70px] text-text_light_neon text-center">
            Gallery
          </h2>

          <ul className="border-b-2 border-b-text_light_neon">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3 }}>
              <Masonry>
                {imagePaths.map((image) => (
                  <li
                    className="m-1 mb-5 md:m-3 overflow-hidden md:mb-12 shadow-md"
                    key={image}>
                    <Image
                      src={image}
                      className="min-h-full min-w-full object-cover"
                      alt="project image"
                      height={300}
                      width={300}
                      loading="lazy"
                    />
                  </li>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </ul>
        </div>

        <Link
          href="/"
          className="w-[50px] flex justify-center text-primary_dark items-center h-[50px] bg-primary rounded-full shadow-md shadow-primary_dark cursor-pointer fixed top-2 ml-2">
          <FaArrowLeft />
        </Link>
      </main>
    </Suspense>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
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
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
      props: {},
    };
  }
};
export default Project;
