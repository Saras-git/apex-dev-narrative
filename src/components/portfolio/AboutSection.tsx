import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Code2, Lightbulb, Rocket } from "lucide-react";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const highlights = [
  { icon: Target, title: "Career Objective", text: "To architect and deliver robust, scalable software solutions that create meaningful user experiences while pushing the boundaries of modern web technology." },
  { icon: Code2, title: "Technical Strengths", text: "Expert in full-stack development with deep proficiency in React, TypeScript, Python, and cloud infrastructure. Strong focus on system design and performance optimization." },
  { icon: Lightbulb, title: "Problem Solving", text: "Analytical thinker who breaks down complex problems into elegant, maintainable solutions. Experienced in Agile methodologies and collaborative development workflows." },
  { icon: Rocket, title: "Development Interests", text: "Passionate about microservices architecture, real-time systems, AI/ML integration, and building developer tools that improve team productivity and code quality." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            &lt;about me /&gt;
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading text-4xl md:text-5xl gradient-text mb-4">
            About Me
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: summary */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 neon-border">
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-foreground mb-4">
                Full-Stack Engineer &{" "}
                <span className="gradient-text">Problem Solver</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated full-stack developer with a passion for creating performant, 
                  accessible, and visually compelling digital experiences. With expertise spanning 
                  modern frontend frameworks to cloud infrastructure, I bring ideas to life with 
                  precision and creativity.
                </p>
                <p>
                  My engineering philosophy centers on writing clean, testable, and maintainable 
                  code. I thrive in collaborative environments and consistently deliver 
                  production-ready solutions that scale to meet evolving business demands.
                </p>
                <p>
                  Beyond coding, I'm an avid guitarist — music has sharpened my creativity and 
                  attention to detail, qualities I bring to every line of code I write.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {["React", "TypeScript", "Python", "Node.js", "AWS", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-primary/10 border border-primary/30 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "3+", label: "Years Exp." },
                { num: "20+", label: "Projects" },
                { num: "10+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center neon-border">
                  <div className="text-2xl font-bold gradient-text font-['Space_Grotesk']">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInRight}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card rounded-2xl p-6 neon-border group cursor-default transition-all duration-300 hover:border-primary/40"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-['Space_Grotesk'] font-semibold text-foreground mb-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
