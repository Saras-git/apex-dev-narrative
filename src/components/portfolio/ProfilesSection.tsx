import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import GitHubLogo from "@/assets/github-icon.png";
import LinkedinLogo from "@/assets/linkedin-icon.png";
import LeetCodeLogo from "@/assets/leetcode-icon.png";
import HackerRankLogo from "@/assets/HackerRank_icon.png";
import SkillRackLogo from "@/assets/skillrack-icon.jpg";
import NaukriLogo from "@/assets/naukri-icon.png";

const profiles = [
  {
    logo: GitHubLogo,
    name: "GitHub",
    desc: "Open source contributions & personal projects",
    stats: [
      { label: "Repositories", value: 14 },
      { label: "Contributions", value: "100+" }
    ],
    url: "https://github.com/Saras-git"
  },
  {
    logo: LinkedinLogo,
    name: "LinkedIn",
    desc: "Professional network & career updates",
    stats: [{ label: "Connections", value: "500+" }],
    url: "https://www.linkedin.com/in/saraswathis02/"
  },
  {
    logo: SkillRackLogo,
    name: "SkillRack",
    desc: "Programming practice & skill development",
    stats: [{ label: "Problems Solved", value: "800+" }],
    url: "http://www.skillrack.com/profile/426288/49a767282efeeddb2e35f83e26020ad8f80ac59b"
  },
  {
    logo: NaukriLogo,
    name: "Naukri",
    desc: "Career opportunities & recruiter access",
    stats: [],
    url: "https://www.naukri.com/mnjuser/profile?id=&altresid"
  },
  {
    logo: HackerRankLogo,
    name: "HackerRank",
    desc: "Competitive coding & certifications",
    stats: [
      { label: "Problems", value: "20" },
      { label: "Stars", value: "3⭐" }
    ],
    url: "https://www.hackerrank.com/profile/subbaiahsaraswa1"
  }
];

export default function ProfilesSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">

      {/* glowing background */}
      <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-primary via-purple-500 to-blue-500"/>

      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.6 }}
          className="text-4xl font-bold mb-4"
        >
          Technical Profiles
        </motion.h2>

        <p className="text-muted-foreground">
          Platforms where I build, code, compete and grow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {profiles.map((p,i)=>(
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity:0, y:60, scale:.9 }}
            whileInView={{ opacity:1, y:0, scale:1 }}
            transition={{ delay:i*0.15, type:"spring", stiffness:120 }}
            whileHover={{ y:-8, scale:1.03 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 to-purple-500/40"
          >
            <div className="rounded-2xl bg-card p-6 h-full backdrop-blur-xl border border-border shadow-lg">

              <div className="flex justify-between items-center mb-5">

                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-muted shadow-inner">
                  <img src={p.logo} className="w-9 h-9 object-contain"/>
                </div>

                <ExternalLink className="opacity-0 group-hover:opacity-100 transition"/>

              </div>

              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.stats.map(s=>(
                  <span
                    key={s.label}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {s.label}: {s.value}
                  </span>
                ))}
              </div>

            </div>
          </motion.a>
        ))}

      </div>
    </section>
  );
}