import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ReactLenis } from "lenis/react";
import { Toaster } from "@/components/ui/sonner";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { PersonJsonLd } from "@/components/seo/person-jsonld";
import { siteConfig, siteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Yu Takaki",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(fontMono.variable, "dark", "scrollbar-hide")}
      suppressHydrationWarning
    >
      <body className="bg-scanlines font-sans antialiased scrollbar-hide">
        <ReactLenis root>
          <PersonJsonLd />
          <ScrollProgress />
          {children}
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
