import { projects } from "@/resources/projects";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import List from "./List";

const ProjectLists = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section ref={ref}>
      <h2 className=" font-bold text-[40px] md:text-[50px] leading[70px] text-white">
        Projects
      </h2>
      <ul className="flex flex-wrap items-start">
        {projects.map((proj, i) => (
          <List
            key={`project-${i}`}
            proj={proj}
            index={i}
            isInView={isInView}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectLists;
