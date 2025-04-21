import { FaDocker, FaGitAlt, FaAws, FaJenkins, FaLinux, FaPython } from "react-icons/fa";
import { 
  SiKubernetes, 
  SiFastapi, 
  SiCplusplus, 
  SiAnsible, 
  SiOpentelemetry, 
  SiAmazoneks, 
  SiGithubactions, 
  SiAwslambda, 
  SiTerraform, 
  SiGrafana, 
  SiPrometheus,
  SiAmazonsqs,
  SiAmazondynamodb,
  SiAmazonrds,
  SiAmazoncloudwatch

 
 
 
} from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import Project1 from "../assets/SolarSystem.gif";
import Project2 from "../assets/Screenshot from 2024-01-31 12-25-05.png";
import Project3 from "../assets/opentel.gif";
import Project4 from "../assets/notificationSystem.gif";
import CdnIcon from "../assets/icons/aws/cdnIcon";
import WafIcon from "../assets/icons/aws/wafIcon";
import IamIcon from "../assets/icons/aws/iamIcon";
import S3Icon from "../assets/icons/aws/s3icon";
import VpcIcon from "../assets/icons/aws/vpcIcon";
import EbsIcon from "../assets/icons/aws/ebsIcon";
import EcsIcon from "../assets/icons/aws/ecsIcon";
import EfsIcon from "../assets/icons/aws/efsIcon";
import BeanstalkIcon from "../assets/icons/aws/beanstalkIcon";
import EventbridgeIcon from "../assets/icons/aws/eventbridgeIcon";



export const resumeLink =
  "https://drive.google.com/file/d/1tw0gF8SSwxsxzaog-Xf6aAVhkSmZi_d5/view?usp=sharing";
export const skills = [
  {
    id: 1,
    tech: "Docker",
    icon: <FaDocker />,
  },
  {
    id: 2,
    tech: "Kubernetes",
    icon: <SiKubernetes />,
  },
  {
    id: 3,
    tech: "AWS",
    icon: <FaAws />,
  },
  {
    id: 4,
    tech: "Jenkins",
    icon: <FaJenkins />,
  },
  {
    id: 5,
    tech: "Git",
    icon: <FaGitAlt />,
  },
  {
    id: 6,
    tech: "Ansible",
    icon: <SiAnsible />,
  },
  {
    id: 7,
    tech: "Amazon EKS",
    icon: <SiAmazoneks />,
  },
  {
    id: 8,
    tech: "GitHub Actions",
    icon: <SiGithubactions />,
  },
  {
    id: 9,
    tech: "AWS Lambda",
    icon: <SiAwslambda />,
  },
  {
    id: 10,
    tech: "Terraform",
    icon: <SiTerraform />,
  },
  {
    id: 11,
    tech: "Linux",
    icon: <FaLinux />,
  },
  {
    id: 12,
    tech: "Grafana",
    icon: <SiGrafana />,
  },
  {
    id: 13,
    tech: "Prometheus",
    icon: <SiPrometheus />,
  },
  {
    id: 14,
    tech: "Golang",
    icon: <FaGolang />,
  },
  {
    id: 15,
    tech: "FastAPI",
    icon: <SiFastapi />,
  },
  {
    id: 16,
    tech: "Python",
    icon: <FaPython />,
  },
  {
    id: 17,
    tech: "C++",
    icon: <SiCplusplus />,
  },
  {
    id: 18,
    tech: "OpenTelemetry",
    icon: <SiOpentelemetry />,
  },
  
  {
    id: 27,
    tech: "SQS",
    icon: <SiAmazonsqs />,
  },
  {
    id: 28,
    tech: "RDS",
    icon: <SiAmazonrds />,
  },
  {
    id: 29,
    tech: "CloudWatch",
    icon: <SiAmazoncloudwatch />,
  },
  
  {
    id: 31,
    tech: "DynamoDB",
    icon: <SiAmazondynamodb />,
  },
  {
    id: 32,
    tech: "CDN",
    icon: <CdnIcon/>
  },
  {
    id: 33,
    tech: "WAF",
    icon: <WafIcon/>
  },
  {
    id: 34,
    tech: "IAM",
    icon: <IamIcon/>
  },
  {
    id: 35,
    tech: "S3",
    icon: <S3Icon/>
  },
  {
    id: 36, 
    tech: "VPC",
    icon: <VpcIcon/>
  },
  {
    id: 37,
    tech: "EBS",
    icon: <EbsIcon/>
  },
  {
    id: 38,
    tech: "ECS",
    icon: <EcsIcon/>
  },
  {
    id: 39,
    tech: "EFS",
    icon: <EfsIcon/>
  },
  {
    id: 40,
    tech: "Beanstalk",
    icon: <BeanstalkIcon/>
  },
  {
    id: 41,
    tech: "EventBridge",
    icon: <EventbridgeIcon/>
  },
  {
    id: 42,
    tech: "SES",
    icon: <MdAttachEmail/>
  }
  
]
  

export const projects = [
 
  {
    id: 0,
    project_name: "🛠️ Secure, Scalable, and Performant Static Website on AWS With Scalable Notification system and Push Notifications",
    project_desc: "A scalable notification system with real-time push notifications, scheduled notifications, and customizable preferences, powered by AWS SNS, SQS, and EventBridge.",
    features: <div>
      <p>🔄 Web Push Notification: In Browser Notification Using pywebpush</p>
      <p>📱 Multi-channel notifications: ⚡ Sends alerts via SMS, email (AWS SES), and Slack.</p>
      <p>🚀 Real-time push notifications: 🔄 Uses AWS SNS and SQS for instant user updates.</p>
      <p>⏰ Scheduled notifications: 🎯 Implements AWS EventBridge for milestone reminders, likes, and promotional messages.</p>
      <p>⚙️ Customizable preferences: 🔧 Users can choose their preferred notification channels.</p>
      <p>📨➡️💀 Dead Letter Queue: 📤 Handles undelivered messages with a dead letter queue.</p>
      </div>,
    tech_stack: ["Python","FastAPI", "AWS RDS", "SNS", "SQS", "Lambda", "EventBridge", "SES","CloudFront","CloudWatch","Route53","AWS WAF","S3","Route 53"],
    project_img: Project4,
    project_url: "https://d1dnaki3okqf9b.cloudfront.net",
    github_link: "https://github.com/chris-kyle2/fastapi.git",
    reverse: false,
    removeVisit: false,
  },
  {
    id: 4,
    project_name: "TelemetryCart: Scalable eCommerce Platform on AWS EKS",
    project_desc:
      "A cloud-native eCommerce application built with a microservices architecture, deployed on AWS EKS. The CI/CD pipeline is managed via GitHub Actions and ArgoCD, while infrastructure provisioning is automated with Terraform and Helm",
    features:
    <div>
    <p>🛠️ IaC with Terraform: Reusable modules for AWS infrastructure.</p>
    <p>🌍 Multi-Environment: Separate staging & production setups.</p>
    <p>☸️ AWS EKS: Managed node groups for microservices.</p>
    <p>🌐 Traffic Management: ALB Ingress with cross-zone load balancing.</p>
    <p>🚀 GitOps: ArgoCD for automated deployments.</p>
    <p>⚡ CI/CD: GitHub Actions for seamless integration & deployment.</p>
    <p>📈 Scalability: Auto-scaling for high availability.</p>
  </div>,
    tech_stack: ["Terraform", "AWS EKS", "AWS S3", "AWS IAM","Helm", "GitHub Actions", "ArgoCD","Docker","Kubernetes","ALB","DynamoDB"],
    project_img: Project3,
    // project_url: "https://ai-podcast-platform.vercel.app",
    github_link: "https://github.com/mikasa-404/ai-podcast-platform",
    reverse: true,
    removeVisit: true,
  },

  
  {id: 2,
    
      "project_name": "Solar System: Secure CI/CD Pipeline for Node.js",
      "project_desc": 
        "A DevSecOps-driven CI/CD pipeline for a Node.js app using Jenkins, Docker, AWS, and Kubernetes. Implements security scanning, containerization, and GitOps for automated deployment.",
      features: 
        <div>
        <p>🔄 CI/CD: Automated Jenkins pipeline for build, test & deployment.</p>
        <p>🛡️ DevSecOps: SAST (SonarQube), OWASP checks & Trivy scans.</p>
        <p>🐳 Docker & AWS: Secure image builds & EC2-hosted app.</p>
        <p>☸️ Kubernetes & GitOps: AWS EKS deployments via ArgoCD.</p>
        <p>📡 Monitoring: Jenkins logs, Java Melody & Slack alerts.</p>
      </div>,
    
    
    tech_stack: [
      "Jenkins (CI/CD)", 
      "GitHub Actions (Future Integration)", 
      "Docker ", 
      "AWS EKS ", 
      "ArgoCD (GitOps)", 
      "SonarQube (SAST)", 
      "OWASP Dependency Check (Vulnerability Scanning)", 
      "Trivy (Docker Security Scanning)", 
      "Java Melody (Jenkins Monitoring)", 
      "Slack Webhooks (Notifications)", 
      "MongoDB (Database in Docker)"
    ],
    
    project_img: Project1,
    // project_url: "https://ai-podcast-platform.vercel.app",
    github_link: "https://github.com/chris-kyle2/solar-system.git",
    reverse: true,
    removeVisit: true,
  }

];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "Experience ",
    href: "Experience",
  },
  {
    id: 3,
    name: "Projects ",
    href: "Projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "Contact",
  },
];
