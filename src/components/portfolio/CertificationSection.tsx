import { motion } from "framer-motion";

const certificates = [
  { title:"Python Programming", org:"Coursera", year:"2024" },
  { title:"Machine Learning", org:"Udemy", year:"2024" },
  { title:"Web Development", org:"Infosys", year:"2023" }
];

export default function CertificationSection(){
  return(
    <section className="py-24 px-6 bg-background">

      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          className="text-4xl font-bold mb-3"
        >
          Certifications
        </motion.h2>

        <p className="text-muted-foreground">
          Verified achievements & professional credentials.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {certificates.map((c,i)=>(
          <motion.div
            key={c.title}
            initial={{opacity:0,scale:.8}}
            whileInView={{opacity:1,scale:1}}
            transition={{delay:i*.15,type:"spring"}}
            whileHover={{scale:1.05}}
            className="rounded-2xl p-[1px] bg-gradient-to-br from-primary to-purple-500"
          >
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">

              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.org}</p>

              <span className="inline-block mt-4 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                {c.year}
              </span>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}