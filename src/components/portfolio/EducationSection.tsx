import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Data science",
    institution: "Frabcis Xavier Engineering College",
    year: "2022 – 2026",
    score: "CGPA: 8.9 / 10",
    type: "Degree",
    highlight: true,
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Reach Matric Higher Secondary School",
    year: "2021 – 2022",
    score: "Percentage: 86.6%",
    type: "School",
    highlight: true,
  },
  {
    degree: "Secondary (10th Grade)",
    institution: "Reach Matric Higher Secondary School",
    year: "2019 – 2020",
    score: "Percentage: 75%",
    type: "School",
    highlight: true,
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            &lt;education /&gt;
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading text-4xl md:text-5xl gradient-text mb-4">
            Academic Journey
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px timeline-line opacity-30 md:-translate-x-px" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-10"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={fadeInUp}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    edu.highlight
                      ? "bg-primary border-primary shadow-[0_0_15px_hsl(185_100%_50%/0.5)]"
                      : "bg-surface border-primary/50"
                  }`}>
                    <GraduationCap size={14} className={edu.highlight ? "text-primary-foreground" : "text-primary"} />
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className={`glass-card rounded-2xl p-6 ${
                      edu.highlight ? "neon-border" : "border border-border"
                    } transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
                        {edu.type}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{edu.year}</span>
                    </div>
                    <h3 className="font-['Space_Grotesk'] font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
                    <div className={`text-sm font-semibold font-mono ${edu.highlight ? "text-primary" : "text-violet"}`}>
                      {edu.score}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
