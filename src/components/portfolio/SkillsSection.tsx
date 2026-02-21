import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 75 },
      { name: "C", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 83 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 80 },
      { name: "Tailwind", level: 75 },
      { name: "Streamlit", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Flask / FastAPI", level: 88 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 85 },
    ],
  },
];

const toolSkills = [
  {
    category: "Machine Learning & AI Tools",
    skills: ["Numpy","Pandas","Matplotlib","Seaborn","Scikit Learn","Tensorflow","Keras"],
  },
  {
    category: "Data Tools",
    skills: ["SQL","Excel","PowerBI","Tableau"],
  },
  {
    category: "AI-Specific Tools",
    skills: ["OpenCV","NLTK","Rapid Miner"],
  },
];

const nonTechnical = [
  { name: "Badminton Player", emoji: "🏸", desc: "Competitive Mindset" },
  { name: "Communication", emoji: "🗣️", desc: "Public Speaking" },
  { name: "Leadership", emoji: "👥", desc: "Team Management" },
  { name: "Creativity", emoji: "🎨", desc: "Design Thinking" },
  { name: "Quick Learning", emoji: "⚡", desc: "Adaptability" },
];

type SkillBarProps = {
  name: string;
  level: number;
  delay?: number;
};

function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-white">{name}</span>
        <span className="text-xs text-cyan-400">{level}%</span>
      </div>

      <div className="h-[10px] rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay }}
        />
      </div>
    </div>
  );
}
export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-28 relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.p variants={fadeInUp} className="text-cyan-400 font-mono mb-3">
            &lt; skills /&gt;
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-5"
          >
            Technical Arsenal
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-32 h-[3px] mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"
          />
        </motion.div>

        {/* TECH GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {technicalSkills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative rounded-3xl p-7 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.7)] hover:-translate-y-2 transition"
            >
              {/* animated border */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-20 blur-[1px]" />

              <h3 className="font-semibold text-lg mb-6 text-white">
                {group.category}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* TOOLS */}
        <div className="relative rounded-3xl p-8 mb-14 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,.7)]">
          <h3 className="text-xl font-semibold text-white mb-6">
            Tools & Technologies
          </h3>

          <div className="space-y-8">
            {toolSkills.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm text-white-400 mb-3">{group.category}</h4>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 text-sm rounded-full bg-white/5 border border-purple-500/30 text-purple-300 hover:scale-105 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,.8)] transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Beyond Code
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {nonTechnical.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl p-5 text-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,.7)] hover:-translate-y-2 hover:scale-105 transition"
              >
                <div className="text-3xl mb-2">{skill.emoji}</div>
                <div className="font-semibold text-white text-sm">
                  {skill.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {skill.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}