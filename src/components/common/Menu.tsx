import React from "react";
import { MdHome } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { AiFillTool } from "react-icons/ai";
import { ImBooks, ImPhone } from "react-icons/im";
import { FaUser } from "react-icons/fa";

const Menu = () => {
  const goToPage = (id: string) => {
    const container = document.querySelector(id);
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bg-black bg-opacity-50 bottom-4 rounded-full -translate-x-[50%] left-[50%] px-8 py-5">
      <ul className="flex gap-10 text-white text-2xl">
        <li
          className="cursor-pointer hover:text-[#12ffb0] transition"
          onClick={() => goToPage("#home")}>
          <MdHome />
        </li>
        <li
          className="cursor-pointer hover:text-[#12ffb0] transition"
          onClick={() => goToPage("#skills")}>
          <AiFillTool />
        </li>
        <li
          className="cursor-pointer hover:text-[#12ffb0] transition"
          onClick={() => goToPage("#experience")}>
          <IoMdBriefcase />
        </li>
        <li
          className="cursor-pointer hover:text-[#12ffb0] transition"
          onClick={() => goToPage("#projects")}>
          <ImBooks />
        </li>
        <li
          className="cursor-pointer hover:text-[#12ffb0] transition"
          onClick={() => goToPage("#about")}>
          <FaUser />
        </li>
        <li
          className="cursor-pointer hover:text-[#12ffb0] transition"
          onClick={() => goToPage("#contact")}>
          <ImPhone />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
