import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    name: 'Languages',
    color: 'primary',
    skills: ['Python', 'SQL', 'Java', 'Scala', 'Shell Script'],
  },
  {
    name: 'Data Engineering',
    color: 'secondary',
    skills: ['Apache Spark', 'Apache Kafka', 'Apache Flink', 'Hadoop', 'HIVE', 'Snowflake'],
  },
  {
    name: 'Cloud & DevOps',
    color: 'accent',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Git'],
  },
  {
    name: 'Orchestration',
    color: 'primary',
    skills: ['Apache Airflow', 'Informatica', 'Argo Workflows'],
  },
  {
    name: 'Databases',
    color: 'secondary',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB'],
  },
  {
    name: 'Tools & Others',
    color: 'accent',
    skills: ['Tableau', 'Grafana', 'Jira', 'Linux', 'REST APIs'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 nebula-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Tech Constellation</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I navigate through</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all group"
            >
              <h3 className={`text-lg font-display font-semibold mb-4 ${
                category.color === 'primary' ? 'text-primary' :
                category.color === 'secondary' ? 'text-secondary' :
                'text-accent'
              }`}>
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium cursor-default transition-all ${
                      category.color === 'primary' 
                        ? 'bg-primary/10 text-primary hover:bg-primary/20' :
                      category.color === 'secondary' 
                        ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' :
                        'bg-accent/10 text-accent hover:bg-accent/20'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Star Constellation Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm">
            ...and constantly expanding into new galaxies of technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
