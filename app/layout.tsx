import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vate AI - Automate Outreach. Personalize at Scale.",
  description: "AI-powered email automation platform that helps businesses streamline outreach, nurture leads, and run email campaigns with ease.",
  keywords: ["email automation", "AI", "outreach", "email campaigns", "lead nurturing"],
  authors: [{ name: "Vate AI" }],
  openGraph: {
    title: "Vate AI - Automate Outreach. Personalize at Scale.",
    description: "AI-powered email automation platform that helps businesses streamline outreach, nurture leads, and run email campaigns with ease.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
