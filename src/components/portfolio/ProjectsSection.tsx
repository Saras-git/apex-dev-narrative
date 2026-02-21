import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
import project5 from "@/assets/project5.png";
import project6 from "@/assets/project6.png";
import project7 from "@/assets/project7.png";

const projects = [
  {
    title: "Organ Compatibility Prediction System",
    description:
      "Built an AI‑based system to automate donor–recipient matching using Random Forest and centralized medical data, enabling real‑time alerts to improve transplant coordination and accuracy.",
    image: project1,
    tech: [
      "Python",
      "Scikit‑Learn",
      "FastAPI",
      "My SQL",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "NLTK",
      "ML",
      "AI",
    ],
    github: "https://github.com/Saras-git/Healytics-AI", // replace with actual
    live: "https://example.com/organ‑match",
    featured: true,
  },
  {
    title: "AI Based Smart Agricultural System",
    description:
      "Enhanced a Streamlit web application integrating multiple machine learning models to predict crop yield and plant health using environmental data for precision agriculture.",
    image: project2,
    tech: [
      "Python",
      "Streamlit",
      "Scikit‑Learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "ML",
      "MySql"
    ],
    github: "https://github.com/Saras-git/Smart_Agriculture_Prediction_System", // replace with actual
    live: "https://share.streamlit.io/…", // replace with actual
    featured: true,
  },
  {
    title: "Power BI Dashboard for Global OTT Trends",
    description:
      "Developed an AI‑driven platform to ingest OTT content data, perform sentiment and trend analysis, and visualize predictive insights through an interactive Power BI dashboard.",
    image: project3,
    tech: [
      "Power BI",
      "Python",
      "Pandas",
      "Scikit‑Learn",
      "REST API",
      "DAX",
      "ETL",
    ],
    github: "https://github.com/Saras-git/ott-trends-dashboard", // replace with actual
    live: "https://app.powerbi.com/view?r=…", // replace with actual
    featured: true,
  },
  {
  title: "Regional Road Express Dashboard & Analytics",
  description:
    "Built a full-stack logistics analytics platform with React dashboards, FastAPI APIs, MySQL data pipeline, ML-based revenue prediction, and Power BI visualizations to monitor routes, profit/loss, and optimize routing decisions.",
  image: project4, // change image if needed
  tech: [
    "React",
    "FastAPI",
    "Python",
    "MySQL",
    "Power BI",
    "REST API",
    "Machine Learning",
    "Dijkstra Algorithm",
    "JSON",
    "ETL Pipeline",
  ],
  github: "https://github.com/Saras-git/regional-road-express-system", // replace with repo if available
  live: "#",
  featured: true,
},

  {
    title: "AI System for Social Media Sentiment Analysis and Dashboard",
    description:
      "Established a deep learning–based system to analyze and visualize real‑time social media sentiment trends for actionable insights across platforms.",
    image: project5,
    tech: [
      "Python",
      "NLTK",
      "Power BI",
      "streamlit",
      "machine learning",
    ],
    github: "https://github.com/Saras-git", // replace with actual
    live: "https://example.com/sentiment‑dash",
    featured: true,
  },
  {
    title: "Number Guessing Game",
    description:
      "A Python console game where users guess a randomly generated number within a chosen range and limited attempts, featuring win/lose feedback messages.",
    image: project6,
    tech: [
      "Python",
      "Random Module",
      "CLI",
    ],
    github: "https://github.com/Saras-git/python-projects",
    live: "#",
    featured: false,
  },
  {
  title: "Automated Visual Defect Detection System",
  description:
    "Developed a fully automated AI-powered inspection system using CNN and computer vision to detect manufacturing defects in real time, log structured results in MySQL, and visualize quality metrics via Grafana dashboards.",
  image: project7, // change if you want different image
  tech: [
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "CNN",
    "MySQL",
    "Grafana",
    "NumPy",
    "Pandas",
  ],
  github: "https://github.com/Saras-git/defect-detection-in-industry", // replace with repo link if available
  live: "#",
  featured:false,
},
];
export default function ProjectsSection({ isHome = false }: { isHome?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [showAll, setShowAll] = useState(false);

  // ⭐ LOGIC ONLY HERE
  const visibleProjects = isHome && !showAll ? projects.slice(0, 3) : projects;

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
          <motion.h2 variants={fadeInUp} className="section-heading text-4xl md:text-5xl gradient-text mb-4">
            Technical Projects
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 rounded-full mx-auto"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleProjects.map((project) => (
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

                {/* Hover Icons */}
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

        {/* ⭐ Show More Button (ONLY HOME) */}
        {isHome && projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-sm font-medium rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition"
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
