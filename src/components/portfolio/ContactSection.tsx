import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 6369033799", href: "tel:+6369033799" },
  { icon: Mail, label: "Email", value: "saraswathisubbaiah02@gmail.com", href: "mailto:saraswathisubbaiah02@gmail.com" },
  { icon: MapPin, label: "Location", value: "Tirunelveli, Tamil Nadu, India", href: "https://maps.app.goo.gl/KFNyeuH7PxjV4Qd37" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_2at5sty",
        "template_nrk7gli",
        e.currentTarget,
        "8coXeR0Rxkr1cZXTQ"
      )
      .then(
        () => {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 3000);
        },
        () => {
          alert("Failed to send message. Try again!");
          setStatus("idle");
        }
      );
  };

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.p variants={fadeInUp} className="text-primary font-mono text-sm mb-3">
            &lt;contact /&gt;
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold gradient-text mb-6"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-32 h-1.5 rounded-full mx-auto"
            style={{ background: "var(--gradient-primary)" }}
          />

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg"
          >
            I am an ambitious fresher ready to embark on my professional journey,
            passionate about transforming knowledge into real-world impact and
            contributing value to a visionary organization.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ scale: 1.03, x: 6 }}
                className="flex items-center gap-6 glass-card rounded-2xl p-6 neon-border transition-all duration-300 hover:border-primary/60"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <info.icon size={22} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <div className="font-semibold text-base text-foreground">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6 neon-border">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-card rounded-3xl p-10 neon-border space-y-8 lg:col-span-3"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 font-mono">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background focus:ring-2 focus:ring-primary/50 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 font-mono">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background focus:ring-2 focus:ring-primary/50 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 font-mono">Message *</label>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background focus:ring-2 focus:ring-primary/50 outline-none resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={status === "idle" ? { scale: 1.03 } : {}}
              whileTap={status === "idle" ? { scale: 0.97 } : {}}
              className="w-full py-4 rounded-2xl font-semibold text-base btn-glow text-primary-foreground transition-all"
            >
              {status === "idle" && (
                <span className="flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </span>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message Sent!"}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="text-center mt-24 pt-10 border-t border-border/40">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by <span className="gradient-text font-semibold">Alex Kumar</span> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
