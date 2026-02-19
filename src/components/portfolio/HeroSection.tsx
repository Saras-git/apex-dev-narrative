import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/avatar.png";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Saras-git" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/saraswathis02/" },
  { icon: ExternalLink, label: "Naukri", href: "https://www.naukri.com/mnjuser/profile?id=&altresid" },
  { icon: Mail, label: "Email", href: "saraswathisubbaiah02@gmail.com" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/75" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(hsl(185 100% 50% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50% / 0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20"
      >
        {/* Profile Image */}
        <motion.div variants={fadeInUp} className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            <div
              className="absolute -inset-6 rounded-full border border-violet/20 animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            />

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden neon-border animate-pulse-glow">
                <img
                  src={profileImg}
                  alt="Developer Profile"
                  className="w-30% h-30% object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-card/90 border border-primary/40 rounded-full px-3 py-1 flex items-center gap-2 glass-card">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-foreground/80">Available</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <motion.div variants={fadeInUp}>
            <motion.span
  whileHover={{ scale: 1.1 }}
  animate={{ boxShadow: ["0 0 0px #00f2ff", "0 0 20px #00f2ff", "0 0 0px #00f2ff"] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="inline-block px-5 py-1 rounded-full text-xs font-mono font-semibold 
  bg-gradient-to-r from-cyan-400/20 to-violet-500/20 
  border border-cyan-400/40 text-cyan-300 mb-4 backdrop-blur-md"
>
  👋 Hello!
</motion.span>

          </motion.div>

          <motion.h1
  variants={fadeInUp}
  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
>
  I'm{" "}
  <span className="relative inline-block">
    <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
      Saraswathi
    </span>

    {/* Glow layer */}
    <span className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"></span>
  </span>
</motion.h1>


          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-xl md:text-2xl font-mono text-muted-foreground">
              &lt;
              <span className="text-primary font-semibold">Aspiring Machine Learning Engineer | Data Analyst</span>
              &nbsp;/&gt;
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-8"
          >
            Crafting intelligent, data-driven solutions using machine learning models and advanced analytics.
Passionate about clean data pipelines, insightful visualizations, and solving complex business problems with predictive intelligence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.a
  href="\SARASWATHI S_CV.pdf"
  download
  whileHover={{ scale: 1.08, rotate: 1 }}
  whileTap={{ scale: 0.92 }}
  className="btn-glow flex items-center gap-2 px-6 py-3 rounded-xl text-primary-foreground font-semibold text-sm"
>
  <Download size={16} className="animate-bounce" />
  Download Resume
</motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass-card flex items-center gap-2 px-6 py-3 rounded-xl text-foreground font-semibold text-sm neon-border hover:border-primary/60 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass-card neon-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                title={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
