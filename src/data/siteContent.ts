
export const siteConfig = {
  // Personal Information
  personal: {
    name: 'Harshodai Kolluru',
    firstName: 'Harshodai',
    email: 'kharshaengineer@gmail.com',
    location: 'Hyderabad, India',
    resumePath: `${import.meta.env.BASE_URL}Kolluru_Harshodai_Resume.pdf`,
  },

  // Social Links (used in Hero, Footer, Contact)
  socials: {
    github: 'https://github.com/Harshodai',
    linkedin: 'https://linkedin.com/in/harshodai',
    medium: 'https://medium.com/@Harshodai',
  },

  // Navigation items
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],

  // Hero section
  hero: {
    greeting: 'Welcome to my universe',
    roles: ['Software Engineer', 'Data Engineer', 'AI Innovator', 'Problem Solver'],
    description: 'Building scalable data pipelines and AI-powered solutions to solve complex real-world problems. Passionate about turning data into actionable insights and creating intelligent systems.',
  },

  // About section
  about: {
    sectionTitle: 'The Astronaut',
    sectionSubtitle: "Who's behind the console",
    headline: 'Engineering the Future of Data',
    bio: [
      "I'm a passionate Software Engineer with a strong foundation in data engineering and AI. My journey is driven by a curiosity to understand how things work and a desire to build systems that make a difference.",
      "With a background in Electronics and Communication Engineering, I've transitioned into the world of software, bringing a unique perspective to problem-solving. I thrive in challenging environments and am always eager to learn new technologies.",
      "When I'm not coding, you can find me exploring the latest tech trends, reading about space exploration, or simply enjoying a good cup of coffee while pondering the mysteries of the universe.",
    ],
    stats: [
      { label: 'Years Experience', value: '3+', icon: 'Calendar' },
      { label: 'Technologies', value: '10+', icon: 'Code2' },
      { label: 'Awards', value: '3', icon: 'Award' },
    ],
  },

  // Experience section
  experiences: [
    {
      company: 'JP Morgan Chase',
      role: 'Software Engineer 2',
      period: 'August 2025 – Present',
      location: 'Hyderabad, India',
      description: [
        'Developing a scalable, config-driven Agentic AI Framework (LangGraph + OpenAI) to autonomously detect and fix code vulnerabilities.',
        'Targeting 70% reduction in remediation time and >90% patch validation accuracy.',
        'Integrating automated verification with AI-generated test cases and context-aware call graphs.',
      ],
      color: 'primary',
    },
    {
      company: 'Phenom',
      role: 'Data Engineer 1',
      period: 'July 2023 – August 2025',
      location: 'Hyderabad, India',
      description: [
        'Optimized data pipelines (Snowflake, Pinot-Trino) achieving <3s query latencies.',
        'Implemented CDC pipelines using AWS Glue, Iceberg, and Spark EMR.',
        'Built real-time pipelines with Apache Flink and Kafka on Kubernetes.',
        'Automated tenant onboarding using Airflow, Python, and MongoDB.',
      ],
      color: 'secondary',
    },
    {
      company: 'Tiger Analytics',
      role: 'Big Data Engineer',
      period: 'March 2022 – December 2022',
      location: 'Chennai, India',
      description: [
        'Developed PySpark ETL pipelines in AWS, reducing execution time to 8 minutes.',
        'Optimized Spark jobs using JSON configurations and EMR/Livy.',
        'Implemented data quality checks ensuring 99.9% data integrity.',
      ],
      color: 'tertiary',
    },
  ],

  // Skills section
  skillCategories: [
    { name: 'Languages', color: 'primary', skills: ['Python', 'SQL', 'Java'] },
    { name: 'Big Data', color: 'secondary', skills: ['Apache Iceberg', 'Spark', 'Kafka', 'Flink', 'Pinot', 'Trino', 'Airflow'] },
    { name: 'Databases', color: 'tertiary', skills: ['Snowflake', 'PostgreSQL', 'MongoDB', 'Elasticsearch'] },
    { name: 'Cloud & DevOps', color: 'quaternary', skills: ['AWS', 'Terraform', 'Kubernetes'] },
    { name: 'AI & ML', color: 'primary', skills: ['LLMs', 'LangChain', 'OpenAI', 'Agentic AI'] },
  ],

  // Achievements section
  achievements: [
    {
      icon: 'Award',
      title: '1st Prize in IoT Presentation',
      description: 'Won 1st prize at Medha 2018 for IoT Presentation.',
      color: 'primary'
    },
    {
      icon: 'Star',
      title: '2nd Prize in Heart Attack Detection',
      description: 'Secured 2nd prize in Heart Attack Detection Slide Evince at NIPUNA 2019.',
      color: 'secondary'
    },
    {
      icon: 'Trophy',
      title: 'Phenomenal CRISP Award Nominee',
      description: 'Nominated for Phenomenal CRISP Awards at Phenom.',
      color: 'tertiary'
    },
  ],

  // Contact section
  contact: {
    sectionTitle: 'Ground Control',
    sectionSubtitle: "Let's connect and build something amazing",
    headline: 'Ready to Launch Your Next Project?',
    description: 'Whether you have a project in mind, want to discuss the latest tech, or just want to say hi, my inbox is always open.',
  },

  // Footer
  footer: {
    copyright: 'Made with ❤️ by Harshodai Kolluru',
  },
  // EmailJS Configuration
  emailJs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
};
