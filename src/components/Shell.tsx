import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The spine. Every homepage section renders its content through this container so
 * eyebrows, headings and card edges land on the same x at every breakpoint.
 */
export const Shell = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-10", className)}>
    {children}
  </div>
);

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Renders a hairline top rule so section boundaries are felt, not guessed. */
  divided?: boolean;
}

/**
 * Section shell with the single vertical rhythm token. No ad-hoc py-* per section.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, className, divided = false }, ref) => (
    <motion.section
      ref={ref}
      id={id}
      className={cn("section-y relative", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {divided && (
        <Shell>
          <div className="hairline-full mb-[clamp(2.5rem,1.5rem+3vw,4rem)]" />
        </Shell>
      )}
      <Shell>{children}</Shell>
    </motion.section>
  )
);

Section.displayName = "Section";

/** Eyebrow + heading pair with fixed rhythm. */
export const SectionHead = ({
  eyebrow,
  children,
  sub,
}: {
  eyebrow: string;
  children: ReactNode;
  sub?: ReactNode;
}) => (
  <header className="max-w-3xl">
    <p className="type-eyebrow text-primary/80">{eyebrow}</p>
    <h2 className="type-h2 mt-6 font-bold text-foreground">{children}</h2>
    {sub && <p className="type-body mt-4 max-w-2xl text-muted-foreground">{sub}</p>}
  </header>
);
