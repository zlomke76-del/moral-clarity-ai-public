import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moral Clarity AI",
  description: "Execution governance for autonomous systems operating under real-world consequence.",
  metadataBase: new URL("https://moral-clarity-ai.vercel.app"),
  openGraph: {
    title: "Moral Clarity AI",
    description: "Serious autonomous systems cannot operate on coherence alone.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
