import { motion } from "framer-motion";
import { Section, SectionHead } from "./Shell";
import { fadeInUp, staggerContainer } from "./animations";
import { buildLog } from "@/data/proof";

const paras = [
  "I started with a laptop and a question: why does Bangladesh have to depend on everyone else's infrastructure?",
  "While others were building apps, I started building systems — the platforms those users would eventually need.",
  "When you solve a real problem, people show up. And they keep showing up.",
  "That's when I understood — the opportunity isn't in products. It's in infrastructure. It's in being the one who builds the roads, not the cars.",
  "That is what MarketSync Global does: build the digital infrastructure Bangladesh needs to compete globally — steadily, and to a standard that holds up.",
];

const StorySection = () => {
  return (
    <Section id="story" divided>
      <SectionHead eyebrow="The Story">
        It started with necessity.{" "}
        <span className="text-muted-foreground">It became a mission.</span>
      </SectionHead>

      <motion.div
        className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-70px" }}
      >
        <div className="space-y-5">
          {paras.map((text, i) => (
            <motion.p key={i} variants={fadeInUp} className="type-body text-muted-foreground">
              {text}
            </motion.p>
          ))}
        </div>

        {/* Build log — operators trust changelogs, not adjectives */}
        <motion.div variants={fadeInUp}>
          <p className="type-eyebrow mb-4 text-muted-foreground/60">Build log</p>
          <ol className="divide-y divide-border/70 border-y border-border/70">
            {buildLog.map((e) => (
              <li key={e.system} className="py-3.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] font-medium text-foreground/90">{e.system}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-primary/70 tabular-nums">
                    {e.date}
                  </span>
                </div>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-muted-foreground/70">
                  {e.outcome}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[11px] leading-[1.6] text-muted-foreground/50">
            Entity filings are public record. Product states are current as shipped.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default StorySection;
