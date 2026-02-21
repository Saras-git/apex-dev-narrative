import { motion } from "framer-motion";
import { useState } from "react";

import udemyLogo from "@/assets/udemy.png";
import skillrackLogo from "@/assets/skillrack-icon.jpg";
import nptelLogo from "@/assets/nptel.png";

/* certificate images */
import certPython from "@/assets/certificates/udemy.jpg";
import certC from "@/assets/certificates/c.png";
import certKick from "@/assets/certificates/kickstart.png";
import certBronze from "@/assets/certificates/bronze-200.png";
import certNptel from "@/assets/certificates/nptel.png";

/* publication image */
import pubImg from "@/assets/publications/crop-ml.png";

/* types */
type Certificate = {
  title: string;
  org: string;
  year: string;
  logo: string;
  image: string;
  credential?: string;
  skills: string[];
  description: string;
};

type Publication = {
  title: string;
  org: string;
  date: string;
  description: string;
  image: string;
};

/* certificate data */
const certificates: Certificate[] = [
{
title:"Python Programming: A Practical Approach",
org:"Udemy",
year:"Aug 2025",
logo:udemyLogo,
image:certPython,
credential:"UC-7cd16de1-b2c5-4e33-9c85-462b73e6b8ac",
skills:["Python Programming","OOP","Problem Solving"],
description:"Completed a 15-hour hands-on course covering Python fundamentals, problem solving, object-oriented programming, and real-world applications."
},
{
title:"C - 50 Very Easy Challenges",
org:"SkillRack",
year:"Jan 2025",
logo:skillrackLogo,
image:certC,
skills:["Debugging"],
description:"Certified by SkillRack for completing 50 easy challenges in C programming and improving logic building."
},
{
title:"Kickstart",
org:"SkillRack",
year:"Feb 2025",
logo:skillrackLogo,
image:certKick,
skills:["Problem Solving"],
description:"Certified in Kickstart coding challenges showcasing strong problem solving ability."
},
{
title:"Bronze Medals - 200",
org:"SkillRack",
year:"Apr 2025",
logo:skillrackLogo,
image:certBronze,
skills:["C","Competitive Coding"],
description:"Achieved 200 bronze medals for completing programming challenges consistently."
},
{
title:"The Joy of Computing using Python",
org:"NPTEL",
year:"Apr 2025",
logo:nptelLogo,
image:certNptel,
credential:"NPTEL25CS98S1058801034",
skills:["Python","Problem Solving","Logic"],
description:"Completed 12-week NPTEL certification covering Python fundamentals and computational thinking."
}
];

/* publication data */
const publications: Publication[] = [
{
title:"Predicting Crop Yield and Plant Growth Using ML",
org:"ICICIC'25 Conference",
date:"Apr 8, 2025",
description:"Presented research paper using XGBoost and ML models integrated into web app for agricultural prediction and smart decision making.",
image: pubImg
}
];

/* component */
export default function CertificationSection(){

const [active,setActive] = useState<Certificate | null>(null);
const [activePub,setActivePub] = useState<Publication | null>(null);

return(
<section id="certification" className="py-24 px-6 bg-background">

{/* heading */}
<div className="max-w-5xl mx-auto text-center mb-16">
<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
className="text-4xl font-bold mb-3"
>
Certifications
</motion.h2>

<p className="text-muted-foreground">
Verified achievements, credentials & publications.
</p>
</div>

{/* certificate cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

{certificates.map((c,i)=>(
<motion.div
key={c.title}
initial={{opacity:0,scale:.85}}
whileInView={{opacity:1,scale:1}}
transition={{delay:i*.1,type:"spring"}}
whileHover={{scale:1.04}}
className="rounded-2xl p-[1px] bg-gradient-to-br from-primary to-purple-500"
>

<div className="bg-card rounded-2xl p-6 border border-border shadow-lg h-full flex flex-col">

<img src={c.logo} className="h-10 w-10 mb-4 object-contain"/>

<h3 className="font-semibold text-lg mb-1">{c.title}</h3>
<p className="text-muted-foreground text-sm">{c.org}</p>

<span className="inline-block mt-3 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
{c.year}
</span>

<div className="flex flex-wrap gap-2 mt-4">
{c.skills.map((s)=>(
<span key={s} className="text-xs bg-muted px-2 py-1 rounded">
{s}
</span>
))}
</div>

{c.credential && (
<p className="text-xs mt-3 text-muted-foreground">
ID: {c.credential}
</p>
)}

<button
onClick={()=>setActive(c)}
className="mt-auto text-sm text-primary font-medium hover:underline pt-4"
>
Show Details →
</button>

</div>
</motion.div>
))}
</div>


{/* publications */}
<div className="max-w-4xl mx-auto mt-24">

<h3 className="text-2xl font-semibold mb-8 text-center">
Publications
</h3>

{publications.map((p,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
className="bg-card border border-border rounded-xl p-6 shadow mb-6 cursor-pointer hover:shadow-lg transition"
onClick={()=>setActivePub(p)}
>

<h4 className="font-semibold text-lg">{p.title}</h4>
<p className="text-muted-foreground text-sm">{p.org} • {p.date}</p>

<p className="mt-3 text-sm line-clamp-3">
{p.description}
</p>

<p className="text-primary text-sm mt-4 font-medium">
View Publication →
</p>

</motion.div>
))}

</div>


{/* certificate modal */}
{active && (
<div
className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50 p-4"
onClick={()=>setActive(null)}
>

<motion.div
initial={{scale:.8,opacity:0}}
animate={{scale:1,opacity:1}}
onClick={(e)=>e.stopPropagation()}
className="bg-card w-full max-w-2xl rounded-2xl shadow-2xl relative overflow-hidden"
>

<button
onClick={()=>setActive(null)}
className="absolute top-4 right-4 text-muted-foreground text-xl"
>
✕
</button>

<div className="p-6 max-h-[90vh] overflow-y-auto">

<h3 className="text-2xl font-bold mb-2">{active.title}</h3>

<p className="text-muted-foreground text-sm mb-4">
{active.org} • {active.year}
</p>

<p className="text-sm mb-6">{active.description}</p>

<img
src={active.image}
className="w-full rounded-xl mb-6"
/>

{active.credential && (
<p className="text-xs text-muted-foreground mb-4">
Credential ID: {active.credential}
</p>
)}

<div className="flex flex-wrap gap-2 mb-6">
{active.skills.map((s)=>(
<span key={s} className="text-xs bg-muted px-3 py-1 rounded-full">
{s}
</span>
))}
</div>

<div className="flex gap-3">

<a
href={active.image}
download
className="flex-1 text-center bg-primary text-white text-sm py-2 rounded-lg"
>
Download
</a>

{active.credential && (
<a
href={`https://www.google.com/search?q=${active.credential}`}
target="_blank"
className="flex-1 text-center border text-sm py-2 rounded-lg"
>
Verify
</a>
)}

</div>

</div>
</motion.div>
</div>
)}


{/* publication modal */}
{activePub && (
<div
className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50 p-4"
onClick={()=>setActivePub(null)}
>

<motion.div
initial={{scale:.8,opacity:0}}
animate={{scale:1,opacity:1}}
onClick={(e)=>e.stopPropagation()}
className="bg-card w-full max-w-2xl rounded-2xl shadow-2xl relative"
>

<button
onClick={()=>setActivePub(null)}
className="absolute top-4 right-4 text-muted-foreground text-xl"
>
✕
</button>

<div className="p-6">

<h3 className="text-2xl font-bold mb-2">{activePub.title}</h3>

<p className="text-muted-foreground text-sm mb-4">
{activePub.org} • {activePub.date}
</p>

<img
src={activePub.image}
className="w-full rounded-xl mb-6"
/>

<p className="text-sm">{activePub.description}</p>

</div>
</motion.div>
</div>
)}

</section>
);
}