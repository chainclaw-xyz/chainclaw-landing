export const features = [
  {
    title: "Transaction Simulation",
    description:
      "Every transaction runs through Tenderly fork simulation before broadcast. See exact balance changes, gas costs, and potential failures before you sign.",
    icon: "simulation",
  },
  {
    title: "Risk Analysis",
    description:
      "GoPlus Security API checks for honeypots, hidden mints, sell taxes, blacklist functions, and holder concentration. Auto-blocks dangerous contracts.",
    icon: "shield",
  },
  {
    title: "Spending Guardrails",
    description:
      "Per-user limits on transaction size ($1K default), daily volume ($5K default), and cooldown periods. Your rules, enforced automatically.",
    icon: "guardrail",
  },
  {
    title: "MEV Protection",
    description:
      "Ethereum mainnet transactions route through Flashbots Protect to prevent sandwich attacks and frontrunning. Zero MEV leakage.",
    icon: "lock",
  },
  {
    title: "Encrypted Wallets",
    description:
      "AES-256-GCM encryption with scrypt key derivation. Fresh salt and IV per wallet. Keys decrypted on-demand, never cached in memory.",
    icon: "key",
  },
  {
    title: "Full Audit Trail",
    description:
      "Every transaction logged with complete lifecycle tracking. Status progression from pending through simulation, approval, broadcast, to confirmation.",
    icon: "audit",
  },
];

export type SkillCategory =
  | "all"
  | "trading"
  | "portfolio"
  | "automation"
  | "analysis";

export interface Skill {
  name: string;
  title: string;
  description: string;
  category: SkillCategory;
  icon: string;
  requires?: string;
}

export const skills: Skill[] = [
  {
    name: "swap",
    title: "Swap",
    description:
      "Swap tokens via DEX aggregators. Finds best price across DEXes with slippage protection.",
    category: "trading",
    icon: "arrows",
    requires: "1inch API key",
  },
  {
    name: "bridge",
    title: "Bridge",
    description:
      "Bridge tokens across chains via Li.Fi. Finds optimal route balancing speed and cost.",
    category: "trading",
    icon: "bridge",
    requires: "1inch API key",
  },
  {
    name: "lend",
    title: "Lend & Borrow",
    description:
      "Supply, borrow, withdraw, and repay via Aave V3. Full position management across chains.",
    category: "trading",
    icon: "bank",
    requires: "1inch API key",
  },
  {
    name: "balance",
    title: "Balance",
    description:
      "Check native and token balances across all connected chains in one command.",
    category: "portfolio",
    icon: "wallet",
  },
  {
    name: "portfolio",
    title: "Portfolio",
    description:
      "Aggregated portfolio view with USD values across Ethereum, Base, Arbitrum, Optimism, and Solana.",
    category: "portfolio",
    icon: "chart",
  },
  {
    name: "history",
    title: "History",
    description:
      "View transaction history with text, CSV, and JSON export. Filter by date, skill, or status.",
    category: "portfolio",
    icon: "clock",
  },
  {
    name: "dca",
    title: "DCA",
    description:
      "Dollar-cost averaging with hourly, daily, or weekly schedules. Pause, resume, or cancel anytime.",
    category: "automation",
    icon: "repeat",
  },
  {
    name: "alert",
    title: "Price Alerts",
    description:
      "Get notified when token prices cross your thresholds. Delivered via Telegram, Discord, or WebChat.",
    category: "automation",
    icon: "bell",
  },
  {
    name: "workflow",
    title: "Workflow",
    description:
      "Chain multiple skills into multi-step operations. Bridge, swap, and lend in a single command.",
    category: "automation",
    icon: "flow",
  },
  {
    name: "risk_check",
    title: "Risk Check",
    description:
      "Analyze any token or contract for honeypot risk, owner privileges, taxes, and holder concentration.",
    category: "analysis",
    icon: "scan",
  },
  {
    name: "backtest",
    title: "Backtest",
    description:
      "Run backtests on trading strategies with historical data. Validate before you deploy capital.",
    category: "analysis",
    icon: "flask",
  },
  {
    name: "agent",
    title: "Agent",
    description:
      "Start, stop, pause, and monitor autonomous trading agents. Full lifecycle management.",
    category: "analysis",
    icon: "bot",
  },
];

export const skillCategories: { key: SkillCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "trading", label: "Trading" },
  { key: "portfolio", label: "Portfolio" },
  { key: "automation", label: "Automation" },
  { key: "analysis", label: "Analysis" },
];

export const useCases = [
  {
    name: "Maya",
    role: "The Beginner",
    description:
      "Check balances, set price alerts, explore risk scores. No API keys needed beyond a channel token.",
    terminal: `> /balance
  ETH: 0.42 ($1,260.00)
  USDC: 500.00 ($500.00)

> Alert me when ETH drops below $2000
  Price alert set for ETH < $2,000`,
    tier: "Minimal",
  },
  {
    name: "Marcus",
    role: "The DeFi Trader",
    description:
      "Import wallets, swap tokens, set up daily DCA, build multi-step workflows across chains.",
    terminal: `> Swap 0.5 ETH for USDC on Base
  Simulating... 0.5 ETH -> 1,497.32 USDC
  Gas: 0.0004 ETH ($1.20)
  Guardrails: PASSED
  Broadcast: 0x7a3f...confirmed

> Set up a weekly $50 ETH DCA
  DCA created: $50 -> ETH every Monday`,
    tier: "Active DeFi",
  },
  {
    name: "Priya",
    role: "The Portfolio Manager",
    description:
      "Multi-wallet oversight, lending positions, portfolio tracking across 5 chains with alerts.",
    terminal: `> Show my portfolio
  Ethereum:  $12,400 (3.2 ETH, 5K USDC)
  Base:      $3,200  (1.1 ETH, 800 USDC)
  Arbitrum:  $1,800  (ARB, USDC)
  Total:     $17,400

> Check my Aave position
  Supplied: 2.0 ETH ($6,000)
  Borrowed: 2,000 USDC
  Health: 2.4 (safe)`,
    tier: "Full NL",
  },
  {
    name: "DAO Treasury",
    role: "Multi-sig Operations",
    description:
      "Multi-chain portfolio management, risk assessment for every contract interaction, audit-ready history.",
    terminal: `> Risk check 0x1f9840...
  Contract: Uniswap V3 Router
  Honeypot: No
  Owner privileges: Minimal
  Overall risk: LOW (12/100)

> Export history as CSV
  Exported 47 transactions to history.csv`,
    tier: "Power User",
  },
];

export const configTiers = [
  {
    tier: "Minimal",
    requires: "Wallet password + channel token",
    unlocks: "Balance, portfolio, alerts, risk check, history",
  },
  {
    tier: "Active DeFi",
    requires: "+ 1inch API key",
    unlocks: "Swap, bridge, lend, DCA execution",
  },
  {
    tier: "Full NL",
    requires: "+ LLM API key",
    unlocks: "Natural language routing, workflows, memory",
  },
  {
    tier: "Power User",
    requires: "+ Tenderly API key",
    unlocks: "Full pre-execution simulation",
  },
];

export const chains = [
  { name: "Ethereum", id: 1 },
  { name: "Base", id: 8453 },
  { name: "Arbitrum", id: 42161 },
  { name: "Optimism", id: 10 },
  { name: "Solana", id: 900 },
];

export const stats = {
  safetyChecks: 7,
  packages: 11,
  skills: 12,
  chains: 5,
};
