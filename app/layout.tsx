import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
  icons: [
    {
      url: "/favicon-32x32.png",
      href: "/favicon-32x32.png",
    },
    {
      url: "/favicon-16x16.png",
      href: "/favicon-16x16.png",
    },
    {
      url: "/apple-touch-icon.png",
      href: "/apple-touch-icon.png",
    },
    {
      url: "/android-chrome-192x192.png",
      href: "/android-chrome-192x192.png",
    },
    {
      url: "/android-chrome-512x512.png",
      href: "/android-chrome-512x512.png",
    },
    {
      url: "/site.webmanifest",
      href: "/site.webmanifest",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
