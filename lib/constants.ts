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

export const DISCLOSURE_ITEMS = [
  {
    title: "Risk Disclaimer",
    content:
      "Trading carries significant risk and is not suitable for everyone. You may lose part or all of your capital. Do not trade with money you cannot afford to lose. Always assess your financial situation, experience, and risk tolerance before trading.",
  },
  {
    title: "Not Financial Advice",
    content:
      "AW Trades is not a registered investment advisor, broker-dealer, or financial advisor. Nothing on this website is financial, investment, tax, or legal advice. All content is for educational and informational purposes only. Past performance does not guarantee future results.",
  },
  {
    title: "Affiliate Disclosure",
    content:
      "AW Trades may earn commissions from certain links or partner offers. We may receive different commission rates from different partners, which can influence how providers are featured. This does not increase the price you pay.",
  },
  {
    title: "No Warranties",
    content:
      'All information is provided "as is" without warranties of any kind. We do not guarantee accuracy, completeness, or timeliness. Third-party terms, pricing, and offers may change without notice.',
  },
] as const;
