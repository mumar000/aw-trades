// Prop Firm Comparison Data
export const PROP_FIRMS = [
  {
    id: "topstep",
    name: "Topstep",
    logo: "/firms/topstep.svg",
    details: {
      accounts: ["$50k Account Available", "$100k Account Available"],
    },
    drawdown: "End Of Day",
    payoutSplit: {
      initial: "50% share of first $10k",
      after: "90% after",
    },
  },
  {
    id: "tradeify",
    name: "Tradeify",
    logo: "/firms/tradeify.svg",
    details: {
      accounts: ["$50k Account Available", "$100k Account Available"],
    },
    drawdown: "End Of Day",
    payoutSplit: {
      initial: "50% share of first $10k",
      after: "90% after",
    },
  },
  {
    id: "apex",
    name: "Apex Trader Funding",
    logo: "/firms/apex.svg",
    details: {
      accounts: ["$50k Account Available", "$100k Account Available"],
    },
    drawdown: "End Of Day",
    payoutSplit: {
      initial: "50% share of first $10k",
      after: "90% after",
    },
  },
] as const;

export const PROP_FIRM_TABLE_HEADERS = [
  "Firm",
  "Details",
  "Drawdown",
  "Payout Split",
] as const;

// Comparisons Section Content
export const COMPARISONS_CONTENT = {
  title: {
    highlight: "Prop firm comparisons",
    rest: "built for clarity",
  },
  description: [
    "Prop firm rules and deals change constantly, and most sites either oversimplify or overwhelm.",
    "AW Trades presents prop firm comparisons in a clear, readable format that highlights what actually matters before choosing a firm. Key callouts, current deals, and simple explanations come first, with deeper rules available when needed.",
  ],
  cta: {
    text: "comparisons",
    href: "/comparisons",
  },
} as const;
