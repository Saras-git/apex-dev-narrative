import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "TechNova Solutions",
    duration: "Jun 2023 – Dec 2023",
    location: "Remote",
    description: [
      "Built RESTful APIs using Flask and FastAPI serving 10k+ daily requests with 99.9% uptime.",
      "Developed responsive React dashboards with real-time data visualization and WebSocket integration.",
      "Reduced API response time by 40% through Redis caching and query optimization.",
    ],
    tech: ["React", "Flask", "PostgreSQL", "Redis", "Docker"],
    color: "primary",
  },
  {
    role: "Frontend Developer Intern",
    company: "PixelCraft Agency",
    duration: "Jan 2023 – May 2023",
    location: "Hybrid — New Delhi",
    description: [
      "Delivered pixel-perfect UI components with a focus on accessibility and performance (Lighthouse 95+).",
      "Integrated third-party APIs including Stripe, Twilio, and Google Maps into client web apps.",
      "Collaborated with design team in Figma to translate wireframes into production-quality code.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
    color: "violet",
  },
  {
    role: "Open Source Contributor",
    company: "Various OSS Projects (GitHub)",
    duration: "2022 – Present",
    location: "Remote",
    description: [
      "Contributed 30+ pull requests to popular React and Python open-source libraries.",
      "Authored developer documentation improving onboarding for new contributors.",
      "Mentored junior developers in Git workflows and code review best practices.",
    ],
    tech: ["Python", "React", "Git", "TypeScript"],
    color: "primary",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            &lt;experience /&gt;
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading text-4xl md:text-5xl gradient-text mb-4">
            Work Experience
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -4 }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-xl text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase size={14} className="text-primary" />
                    <span className="text-primary font-medium text-sm">{exp.company}</span>
                    <span className="text-muted-foreground text-sm">— {exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Calendar size={14} className="text-muted-foreground" />
                  <span className="text-sm font-mono text-muted-foreground px-3 py-1 rounded-full bg-muted border border-border">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {exp.description.map((point, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-xs font-mono px-3 py-1 rounded-full ${
                      exp.color === "primary"
                        ? "bg-primary/10 border border-primary/30 text-primary"
                        : "bg-violet/10 border border-violet/30 text-violet"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
