import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
} from "../styles/Global.styled";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <PaddingContainer
      id="Experience"
      top="10%"
      bottom="10%"
      responsiveRight="1rem"
      responsiveLeft="1rem"
    >
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
          date="Feb 2024- present"
          iconStyle={{ background: "#88AB8E", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">The Internet Folks</h4>
          <p>

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            contentStyle={{ background: "#191919", color: "#88AB8E" }}
            contentArrowStyle={{ borderRight: "7px solid  #191919" }}
          date="2022- present"
          iconStyle={{ background: "#88AB8E", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">M.Sc. Mathematics and Computing</h3>
          <h4 className="vertical-timeline-element-subtitle">
          Indian Institute of Technology(ISM) Dhanbad
          </h4>
          <p>
            
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
        </PaddingContainer>
    </PaddingContainer>
  );
};

export default Experience;
