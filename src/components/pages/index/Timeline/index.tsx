import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  MdWork,
  MdVolunteerActivism,
  MdSchool,
  MdArrowUpward,
} from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <section id="experience">
      <h2 className="font-bold text-[40px] md:text-[50px] leading[70px] text-white">
        Experience
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2190ff", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}>
          <h3 className="text-lg font-bold">
            Rakuten Mobile - Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
          <p>
            Backend Development, Workflow Development, SOAR Playbook Development
          </p>
          <p>Python, Java, Spring Boot, MySQL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f16565", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f16565" }}
          date="2022 - present"
          iconStyle={{ background: "#f16565", color: "#fff" }}
          icon={<MdVolunteerActivism />}>
          <h3 className="text-lg font-bold">Mamoru - Frontend Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Japan</h4>
          <p>Web Development, Backend Development, Frontend Development</p>
          <p>JavaScript, React.js, Next.js, CSS, HTML, Python, Django</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid #00b67a" }}
          contentStyle={{ background: "#12ffb0", color: "#15513d" }}
          date="2021 - 2021"
          iconStyle={{ background: "#12ffb0", color: "#15513d" }}
          dateClassName="text-white"
          icon={<MdSchool />}>
          <h3 className="text-lg font-bold">Code Chrysalis - Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
          <p>Full Stack Engineering with Agile Methodology</p>
          <p>
            JavaScript, Python, React.js, CSS, HTML, Node.js, Express.js,
            PostgreSQL, Data Structures and Algorithms
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid #00b67a" }}
          contentStyle={{ background: "#12ffb0", color: "#15513d" }}
          date="2018 - 2019"
          iconStyle={{ background: "#12ffb0", color: "#15513d" }}
          dateClassName="text-white"
          icon={<MdSchool />}>
          <h3 className="text-lg font-bold">
            Technological Institute of the Philippines - Computer Engineering
            Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Quezon City, Philippines
          </h4>
          <p>
            Basic Programming, Database Management System, Data Structures and
            Algorithms
          </p>
          <p>C, C++, Python, MSSQL</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#f16565", color: "#fff" }}
          icon={<MdArrowUpward />}
        />{" "}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
