// Long-form product posts. Static source of truth (no database dependency).
export interface ProductPostSeed {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published_at: string;
  cover: string;
  keywords: string[];
  content: string;
}

export const productPosts: ProductPostSeed[] = [
  {
    slug: "merchant-bd-operating-system-for-modern-commerce",
    title: "merchant.bd: The Operating System for Modern Commerce in Bangladesh",
    excerpt: "Most Bangladeshi merchants run on five disconnected tools and a Facebook inbox. merchant.bd collapses storefront, payments, inventory and delivery into one operating layer.",
    category: "Ecosystem",
    published_at: "2026-08-10T09:00:00Z",
    cover: "ecosystem-business-stack.jpg",
    keywords: ["merchant.bd", "Bangladesh ecommerce", "merchant platform", "F-commerce", "payments Bangladesh"],
    content: `## What merchant.bd is

merchant.bd is a commerce operating system for Bangladeshi sellers. Not a website builder, not a payment button — the layer underneath that ties storefront, orders, payments, inventory, courier and customer data into a single source of truth.

The typical small merchant in Dhaka today runs on a Facebook page, a WhatsApp number, a spreadsheet for stock, a bKash personal number for payments and three courier dashboards. Every handoff between those tools is a place where an order gets lost, a payment gets disputed or a customer gets ignored.

## The problem it solves

### Fragmentation is the real tax

Merchants rarely fail because of demand. They fail because operations do not scale past the founder's attention span. At 20 orders a day a spreadsheet works. At 200 it collapses, and the merchant spends evenings reconciling payments instead of growing.

### Trust is missing at checkout

Cash-on-delivery dominates because buyers do not trust prepayment and sellers do not trust buyers. The result: high return rates, fake orders and courier costs paid on parcels that never convert.

## How it works

- **Unified catalog** — one product record feeds the storefront, social shops and marketplace listings.
- **Order inbox** — orders from web, Messenger and WhatsApp land in one queue with status tracking.
- **Payment rails** — MFS, cards and bank transfer reconciled automatically against orders.
- **Courier routing** — rate comparison and booking across major Bangladeshi couriers, with COD settlement tracking.
- **Risk scoring** — repeat-return and fake-order signals flagged before dispatch.
- **Customer ledger** — every buyer, every order, every conversation in one profile.

## Why it is beneficial

1. **Lower operating cost per order.** Automation removes the manual reconciliation that eats margin.
2. **Fewer failed deliveries.** Risk scoring and partial-advance flows cut COD losses.
3. **Data ownership.** The merchant owns the customer list instead of renting it from a social platform.
4. **A path to scale.** The same system handles 20 or 20,000 orders without changing tools.

## Integrations across the ecosystem

merchant.bd plugs into kyc.bd for verified sellers, ticru for international payouts, assistant.bd for Bangla AI customer replies and nationwide.bd for logistics. Each piece is useful alone; together they form infrastructure.

## Market opportunity

Bangladesh has hundreds of thousands of active social commerce sellers and a rapidly digitising middle class. The winners of the next five years will not be the merchants with the best ads — they will be the merchants with the best operations. merchant.bd exists to give every serious seller that edge.

## Bottom line

Commerce in Bangladesh does not need another marketplace. It needs plumbing. merchant.bd is that plumbing.`,
  },
  {
    slug: "kyc-bd-identity-infrastructure-for-bangladesh",
    title: "kyc.bd: Identity Infrastructure for Bangladesh",
    excerpt: "Every digital product in Bangladesh eventually hits the same wall: who is this person? kyc.bd turns identity verification into an API instead of a paperwork ritual.",
    category: "Cybersecurity",
    published_at: "2026-08-09T09:00:00Z",
    cover: "zero-trust-cybersecurity.jpg",
    keywords: ["kyc.bd", "KYC Bangladesh", "identity verification", "NID verification", "fraud prevention"],
    content: `## What kyc.bd is

kyc.bd is an identity verification layer built for Bangladeshi businesses. It lets fintechs, marketplaces, lenders and platforms verify that a person or a business is who they claim to be — quickly, with an audit trail, and without collecting more data than necessary.

## Why identity is the bottleneck

Fraud in Bangladesh's digital economy is not exotic. It is fake accounts, borrowed NIDs, mule wallets and sellers who disappear after collecting advance payments. Every platform builds its own half-finished verification flow, stores sensitive documents badly and still gets defrauded.

From a security standpoint this is the worst outcome: more copies of sensitive identity data scattered across more weak systems, with no real reduction in risk.

## How it works

- **Document capture** — guided capture of NID, passport or trade licence with quality checks.
- **Data extraction** — OCR tuned for Bangla and English documents.
- **Liveness and face match** — confirms a real person is present and matches the document.
- **Business verification** — trade licence, TIN and director checks for merchants.
- **Risk signals** — device, velocity and duplicate-identity detection.
- **Verification token** — downstream platforms receive a signed result, not raw documents.

## Security by design

kyc.bd follows a minimisation principle: verify once, share the result, not the documents. Data is encrypted at rest, access is logged and retention is time-bound. Platforms integrating kyc.bd shrink their own attack surface instead of growing it.

## Why it is beneficial

1. **Fewer fraud losses** for marketplaces, lenders and payment platforms.
2. **Faster onboarding** — minutes instead of days of manual document review.
3. **Compliance readiness** with a clean audit trail for regulators and partners.
4. **Reusable trust** — a verified user can move between ecosystem products without starting over.

## Ecosystem integrations

merchant.bd uses kyc.bd for seller verification, resale.bd for trusted listings, ticru for payment onboarding and nationwide.bd for agent networks.

## The bigger picture

Identity is infrastructure, like roads or electricity. Countries that get digital identity right unlock credit, commerce and cross-border trade. kyc.bd is a private-sector contribution to that foundation — built by people who understand both the market and the threat model.`,
  },
  {
    slug: "nationwide-bd-operating-group",
    title: "nationwide.bd: An Operating Group Built for All of Bangladesh",
    excerpt: "Digital products die at the last mile. nationwide.bd is the operating group that takes ecosystem services beyond Dhaka — logistics, agents and field operations across 64 districts.",
    category: "Ecosystem",
    published_at: "2026-08-08T09:00:00Z",
    cover: "bd-domain-portfolio.jpg",
    keywords: ["nationwide.bd", "Bangladesh logistics", "agent network", "rural commerce", "operating group"],
    content: `## What nationwide.bd is

nationwide.bd is the operating group of the ecosystem: the people, partners and processes that make digital services work outside the Dhaka bubble. Software scales in the cloud. Operations scale on the ground.

## Why this matters

Most Bangladeshi startups are designed for Gulshan and Dhanmondi. Yet the majority of the population, and a growing share of spending, sits in district towns and upazilas. Products that ignore this reality cap their own market at a fraction of the country.

The last mile in Bangladesh is not just a logistics problem. It is a trust problem, a literacy problem and a payments problem at the same time.

## What it operates

- **Agent network** — local representatives who onboard merchants, verify users and resolve issues in person.
- **Logistics partnerships** — courier and hub coordination for districts poorly served by national players.
- **Field verification** — physical checks that support kyc.bd and resale.bd trust layers.
- **Local support** — Bangla-first assistance through phone, agents and assistant.bd.
- **Training** — practical digital skills for small merchants and young operators.

## Why it is beneficial

1. **Real reach.** Ecosystem products become usable in all 64 districts, not just two cities.
2. **Local jobs.** Agents and operators build income in their own communities.
3. **Higher trust.** A known local face converts better than any ad.
4. **Feedback loop.** Field teams surface problems that dashboards never show.

## How it connects

nationwide.bd distributes merchant.bd to district sellers, provides field support for kyc.bd, handles pickup and inspection for resale.bd and extends trips.bd into local tourism operators.

## The operator view

Systems thinking says the weakest link sets the throughput. In Bangladesh, the weakest link is almost always physical execution outside the capital. nationwide.bd exists to strengthen exactly that link — unglamorous, operational and decisive.`,
  },
  {
    slug: "trips-bd-rebuilding-travel-for-bangladesh",
    title: "trips.bd: Rebuilding Travel for Bangladesh",
    excerpt: "Domestic travel in Bangladesh is booming, but booking still runs on phone calls and Facebook posts. trips.bd brings verified operators, clear pricing and safe payments.",
    category: "Ecosystem",
    published_at: "2026-08-07T09:00:00Z",
    cover: "digital-nomad-toolkit-2026.jpg",
    keywords: ["trips.bd", "Bangladesh travel", "domestic tourism", "Cox's Bazar booking", "Sylhet tour"],
    content: `## What trips.bd is

trips.bd is a travel platform for Bangladesh: tours, stays and transport from verified operators, with transparent pricing and protected payments. Built for domestic travellers first, and for the diaspora and foreign visitors second.

## The problem

Every holiday, hundreds of thousands of people head to Cox's Bazar, Sylhet, Sajek, Bandarban and Sundarbans. Most book through Facebook groups, a phone number and an advance sent by MFS to a stranger. Prices change on arrival. Some operators disappear. Quality is a lottery.

## How it works

- **Verified operators** — every tour company and host goes through kyc.bd verification.
- **Clear packages** — inclusions, exclusions and cancellation terms stated upfront.
- **Protected payment** — funds released to operators on schedule, not all at once.
- **Reviews from real trips** — only travellers who booked can review.
- **Bangla and English** — full experience in both languages.
- **Group tools** — split payments and shared itineraries for friend groups and families.

## Why it is beneficial

### For travellers
Safer bookings, honest prices and recourse when something goes wrong.

### For operators
A steady pipeline of customers, less time answering the same questions in Messenger and a reputation that compounds.

### For the country
Local tourism money stays in local economies, and smaller destinations gain visibility.

## Ecosystem integrations

trips.bd runs on kyc.bd for operator trust, merchant.bd for operator back-office, assistant.bd for Bangla support and nationwide.bd for on-ground partner networks.

## The opportunity

A rising middle class, better roads and a culture that loves travelling in groups make domestic tourism one of the most under-digitised markets in Bangladesh. trips.bd treats travel as infrastructure: trust, payments and information, done properly.`,
  },
  {
    slug: "assistant-bd-ai-automation-in-bangla",
    title: "assistant.bd: AI Automation That Speaks Bangla",
    excerpt: "Most AI tools treat Bangla as an afterthought. assistant.bd is built Bangla-first — answering customers, drafting documents and automating routine work for local businesses.",
    category: "AI",
    published_at: "2026-08-06T09:00:00Z",
    cover: "bangla-ai-tools.jpg",
    keywords: ["assistant.bd", "Bangla AI", "AI automation Bangladesh", "বাংলা এআই", "customer support AI"],
    content: `## What assistant.bd is

assistant.bd is an AI automation layer for Bangladeshi businesses, built to understand and write Bangla, Banglish and English the way customers actually type them.

## Why Bangla-first matters

A customer in Rajshahi does not write formal Bangla in a chat window. They write "vai price koto, delivery hobe?" Generic AI tools stumble on this. Businesses either ignore half their messages or hire people to answer the same five questions all day.

## What it automates

- **Customer replies** — price, stock, delivery and order-status answers in Messenger, WhatsApp and web chat.
- **Order capture** — converts a chat conversation into a structured order in merchant.bd.
- **Document drafting** — quotations, invoices, notices and letters in Bangla or English.
- **Call summaries** — with ticru voice, calls become searchable notes.
- **Internal workflows** — routing, reminders and reports for small teams.

## How it is built

assistant.bd routes each task to the right model tier: small fast models for classification and routing, stronger models for writing and reasoning. Business knowledge — products, policies, prices — is retrieved from the merchant's own data, so answers stay grounded instead of invented. Every automated action is logged and can be handed to a human in one step.

## Why it is beneficial

1. **Response time drops from hours to seconds**, which directly lifts conversion.
2. **Staff focus on exceptions**, not repetition.
3. **Consistent answers** across every channel.
4. **Affordable** — priced for small and medium businesses, not enterprises only.

## Ecosystem integrations

assistant.bd is the conversational front-end of the ecosystem: it speaks for merchant.bd stores, supports trips.bd travellers, answers resale.bd buyers and helps studies.bd learners.

## The bigger idea

AI should not widen the gap between those who speak English and those who do not. assistant.bd is a bet that the next wave of productivity in Bangladesh will be delivered in Bangla.`,
  },
  {
    slug: "ticru-io-ai-voice-sales-agent",
    title: "ticru voice: The AI Voice Sales Agent",
    excerpt: "Sales teams lose leads because nobody calls back fast enough. ticru voice puts an AI agent on the phone — qualifying, following up and booking meetings around the clock.",
    category: "AI",
    published_at: "2026-08-05T09:00:00Z",
    cover: "ticru-io-ai-calling.jpg",
    keywords: ["ticru voice", "ticru.io", "AI voice agent", "AI sales calls", "call automation"],
    content: `## What ticru voice is

ticru voice (ticru.io) is an AI voice agent that makes and answers business calls. It qualifies leads, follows up, reminds customers about appointments and payments, and books meetings directly into a team's calendar.

## The problem

Speed to lead decides most sales. A lead contacted within five minutes is dramatically more likely to convert than one contacted an hour later. Yet most teams call back late, inconsistently, or never. Call centres are expensive, hard to staff and hard to quality-control.

## How it works

- **Natural voice conversations** in multiple languages and accents.
- **Script plus judgment** — follows a sales playbook but handles objections and off-script questions.
- **Live tool use** — checks availability, looks up orders and writes to the CRM during the call.
- **Warm transfer** — hands hot leads to a human instantly.
- **Full transcripts and summaries** — every call searchable and scored.
- **Compliance controls** — consent capture, call windows and do-not-call lists.

## Use cases

- Inbound lead qualification for real estate, education and SaaS.
- Appointment reminders for clinics and service businesses.
- Payment and renewal follow-ups.
- Customer satisfaction and feedback calls.
- Outbound reactivation of old leads.

## Why it is beneficial

1. **Every lead gets called**, within seconds, at any hour.
2. **Cost per conversation falls** compared with human-only call centres.
3. **Consistent quality** — the agent never has a bad day.
4. **Humans do the high-value work** — closing, not dialling.

## Inside the ticru stack

ticru voice pairs with ticru pay: a call can end with a payment link, an invoice or a confirmed subscription. Together they turn conversation into revenue without a handoff gap.

## The thesis

Voice is the oldest business interface and the least automated. ticru voice makes it programmable.`,
  },
  {
    slug: "ticru-com-global-banking-and-payments",
    title: "ticru pay: Global Banking and Payments for Modern Business",
    excerpt: "Getting paid across borders should not take weeks and three intermediaries. ticru pay gives founders multicurrency accounts, global collections and fast payouts.",
    category: "Ecosystem",
    published_at: "2026-08-04T09:00:00Z",
    cover: "ticru-multicurrency.jpg",
    keywords: ["ticru pay", "ticru.com", "multicurrency account", "global payments", "cross-border payouts"],
    content: `## What ticru pay is

ticru pay (ticru.com) is a global payments and banking layer for internet businesses: multicurrency accounts, local collection details in major currencies, card and bank payments, and payouts to suppliers, freelancers and marketplace sellers worldwide.

## The problem

A founder in Bangladesh, Nigeria or Vietnam selling to customers in the US and Europe faces the same maze: no easy way to receive USD or EUR, high FX spreads, slow wires and accounts frozen without explanation. Money that has been earned sits in limbo.

## What it provides

- **Multicurrency balances** — hold, convert and send in major currencies.
- **Local receiving details** — customers pay like a domestic transfer.
- **Payment links and invoices** — get paid without building a checkout.
- **Mass payouts** — pay contractors and sellers in bulk.
- **Marketplace flows** — split payments and escrow-style holds.
- **Transparent FX** — clear rates, no hidden margins buried in the settlement.

## Why it is beneficial

1. **Faster cash flow** — days instead of weeks.
2. **Lower cost** per transaction and per conversion.
3. **One dashboard** for every currency and every counterparty.
4. **Built for founders** who formed companies through companysetup.io and need banking that matches.

## Security and compliance

ticru pay applies strict onboarding, transaction monitoring and access controls. Business verification connects to kyc.bd for Bangladeshi entities. Security is treated as a product feature, not a compliance checkbox.

## Inside the ticru stack

ticru pay and ticru voice are designed together: a sales call can close with a payment link, and a payment event can trigger a follow-up call. Communication and money on one rail.

## Why now

Cross-border digital trade is growing faster than the banking systems built to serve it. ticru pay closes that gap for the businesses that need it most.`,
  },
  {
    slug: "studies-bd-build-study-habits-every-day",
    title: "studies.bd: Build Study Habits Every Single Day",
    excerpt: "Students do not fail from lack of content — they fail from lack of consistency. studies.bd turns daily study into a habit with small goals, streaks and AI help in Bangla.",
    category: "Ecosystem",
    published_at: "2026-08-03T09:00:00Z",
    cover: "bangla-learn-2026.jpg",
    keywords: ["studies.bd", "study habits", "Bangladesh education", "SSC HSC preparation", "AI tutor Bangla"],
    content: `## What studies.bd is

studies.bd is a daily study companion for Bangladeshi students. It is not another video library. It is a system that helps students actually show up and study, every day, in small focused sessions.

## The real problem

There is more free educational content online than any student could finish in a lifetime. Yet results do not improve, because content is not the bottleneck. Consistency is. Students start strong, miss two days, feel guilty and quit.

## How it works

- **Daily micro-goals** — 25 to 45 minute sessions mapped to the syllabus.
- **Streaks and progress** — visible momentum that rewards showing up.
- **Spaced repetition** — revision scheduled at the moment memory starts to fade.
- **AI help in Bangla** — explanations of hard concepts in plain language, powered by assistant.bd.
- **Practice tests** — short quizzes aligned to SSC, HSC and admission exams.
- **Parent view** — optional weekly progress summary.

## Why it is beneficial

1. **Habits beat motivation.** Small daily wins compound into real results.
2. **Less anxiety** — students always know the next step.
3. **Affordable** compared to coaching centres.
4. **Accessible** — works on low-end phones and slow connections.

## Building more than grades

The habit of doing focused work every day is the same habit that builds careers and companies. studies.bd treats education as training for discipline, not just exams. It connects to the Bangla outreach series on systems thinking for young people.

## The vision

A generation that learns how to learn — consistently, independently and with AI as a tutor instead of a shortcut — is Bangladesh's real competitive advantage.`,
  },
  {
    slug: "resale-bd-trusted-secondhand-marketplace",
    title: "resale.bd: A Trusted Secondhand Marketplace for Bangladesh",
    excerpt: "Buying used in Bangladesh means risk: fake listings, broken products and disappearing sellers. resale.bd fixes trust with verification, escrow and AI matching.",
    category: "Ecosystem",
    published_at: "2026-08-02T09:00:00Z",
    cover: "reselling-business-2026.jpg",
    keywords: ["resale.bd", "secondhand marketplace", "used products Bangladesh", "escrow", "পুরাতন পণ্য"],
    content: `## What resale.bd is

resale.bd is a secondhand marketplace for Bangladesh built around one idea: trust first. Phones, laptops, furniture, bikes and electronics — bought and sold between people, with protection on both sides.

## Why secondhand is broken today

The demand is enormous. Prices for new goods keep rising and many families buy used out of necessity. But classifieds sites and Facebook groups leave buyers exposed to scams and sellers exposed to time-wasters. Nobody can verify anything.

## How resale.bd works

- **Verified users** through kyc.bd.
- **Escrow payments** — the buyer pays, funds are held, the seller is paid after confirmation.
- **AI-powered listings** — a few photos become a complete, honest listing.
- **Smart matching** — buyers are matched to relevant items and fair prices.
- **Inspection option** — for high-value items, physical checks through nationwide.bd partners.
- **Dispute resolution** with clear rules.

## Why it is beneficial

1. **Buyers stop gambling** with advance payments.
2. **Sellers sell faster** to serious, matched buyers.
3. **Fair prices** — AI price guidance reduces lowballing and overpricing.
4. **Circular economy** — products get a second life instead of a landfill.

## Ecosystem integrations

resale.bd relies on kyc.bd for identity, merchant.bd tools for power sellers, assistant.bd for Bangla chat and nationwide.bd for inspection and delivery.

## The thesis

Secondhand commerce is a trust market. Whoever solves trust wins it. resale.bd is engineered to do exactly that.`,
  },
  {
    slug: "ticru-marketsync-ecosystem-the-operating-stack-for-modern-business",
    title: "The ticru × MarketSync Ecosystem: The Operating Stack for Modern Business",
    excerpt: "Formation, banking, communication, sales and growth — scattered across a dozen vendors. The ticru and MarketSync ecosystem stitches them into one operating stack.",
    category: "Ecosystem",
    published_at: "2026-08-01T09:00:00Z",
    cover: "partnership-opportunities-2026.jpg",
    keywords: ["ticru ecosystem", "MarketSync Global", "companysetup.io", "business operating stack", "tuskzone", "rankone.top"],
    content: `## The thesis

A modern internet business needs the same core layers whether it is in Dhaka, Lagos or Austin: a legal entity, banking, payments, communication, sales, a team and distribution. Today each layer is a separate vendor with separate logins and no shared data. The ticru × MarketSync ecosystem is designed as one operating stack.

## The layers

### Formation — companysetup.io
US LLC formation, EIN, registered agent and compliance. 10,000+ founders served across 80+ countries. The legal foundation everything else sits on.

### Money — ticru pay
Multicurrency accounts, global collections and payouts. Once the company exists, it needs to get paid.

### Communication — ticru voice
AI voice agents for sales and support calls. Revenue starts with conversations.

### Talent and work — tuskzone.com
Access to vetted operators and freelancers to execute without building a large payroll on day one.

### Distribution — rankone.top
Search visibility and growth systems so customers find the business.

### Experiments — donkye.com
A sandbox for new consumer ideas that feed learnings back into the stack.

## Why one stack beats ten vendors

1. **Shared data** — a customer who pays on ticru pay can be called by ticru voice with full context.
2. **One onboarding** — verify once, use everywhere.
3. **Lower total cost** — bundled infrastructure instead of stacked subscriptions.
4. **Faster time to revenue** — from idea to incorporated, banked and selling in days.

## Who it is for

Founders in emerging markets selling globally, agencies managing many clients, and SMEs that want enterprise-grade operations without enterprise overhead.

## The operator perspective

MarketSync Global builds systems, not one-off products. Each brand in the ecosystem is useful alone, but the real value is the compounding effect when they are used together. That is the difference between a toolbox and an operating system.`,
  },
  {
    slug: "resale-bd-launch-escrow-secondhand-bangladesh",
    title: "resale.bd Is Live: Bangladesh's First Escrow-Protected Secondhand Marketplace",
    excerpt: "Today resale.bd launches — buy and sell used products in Bangladesh with escrow protection, verified users and AI-powered listings. রিসেল ডট বিডি এখন লাইভ।",
    category: "Announcement",
    published_at: "2026-08-12T09:00:00Z",
    cover: "reselling-business-2026.jpg",
    keywords: ["resale.bd launch", "escrow marketplace Bangladesh", "রিসেল বিডি", "secondhand Bangladesh", "পুরাতন জিনিস বিক্রি"],
    content: `## resale.bd is live

Today we are launching **resale.bd** — Bangladesh's first escrow-protected secondhand marketplace. Buy and sell used phones, laptops, electronics, furniture and more, with your money protected until the deal is done.

**রিসেল ডট বিডি এখন লাইভ।** পুরাতন পণ্য কেনাবেচা এখন নিরাপদ — টাকা থাকবে এসক্রোতে, পণ্য বুঝে পাওয়ার পর বিক্রেতা পাবেন।

## Why we built it

Everyone in Bangladesh has a story: the advance payment sent for a phone that never arrived, the laptop that looked perfect in photos and died in a week, the buyer who haggled for an hour and never showed up. Secondhand commerce here runs on hope. We wanted it to run on systems.

## What is included at launch

- **Escrow protection** — buyer pays into escrow, seller gets paid after the buyer confirms.
- **Verified accounts** — identity checks through kyc.bd.
- **AI listing assistant** — upload photos, get a complete title, description, category and suggested price.
- **Buyer–seller matching** — serious buyers are matched with relevant listings automatically.
- **Bangla and English** — the full experience in both languages.
- **Dispute support** — clear rules and a human team when things go wrong.

## How a deal works

1. Seller lists an item in minutes with AI help.
2. Buyer finds it through search or a match notification.
3. Buyer pays into escrow.
4. Seller ships or meets the buyer.
5. Buyer inspects and confirms.
6. Seller receives the money.

## For sellers

List faster, reach serious buyers, and stop wasting time on fake enquiries. Power sellers get merchant.bd tools for inventory and bulk listing.

## For buyers

No more gambling with advance payments. If the item is not as described, the escrow protects you.

## What comes next

Inspection services for high-value items, delivery integration across districts through nationwide.bd, and price-history insights for popular categories.

Welcome to resale.bd. Secondhand, finally trustworthy.`,
  },
  {
    slug: "ai-powered-listing-how-resale-bd-writes-your-ad",
    title: "AI-Powered Listing: How resale.bd Writes Your Ad",
    excerpt: "Most secondhand ads fail before anyone reads them — bad titles, missing details, wrong prices. resale.bd's AI turns a few photos into a complete, honest listing.",
    category: "AI",
    published_at: "2026-08-11T09:00:00Z",
    cover: "ai-automation-revolution.jpg",
    keywords: ["AI listing", "resale.bd AI", "AI product description", "এআই বিজ্ঞাপন", "computer vision marketplace"],
    content: `## The problem with secondhand ads

Look at any classifieds group: "Phone for sale, good condition, inbox price." No model, no storage, no battery health, no photos of the scratches. Buyers have to ask ten questions. Most do not bother. Good items sit unsold, and honest sellers lose to vague ones.

## What the AI listing assistant does

When a seller uploads photos on resale.bd, the assistant:

- **Identifies the item** — category, brand and likely model from the images.
- **Asks only the missing questions** — storage, purchase year, warranty, defects.
- **Detects visible condition** — scratches, dents and wear, so the listing is honest from the start.
- **Writes the title and description** in Bangla and English.
- **Suggests a price range** based on comparable listings and condition.
- **Picks the best cover photo** and flags blurry or misleading images.

## How it works under the hood

A vision model extracts structured attributes from the photos. A language model turns those attributes plus the seller's answers into a clear listing. Pricing uses recent marketplace data for similar items. Every field remains editable — the AI drafts, the seller decides.

## Why honesty is built in

Listings that hide defects create disputes, and disputes destroy trust. By surfacing condition upfront, the AI reduces escrow disputes and makes buyers confident enough to pay.

## Why it is beneficial

1. **Listing time drops from 15 minutes to under 2.**
2. **Better listings sell faster** — complete details mean fewer questions and more conversions.
3. **Fair pricing** reduces both lowballing and overpricing.
4. **Accessibility** — sellers who struggle to write descriptions get professional ads.

## বাংলায় সংক্ষেপে

কয়েকটা ছবি দিন — এআই নিজেই শিরোনাম, বিবরণ, কন্ডিশন আর দাম সাজেস্ট করবে। আপনি শুধু চেক করে পাবলিশ করবেন।

## The bigger lesson

AI is most useful when it removes friction from a real workflow, not when it is a chatbot bolted onto a page. The listing assistant is a small, focused use of AI that measurably improves a marketplace.`,
  },
  {
    slug: "buyer-seller-matching-engine-resale-bd",
    title: "Inside the Buyer–Seller Matching Engine of resale.bd",
    excerpt: "Search waits for buyers to know what they want. Matching goes further — connecting serious buyers with the right sellers at the right price, before either has to hunt.",
    category: "AI",
    published_at: "2026-08-11T06:00:00Z",
    cover: "how-ai-agents-work.jpg",
    keywords: ["matching engine", "resale.bd matching", "recommendation system", "buyer seller matching", "marketplace AI"],
    content: `## Why matching, not just search

In a secondhand marketplace every item is unique. A buyer searching for "iPhone 13" today may miss the perfect listing posted tomorrow. A seller may wait weeks while an ideal buyer never sees the ad. Search is passive. Matching is active.

## What the engine does

- **Captures intent** — saved searches, browsing behaviour and explicit "looking for" requests.
- **Understands items** — structured attributes from the AI listing assistant.
- **Scores fit** — model, condition, price range, location and delivery preference.
- **Notifies both sides** — a buyer gets a match alert, a seller sees there is real demand.
- **Learns from outcomes** — completed escrow deals feed back into ranking.

## The signals that matter

1. **Price fit** — the gap between the asking price and the buyer's budget.
2. **Distance** — local meetups convert far better.
3. **Trust level** — verified, well-reviewed users are prioritised.
4. **Recency and responsiveness** — sellers who reply quickly are matched first.
5. **Condition tolerance** — some buyers want mint, some want cheap.

## Designing against spam

A matching system can easily become a notification firehose. resale.bd limits alerts, ranks only high-confidence matches and lets users tune frequency. Fewer, better matches build trust in the system itself.

## Why it is beneficial

- **Sellers sell faster** because demand finds them.
- **Buyers save time** because supply finds them.
- **Fewer wasted conversations** because both sides are already a good fit.
- **Healthier pricing** because matches anchor on realistic ranges.

## The psychology

Matching is not only maths. People want to feel chosen, not processed. A single confident "this is a strong match for you" converts better than a list of fifty options. The engine is tuned for clarity, not volume.

## What it means for Bangladesh

Liquidity is the hardest problem in any marketplace. A good matching engine creates liquidity in a market where trust and time are scarce. That is how resale.bd intends to grow — by making every listing more likely to sell.`,
  },
  {
    slug: "bangladesh-secondhand-economy-2026-trust-crisis",
    title: "Bangladesh's Secondhand Economy in 2026: A Trust Crisis and an Opportunity",
    excerpt: "Rising prices are pushing millions toward used goods, but scams keep the market small and informal. The secondhand economy is a trust crisis — and a huge opportunity.",
    category: "Commerce",
    published_at: "2026-08-10T15:00:00Z",
    cover: "top-business-ideas-2026.jpg",
    keywords: ["secondhand economy Bangladesh", "used goods market", "online scams Bangladesh", "circular economy", "পুরাতন পণ্যের বাজার"],
    content: `## The market nobody measures

Bangladesh has a vast secondhand economy that rarely appears in reports: phones passed between siblings, laptops sold to fund the next upgrade, furniture moved between rented flats, motorbikes traded across districts. Most of it happens through Facebook groups, local shops and word of mouth.

## Why it is growing

- **Inflation** makes new goods unaffordable for many households.
- **Smartphone upgrades** create a constant supply of used devices.
- **Urban mobility** — people move flats often and sell what they cannot carry.
- **Students and young professionals** prefer value over brand-new.
- **Environmental awareness** is slowly making reuse aspirational.

## Why it stays small

### Scams
Advance-payment fraud, fake listings and counterfeit devices are routine. Many people simply refuse to buy used online.

### No verification
Anyone can create an account in seconds. Reputation does not carry between platforms.

### No protection
If a deal goes wrong, there is no recourse. Police reports for small amounts go nowhere.

### Information gaps
Buyers do not know fair prices. Sellers do not know how to present items honestly.

## What a trusted market needs

1. **Identity** — verified users with portable reputation.
2. **Escrow** — money held until the item is confirmed.
3. **Honest listings** — standardised condition information.
4. **Price transparency** — reference prices from real transactions.
5. **Dispute resolution** — fast and fair.

## The opportunity

Fix trust, and a large informal market moves online. That creates jobs in inspection, logistics and refurbishment, keeps products in use longer and gives households real savings.

## Where resale.bd fits

resale.bd was built to supply exactly these missing layers: kyc.bd identity, escrow payments, AI-assisted listings and matching. It is a systems answer to a systems problem.

## Final thought

Markets are built on trust before they are built on technology. In Bangladesh's secondhand economy, whoever engineers trust will own the category.`,
  },
  {
    slug: "qwen-ai-alibaba-bangla",
    title: "Alibaba-র Qwen AI: চীনের ওপেন মডেল যেভাবে খেলার নিয়ম বদলে দিচ্ছে",
    excerpt: "Alibaba-র Qwen সিরিজ এখন ওপেন-ওয়েট মডেলের দুনিয়ায় সবচেয়ে আগ্রাসী প্লেয়ার। বাংলাদেশের বিল্ডারদের জন্য এর মানে কী — খরচ, সার্বভৌমত্ব আর বাস্তব ব্যবহারের হিসাব।",
    category: "AI",
    published_at: "2026-11-25T01:00:00Z",
    cover: "self-llm-model.jpg",
    keywords: ["Qwen AI", "Alibaba Qwen", "কিউয়েন এআই", "ওপেন সোর্স এআই", "বাংলা এআই", "open weight LLM"],
    content: `## এক লাইনে কথাটা

Qwen এখন আর "চীনা বিকল্প" নয় — এটা ওপেন-ওয়েট মডেলের ফ্রন্টিয়ার। আর যেই মুহূর্তে ফ্রন্টিয়ার ওপেন হয়, সেই মুহূর্তে খরচের কাঠামো ভেঙে যায়। আমার কাছে এটাই আসল খবর।

## Qwen আসলে কী

Alibaba Cloud-এর Qwen একটি মডেল পরিবার — শুধু একটা চ্যাটবট নয়:

- **Qwen টেক্সট মডেল** — ছোট থেকে বড় Mixture-of-Experts পর্যন্ত।
- **Qwen-VL** — ছবি, ডকুমেন্ট, স্ক্রিনশট পড়তে পারে। বাংলা ইনভয়েস বা NID স্ক্যান পাইপলাইনে কাজের।
- **Qwen-Coder** — কোড জেনারেশন ও এজেন্টিক টুল কলিং।
- **Qwen-Audio / Omni** — ভয়েস ইন, ভয়েস আউট।

মূল কথা: বেশিরভাগ ভ্যারিয়েন্টের **ওয়েট ডাউনলোডযোগ্য**। নিজের সার্ভারে চালানো যায়। কারও API-এর দয়ায় বসে থাকতে হয় না।

## কেন এটা গুরুত্বপূর্ণ

### ১. খরচ
যেসব কাজে ভলিউম বেশি কিন্তু জটিলতা কম — ক্লাসিফিকেশন, এক্সট্রাকশন, রাউটিং, সামারি — সেখানে ফ্রন্টিয়ার ক্লোজড মডেল ব্যবহার করা টাকা পোড়ানো। সেলফ-হোস্টেড Qwen প্রায়ই অনেক গুণ সস্তা।

### ২. ডেটা সার্বভৌমত্ব
KYC, লেনদেন, মেডিকেল ডেটা বিদেশি API-তে পাঠানো মানে কমপ্লায়েন্স ঝুঁকি। ওপেন-ওয়েট মডেল দেশের সার্ভারে চললে ডেটা দেশেই থাকে। সাইবার সিকিউরিটির দিক থেকে এটা শর্ত।

### ৩. বাংলা ভাষার বাস্তবতা
Qwen-এর বাংলা এখনো ইংরেজির সমান নয়। কিন্তু ওয়েট খোলা থাকায় নিজের ডোমেইন ডেটা দিয়ে LoRA fine-tune করা যায়। ক্লোজড মডেলে সেই লিভার নেই।

## আমি কীভাবে ব্যবহার করি — স্তরভিত্তিক রাউটিং

| কাজ | মডেল স্তর |
| --- | --- |
| ক্লাসিফাই, ট্যাগ, রাউট | ছোট Qwen, সেলফ-হোস্টেড |
| ডকুমেন্ট / OCR | Qwen-VL |
| কোড ও ইন্টারনাল টুলিং | Qwen-Coder |
| জটিল রিজনিং, গ্রাহকমুখী লেখা | ফ্রন্টিয়ার API |

মডেল বাছাই সহজ; কখন কোনটা লাগবে সেই সীমা টানাই আসল ইঞ্জিনিয়ারিং।

## সতর্কতা

- **লাইসেন্স পড়ুন।** ভ্যারিয়েন্ট অনুযায়ী শর্ত আলাদা।
- **বেঞ্চমার্ক ≠ আপনার কাজ।** নিজের ডেটা দিয়ে ২০০টা রিয়েল কেসের eval সেট বানান।
- **GPU-ই আসল বিল।** কোয়ান্টাইজেশন ছাড়া হিসাব মিলবে না।
- **সাপ্লাই চেইন ঝুঁকি।** মডেল ফাইলের হ্যাশ যাচাই করুন — মডেলও একটা অ্যাটাক সারফেস।

## বাংলাদেশের বিল্ডারদের জন্য সুযোগ

1. **বাংলা-ফার্স্ট ভার্টিকাল মডেল** — আইন, স্বাস্থ্য, কৃষি, শিক্ষা।
2. **রেগুলেটেড সেক্টরের জন্য অন-প্রেম AI** — ব্যাংক, MFS, হাসপাতাল।
3. **বাংলায় ভয়েস অটোমেশন** — ticru voice এই দিকেই কাজ করছে।

## শেষ কথা

গল্পটা চীন বা Alibaba-র না। গল্পটা হলো: **ইন্টেলিজেন্স কমোডিটি হয়ে যাচ্ছে, ডিস্ট্রিবিউশন আর ডেটা হচ্ছে মোট।** প্রশ্ন হলো — এই সস্তা ইন্টেলিজেন্স দিয়ে আপনি কোন বাস্তব সমস্যার সমাধান শিপ করলেন।`,
  },
];
