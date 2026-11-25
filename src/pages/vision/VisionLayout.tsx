import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./vision.css";

const VisionLayout = () => {
  return (
    <div className="vision-root flex min-h-screen flex-col bg-[#f9f7f4]">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Serif+Bengali:wght@400;600;700&display=swap"
        />
      </Helmet>

      <header className="sticky top-0 z-40 border-b border-[#dce8f2] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/vision" className="font-semibold tracking-tight text-[#0a3d62]">
            sojibahmmed<span className="text-[#f0a500]">.</span>com / vision
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/vision" className="text-[#555e6b] hover:text-[#0a3d62]">Home</Link>
            <Link to="/vision/industries" className="text-[#555e6b] hover:text-[#0a3d62]">Industries</Link>
            <Link to="/vision/ecosystem" className="text-[#555e6b] hover:text-[#0a3d62]">Ecosystem</Link>
            <Link to="/vision/blog" className="text-[#555e6b] hover:text-[#0a3d62]">Field Notes</Link>

            <Link to="/vision/about" className="text-[#555e6b] hover:text-[#0a3d62]">About</Link>
            <Link to="/vision/en" className="text-[#555e6b] hover:text-[#0a3d62]">EN</Link>
            <Link to="/vision/bn" className="text-[#555e6b] hover:text-[#0a3d62]">বাংলা</Link>
            <Link to="/" className="ml-2 rounded-md border border-[#0a3d62]/20 px-3 py-1 text-xs text-[#0a3d62] hover:bg-[#0a3d62] hover:text-white">
              ← Main site
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-[#dce8f2] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#555e6b]">Industries · ইন্ডাস্ট্রি</p>
              <ul className="space-y-1.5 text-[#555e6b]">
                <li><Link to="/vision/industries" className="hover:text-[#0a3d62]">All industries →</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#555e6b]">Ecosystem · ইকোসিস্টেম</p>
              <ul className="space-y-1.5 text-[#555e6b]">
                <li><Link to="/vision/ecosystem" className="hover:text-[#0a3d62]">Hub</Link></li>
                <li><Link to="/vision/ecosystem/super" className="hover:text-[#0a3d62]">Super Ecosystem</Link></li>
                <li><Link to="/vision/ecosystem/layers" className="hover:text-[#0a3d62]">Layered Architecture</Link></li>
                <li><Link to="/vision/ecosystem/deshi" className="hover:text-[#0a3d62]">deshi OS</Link></li>
                <li><Link to="/vision/ecosystem/interconnection" className="hover:text-[#0a3d62]">Master Map</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#555e6b]">Site</p>
              <ul className="space-y-1.5 text-[#555e6b]">
                <li><Link to="/vision/about" className="hover:text-[#0a3d62]">About</Link></li>
                <li><Link to="/vision/blog" className="hover:text-[#0a3d62]">Field Notes (blog)</Link></li>

                <li><Link to="/vision/en" className="hover:text-[#0a3d62]">English essay</Link></li>
                <li><Link to="/vision/bn" className="hover:text-[#0a3d62]">বাংলা প্রবন্ধ</Link></li>
                <li><Link to="/" className="hover:text-[#0a3d62]">← Back to main site</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-[#dce8f2] pt-5 text-right font-mono text-xs text-[#555e6b]">
            © 2026 sojibahmmed.com — Vision
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisionLayout;
