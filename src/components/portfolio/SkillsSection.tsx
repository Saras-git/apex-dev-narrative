import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const technicalSkills = [
  { category: "Languages", skills: [
    { name: "Python", level: 85 },
    { name: "JavaScript ", level: 80 },
    { name: "Java", level: 75 },
    { name: "C", level: 90 },
  ]},
  { category: "Frontend", skills: [
    { name: "React.js", level: 83 },
    { name: "HTML5", level: 95 },
    { name: "CSS", level: 80 },
    { name: "Tailwind", level: 75 },
    { name: "Streamlit", level: 80 },
  ]},
  { category: "Backend", skills: [
    { name: "Node.js", level: 85 },
    { name: "Flask / FastAPI", level: 88 },

  ]},
  { category: "Databases", skills: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 85 },
  ]},
];


const toolSkills = [
  { category: "Machine Learning & AI Tools", skills: [
    { name: "Numpy"},
    { name: "Pandas"},
    { name: "Matplotlib/Seaborn"},
    { name: "Scikit Learn"},
    { name: "Tensorflow"},
    { name: "Keras"},
  ]},
  { category: "Data Tools", skills: [
    { name: "SQL"},
    { name: "Excel"},
    { name: "PowerBI"},
    { name: "Tableau"},
    { name: "Tensorflow"},
    { name: "Keras"},
  ]},
  { category: "AI-Specific Tools", skills: [
    { name: "Open CV"},
    { name: "NLTK"},
    { name: "Rapid Miner"},
  ]},
];

const nonTechnical = [
  { name: "Badminton Player", emoji: "🏸", desc: "Competitive Mindset" },
  { name: "Communication", emoji: "🗣️", desc: "Public Speaking" },
  { name: "Leadership", emoji: "👥", desc: "Team Management" },
  { name: "Creativity", emoji: "🎨", desc: "Design Thinking" },
  { name: "Quick Learning", emoji: "⚡", desc: "Adaptability" },
];


function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-mono text-xs">{level}%</span>
      </div>
      <div className="skill-bar h-2">
        <motion.div
          className="skill-bar-fill h-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            &lt;skills /&gt;
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading text-4xl md:text-5xl gradient-text mb-4">
            Technical Arsenal
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {technicalSkills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={scaleIn}
              className="glass-card rounded-2xl p-6 neon-border"
            >
              <h3 className="font-['Space_Grotesk'] font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 0.1 + si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass-card rounded-2xl p-6 neon-border mb-10"
        >
          <h3 className="font-['Space_Grotesk'] font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet" />
            Tools & Technologies
          </h3>
          <div className="space-y-6">
  {toolSkills.map((group, gi) => (
    <div key={group.category}>
      <h4 className="text-sm font-semibold text-muted-foreground mb-3">
        {group.category}
      </h4>

      <div className="flex flex-wrap gap-3">
        {group.skills.map((tool, ti) => (
          <motion.span
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: ti * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-4 py-2 text-sm font-medium rounded-xl glass-card border border-violet/30 text-violet hover:border-violet/60 transition-colors cursor-default"
          >
            {tool.name}
          </motion.span>
        ))}
      </div>
    </div>
  ))}
</div>

        </motion.div>

        {/* Non-Technical Skills */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 variants={fadeInUp} className="font-['Space_Grotesk'] font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Beyond Code
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {nonTechnical.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card rounded-2xl p-4 neon-border text-center group cursor-default"
              >
                <div className="text-3xl mb-2">{skill.emoji}</div>
                <div className="font-semibold text-sm text-foreground">{skill.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{skill.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
