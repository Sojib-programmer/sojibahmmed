import { useState, useEffect } from "react";
import { MoreVertical, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SALogo from "./SALogo";
import { useTheme } from "@/hooks/useTheme";

const scrollLinks = [
  { label: "Story", href: "#story" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const visionLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Field Notes", href: "/vision/blog" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme, toggle } = useTheme();

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  // Glass ignition on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-[var(--announce-h,0px)] z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-500 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <SALogo size="sm" linkTo="/" />

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-muted-foreground transition-all hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="rounded-lg p-2 text-muted-foreground transition-all hover:text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <MoreVertical size={20} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-6 top-full mt-1 w-56 glass-card rounded-xl p-2 shadow-2xl">
          {scrollLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="w-full rounded-lg py-2.5 text-left text-sm text-muted-foreground transition-all hover:bg-[hsl(0,0%,100%/0.06)] hover:text-foreground px-3"
            >
              {l.label}
            </button>
          ))}
          <div className="my-2 h-px bg-border" />
          <p className="py-1.5 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/50">Vision</p>
          {visionLinks.map((v) => (
            <Link
              key={v.href}
              to={v.href}
              className="block rounded-lg py-2.5 px-3 text-sm text-muted-foreground transition-all hover:bg-[hsl(0,0%,100%/0.06)] hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {v.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
