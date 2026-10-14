import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coach Meg Walker | Rodeo Performance Coach",
  description: "The future home of Coach Meg Walker’s rodeo performance coaching philosophy, background, and ways to work together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
