
export const siteConfig = {
  // Personal Information
  personal: {
    name: 'Harshodai Kolluru',
    firstName: 'Harshodai',
    email: 'kharshaengineer@gmail.com',
    location: 'Hyderabad, India',
    resumePath: '/Kolluru_Harshodai_Resume.pdf',
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
        'Building ReAct-based Agentic AI Framework to automate complex workflows.',
        'Developing scalable data pipelines efficiently handling large datasets.',
        'Optimizing system performance and reliability through rigorous testing and monitoring.',
      ],
      color: 'primary',
    },
    {
      company: 'Phenom',
      role: 'Product Developer 2',
      period: 'July 2023 – August 2025',
      location: 'Hyderabad, India',
      description: [
        'Architected and implemented a semantic search engine using Mongolass, increasing candidate discovery by 40%.',
        'Built a Resume parsing pipeline processing 50k+ resumes daily with high accuracy.',
        'Developed a real-time notification system serving 1M+ users.',
      ],
      color: 'secondary',
    },
    {
      company: 'Tiger Analytics',
      role: 'Data Engineer',
      period: 'March 2022 – December 2022',
      location: 'Chennai, India',
      description: [
        'Developed ETL pipelines using PySpark and Airflow for processing TB-scale datasets.',
        'Optimized SQL queries reducing report generation time by 60%.',
        ' implemented data quality checks ensuring 99.9% data integrity.',
      ],
      color: 'tertiary',
    },
  ],

  // Skills section
  skillCategories: [
    { name: 'Languages', color: 'primary', skills: ['Python', 'SQL', 'Java'] },
    { name: 'Big Data', color: 'secondary', skills: ['Spark', 'Kafka', 'Airflow', 'Trino', 'Apache Flink', 'Apache Iceberg'] },
    { name: 'Databases', color: 'tertiary', skills: ['PostgreSQL', 'MongoDB', 'Elasticsearch'] },
    { name: 'Cloud & DevOps', color: 'quaternary', skills: ['AWS', 'Terraform'] },
    { name: 'AI & ML', color: 'primary', skills: ['LLMs', 'LangChain'] },
  ],

  // Achievements section
  achievements: [
    {
      icon: 'Award',
      title: 'Phenomenal CRISP Award at Phenom',
      description: 'Awarded for exceptional problem-solving skills and delivering high-impact features.',
      color: 'primary'
    },
    {
      icon: 'Star',
      title: 'Star Performer at Tiger Analytics',
      description: 'Recognized for consistent high performance and contribution to team success.',
      color: 'secondary'
    },
    {
      icon: 'Trophy',
      title: 'Hackathon Winner',
      description: 'Won 1st place in the internal innovation hackathon for building an AI-powered documentation assistant.',
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
    serviceId: 'service_yo5fr9w',
    templateId: 'template_m693kkn',
    publicKey: '-ZNMA3oA7izCcB-A9',
  },
};
