import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Award, Code2 } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const stats = [
  { label: 'Years Experience', value: '4+', icon: Calendar },
  { label: 'Technologies', value: '20+', icon: Code2 },
  { label: 'Awards', value: '3', icon: Award },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">The Astronaut</span>
          </h2>
          <p className="text-muted-foreground text-lg">Who's behind the console</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Orbital Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 border border-secondary/20 rounded-full"
              />
              
              {/* Profile Photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden glow-primary">
                <img 
                  src={profilePhoto} 
                  alt="Harshodai Kolluru"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orbiting Dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin size={18} className="text-primary" />
              <span>Hyderabad, India</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Engineering the Future of Data
            </h3>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a passionate Software Engineer and Data Engineer with over 4 years of experience 
                building scalable data pipelines and AI-powered solutions. Currently crafting 
                data magic at <span className="text-primary font-medium">JP Morgan Chase</span>.
              </p>
              <p>
                My journey started with Electronics Engineering at GIET College, but I quickly 
                fell in love with the world of data and software. From processing billions of 
                records at Tiger Analytics to architecting real-time data platforms at Phenom, 
                I've always been driven by the challenge of turning raw data into actionable insights.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, and sharing my knowledge through technical blog posts.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
