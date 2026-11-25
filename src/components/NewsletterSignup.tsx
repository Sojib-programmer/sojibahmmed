import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Section } from "./Shell";
import { fadeInUp, staggerContainer } from "./animations";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim() });
    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast({ title: "You're already subscribed!", description: "Thanks for your interest." });
      } else {
        toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      }
      return;
    }

    toast({ title: "Subscribed!", description: "Welcome to the inner circle." });
    setEmail("");
  };

  return (
    <Section divided>
      <motion.div
        className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-70px" }}
      >
        <motion.div variants={fadeInUp} className="max-w-lg">
          <p className="type-eyebrow text-primary/80">Dispatch</p>
          <h2 className="type-h3 mt-4 font-bold text-foreground">Stay in the loop.</h2>
          <p className="type-body mt-2 text-muted-foreground">
            New systems, launches and field notes on Bangladesh&rsquo;s digital infrastructure. No
            noise.
          </p>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="flex w-full max-w-md gap-3"
        >
          <input
            type="email"
            required
            aria-label="Email address"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-glass flex-1 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-glow inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all disabled:opacity-50"
          >
            {loading ? "..." : <><Mail size={16} /> Subscribe</>}
          </button>
        </motion.form>
      </motion.div>
    </Section>
  );
};

export default NewsletterSignup;
