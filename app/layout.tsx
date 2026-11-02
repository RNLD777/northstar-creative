import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Northstar Creative — Make your brand impossible to ignore",
    template: "%s — Northstar Creative",
  },
  description:
    "An independent creative agency concept helping ambitious businesses build distinctive brands, digital experiences and campaigns.",
  openGraph: {
    title: "Northstar Creative",
    description: "Make your brand impossible to ignore.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
