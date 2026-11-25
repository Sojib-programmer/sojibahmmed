import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const VisionAbout = () => (
  <article className="mx-auto max-w-2xl px-6 py-20">
    <Helmet>
      <title>About — Vision | sojibahmmed.com</title>
      <meta name="description" content="About Sojib Ahmmed and the Vision essays — technology, digital governance, and the future of public infrastructure." />
      <link rel="canonical" href="https://sojibahmmed.com/vision/about" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About — Vision | Sojib Ahmmed" />
      <meta property="og:description" content="About Sojib Ahmmed and the Vision essays — technology, digital governance, and digital public infrastructure." />
      <meta property="og:url" content="https://sojibahmmed.com/vision/about" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#555e6b]">About</p>
    <h1 className="text-4xl font-bold tracking-tight text-[#0a3d62]">Sojib Ahmmed</h1>
    <p className="mt-6 text-lg leading-relaxed text-[#555e6b]">
      I write about technology, digital governance, and the systems that quietly shape how citizens interact with their state. My focus is digital public infrastructure — identity, payments, data exchange — and what emerging economies, especially Bangladesh, can learn from countries that have built it well.
    </p>
    <p className="mt-4 text-lg leading-relaxed text-[#555e6b]">
      The Vision section publishes long-form essays in both English and Bangla. The goal is plain: take serious ideas, ground them in evidence, and tell the story so that policymakers, builders, and curious citizens can all follow along.
    </p>

    <div className="mt-10 rounded-xl border border-[#dce8f2] bg-white p-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-[#555e6b]">Currently writing about</h2>
      <ul className="mt-4 space-y-2 text-[#0a3d62]">
        <li>• Universal digital identity (GOV.BR, India Stack, EU Wallet)</li>
        <li>• Trust infrastructure for telecom and commerce</li>
        <li>• AI as a public-sector intelligence layer</li>
        <li>• Cybersecurity for critical national infrastructure</li>
      </ul>
    </div>

    <div className="mt-10 flex gap-3">
      <Link to="/vision/en" className="rounded-md bg-[#0a3d62] px-4 py-2 text-sm font-medium text-white hover:opacity-90">Read in English</Link>
      <Link to="/vision/bn" className="rounded-md border border-[#dce8f2] bg-white px-4 py-2 text-sm font-medium text-[#0a3d62] hover:bg-[#eaf4fc]">বাংলায় পড়ুন</Link>
    </div>
  </article>
);

export default VisionAbout;
