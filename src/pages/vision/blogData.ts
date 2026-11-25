import { leadershipPosts } from "./blogEssays";

export type BlogSection = { h: string; p: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  tag: string;
  lang?: "en" | "bn";
  date: string;
  readTime: string;
  excerpt: string;
  accent: string;
  sections: BlogSection[];
};

const basePosts: BlogPost[] = [
  {
    slug: "decade-of-ai-trust",
    title: "What Ten Years of Shipping AI Taught Me About Trust",
    tag: "AI",
    date: "2026-06-20",
    readTime: "8 min",
    accent: "#2d9cdb",
    excerpt:
      "The hardest part of AI was never the model. It was convincing a human being to act on what the model said.",
    sections: [
      {
        h: "The model was never the problem",
        p: [
          "I started building machine learning systems in the mid-2010s, back when 'AI' meant a logistic regression with good marketing. In ten years, the models changed beyond recognition. The humans did not. Every failed project I've watched — and I've watched plenty, including my own — died for the same reason: the people who were supposed to use the system didn't trust it.",
          "You can have 94% accuracy and zero adoption. I've seen a fraud model with beautiful precision get quietly turned off by an operations team because the one time it flagged a VIP customer incorrectly, nobody could explain why. One bad, unexplainable decision costs you a hundred good ones. That's not a machine learning insight. That's how humans have always worked.",
        ],
      },
      {
        h: "Trust is built at the edges, not the average",
        p: [
          "Psychologists call it negativity bias: losses feel roughly twice as heavy as equivalent gains. Your AI system lives and dies by its worst visible mistake, not its average performance. A recommendation engine that's brilliant 95 days out of 100 but recommends a coffin to someone who just searched for funeral flowers will be remembered for the coffin.",
          "So the practical lesson after a decade: design for the failure case first. Show confidence levels. Give users an escape hatch. Let them correct the system and see the correction take effect. The single biggest trust-builder I've ever shipped wasn't a better model — it was a 'not interested' button that visibly worked.",
        ],
      },
      {
        h: "Explainability is a feeling, not a feature",
        p: [
          "Nobody actually wants to read SHAP values. What users want is the feeling that the system's behavior is legible — 'recommended because you bought X' is technically a gross simplification, and it works, because it maps to how people explain their own decisions to themselves.",
          "Humanizing AI doesn't mean giving it a cute name. It means giving it the social behaviors that make humans trustworthy: admitting uncertainty, remembering corrections, and never being confidently wrong twice in the same way.",
        ],
      },
      {
        h: "Where this goes next",
        p: [
          "LLMs made the trust problem worse before making it better — a fluent, confident interface amplifies both good and bad answers. The teams winning right now are the ones treating trust as an engineered property: grounding, citations, deferrals to humans. The same lesson, one more time, at a bigger scale.",
        ],
      },
    ],
  },
  {
    slug: "users-dont-want-more-choices",
    title: "Your Users Don't Want More Choices. They Want Fewer Regrets.",
    tag: "Recommendation",
    date: "2026-06-12",
    readTime: "7 min",
    accent: "#e67e22",
    excerpt:
      "Ten years of building recommenders taught me that the goal was never discovery. It was reducing the fear of choosing wrong.",
    sections: [
      {
        h: "The paradox we keep re-learning",
        p: [
          "Barry Schwartz wrote The Paradox of Choice in 2004. Twenty years later, product teams still celebrate catalog size like it's a feature. It isn't. Every additional option a user sees carries a small psychological tax: the anticipated regret of picking wrong. Past a threshold, people don't choose better — they don't choose at all.",
          "The best A/B test result of my career came from removing recommendations. We cut a carousel from 24 items to 6, and conversion went up 18%. Nothing about the model changed. We simply lowered the cost of deciding.",
        ],
      },
      {
        h: "Recommenders are regret-minimization engines",
        p: [
          "Reframe what a recommendation system is for. It's not 'help users discover items.' It's 'absorb the anxiety of choosing.' When Netflix autoplays the next episode, it's not predicting your taste — it's removing a decision point where regret could enter. When Spotify builds Discover Weekly, the framing ('made for you, refreshed weekly, disappears') lowers the stakes of every song on it.",
          "Once you see it this way, metrics change. Click-through rate measures curiosity. Return rate measures trust. The number I learned to watch is decision latency: how long a user hovers before committing. When that drops, you've done your job.",
        ],
      },
      {
        h: "The confidence you show matters more than the confidence you have",
        p: [
          "A ranked list of 50 items says 'we're not sure, you figure it out.' A single bold 'Top pick for you' with two alternates says 'we did the work.' Same model, same scores — radically different psychology. Commitment from the interface invites commitment from the user.",
          "This is why editorial curation keeps beating pure algorithmic feeds in categories where mistakes are expensive — travel, gifts, professional tools. Humans trust a point of view more than a probability distribution.",
        ],
      },
    ],
  },
  {
    slug: "matching-is-psychology",
    title: "Matching Is a Psychology Problem Wearing a Math Costume",
    tag: "Matching Tech",
    date: "2026-06-05",
    readTime: "9 min",
    accent: "#9b59b6",
    excerpt:
      "Marketplaces, dating apps, job boards, ride-hailing — I've built matchers for all of them. The math is the easy 20%.",
    sections: [
      {
        h: "Every marketplace is a matching engine",
        p: [
          "Uber matches riders to drivers. Upwork matches clients to freelancers. Tinder matches people to people. Shopify merchants match products to buyers. Strip away the branding and it's the same machine: two sides, preferences on both, and an algorithm deciding who sees whom.",
          "In ten years of building these, I've learned the stable-matching literature — Gale-Shapley, deferred acceptance, all of it — matters far less than three psychological facts the textbooks never mention.",
        ],
      },
      {
        h: "Fact one: both sides need to feel chosen",
        p: [
          "A match that's optimal on paper fails if either side feels like a fallback. Dating apps learned this brutally: telling someone 'this person is in your league' is algorithmically honest and emotionally radioactive. The best matchers manufacture mutual selection — both parties should believe they picked, not that they were assigned.",
          "In B2B marketplaces this shows up as the 'why me?' problem. A freelancer who understands why they were matched to a job applies with double the effort. One line of match rationale outperformed a 15% relevance improvement in every test I ran.",
        ],
      },
      {
        h: "Fact two: speed of match beats quality of match",
        p: [
          "This one hurt to learn. We spent a quarter improving match quality by 12% on offline metrics. Meanwhile a competitor halved their time-to-first-match, and won. Waiting is interpreted as rejection. A decent match in two minutes beats a great match in two days, because the human on the other end has already written a story about why nobody wants them.",
        ],
      },
      {
        h: "Fact three: rejection must be laundered",
        p: [
          "Great matching systems are great rejection-hiding systems. Nobody gets told 'you were ranked 47th.' They get 'here are new matches for you.' The kindest thing an algorithm can do is make non-selection feel like timing rather than judgment. Design your failure states before your success states — that's where churn lives.",
        ],
      },
    ],
  },
  {
    slug: "checkout-is-a-conversation",
    title: "The Checkout Is a Conversation, and Most Stores Are Bad at It",
    tag: "E-commerce",
    date: "2026-05-28",
    readTime: "7 min",
    accent: "#27ae60",
    excerpt:
      "70% of carts are abandoned. After a decade in e-commerce I'm convinced it's not friction — it's unanswered doubt.",
    sections: [
      {
        h: "Abandonment isn't laziness",
        p: [
          "The industry treats cart abandonment as a friction problem: fewer form fields, faster load, one-click pay. All good. All insufficient. Baymard's numbers have hovered around 70% abandonment for a decade despite checkouts getting objectively faster every year. Speed wasn't the bottleneck.",
          "Watch session recordings — really watch them — and you see something else. People pause at checkout the way they pause at a shop door. They're running an internal conversation: Is this trustworthy? What if it doesn't fit? Who do I even talk to if this goes wrong? The checkout that converts is the one that answers those questions before they're asked.",
        ],
      },
      {
        h: "Doubt has a location",
        p: [
          "Each anxiety spikes at a predictable moment. Shipping cost fear peaks the instant an address form appears. Return anxiety peaks at size/variant selection. Payment security fear peaks at the card field. Generic 'trust badges' scattered in the footer do nothing; the same reassurance placed exactly at the doubt point moves numbers. 'Free returns within 30 days' next to the size selector outperformed the same text in the header by 4x in my tests.",
        ],
      },
      {
        h: "The post-purchase window is the cheapest marketing you own",
        p: [
          "Peak-end rule: people judge an experience by its most intense moment and its ending. For e-commerce, the ending is delivery, not payment. The stores I've seen with pathological repeat-purchase rates all over-invest in the boring window between order and doorstep — obsessive tracking updates, honest delay warnings, packaging that feels like a small event.",
          "Your checkout closes the sale. Your delivery experience opens the next one.",
        ],
      },
    ],
  },
  {
    slug: "ten-years-of-hype",
    title: "Ten Years of AI Hype: A Field Guide to What Actually Survived",
    tag: "Technology",
    date: "2026-05-20",
    readTime: "8 min",
    accent: "#e74c3c",
    excerpt:
      "Chatbots died and came back. Blockchain didn't. A personal audit of a decade of technology cycles — and the pattern underneath.",
    sections: [
      {
        h: "The graveyard and the garden",
        p: [
          "2016: chatbots will replace apps. 2017: everything on the blockchain. 2018: self-driving cars in two years. 2021: we'll work in the metaverse. Some of these composted into nothing; some went dormant and returned stronger. Having bet my time (and occasionally my salary) on several of them, I've started keeping an honest ledger.",
          "The pattern I trust now: technology survives when it removes a step from something people already do. It dies when it demands people do something new. LLM chat survived where 2016 chatbots died because typing a question is something humans already did — the tech finally caught up to the behavior. The metaverse asked for new behavior in new hardware for unclear rewards. Compost.",
        ],
      },
      {
        h: "Hype has a psychology, not just a cycle",
        p: [
          "Gartner draws it as a curve, but on the ground it's a social contagion. Engineers adopt to stay employable. Executives adopt to signal vision. Investors adopt because other investors adopted. Nobody in the chain is evaluating the technology — everyone is evaluating everyone else's evaluation. This is why hype peaks feel unanimous and post-crash consensus feels equally unanimous. Neither moment contains much information.",
          "The useful signal lives in boring places: what do teams keep using after the budget scrutiny arrives? Nobody wrote keynotes about postgres, and it quietly ate the database world twice.",
        ],
      },
      {
        h: "How I place bets now",
        p: [
          "Three filters, learned expensively. One: does it remove a step or add one? Two: does it work badly-but-usefully today, or only impressively in demos? Badly-but-useful wins — spreadsheets, early search, GPT-3 all started janky and indispensable. Three: are the loudest advocates users or sellers? When the users are louder than the vendors, pay attention.",
        ],
      },
    ],
  },
  {
    slug: "personalization-creepiness-line",
    title: "The Creepiness Line: Why Personalization Backfires",
    tag: "Recommendation",
    date: "2026-05-12",
    readTime: "6 min",
    accent: "#e67e22",
    excerpt:
      "The same data, used two different ways, reads as 'helpful' or 'surveillance.' The difference is who the user thinks is in control.",
    sections: [
      {
        h: "Helpful and creepy use the same data",
        p: [
          "'You reordered this last month — running low?' feels like a good shopkeeper. 'We noticed you visited a pharmacy yesterday' feels like a stalker. The underlying data pipeline can be identical. The psychological difference is attribution: the first inference comes from what I gave you (my orders), the second from what you took (my location).",
          "Users maintain an intuitive ledger of what they've knowingly shared. Personalization that stays inside that ledger reads as service. Personalization that reveals data the user never consciously handed over reads as surveillance — even when it was in the terms of service. Especially when it was in the terms of service.",
        ],
      },
      {
        h: "Accuracy past a point becomes a liability",
        p: [
          "There's a documented effect where over-precise targeting reduces conversion: the ad that knows too much triggers reactance, the human instinct to reassert control when freedom feels threatened. I've watched a retargeting campaign perform better after we made it vaguer. We widened the audience, softened the copy from 'still thinking about the blue one?' to a category-level message, and CTR rose.",
          "The practical rule I give teams: personalize the shelf, not the greeting. Reorder the catalog invisibly all you want — but the moment you name what you know, you'd better be certain the user remembers telling you.",
        ],
      },
      {
        h: "Control is the antidote",
        p: [
          "Every study and every experiment I've run agrees: perceived control resets the creepiness line. A visible 'why am I seeing this?' with real levers doesn't just reduce complaints — it increases engagement with the personalization itself. People lean into systems they believe they can steer. They flinch from systems that steer them.",
        ],
      },
    ],
  },
  {
    slug: "search-vs-recommendation",
    title: "Search Is Confidence, Recommendation Is Doubt",
    tag: "Matching Tech",
    date: "2026-04-30",
    readTime: "6 min",
    accent: "#9b59b6",
    excerpt:
      "Two retrieval systems, two opposite states of mind. Confusing them is the most common product mistake I've spent ten years watching.",
    sections: [
      {
        h: "Same infrastructure, opposite psychology",
        p: [
          "Search and recommendation share embeddings, indexes, rankers — from an engineering seat they're siblings. From the user's seat they are opposites. A searching user knows what they want and is testing whether you can keep up. A browsing user doesn't know what they want and is testing whether you can lead. Serving the confident user a suggestion feels patronizing. Serving the doubtful user a blank search bar feels like abandonment.",
        ],
      },
      {
        h: "The mode-detection problem",
        p: [
          "The real product skill is detecting which mode a user is in, moment to moment — because they switch mid-session. Someone searches 'running shoes' (confident), scans results, doesn't click (confidence collapsing), scrolls back up (now in doubt). That is the exact moment a recommendation earns its keep, and the exact moment most sites just show page 2.",
          "Query behavior telegraphs mode: precise queries with model numbers mean confidence — get out of the way, exact match, no upsell. Vague category queries mean doubt — this is where curation, comparison tables, and 'people like you chose' belong. Treating both with one ranked list is the retrieval equivalent of one-size-fits-all.",
        ],
      },
      {
        h: "LLMs are collapsing the boundary",
        p: [
          "Conversational interfaces merge the two modes: a dialogue can start confident and drift into doubt within three turns, and the system can now follow. The winners of the next decade of commerce search will be the ones that track the user's certainty as state — not just their query as text. The technology finally permits it. Most product thinking hasn't caught up.",
        ],
      },
    ],
  },
  {
    slug: "cold-start-first-impressions",
    title: "Cold Start Is a First-Impression Problem",
    tag: "Recommendation",
    date: "2026-04-18",
    readTime: "7 min",
    accent: "#e67e22",
    excerpt:
      "The literature treats cold start as missing data. Users experience it as a stranger guessing badly at who they are.",
    sections: [
      {
        h: "Sixty seconds to be wrong forever",
        p: [
          "The first session decides everything. Research on first impressions says humans judge in under a second and then spend the relationship confirming that judgment. Products get slightly longer — maybe a session — but the mechanism is identical. If your day-one recommendations read as random, the user files your product under 'doesn't get me' and no amount of later learning reopens the file, because they've stopped generating the signals you'd learn from. Cold start failures are self-sealing.",
        ],
      },
      {
        h: "Asking beats guessing, but only briefly",
        p: [
          "Onboarding questionnaires work — pick three topics, choose five artists — because they convert cold start into a collaboration. Psychologically it flips the frame from 'stranger guessing' to 'assistant briefed.' But the tolerance window is short: every screen past the second, drop-off compounds. My working rule after years of testing: ask for one high-information choice, then start showing results and let corrections do the rest. An early 'not this' teaches more than three more onboarding screens.",
          "The underrated trick is borrowing warmth: import context the user already trusts. 'Continue with the genre you were just browsing' or seeding from an existing platform's history makes minute one feel like minute one hundred.",
        ],
      },
      {
        h: "Design the confession",
        p: [
          "The worst cold-start move is faking confidence — a 'For You' page that plainly isn't. Users forgive ignorance; they punish pretense. The honest framing ('we're still learning your taste — help us') consistently outperforms false personalization in every retention cohort I've measured. Systems, like people, get one chance to be humbly new.",
        ],
      },
    ],
  },
  {
    slug: "emerging-market-ecommerce",
    title: "What Building for Emerging Markets Taught Me That Silicon Valley Couldn't",
    tag: "E-commerce",
    date: "2026-04-05",
    readTime: "8 min",
    accent: "#27ae60",
    excerpt:
      "Cash on delivery, WhatsApp storefronts, trust before technology — commerce in Dhaka runs on psychology the playbooks ignore.",
    sections: [
      {
        h: "Trust infrastructure precedes payment infrastructure",
        p: [
          "In markets like Bangladesh, cash on delivery isn't a legacy inconvenience — it's a rational trust protocol. The buyer is saying: I don't trust the platform enough to pay before I hold the product. Every Western playbook treats COD as a problem to eliminate. The operators who win treat it as a trust ladder: COD first, then partial prepay with visible refund history, then wallets. You don't remove COD. You graduate people out of it by being reliable long enough.",
        ],
      },
      {
        h: "Commerce is conversational by default",
        p: [
          "The dominant storefront across much of South Asia isn't a website — it's a WhatsApp or Facebook thread with a human on the other end. Buyers negotiate, ask for real photos, and want a name to blame if things go wrong. This isn't backwardness; it's the oldest commerce psychology there is — bazaar dynamics — running on modern rails. The catalog-and-cart model asks buyers to trust a system. The chat model lets them trust a person.",
          "The interesting technology problem, and the one I find most worth building, is scaling that personal trust without faking it: AI-assisted (not AI-pretending-to-be-human) seller chat, verified seller identity, reputation that travels across platforms.",
        ],
      },
      {
        h: "Constraints are a feature factory",
        p: [
          "Expensive data produced lite apps. Unbanked users produced bKash and M-Pesa — mobile money that leapfrogged cards entirely. Unreliable addresses produced landmark-based delivery networks with local knowledge no geocoder has. A decade of watching this convinced me the direction of innovation has reversed: emerging-market constraints now generate patterns the West adopts later. Study Dhaka and Nairobi if you want to see 2030's commerce early.",
        ],
      },
    ],
  },
  {
    slug: "agents-are-the-new-matchmakers",
    title: "When Your Customer Is an Algorithm: Matching in the Agent Era",
    tag: "AI",
    date: "2026-03-22",
    readTime: "7 min",
    accent: "#2d9cdb",
    excerpt:
      "AI agents are starting to shop, hire, and negotiate on behalf of humans. Everything I know about matching is about to run twice.",
    sections: [
      {
        h: "The buyer is changing species",
        p: [
          "For ten years I optimized for a human on the other side of the screen — their attention span, their regret, their need to feel chosen. That human is starting to delegate. Shopping agents compare prices across hundreds of stores without seeing your banner. Recruiting agents screen candidates without reading your employer branding. The psychology I spent a decade learning doesn't disappear — it moves up one level, to the moment the human briefs their agent.",
        ],
      },
      {
        h: "Matching becomes a two-layer game",
        p: [
          "Layer one: human to agent. Does the person trust the agent enough to delegate, and how do they express fuzzy preferences ('something nice for my mother, not too expensive') to a machine? That's a cold-start and trust problem — the same ones, in new clothes. Layer two: agent to market. Agents don't respond to urgency banners or social proof; they respond to structured data, verifiable claims, and machine-readable return policies. Persuasion gets replaced by legibility.",
          "The uncomfortable implication for e-commerce: a decade of conversion optimization — scarcity timers, exit popups, dark patterns — is worthless against a buyer that cannot feel FOMO. Merchants who invested in honest structured data will be discovered. Merchants who invested in manipulation will be filtered.",
        ],
      },
      {
        h: "Trust still decides everything",
        p: [
          "Here's what won't change. When an agent buys the wrong thing, the human doesn't blame the merchant — they blame the agent, and delegation retracts. Agent platforms will therefore be pathologically conservative, preferring verified, boring, reliable sellers over optimal-on-paper ones. The trust dynamics I described in matching markets replay exactly: speed of resolution, laundered rejection, feeling chosen. Same psychology. New species. The next decade belongs to whoever designs for both.",
        ],
      },
    ],
  },
];

export const posts: BlogPost[] = [...basePosts, ...leadershipPosts].sort(
  (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0),
);

export type Category = {
  slug: "ai" | "ecommerce" | "recommendation" | "matching" | "leadership";
  label: string;
  tags: string[];
  accent: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    slug: "ai",
    label: "AI",
    tags: ["AI", "Technology"],
    accent: "#2d9cdb",
    blurb: "Ten years of shipping models into production — and the human trust that decided whether any of it survived.",
  },
  {
    slug: "ecommerce",
    label: "E-commerce",
    tags: ["E-commerce"],
    accent: "#e2725b",
    blurb: "Checkout, catalogues and conversion, read as a conversation with an anxious human being.",
  },
  {
    slug: "recommendation",
    label: "Recommendation",
    tags: ["Recommendation"],
    accent: "#7b61ff",
    blurb: "Ranking systems optimise clicks. People optimise regret. Notes on the gap.",
  },
  {
    slug: "matching",
    label: "Matching Technology",
    tags: ["Matching Tech"],
    accent: "#00a86b",
    blurb: "Two-sided markets, cold start and rejection — the psychology under the matching algorithm.",
  },
  {
    slug: "leadership",
    label: "Leadership",
    tags: ["Leadership"],
    accent: "#16a34a",
    blurb: "Letters on building in Bangladesh: infrastructure, trust, restraint and staying after the launch.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function postsForCategory(slug: string) {
  const cat = getCategory(slug);
  if (!cat) return [];
  return posts.filter((p) => cat.tags.includes(p.tag));
}

export const allTags = Array.from(new Set(posts.map((p) => p.tag))).sort();

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

