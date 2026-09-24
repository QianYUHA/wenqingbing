import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "文青病 — WEN QING BING",
  description: "A cultural personality archive for readers and film lovers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
