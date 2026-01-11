import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kharshaengineer@gmail.com',
    href: 'mailto:kharshaengineer@gmail.com',
    color: 'primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/harshodai',
    href: 'https://linkedin.com/in/harshodai',
    color: 'secondary',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Harshodai',
    href: 'https://github.com/Harshodai',
    color: 'accent',
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent! 🚀',
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 nebula-bg opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Ground Control</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's connect and build something amazing</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin size={18} className="text-primary" />
              <span>Hyderabad, India</span>
            </div>

            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Ready to Launch Your Next Project?
            </h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's make something extraordinary together!
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    link.color === 'primary' ? 'bg-primary/20' :
                    link.color === 'secondary' ? 'bg-secondary/20' :
                    'bg-accent/20'
                  }`}>
                    <link.icon className={`w-5 h-5 ${
                      link.color === 'primary' ? 'text-primary' :
                      link.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-foreground font-medium">{link.value}</p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
              >
                {sending ? (
                  'Launching...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
