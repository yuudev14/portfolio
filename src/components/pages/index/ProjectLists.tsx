import { projects } from "@/resources/projects";
import { motion } from "framer-motion";
import React from "react";
import List from "./List";

const ProjectLists = () => {
  return (
    <section>
      <h2 className=" font-bold text-[40px] leading[70px]">Projects</h2>
      <ul className="flex flex-wrap items-start">
        {projects.map((proj, i) => (
          <List key={`project-${i}`} proj={proj} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectLists;
