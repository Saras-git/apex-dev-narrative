import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const experiences = [
  {
    role: "In-Plant Training – ISRO Propulsion Complex (IPRC)",
    company: "Indian Space Research Organisation (ISRO)",
    duration: "2 Weeks",
    location: "Mahendragiri, Tamil Nadu",
    description: [
      "Analyzed aerospace propulsion system datasets from 5+ engine testing procedures.",
      "Monitored real-time engine performance parameters during live testing operations.",
      "Studied cryogenic propulsion systems and safety mechanisms in high-performance aerospace environments.",
    ],
    tech: ["Data Analysis", "Real-Time Monitoring", "Aerospace Systems"],
  },
  {
    role: "Machine Learning Intern – Technohacks Edutech",
    company: "Technohacks Edutech",
    duration: "1 Month",
    location: "Remote",
    description: [
      "Performed end-to-end machine learning workflow including data preprocessing, feature engineering, and model evaluation.",
      "Built regression and classification models using Scikit-learn to solve real-world predictive problems.",
      "Implemented Exploratory Data Analysis (EDA) using Pandas, NumPy, Matplotlib, and Seaborn.",
      "Optimized model performance using hyperparameter tuning and cross-validation techniques.",
      "Developed interactive ML dashboards integrating Python models with Power BI for business insights.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
  },
];


export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-3">
            &lt;experience /&gt;
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold gradient-text mb-6"
          >
            Professional Experience
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-32 h-1.5 rounded-full mx-auto"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-violet-500 to-primary rounded-full opacity-40" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative pl-14"
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center shadow-lg shadow-primary/40">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Card */}
                <div className="glass-card rounded-3xl p-8 border border-border hover:border-primary/40 transition-all duration-500 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/20">

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono bg-muted px-4 py-2 rounded-full border border-border">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-xs font-mono rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
