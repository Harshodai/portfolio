import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ExternalLink, BookOpen, Calendar, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const username = siteConfig.socials.medium.split('@').pop();
        // Using RSS2JSON API to fetch Medium RSS feed
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
        );
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();

        if (data.status === 'ok') {
          setPosts(data.items.slice(0, 4));
        } else {
          throw new Error('Invalid response');
        }
      } catch (err) {
        setError('Unable to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const textLength = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const time = Math.ceil(textLength / wordsPerMinute);
    return `${time} min read`;
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <section id="blog" className="py-32 relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 nebula-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Mission Briefs</span>
          </h2>
          <p className="text-muted-foreground text-lg">Insights from my explorations</p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card p-6 animate-pulse">
                <div className="h-48 bg-muted rounded-lg mb-4" />
                <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : error || posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-4">
              {error || 'No blog posts available yet'}
            </p>
            <a
              href={siteConfig.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium"
            >
              <ExternalLink size={18} />
              Visit Medium
            </a>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden hover:border-primary/30 transition-all group block"
              >
                {post.thumbnail && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.pubDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {getReadingTime(post.description)}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {stripHtml(post.description).substring(0, 150)}...
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Read More <ExternalLink size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href={siteConfig.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-all"
          >
            <BookOpen size={18} />
            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
