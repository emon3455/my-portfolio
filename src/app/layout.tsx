import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Your Name — Creative Frontend Engineer",
  description:
    "Portfolio site highlighting immersive product launches, Three.js journeys, and services for expressive digital experiences.",
  openGraph: {
    title: "Your Name — Creative Frontend Engineer",
    description:
      "Immersive portfolio blending narrative design, performant engineering, and Three.js journey animations.",
    url: "https://yourdomain.com",
    type: "website",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} ${jetBrains.variable} antialiased bg-[#030409]`}>
        {children}
      </body>
    </html>
  );
}
