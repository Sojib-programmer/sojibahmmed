import { motion } from "framer-motion";
import { SectionWrapper, fadeInUp, fadeInLeft, staggerContainer } from "./animations";
import { Flame, Globe, Code, Zap } from "lucide-react";

const pillars = [
  { icon: Flame, title: "Purpose Over Profit", desc: "Every system exists to solve a real problem — not to chase trends." },
  { icon: Globe, title: "Digital Sovereignty", desc: "Building infrastructure so Bangladesh competes globally on its own terms." },
  { icon: Code, title: "Systems Thinking", desc: "Interconnected systems that compound — built to last, not to impress." },
  { icon: Zap, title: "Steady Execution", desc: "Measured work, done properly. One standard: it holds up." },
];

const ManifestoSection = () => {
  return (
    <SectionWrapper id="manifesto" className="px-6 py-24">
      <motion.div
        className="mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p variants={fadeInUp} className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary cursor-default">
          Philosophy
        </motion.p>
        <motion.h2 variants={fadeInUp} className="mb-2 text-3xl font-bold text-foreground md:text-5xl">
          Build what lasts.
        </motion.h2>
        <motion.h2 variants={fadeInUp} className="mb-12 text-3xl font-bold text-muted-foreground md:text-5xl">
          Systems, built to hold.
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              className="group glass-card rounded-xl p-6 transition-all duration-300"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statement */}
        <motion.div
          variants={fadeInLeft}
          className="relative glass-card rounded-xl border-l-2 !border-l-primary p-8 md:p-10"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Statement of Intent
          </p>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>The digital world is being reshaped. AI is no longer optional. Automation is no longer a luxury. And the countries that build their own infrastructure will lead the next century.</p>
            <p>Bangladesh has the talent. Bangladesh has the hunger. What Bangladesh lacks is the infrastructure — the platforms, the systems, the connective tissue that turns individual effort into collective power.</p>
            <p>That is what I am building — through MarketSync Global. Systems that, together, give Bangladesh the digital infrastructure it needs to compete on the world stage.</p>
            <p>Every system we build serves one purpose: <span className="font-medium text-primary">make Bangladesh digitally sovereign.</span></p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-10 text-right"
        >
          <p className="text-xl italic text-muted-foreground md:text-2xl">
            "I'm not building for exit. I'm building for existence."
          </p>
          <p className="mt-3 font-semibold text-primary">— Sojib Ahmmed</p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ManifestoSection;
