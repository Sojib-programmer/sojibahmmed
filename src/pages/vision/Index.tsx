import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const VisionIndex = () => (
  <div className="bg-[#f9f7f4]">
    <Helmet>
      <title>Vision — Universal Digital Identity & Digital Governance | sojibahmmed.com</title>
      <meta
        name="description"
        content="Essays on universal digital identity, GOV.BR, and digital public infrastructure — in English and Bangla, by Sojib Ahmmed."
      />
      <link rel="canonical" href="https://sojibahmmed.com/vision" />
      <meta property="og:title" content="Vision — Universal Digital Identity" />
      <meta property="og:description" content="Lessons from Brazil's GOV.BR for governments, citizens, and Bangladesh." />
      <meta property="og:url" content="https://sojibahmmed.com/vision" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Vision — Universal Digital Identity" />
      <meta name="twitter:description" content="Lessons from Brazil's GOV.BR for governments, citizens, and Bangladesh." />
    </Helmet>

    <section className="border-b border-[#dce8f2]">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="mb-5 inline-block rounded-full border border-[#dce8f2] bg-[#eaf4fc] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#1e6b9e]">
          Digital Governance · Identity Systems
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0a3d62] md:text-5xl">
          One verified identity. Every public service.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[#555e6b]">
          How Brazil's GOV.BR turned a fragmented bureaucracy into a trust platform for 170 million citizens — and what every country, including Bangladesh, can learn from it.
        </p>
        <p className="mt-3 text-sm text-[#555e6b]">
          Essay by <span className="font-medium text-[#0a3d62]">Sojib Ahmmed</span> · May 2026 · ~12 min read
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-[#555e6b]">Read the essay</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Link
          to="/vision/en"
          className="group block rounded-2xl border border-[#dce8f2] bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          style={{ borderTop: "4px solid #2d9cdb" }}
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#1e6b9e" }}>English</div>
          <h3 className="text-2xl font-bold" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#0a3d62" }}>
            One Login, Every Service
          </h3>
          <p className="mt-3 text-sm text-[#555e6b]">
            The case for a universal digital identity system, told through Brazil's GOV.BR — architecture, citizen benefits, the implementation roadmap, and the hard problems that cannot be engineered away.
          </p>
          <span className="mt-5 inline-block text-sm font-semibold" style={{ color: "#1e6b9e" }}>
            Read in English →
          </span>
        </Link>

        <Link
          to="/vision/bn"
          className="group block rounded-2xl border border-[#dce8f2] bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          style={{ borderTop: "4px solid #1a7a4a" }}
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#1a7a4a" }}>বাংলা</div>
          <h3 className="text-2xl font-bold leading-snug" style={{ fontFamily: "'Noto Serif Bengali', serif", color: "#0f5c35" }}>
            ইউনিভার্সাল ডিজিটাল আইডেন্টিটি: GOV.BR থেকে শিক্ষা
          </h3>
          <p className="mt-3 text-sm text-[#555e6b]" style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
            একটি দেশ কীভাবে ১৭ কোটি নাগরিককে একটি ট্রাস্টেড ডিজিটাল পরিচয় দিল — এবং বাংলাদেশসহ সব দেশ এই মডেল থেকে কী নিতে পারে।
          </p>
          <span className="mt-5 inline-block text-sm font-semibold" style={{ color: "#1a7a4a" }}>
            বাংলায় পড়ুন →
          </span>
        </Link>
      </div>
    </section>

    <section className="border-t border-[#dce8f2] bg-[#eaf4fc]/50">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-4">
        {[
          ["170M+", "Registered users on GOV.BR"],
          ["4,000+", "Federal services, one login"],
          ["370M", "Free legal digital signatures"],
          ["R$12.98B", "Documented government savings"],
        ].map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="text-3xl font-bold tracking-tight text-[#0a3d62]">{n}</div>
            <div className="mt-2 text-xs uppercase tracking-wider text-[#555e6b]">{l}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#555e6b]">Also explore</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        <Link to="/vision/industries" className="rounded-xl border border-[#dce8f2] bg-white p-5 hover:border-[#2d9cdb]">
          <p className="font-mono text-xs text-[#1e6b9e]">Essays</p>
          <h3 className="mt-1 font-bold text-[#0a3d62]">Industries</h3>
          <p className="mt-1 text-sm text-[#555e6b]">Essays on digital public infrastructure.</p>
        </Link>
        <Link to="/vision/ecosystem" className="rounded-xl border border-[#dce8f2] bg-white p-5 hover:border-[#2d9cdb]">
          <p className="font-mono text-xs text-[#1e6b9e]">9 concepts</p>
          <h3 className="mt-1 font-bold text-[#0a3d62]">Ecosystem</h3>
          <p className="mt-1 text-sm text-[#555e6b]">Concepts — the digital ecosystem, explained.</p>
        </Link>
        <Link to="/vision/about" className="rounded-xl border border-[#dce8f2] bg-white p-5 hover:border-[#2d9cdb]">
          <p className="font-mono text-xs text-[#1e6b9e]">Author</p>
          <h3 className="mt-1 font-bold text-[#0a3d62]">About</h3>
          <p className="mt-1 text-sm text-[#555e6b]">Sojib Ahmmed — technology, digital governance, public infrastructure.</p>
        </Link>
      </div>
    </section>
  </div>
);

export default VisionIndex;
