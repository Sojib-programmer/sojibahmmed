import { Helmet } from "react-helmet-async";

const VisionIndustries = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Industries — Vision | sojibahmmed.com</title>
        <meta name="description" content="The Vision section publishes essays on digital public infrastructure — identity, payments, data exchange — and what emerging economies can learn from countries that have built it well." />
        <link rel="canonical" href="https://sojibahmmed.com/vision/industries" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industries — Vision | sojibahmmed.com" />
        <meta property="og:description" content="Essays on digital public infrastructure — identity, payments, data exchange — and what emerging economies can learn from countries that have built it well." />
        <meta property="og:url" content="https://sojibahmmed.com/vision/industries" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Industries · ইন্ডাস্ট্রি</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Industries — Vision</h1>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-lg leading-relaxed text-muted-foreground">The Vision section publishes essays on digital public infrastructure — identity, payments, data exchange — and what emerging economies can learn from countries that have built it well.</p>
      </div>
    </div>
  );
};

export default VisionIndustries;
