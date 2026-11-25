import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ManifestoSection from "@/components/ManifestoSection";


import BlogSection from "@/components/BlogSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { buildPersonSchema } from "@/lib/identity";

const Index = () => {
  const siteUrl = "https://sojibahmmed.com";
  const description = "Sojib Ahmmed — Founder & CEO, MarketSync Global. Operator and builder.";

  const personSchema = buildPersonSchema("/", description);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sojib Ahmmed",
    "url": siteUrl,
    "description": description,
    "author": { "@type": "Person", "name": "Sojib Ahmmed" },
    "publisher": { "@type": "Person", "name": "Sojib Ahmmed" }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marketsync Global",
    "url": siteUrl,
    "founder": { "@type": "Person", "name": "Sojib Ahmmed" }
  };

  return (
    <>
      <Helmet>
        <title>Sojib Ahmmed — Founder &amp; CEO, MarketSync Global</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sojib Ahmmed" />
        <meta property="og:title" content="Sojib Ahmmed — Founder & CEO, MarketSync Global" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sojib_hq" />
        <meta name="twitter:creator" content="@sojib_hq" />
        <meta name="twitter:title" content="Sojib Ahmmed — Founder & CEO, MarketSync Global" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      <HeroSection />
      <StorySection />
      <ManifestoSection />
      
      <BlogSection />
      <NewsletterSignup />
      <ContactSection />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default Index;
