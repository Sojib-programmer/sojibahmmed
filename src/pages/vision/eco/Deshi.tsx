import { EcosystemExplainer, type ExplainerContent } from "../EcosystemExplainer";

const DATA: ExplainerContent = {
  slug: "deshi", image: "/vision/ecosystem/deshi.webp",
  hero: {
    eyebrow: { bn: "deshi.bd OS", en: "deshi.bd OS" },
    title: { bn: "বাংলাদেশের জন্য একটি Operating System", en: "An operating system for Bangladesh" },
    promise: { bn: "deshi.bd হলো যেখানে identity, payment, storage, agent — সব একসাথে এক protocol-এ মিশে নাগরিকের কাছে আসে।", en: "deshi.bd is where identity, payment, storage and agent converge into one protocol delivered to the citizen." },
  },
  whatIsIt: { bn: "deshi.bd একটি OS — জাতির, ফোনের নয়। দেশের service এক shell-এ চলে।", en: "deshi.bd is an OS for the nation, not the phone. Country services in one shell." },
  whyNeeded: { bn: "Fragmented app — cognitive load অসহ্য। এক OS layer থাকলে user-learning cost ১/১০।", en: "Fragmented apps crush cognitive load. One OS layer cuts user-learning cost 10x." },
  components: [
    { name: "deshi shell", desc: { bn: "Unified launcher + notification + wallet।", en: "Unified launcher + notification + wallet." } },
    { name: "deshi runtime", desc: { bn: "Service host, agent host, sandbox।", en: "Service host, agent host, sandbox." } },
    { name: "deshi SDK", desc: { bn: "Developer toolkit।", en: "Developer toolkit." } },
    { name: "deshi store", desc: { bn: "Verified service marketplace।", en: "Verified service marketplace." } },
  ],
  howItWorks: [
    { title: { bn: "Boot", en: "Boot" }, body: { bn: "নাগরিক deshi shell খোলেন।", en: "Citizen opens the deshi shell." } },
    { title: { bn: "Service launch", en: "Service launch" }, body: { bn: "Service shell-এ চলে।", en: "Service runs inside the shell." } },
    { title: { bn: "Settlement", en: "Settlement" }, body: { bn: "1pay.bd background-এ payment।", en: "1pay.bd handles payment." } },
    { title: { bn: "Receipt + audit", en: "Receipt + audit" }, body: { bn: "1drive.bd-তে document।", en: "Document to 1drive.bd." } },
  ],
  interconnections: { bn: "deshi.bd-র উপর প্রতিটি rail plug-in হিসেবে install হয়।", en: "Every rail installs as a plug-in on deshi.bd." },
  siblingLinks: [
    { to: "/vision/ecosystem/super", label: { bn: "Super Ecosystem", en: "Super Ecosystem" } },
    { to: "/vision/ecosystem/layers", label: { bn: "Layered Architecture", en: "Layered Architecture" } },
    { to: "/vision/ecosystem/infrastructure", label: { bn: "Infrastructure", en: "Infrastructure" } },
  ],
  provenModels: [
    { name: "Android Open Source Project", url: "https://source.android.com/", takeaway: { bn: "Open OS — সবচেয়ে successful OS strategy।", en: "The most successful OS strategy." } },
    { name: "WeChat Mini-Programs", url: "https://developers.weixin.qq.com/", takeaway: { bn: "Super-app + sub-app — ১বিলিয়ন user।", en: "Super-app + sub-app, 1B users." } },
    { name: "India Stack", url: "https://www.indiastack.org/", takeaway: { bn: "Country-level platform-as-OS-এর কাছাকাছি নজির।", en: "Closest precedent for country-level OS." } },
  ],
  roadmap: [
    { phase: { bn: "বছর ১", en: "Year 1" }, goal: { bn: "shell beta, ৫টি anchor service।", en: "Shell beta, 5 anchor services." } },
    { phase: { bn: "বছর ২-৩", en: "Year 2-3" }, goal: { bn: "store launch।", en: "Store launch." } },
    { phase: { bn: "বছর ৪-৫", en: "Year 4-5" }, goal: { bn: "Default citizen interface।", en: "Default citizen interface." } },
  ],
  risks: [
    { risk: { bn: "OEM preinstall করবে কেন?", en: "Why would OEMs preinstall it?" }, mitigation: { bn: "Government mandate + revenue share।", en: "Govt mandate + revenue share." } },
    { risk: { bn: "Closed ecosystem।", en: "Closed ecosystem." }, mitigation: { bn: "Open API, open store।", en: "Open API, open store." } },
  ],
};

export default function VisionDeshi() { return <EcosystemExplainer content={DATA} />; }
