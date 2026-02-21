import { motion } from "framer-motion";
import { Target, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Career Objective",
    text: "Design intelligent ML systems that transform complex datasets into actionable insights and real-world impact."
  },
  {
    icon: Code2,
    title: "Technical Strengths",
    text: "Python, SQL, ML modeling, analytics, visualization, statistics, and scalable data solutions."
  },
  {
    icon: Lightbulb,
    title: "Analytical Thinking",
    text: "Strong pattern recognition, structured reasoning, and problem-solving through data-driven logic."
  },
  {
    icon: Rocket,
    title: "Innovation Focus",
    text: "Passionate about AI, predictive intelligence, and building high-impact intelligent systems."
  },
];

export default function AboutSection() {
  return (
    <section className="relative w-full py-28 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06121f] via-[#071b2e] to-[#020617]" />

      {/* LIGHT GLOW ORBS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-cyan-500/40 via-indigo-500/30 to-purple-500/40"
        >
          <div className="rounded-3xl bg-[#020617]/90 backdrop-blur-xl p-10 h-full">

            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Machine Learning Engineer & Data Analyst
            </h1>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              I transform raw data into intelligent insights and scalable solutions.
              Specialized in machine learning, analytics, and visualization to build
              predictive systems that support smart decisions.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              My workflow focuses on optimized pipelines, efficient algorithms,
              and scalable analytical architectures that uncover hidden patterns
              and generate measurable impact.
            </p>

            <p className="mt-4 text-slate-400 leading-relaxed">
              I constantly explore emerging AI technologies to stay ahead of
              innovation and engineer meaningful solutions.
            </p>

            {/* SKILLS TAGS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Python","SQL","Machine Learning","Pandas","NumPy",
                "Scikit-learn","Power BI","Visualization","EDA","Modeling"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-xs font-medium rounded-full
                  bg-gradient-to-r from-cyan-500/10 to-purple-500/10
                  border border-cyan-400/20
                  text-cyan-300
                  backdrop-blur-md
                  hover:scale-105 hover:border-cyan-400/40
                  transition"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </motion.div>

        {/* RIGHT GRID */}
        <div className="grid sm:grid-cols-2 gap-8">

          {highlights.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/40 via-indigo-500/30 to-purple-500/40"
            >
              <div className="rounded-2xl bg-[#020617]/90 backdrop-blur-xl p-7 h-full transition
              group-hover:bg-[#020617]/100">

                {/* ICON */}
                <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-cyan-400 to-purple-500 text-white
                  shadow-lg group-hover:scale-110 transition">

                  <card.icon size={26} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-[15px]">
                  {card.text}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}