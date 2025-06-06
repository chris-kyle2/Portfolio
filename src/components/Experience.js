import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import left from "../assets/left.png";

const Experience = () => {
  return (
    <PaddingContainer
      id="Experience"
      top="10%"
      bottom="10%"
      responsiveRight="1rem"
      responsiveLeft="1rem"
    >
      <FadeImage src={left} left="0" width="inherit" />

      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        My Experience
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
      >
        Where <BlueText>I have worked</BlueText>
      </Heading>
      <PaddingContainer top="5%">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#191919", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #191919" }}
            date="Oct 2024- Present"
            iconStyle={{ background: "#88AB8E", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              DevOps Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Suukyi Infotech Pvt. Ltd.
            </h4>
            <p>
            Working as a DevOps Engineer Intern, creating scalable infrastructure and implementing CI/CD pipelines for efficient software delivery.
            </p>
          </VerticalTimelineElement>
           
          <VerticalTimelineElement
            contentStyle={{ background: "#191919", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #191919" }}
            date="June 2022- May 2024"
            iconStyle={{ background: "#88AB8E", color: "#fff" }}
          >
             <h3 className="vertical-timeline-element-title">
              M.S. Mathematics and Computing
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Indian Institute of Technology(ISM) Dhanbad
            </h4>
            <p>
              Pursued a Master's in Mathematics and Computing providing me a
              well-rounded skill set with strong foundation in computer science
              fundamentals, problem-solving, analytical thinking, and
              programming skills.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Experience;
