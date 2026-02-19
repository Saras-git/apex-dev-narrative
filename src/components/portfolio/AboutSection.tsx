import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Code2, Lightbulb, Rocket } from "lucide-react";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const highlights = [
  {
    icon: Target,
    title: "Career Objective",
    text: "To design intelligent machine learning solutions and data-driven systems that transform complex datasets into meaningful insights and support real-world decision-making."
  },
  {
    icon: Code2,
    title: "Technical Strengths",
    text: "Strong expertise in Python, SQL, data analysis, and machine learning with hands-on experience in predictive modeling, visualization, and statistical analysis."
  },
  {
    icon: Lightbulb,
    title: "Analytical Thinking",
    text: "Skilled in identifying trends, interpreting data patterns, and solving complex analytical challenges using structured reasoning and data-driven approaches."
  },
  {
    icon: Rocket,
    title: "Interests & Focus",
    text: "Passionate about AI, machine learning, predictive analytics, and building intelligent systems that deliver impactful insights and automation."
  },
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

          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 rounded-full mx-auto animate-gradient"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT PANEL */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="glass-card rounded-2xl p-8 neon-border"
            >
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-foreground mb-4">
                Machine Learning Engineer &{" "}
                <span className="gradient-text">Data Analyst</span>
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I’m a data-driven problem solver passionate about transforming raw data into
                  actionable insights and intelligent solutions. I specialize in machine learning,
                  statistical analysis, and data visualization to build predictive models that
                  support smart decision-making.
                </p>

                <p>
                  My workflow focuses on clean data pipelines, efficient algorithms, and scalable
                  analytical systems. I enjoy working with real-world datasets, uncovering hidden
                  patterns, and delivering solutions that generate measurable impact.
                </p>

                <p>
                  I continuously explore new tools in AI, analytics, and automation to stay ahead
                  of evolving technology and deliver innovative data solutions.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Python",
                  "SQL",
                  "Machine Learning",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "Power BI",
                  "Matplotlib",
                  "Seaborn",
                  "EDA",
                  "Predictive Modeling"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "10+", label: "Projects" },
                { num: "5+", label: "ML Models" },
                { num: "12+", label: "Technologies" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="glass-card rounded-xl p-4 text-center neon-border"
                >
                  <div className="text-2xl font-bold gradient-text font-['Space_Grotesk']">
                    {stat.num}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
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
                whileHover={{
                  scale: 1.04,
                  y: -6,
                  boxShadow: "0 0 30px rgba(0,255,255,0.2)"
                }}
                transition={{ type: "spring", stiffness: 260 }}
                className="glass-card rounded-2xl p-6 neon-border group cursor-default transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <item.icon size={20} className="text-primary group-hover:scale-110 transition" />
                </div>

                <h4 className="font-['Space_Grotesk'] font-semibold text-foreground mb-2 text-sm">
                  {item.title}
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

