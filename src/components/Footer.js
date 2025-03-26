import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
} from "../styles/Global.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";

const Footer = () => {
  return (
    <PaddingContainer
      id="Contact"
      top="10%"
      bottom="10%"
      responsiveRight="1rem"
      responsiveLeft="1rem"
      style={{
        overflow: "hidden",
      }}
    >
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>

      <PaddingContainer top="3rem">
        <FlexContainer 
          justify="center" 
          direction="column" 
          align="center"
          as={motion.div}
          variants={fadeInBottomVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading size="h3" top="1rem" bottom="1rem">
            📧 Email: <BlueText>adarshpandeyiitism@gmail.com</BlueText>
          </Heading>
          <Heading size="h3" top="1rem" bottom="1rem">
            📱 Phone: <BlueText>+917985864945</BlueText>
          </Heading>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
