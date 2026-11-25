// Single source of truth for the personal identity graph (Person JSON-LD + aliases).

export const SITE_URL = "https://sojibahmmed.com";

export const CANONICAL_NAME = "Sojib Ahmmed";

/** English + Bangla aliases people actually search for. */
export const ALIASES_EN = [
  "Sojib Ahmmed",
  "Sojib Ahmed",
  "Md Sojib Ahmmed",
  "Md Sojib Ahmed",
  "MD Sojib",
  "Md Sojib",
  "Sojib",
  "Sazib",
  "Sazib Ahmed",
  "Sazib Ahmmed",
  "Shojib",
  "Shojib Ahmed",
  "Sojib Hossain",
  "sojib_hq",
  "SOJIB AHMMED",
];

export const ALIASES_BN = [
  "সজিব আহম্মেদ",
  "সজিব আহমেদ",
  "সজীব আহমেদ",
  "মোঃ সজিব",
  "মোঃ সজিব আহমেদ",
  "সাজিব আহমেদ",
  "সজিব",
  "সজীব",
];

export const ALL_ALIASES = [...ALIASES_EN, ...ALIASES_BN];

/** Bangla rendering for each name-variant route. */
export const BN_BY_SLUG: Record<string, string> = {
  about: "সজিব আহম্মেদ",
  "who-is-sojib-ahmmed": "সজিব আহম্মেদ কে?",
  "md-sojib": "মোঃ সজিব",
  "sojib-ahmed": "সজিব আহমেদ",
  "sazib-ahmed": "সাজিব আহমেদ",
  sojib: "সজিব",
  "sojib-ahmmed-bangladesh": "সজিব আহম্মেদ, বাংলাদেশ",
};

export const SAME_AS = [
  "https://x.com/sojib_hq",
  "https://github.com/SOJIB-AHMMED",
  "https://www.linkedin.com/in/sojibahmmed",
];

export const KNOWS_ABOUT = [
  "Business Infrastructure",
  "Digital Governance",
  "Cybersecurity",
  "Commerce Systems",
  "Automation",
];

export const AFFILIATIONS = [
  {
    "@type": "Organization",
    name: "Marketsync Global LLC",
    url: "https://marketsync.io",
    foundingDate: "2025-11-27",
    foundingLocation: { "@type": "Place", name: "New Mexico, USA" },
    legalName: "MARKETSYNC GLOBAL LLC",
  },
  {
    "@type": "Organization",
    name: "Marketsync Global Ltd.",
    foundingDate: "2025-06-29",
    foundingLocation: { "@type": "Place", name: "Bangladesh" },
    legalName: "Marketsync Global Ltd.",
  },
];

const DEFAULT_DESCRIPTION =
  "Sojib Ahmmed — Founder & CEO, MarketSync Global. Operator and builder.";

export const PERSON_ID = `${SITE_URL}/#person`;

/** Person node — identical alias set everywhere, self-referencing page. */
export function buildPersonSchema(pagePath = "/", description = DEFAULT_DESCRIPTION) {
  const pageUrl = `${SITE_URL}${pagePath === "/" ? "/" : pagePath}`;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: CANONICAL_NAME,
    alternateName: ALL_ALIASES,
    url: SITE_URL,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    sameAs: SAME_AS,
    jobTitle: "Founder & CEO, MarketSync Global",
    description,
    knowsAbout: KNOWS_ABOUT,
    nationality: { "@type": "Country", name: "Bangladesh" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    affiliation: AFFILIATIONS,
  };
}

/** ProfilePage wrapper — what search engines read for "also known as" resolution. */
export function buildProfilePageSchema(pagePath: string, name: string, description: string) {
  const pageUrl = `${SITE_URL}${pagePath}`;
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#profilepage`,
    url: pageUrl,
    name,
    description,
    inLanguage: "en",
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}
