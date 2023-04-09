import { experiencedSkills, strongSkills } from "@/resources/skills";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h2 className=" font-bold text-[40px] md:text-[50px] leading[70px] text-white">
        Skills
      </h2>
      <h3 className=" font-bold text-[20px] leading[70px] text-white text-center">
        Strong
      </h3>
      <div className="skillContainer">
        {strongSkills.map((skill) => (
          <Image
            src={`/images/skills/strong/${skill}.png`}
            className="image"
            alt="skill"
            key={skill}
            height={50}
            width={50}
          />
        ))}
      </div>
      <h3 className=" font-bold text-[20px] leading[70px] text-white text-center">
        Experienced
      </h3>
      <div className="skillContainer">
        {experiencedSkills.map((skill) => (
          // <LazyLoadImage effect="blur" src={skill} alt="skill" key={skill} />
          <Image
            src={`/images/skills/experienced/${skill}.png`}
            className="image"
            alt="skill"
            key={skill}
            height={50}
            width={50}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
