/**
 * AchievementsSection.tsx
 * Premium "Achievements & Certifications" section
 * Stack: React + TypeScript + Tailwind CSS + Framer Motion
 */

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

// ─── Asset imports (update paths to match your project) ──────────────────────
import udemyLogo    from "@/assets/udemy.png";
import skillrackLogo from "@/assets/skillrack-icon.jpg";
import nptelLogo    from "@/assets/nptel.png";

import certPython   from "@/assets/certificates/udemy.jpg";
import certC        from "@/assets/certificates/c.png";
import certKick     from "@/assets/certificates/kickstart.png";
import certBronze   from "@/assets/certificates/bronze-200.png";
import certNptel    from "@/assets/certificates/nptel.png";

import pubCropML    from "@/assets/publications/crop-ml.png";
import pubHealytics from "@/assets/publications/healytics.jpg"; // add when ready

// ─── Types ────────────────────────────────────────────────────────────────────

interface Skill {
  label: string;
}

interface Certificate {
  title: string;
  org: string;
  year: string;
  logo: string;
  image: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: Skill[];
  description: string;
}

interface Publication {
  title: string;
  org: string;
  date: string;
  description: string;
  image: string | null;
  award?: string;        // e.g. "Best Research Paper"
  tags?: string[];
  paperUrl?: string;
}

type ModalItem = (Certificate & { _type: "certificate" }) | (Publication & { _type: "publication" });

// ─── Data ─────────────────────────────────────────────────────────────────────

const PUBLICATIONS: Publication[] = [
  {
    title: "Healytics AI: Compatibility Analytics for Organs",
    org: "ICAIDAR 2026",
    date: "Mar 2026",
    award: "Best Research Paper",
    tags: ["AI", "Healthcare", "Organ Compatibility", "Deep Learning"],
    description:
      "Proposed a novel AI-driven framework for predicting organ transplant compatibility using deep learning and multi-modal patient data. The system reduces rejection rates by surfacing incompatibility signals overlooked in traditional cross-matching, enabling smarter clinical decisions and saving lives.",
    image: pubHealytics,
  },
  {
    title: "Predicting Crop Yield and Plant Growth Using ML",
    org: "ICICIC 2025",
    date: "Apr 8, 2025",
    tags: ["Machine Learning", "XGBoost", "AgriTech", "Web App"],
    description:
      "Presented research using XGBoost and ensemble ML models integrated into a full-stack web application for real-time agricultural yield prediction. The system empowers farmers and agronomists with data-driven insights for smarter decision-making and resource optimization.",
    image: pubCropML,
  },
];

const CERTIFICATES: Certificate[] = [
  {
    title: "Python Programming: A Practical Approach",
    org: "Udemy",
    year: "Aug 2025",
    logo: udemyLogo,
    image: certPython,
    credentialId: "UC-7cd16de1-b2c5-4e33-9c85-462b73e6b8ac",
    verifyUrl: "https://www.udemy.com/certificate/UC-7cd16de1-b2c5-4e33-9c85-462b73e6b8ac/",
    skills: [{ label: "Python" }, { label: "OOP" }, { label: "Problem Solving" }],
    description:
      "Completed a 15-hour hands-on course covering Python fundamentals, problem solving, object-oriented programming, and real-world applications.",
  },
  {
    title: "C — 50 Very Easy Challenges",
    org: "SkillRack",
    year: "Jan 2025",
    logo: skillrackLogo,
    image: certC,
    skills: [{ label: "C" }, { label: "Debugging" }, { label: "Logic" }],
    description:
      "Certified by SkillRack for completing 50 structured challenges in C programming, strengthening debugging and logic-building skills.",
  },
  {
    title: "Kickstart",
    org: "SkillRack",
    year: "Feb 2025",
    logo: skillrackLogo,
    image: certKick,
    skills: [{ label: "Problem Solving" }, { label: "Algorithms" }],
    description:
      "Certified in Kickstart coding challenges, demonstrating strong problem-solving ability under timed conditions.",
  },
  {
    title: "Bronze Medals — 200",
    org: "SkillRack",
    year: "Apr 2025",
    logo: skillrackLogo,
    image: certBronze,
    skills: [{ label: "C" }, { label: "Competitive Coding" }, { label: "Consistency" }],
    description:
      "Achieved 200 bronze medals for consistently completing diverse programming challenges on the SkillRack platform.",
  },
  {
    title: "The Joy of Computing using Python",
    org: "NPTEL",
    year: "Apr 2025",
    logo: nptelLogo,
    image: certNptel,
    credentialId: "NPTEL25CS98S1058801034",
    skills: [{ label: "Python" }, { label: "Computational Thinking" }, { label: "Logic" }],
    description:
      "Completed a 12-week NPTEL certification covering Python fundamentals, computational thinking, and creative problem solving.",
  },
];

// ─── Reusable Modal ────────────────────────────────────────────────────────────

interface ModalProps {
  item: ModalItem;
  onClose: () => void;
}

function AchievementModal({ item, onClose }: ModalProps) {
  const [imgZoomed, setImgZoomed] = useState(false);

  const isCert = item._type === "certificate";
  const isPub  = item._type === "publication";
  const isBestPaper = isPub && !!(item as Publication).award;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ background: "rgba(5,5,10,0.82)", backdropFilter: "blur(18px)" }}
      >
        {/* Modal card */}
        <motion.div
          className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.82, opacity: 0, y: 40 }}
          animate={{ scale: 1,    opacity: 1, y: 0  }}
          exit   ={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: isBestPaper
              ? "linear-gradient(145deg,#1a1200 0%,#0f0f10 60%)"
              : "var(--card, #0f0f12)",
          }}
        >
          {/* Gold accent bar for best-paper */}
          {isBestPaper && (
            <div className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: "linear-gradient(90deg,#f59e0b,#fcd34d,#f59e0b)" }} />
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors"
            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.55)" }}
          >
            ✕
          </button>

          <div className="p-7 max-h-[88vh] overflow-y-auto space-y-5 scrollbar-thin">
            {/* Header */}
            <div>
              {isBestPaper && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ background: "rgba(245,158,11,0.18)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.35)" }}>
                  🏆 Best Research Paper
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold leading-tight"
                style={{ color: "#f1f1f1", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {item.title}
              </h3>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                {item.org}
                {isCert && ` • ${(item as Certificate).year}`}
                {isPub  && ` • ${(item as Publication).date}`}
              </p>
            </div>

            {/* Image */}
            {(isCert || (isPub && (item as Publication).image)) && (
              <motion.div
                className="overflow-hidden rounded-xl cursor-zoom-in"
                onClick={() => setImgZoomed(!imgZoomed)}
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <motion.img
                  src={isCert ? (item as Certificate).image : (item as Publication).image!}
                  alt={item.title}
                  className="w-full object-cover"
                  animate={{ scale: imgZoomed ? 1.55 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 24 }}
                  style={{ transformOrigin: "center center" }}
                />
              </motion.div>
            )}

            {/* No-image placeholder for Healytics */}
            {isPub && !(item as Publication).image && (
              <div className="rounded-xl flex items-center justify-center h-36 text-4xl"
                style={{ background: "rgba(245,158,11,0.07)", border: "1px dashed rgba(245,158,11,0.3)" }}>
                📄
              </div>
            )}

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              {item.description}
            </p>

            {/* Skills / Tags */}
            {(() => {
              const tags = isCert
                ? (item as Certificate).skills.map((s) => s.label)
                : (item as Publication).tags ?? [];
              return tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null;
            })()}

            {/* Credential ID */}
            {isCert && (item as Certificate).credentialId && (
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.32)" }}>
                Credential ID: {(item as Certificate).credentialId}
              </p>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-1">
              {isCert && (
                <a href={(item as Certificate).image} download
                  className="flex-1 text-center text-sm font-semibold py-2.5 rounded-xl transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff" }}>
                  ↓ Download
                </a>
              )}
              {isCert && (item as Certificate).verifyUrl && (
                <a href={(item as Certificate).verifyUrl} target="_blank" rel="noreferrer"
                  className="flex-1 text-center text-sm font-semibold py-2.5 rounded-xl transition-opacity hover:opacity-80"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
                  Verify ↗
                </a>
              )}
              {isPub && (item as Publication).paperUrl && (
                <a href={(item as Publication).paperUrl} target="_blank" rel="noreferrer"
                  className="flex-1 text-center text-sm font-semibold py-2.5 rounded-xl transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#000" }}>
                  Read Paper ↗
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Timeline dot ──────────────────────────────────────────────────────────────

function TimelineDot({ gold }: { gold?: boolean }) {
  return (
    <div className="relative flex-shrink-0">
      <motion.div
        className="w-4 h-4 rounded-full z-10 relative"
        style={{
          background: gold
            ? "linear-gradient(135deg,#f59e0b,#fcd34d)"
            : "linear-gradient(135deg,#6366f1,#8b5cf6)",
          boxShadow: gold
            ? "0 0 12px 3px rgba(245,158,11,0.45)"
            : "0 0 10px 2px rgba(89, 207, 243, 0.4)",
        }}
        animate={gold ? { boxShadow: ["0 0 12px 3px rgba(245,158,11,0.45)", "0 0 22px 6px rgba(245,158,11,0.25)", "0 0 12px 3px rgba(245,158,11,0.45)"] } : {}}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// ─── Publication timeline card ─────────────────────────────────────────────────

interface PubCardProps {
  pub: Publication;
  index: number;
  onClick: () => void;
}

function PublicationCard({ pub, index, onClick }: PubCardProps) {
  const isBest = !!pub.award;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-5 group"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <TimelineDot gold={isBest} />
        {index < PUBLICATIONS.length - 1 && (
          <div className="w-[2px] flex-1 mt-2"
            style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.12),transparent)" }} />
        )}
      </div>

      {/* Card */}
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.018, y: -2 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
        className="flex-1 text-left mb-10 rounded-2xl overflow-hidden focus:outline-none"
        style={{
          background: isBest
            ? "linear-gradient(135deg,rgba(30,20,0,0.95) 0%,rgba(20,15,0,0.9) 100%)"
            : "rgba(47, 192, 217, 0.04)",
          border: isBest
            ? "1px solid rgba(245,158,11,0.35)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: isBest
            ? "0 0 40px -8px rgba(245,158,11,0.22), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Gold shimmer strip */}
        {isBest && (
          <div className="h-[2px] w-full"
            style={{ background: "linear-gradient(90deg,transparent,#f59e0b 40%,#fcd34d 60%,transparent)" }} />
        )}

        <div className="p-6 sm:p-7">
          {/* Award badge */}
          {isBest && (
            <motion.span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(245,158,11,0.15)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.4)", letterSpacing: "0.04em" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.35 + index * 0.18 }}
            >
              🏆 {pub.award}
            </motion.span>
          )}

          <h4 className="text-base sm:text-lg font-bold leading-snug mb-1"
            style={{ color: isBest ? "#fef3c7" : "#e8e8ef", fontFamily: "'Playfair Display', Georgia, serif" }}>
            {pub.title}
          </h4>

          <p className="text-xs font-medium mb-3" style={{ color: isBest ? "rgba(251,191,36,0.7)" : "rgba(255,255,255,0.4)" }}>
            {pub.org} &nbsp;·&nbsp; {pub.date}
          </p>

          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "rgba(255,255,255,0.52)" }}>
            {pub.description}
          </p>

          {pub.tags && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {pub.tags.map((t) => (
                <span key={t} className="text-[11px] px-2.5 py-0.5 rounded-full"
                  style={{
                    background: isBest ? "rgba(245,158,11,0.1)" : "rgba(255,255,255,0.05)",
                    color: isBest ? "rgba(251,191,36,0.75)" : "rgba(255,255,255,0.42)",
                    border: `1px solid ${isBest ? "rgba(245,158,11,0.22)" : "rgba(255,255,255,0.08)"}`,
                  }}>
                  {t}
                </span>
              ))}
            </div>
          )}

          <p className="text-xs font-semibold mt-5 flex items-center gap-1"
            style={{ color: isBest ? "#f59e0b" : "rgba(96, 185, 220, 0.85)" }}>
            View Details
            <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
          </p>
        </div>
      </motion.button>
    </motion.div>
  );
}

// ─── Certificate card ──────────────────────────────────────────────────────────

interface CertCardProps {
  cert: Certificate;
  index: number;
  onClick: () => void;
}

function CertificateCard({ cert, index, onClick }: CertCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
        className="w-full text-left rounded-2xl p-[1px] focus:outline-none group"
        style={{
          background: "linear-gradient(135deg,rgba(53, 198, 224, 0.5),rgba(28, 151, 246, 0.3),rgba(255,255,255,0.06))",
        }}
      >
        <div className="rounded-2xl p-5 h-full flex flex-col transition-all duration-300"
          style={{
            background: "rgba(12,12,18,0.97)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}>
          {/* Logo + year row */}
          <div className="flex items-start justify-between mb-4">
            <img src={cert.logo} alt={cert.org}
              className="h-9 w-9 rounded-lg object-contain"
              style={{ background: "rgba(255,255,255,0.06)", padding: "4px" }} />
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(38, 203, 240, 0.15)", color: "rgba(167,164,255,0.9)", border: "1px solid rgba(99, 210, 241, 0.25)" }}>
              {cert.year}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-sm font-bold leading-snug mb-1"
            style={{ color: "#dddde8", fontFamily: "'Playfair Display', Georgia, serif" }}>
            {cert.title}
          </h4>

          <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.38)" }}>
            {cert.org}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
            {cert.skills.map((s) => (
              <span key={s.label} className="text-[11px] px-2 py-0.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.42)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {s.label}
              </span>
            ))}
          </div>

          {cert.credentialId && (
            <p className="text-[10px] truncate mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
              ID: {cert.credentialId}
            </p>
          )}

          <p className="text-xs font-semibold flex items-center gap-1"
            style={{ color: "rgba(47, 243, 236, 0.85)" }}>
            Show Details
            <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
          </p>
        </div>
      </motion.button>
    </motion.div>
  );
}

// ─── Section heading ───────────────────────────────────────────────────────────

function SectionHeading({ label, title, sub }: { label: string; title: string; sub?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="mb-14 text-center"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5"
        style={{ background: "rgba(59, 221, 233, 0.12)", color: "rgba(167,164,255,0.8)", border: "1px solid rgba(106, 188, 242, 0.22)" }}>
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-3"
        style={{ color: "#f1f1f5", fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      {sub && (
        <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.42)" }}>
          {sub}
        </p>
      )}
    </motion.div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="my-20 flex items-center gap-4 max-w-3xl mx-auto px-6">
      <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to right,transparent,rgba(255,255,255,0.1))" }} />
      <div className="w-2 h-2 rounded-full" style={{ background: "rgba(21, 187, 220, 0.6)" }} />
      <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(to left,transparent,rgba(255,255,255,0.1))" }} />
    </div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────

export default function AchievementsSection() {
  const [modal, setModal] = useState<ModalItem | null>(null);

  const openCert = useCallback((c: Certificate) => {
    setModal({ ...c, _type: "certificate" });
  }, []);

  const openPub = useCallback((p: Publication) => {
    setModal({ ...p, _type: "publication" });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  return (
    <section
      id="achievements"
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ background: "#07070b" }}
    >
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse,#6366f1,transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse,#f59e0b,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse,#8b5cf6,transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        {/* Main heading */}
        <SectionHeading
          label="🏆"
          title="Achievements & Certifications"
          sub="Research publications, awards, and verified credentials that define the journey."
        />

        {/* ── Publications ── */}
        <div className="mb-4">
          <motion.h3
            className="text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3"
            style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", letterSpacing: "0.18em" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block w-6 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
            Publications & Research
          </motion.h3>

          <div className="max-w-3xl">
            {PUBLICATIONS.map((pub, i) => (
              <PublicationCard
                key={pub.title}
                pub={pub}
                index={i}
                onClick={() => openPub(pub)}
              />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Certifications ── */}
        <motion.h3
          className="text-lg font-bold mb-8 flex items-center gap-3"
          style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-6 h-[1px]" style={{ background: "rgba(110, 187, 250, 0.7)" }} />
          Verified Certifications
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <CertificateCard
              key={cert.title}
              cert={cert}
              index={i}
              onClick={() => openCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && <AchievementModal item={modal} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
}