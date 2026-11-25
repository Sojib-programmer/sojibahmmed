/**
 * Proof layer. Every value here must be defensible from something public:
 * a registration record. No invented clients, no invented press,
 * no invented testimonials, no inflated counts.
 */

/** Legal receipts — the strongest verifiable signal on the page. */
export interface Receipt {
  entity: string;
  jurisdiction: string;
  type: string;
  ref: string;
  date: string;
}

export const receipts: Receipt[] = [
  {
    entity: "MARKETSYNC GLOBAL LLC",
    jurisdiction: "New Mexico, USA",
    type: "Domestic LLC",
    ref: "Record 0008064284",
    date: "Filed Nov 27, 2025",
  },
  {
    entity: "MARKETSYNC GLOBAL LTD.",
    jurisdiction: "Rajshahi, Bangladesh",
    type: "Private Ltd. Company",
    ref: "Cert RAJC-2483/2025",
    date: "Incorporated Jun 29, 2025",
  },
];

/** Dated build log. Only entries with a real, citable date. */
export interface LogEntry {
  date: string;
  system: string;
  outcome: string;
}

export const buildLog: LogEntry[] = [
  {
    date: "2025.06.29",
    system: "MARKETSYNC GLOBAL LTD.",
    outcome: "Incorporated in Bangladesh under the Companies Act 1994.",
  },
  {
    date: "2025.11.27",
    system: "MARKETSYNC GLOBAL LLC",
    outcome: "US entity filed in New Mexico — cross-border contracting unlocked.",
  },
];
