import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "alex.kumar@example.com", href: "mailto:alex.kumar@example.com" },
  { icon: MapPin, label: "Location", value: "New Delhi, India", href: "#" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-2">
            &lt;contact /&gt;
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-heading text-4xl md:text-5xl gradient-text mb-4">
            Get In Touch
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 rounded-full mx-auto" style={{ background: "var(--gradient-primary)" }} />
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl mx-auto mt-4">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 glass-card rounded-xl p-4 neon-border group transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <info.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{info.label}</div>
                  <div className="font-medium text-sm text-foreground">{info.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social */}
            <div className="glass-card rounded-xl p-4 neon-border">
              <p className="text-xs text-muted-foreground mb-3">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <s.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 neon-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-mono">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 font-mono">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2 font-mono">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.97 } : {}}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  status === "sent"
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : status === "sending"
                    ? "opacity-70 cursor-not-allowed btn-glow text-primary-foreground"
                    : "btn-glow text-primary-foreground"
                }`}
              >
                {status === "idle" && <><Send size={16} /> Send Message</>}
                {status === "sending" && (
                  <><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Sending...</>
                )}
                {status === "sent" && <>✓ Message Sent!</>}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by{" "}
            <span className="gradient-text font-semibold">Alex Kumar</span>
            {" "}· {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
