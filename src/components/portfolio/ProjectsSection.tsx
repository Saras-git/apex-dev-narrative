import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "AnalyticsPro Dashboard",
    description:
      "A high-performance analytics platform featuring real-time data visualization, customizable widgets, and role-based access control for enterprise teams.",
    image: project1,
    tech: ["React", "TypeScript", "WebSocket", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "ShopStream E-Commerce",
    description:
      "Full-featured e-commerce platform with AI-powered product recommendations, Stripe integration, and a blazing-fast Next.js frontend.",
    image: project2,
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "ConvoAI Chatbot Platform",
    description:
      "Intelligent conversational AI interface with streaming responses, conversation history, and support for multiple LLM providers via a unified API.",
    image: project3,
    tech: ["React", "Python", "FastAPI", "OpenAI API", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            &lt;projects /&gt;
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading text-4xl md:text-5xl gradient-text mb-4">
            Featured Work
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-mono px-2 py-1 rounded-full bg-primary/90 text-primary-foreground font-medium">
                      ★ Featured
                    </span>
                  </div>
                )}

                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-background/80 border border-primary/50 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-background/80 border border-primary/50 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-['Space_Grotesk'] font-bold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
