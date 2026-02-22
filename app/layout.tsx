import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChainClaw — Your AI Agent for DeFi",
  description:
    "Self-hosted, open-source, crypto-native AI agent for DeFi operations. Natural language commands with transaction safety built in.",
  openGraph: {
    title: "ChainClaw — Your AI Agent for DeFi",
    description:
      "Self-hosted, open-source, crypto-native AI agent for DeFi operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-neutral-900">{children}</body>
    </html>
  );
}
