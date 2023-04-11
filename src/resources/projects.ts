import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoPython,
} from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { DiMongodb, DiDjango } from "react-icons/di";
import {
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { FaNode } from "react-icons/fa";

export const projects = [
  {
    images: "images/project_previews/sustainability_page.png",
    name: "Sustainability Page",
    description:
      "Webapp to let Sustainability Business to create their own website.",
    demo: "https://staging.lity.page/",
    github: null,
    type: "freelance",
    tech: [
      SiTypescript,
      IoLogoHtml5,
      IoLogoCss3,
      SiNextdotjs,
      SiTailwindcss,
      IoLogoPython,
    ],
  },
  {
    images: "images/project_previews/mamoru.png",
    name: "Mamoru",
    description: "Webapp for finding Sustainable shops near you.",
    demo: "https://app.mamoru.earth/en/",
    github: null,
    type: "freelance",
    tech: [
      IoLogoJavascript,
      IoLogoHtml5,
      IoLogoCss3,
      GrReactjs,
      DiMongodb,
      SiPostgresql,
      BsFiletypeScss,
      DiDjango,
    ],
  },
  {
    images: "images/project_previews/petPals.png",
    name: "Pet Pals",
    description:
      "A full-stack progressive web app for connecting pet owners and pet lovers or carers.",
    demo: "https://peternals-pet-pals.netlify.app/#/",
    github: "https://github.com/Peternals",
    type: "personal",
    tech: [
      IoLogoJavascript,
      IoLogoHtml5,
      IoLogoCss3,
      GrReactjs,
      DiMongodb,
      SiPostgresql,
      BsFiletypeScss,
      FaNode,
    ],
  },
  {
    images: "images/project_previews/UShop.png",
    name: "UShop",
    description:
      "An e-commerce full-stack web application to buy and sell products.",
    demo: "https://yu-ushop.herokuapp.com/#/",
    github: "https://github.com/YuTakaki/UShop",
    type: "personal",
    tech: [
      IoLogoJavascript,
      IoLogoHtml5,
      IoLogoCss3,
      BsFiletypeScss,
      GrReactjs,
      SiPostgresql,
      FaNode,
    ],
  },
  {
    images: "images/project_previews/ask.png",
    name: "Ask",
    description:
      "A full-stack social media platform for asking and answering questions",
    demo: "https://ask-yu.herokuapp.com/",
    github: "https://github.com/YuTakaki/ask",
    type: "personal",
    tech: [
      IoLogoJavascript,
      IoLogoHtml5,
      IoLogoCss3,
      BsFiletypeScss,
      GrReactjs,
      SiPostgresql,
      FaNode,
    ],
  },
  {
    images: "images/project_previews/memers.png",
    name: "Memers",
    description: "A full-stack application for posting and viewing memes.",
    demo: "https://yu-memers.herokuapp.com/#/",
    github: "https://github.com/YuTakaki/memers",
    type: "personal",
    tech: [
      IoLogoJavascript,
      IoLogoHtml5,
      IoLogoCss3,
      BsFiletypeScss,
      GrReactjs,
      SiPostgresql,
      FaNode,
    ],
  },
  {
    images: "images/project_previews/mymizu-gocchi.png",
    name: "mymizu-gocchi",
    description: "A full-stack app for gamifying MyMizu API",
    demo: "https://my-mizugocchi.herokuapp.com/",
    github: "https://github.com/ShotaKarato/mymizu-app",
    type: "personal",
    tech: [
      IoLogoJavascript,
      IoLogoHtml5,
      IoLogoCss3,
      BsFiletypeScss,
      GrReactjs,
      DiMongodb,
      FaNode,
    ],
  },
];
