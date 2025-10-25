// Mock data for Satyabrata Panigrahi's Portfolio

export const portfolioData = {
  personal: {
    name: "Satyabrata Panigrahi",
    title: "DevOps & AWS Engineer",
    tagline: "Aspiring AWS & DevOps Engineer with expertise in cloud services, infrastructure automation, and CI/CD pipelines",
    email: "satyabratapanigrahi2000@gmail.com",
    phone: "7008294335",
    linkedin: "https://linkedin.com/in/satyabrata-panigrahi",
    github: "https://github.com/satya70082",
    location: "Bhubaneswar, Odisha, India"
  },

  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Cloud Projects" },
    { value: "20%", label: "Performance Boost" },
    { value: "99.9%", label: "Uptime Achieved" }
  ],

  skills: {
    "Cloud & Automation": [
      { name: "AWS EC2", level: 90 },
      { name: "AWS S3", level: 85 },
      { name: "AWS RDS", level: 88 },
      { name: "AWS Lambda", level: 82 },
      { name: "AWS VPC", level: 85 },
      { name: "Terraform", level: 88 },
      { name: "CloudFormation", level: 80 }
    ],
    "DevOps & CI/CD": [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Jenkins", level: 88 },
      { name: "GitLab CI/CD", level: 85 },
      { name: "GitHub Actions", level: 82 }
    ],
    "Monitoring & Management": [
      { name: "Grafana", level: 85 },
      { name: "Prometheus", level: 82 },
      { name: "AWS CloudWatch", level: 88 },
      { name: "IAM", level: 85 }
    ],
    "Version Control & OS": [
      { name: "Git", level: 90 },
      { name: "GitLab", level: 85 },
      { name: "Linux (CentOS)", level: 88 },
      { name: "Ubuntu", level: 88 }
    ],
    "Networking & Containers": [
      { name: "VPC", level: 85 },
      { name: "Route 53", level: 80 },
      { name: "ELB", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Application Deployment",
      description: "Designed, developed, and deployed a highly scalable three-tier architecture application on AWS, ensuring reliability, security, and high availability.",
      highlights: [
        "Deployed frontend on AWS EC2 behind ELB for improved availability",
        "Implemented backend microservices using Docker and Kubernetes",
        "Achieved 20% decrease in equipment downtime",
        "Configured AWS RDS (MySQL) with automated backups",
        "20% improvement in system performance",
        "Developed auto-scaling policies for traffic spikes"
      ],
      technologies: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "VPC", "ELB", "Docker", "Kubernetes", "MySQL", "CloudWatch"],
      metrics: {
        performance: "20% improvement",
        downtime: "20% reduction",
        availability: "99.9%"
      }
    },
    {
      id: 2,
      title: "Database Migration Project",
      description: "Successfully managed and executed the migration of a large-scale database from an on-premise server to AWS RDS, ensuring zero data loss during the transition.",
      highlights: [
        "Zero data loss during migration",
        "Created comprehensive backup strategies and migration plans",
        "Maintained full data integrity and security using AWS DMS",
        "Conducted rigorous post-migration testing and validation",
        "Improved system performance and reliability post-migration",
        "Utilized AWS CloudWatch for monitoring"
      ],
      technologies: ["AWS RDS", "AWS DMS", "MySQL", "CloudWatch", "AWS Backup"],
      metrics: {
        dataLoss: "0%",
        downtime: "Minimal",
        performance: "Improved"
      }
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Trident Academy of Creative Technology",
      location: "Bhubaneswar, Odisha",
      duration: "2022-2024",
      score: "76.95%"
    },
    {
      degree: "Bachelor of Science in Botany (B.Sc.)",
      institution: "Fakir Mohan University",
      location: "Balasore, Odisha",
      duration: "2017-2020",
      score: "72.20%"
    }
  ],

  about: {
    summary: "Aspiring AWS & DevOps Engineer with expertise in AWS cloud services, terraform for infrastructure automation, and CI/CD pipelines using GitHub Actions and Jenkins. Experience with Linux system administration and strong understanding of networking, security best practices, and cloud monitoring. Passionate about automating workflows and optimizing cloud deployments.",
    expertise: [
      "Cloud Infrastructure Design & Implementation",
      "Containerization & Orchestration (Docker, Kubernetes)",
      "CI/CD Pipeline Development & Automation",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Monitoring & Performance Optimization",
      "Database Management & Migration"
    ]
  }
};
