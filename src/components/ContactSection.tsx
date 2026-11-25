import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Section, SectionHead } from "./Shell";
import { fadeInUp, staggerContainer } from "./animations";

const qualifiers = [
  {
    who: "Founders & operators",
    what: "Building in Bangladesh and need infrastructure, not advice.",
  },
  {
    who: "Investors",
    what: "Looking at South Asian digital infrastructure. Send a thesis, not a template.",
  },
  {
    who: "Security & engineering",
    what: "Zero Trust, audits, payment rails, AI systems. Scope in the first message.",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setLoading(true);
    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      return;
    }

    toast({ title: "Message sent!", description: "I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact" divided>
      <SectionHead eyebrow="Contact">
        If you&rsquo;re building Bangladesh&rsquo;s future,{" "}
        <span className="text-muted-foreground">let&rsquo;s talk.</span>
      </SectionHead>

      <motion.div
        className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-70px" }}
      >
        {/* Qualification */}
        <motion.div variants={fadeInUp}>
          <p className="type-eyebrow mb-4 text-muted-foreground/60">What to send</p>
          <dl className="divide-y divide-border/70 border-y border-border/70">
            {qualifiers.map((q) => (
              <div key={q.who} className="py-3.5">
                <dt className="text-[13px] font-medium text-foreground/90">{q.who}</dt>
                <dd className="mt-1 text-[12.5px] leading-[1.6] text-muted-foreground/75">
                  {q.what}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 font-mono text-[11px] leading-[1.7] text-muted-foreground/60">
            Direct:{" "}
            <a href="mailto:mail@sojibahmmed.com" className="text-primary hover:underline">
              mail@sojibahmmed.com
            </a>
            <br />
            Replies go out within 48 hours, Dhaka time.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              required
              aria-label="Your name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <input
              type="email"
              required
              aria-label="Your email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <textarea
            required
            rows={5}
            aria-label="Your message"
            placeholder="What are you building, and what do you need?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input-glass w-full resize-none rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-glow inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : <><Send size={16} /> Send message</>}
          </button>
        </motion.form>
      </motion.div>
    </Section>
  );
};

export default ContactSection;
