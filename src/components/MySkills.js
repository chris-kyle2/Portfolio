import React from "react";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { skills } from "../utils/Data";
import {
  SkillButton,
  SkillSectionHeading,
} from "../styles/MySkills.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInTopVariant } from "../utils/Variants";
import fadeimage from "../assets/right.png";

const MySkills = () => {
  // AWS Services (12 items)
  const awsServices = skills.filter(skill => 
    ["AWS", "AWS Lambda", "Amazon EKS", "Amazon S3", "Amazon EC2", 
     "Amazon RDS", "CloudWatch", "Route 53", "API Gateway",
     "SNS", "SQS", "VPC", "Elastic Beanstalk", "DynamoDB","RDS","CDN", "WAF", "IAM", "S3", "EBS", "ECS", "EFS", "Beanstalk", "EventBridge", "SES"].includes(skill.tech)
  );

  // CI/CD (3 items)
  const cicdSkills = skills.filter(skill => 
    ["Jenkins", "GitHub Actions"].includes(skill.tech)
  );

  // Version Control (1 item)
  const versionControlSkills = skills.filter(skill => 
    ["Git"].includes(skill.tech)
  );

  // Infrastructure as Code (2 items)
  const infrastructureSkills = skills.filter(skill => 
    ["Ansible", "Terraform"].includes(skill.tech)
  );

  // Operating Systems (1 item)
  const osSkills = skills.filter(skill => 
    ["Linux"].includes(skill.tech)
  );

  // Containerization & Orchestration (2 items)
  const containerSkills = skills.filter(skill => 
    ["Docker", "Kubernetes"].includes(skill.tech)
  );

  // Monitoring & Observability (3 items)
  const monitoringSkills = skills.filter(skill => 
    ["Grafana", "Prometheus", "OpenTelemetry"].includes(skill.tech)
  );

  // Programming Languages & Frameworks (4 items)
  const programmingSkills = skills.filter(skill => 
    ["Python", "C++", "FastAPI"].includes(skill.tech)
  );

  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FadeImage src={fadeimage} right="0" width="inherit" />
      <Heading 
        size="h4"
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        MY SKILLS
      </Heading>
      <Heading 
        size="h2"
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        What <BlueText>I can do</BlueText>
      </Heading>
    
      <FlexContainer
        gap="30px"
        responsiveFlex
        direction="column"
        style={{ marginTop: "4rem" }}
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"  
        whileInView="visible"
        wrap="wrap"
      >
        {/* Operating Systems (1 item) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>Operating Systems</SkillSectionHeading>
          {osSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>

        {/* Version Control (1 item) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>Version Control</SkillSectionHeading>
          {versionControlSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>

        {/* Infrastructure as Code (2 items) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>IaC and Configuration Management</SkillSectionHeading>
          {infrastructureSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>

        {/* Containerization & Orchestration (2 items) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>Containerization & Orchestration</SkillSectionHeading>
          {containerSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>

        {/* CI/CD (3 items) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>Continuous Integration & Deployment</SkillSectionHeading>
          {cicdSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>

        {/* Monitoring & Observability (3 items) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>Monitoring & Observability</SkillSectionHeading>
          {monitoringSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>

        {/* Programming Languages & Frameworks (4 items) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>Programming Languages & Frameworks</SkillSectionHeading>
          {programmingSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>

        {/* AWS Services (12+ items) */}
        <FlexContainer gap="20px" responsiveFlex wrap="wrap">
          <SkillSectionHeading>AWS Services</SkillSectionHeading>
          {awsServices.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>
        

      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
