import { projects } from "@/resources/projects";
import { Variants, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { projectsType } from "@/types/global";

const ProjectLists = () => {
  const [filter, setFilter] = useState("all");
  const [_projects, setProjects] = useState<projectsType>(projects);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const initialVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
  };

  useEffect(() => {
    setProjects(
      filter === "all"
        ? projects
        : projects.filter((proj) => proj.type === filter)
    );
  }, [filter]);
  return (
    <section ref={ref} id="projects" className="w-full min-h-screen">
      <h2 className=" font-bold text-[40px] md:text-[50px] leading[70px] text-white">
        Projects
      </h2>
      <div className="m-auto w-max flex gap-4 mt-8">
        <button
          className={`rounded-md font-bold text-xl text-[#cde8f7] border border-transparent transition hover:border-[#12ffb0] p-2 ${
            filter === "all" ? "bg-[#12ffb0] !text-[#15513d]" : ""
          }`}
          onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className={`rounded-md font-bold text-xl text-[#cde8f7] border border-transparent transition hover:border-[#12ffb0] p-2 ${
            filter === "freelance" ? "bg-[#12ffb0] !text-[#15513d]" : ""
          }`}
          onClick={() => setFilter("freelance")}>
          Freelance
        </button>
        <button
          className={`rounded-md font-bold text-xl text-[#cde8f7] border border-transparent transition hover:border-[#12ffb0] p-2 ${
            filter === "personal" ? "bg-[#12ffb0] !text-[#15513d]" : ""
          }`}
          onClick={() => setFilter("personal")}>
          Personal
        </button>
      </div>

      <motion.ul
        // className="flex flex-wrap items-start"
        variants={initialVariants}
        animate={isInView ? "visible" : "hidden"}
        className="px-7 xs:px-0 grid grid-cols-1 xs:grid-cols-2 mt-7 md:grid-cols-3 gap-10 xs:gap-3 w-full max-w-[868px] m-auto">
        {_projects.map((proj, i) => (
          // <List
          //   key={`project-${i}`}
          //   proj={proj}
          //   index={i}
          //   isInView={isInView}
          // />
          <motion.div
            key={`project-${i}`}
            className="rounded-[15px] overflow-hidden flex flex-col">
            <figure className="max-w-full aspect-[1/.8] align-middle">
              <Image
                src={`/${proj.images}`}
                className="min-h-full min-w-full object-cover"
                alt="skill"
                height={300}
                width={300}
              />
            </figure>
            <motion.div className="bg-[#17202b] py-3 px-4 flex-1 flex gap-2 flex-col">
              <h1 className="text-white font-semibold">{proj.name}</h1>
              <p className="text-sm text-[#7298c6]">{proj.description}</p>
              <ul className="mt-5 flex gap-3 flex-wrap mb-2">
                {proj.tech.map((Icon, x) => (
                  <Icon key={`project-${i}-${x}`} className="text-[#6288b4]" />
                ))}
              </ul>
              <motion.div className="mt-auto flex justify-between items-center">
                {proj.demo && (
                  <a
                    className="text-[#15513d] bg-[#12ffb0] px-2 rounded-md text-sm"
                    href={proj.demo}
                    target="_blank">
                    <span>demo</span>
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank">
                    <BsGithub className="text-[#6288b4] mr-auto text-xl cursor-pointer " />
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectLists;
