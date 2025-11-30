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
  title: "Emon - Software Engineer | Lead Developer | Full Stack Expert",
  description:
    "Experienced remote software engineer and lead developer specializing in healthcare, CRM, and AI solutions. 20+ projects delivered, 100+ engineers mentored. Expert in React, Next.js, Node.js, React Native, and cloud architecture. Available for remote collaborations worldwide.",
  keywords: [
    "remote software engineer",
    "remote developer",
    "software engineer",
    "lead software engineer",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js engineer",
    "React Native developer",
    "remote tech lead",
    "software architect",
    "healthcare software engineer",
    "CRM developer",
    "AI engineer",
    "TypeScript developer",
    "remote engineering jobs",
    "hire remote developer",
    "freelance software engineer",
    "Bangladesh software engineer",
    "Dhaka developer",
    "remote friendly developer",
    "senior software engineer",
    "mobile app developer",
    "web application developer",
    "microservices architect",
    "PostgreSQL developer",
    "MongoDB developer",
    "AWS engineer",
    "Azure developer",
    "Python developer",
    "FastAPI developer",
    "TensorFlow engineer",
    "machine learning engineer",
  ],
  authors: [{ name: "Emon", url: "mailto:emon.mhk69@gmail.com" }],
  creator: "Emon",
  publisher: "Emon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Emon - Software Engineer | Lead Developer | Full Stack Expert",
    description:
      "Lead software engineer with 20+ projects delivered across healthcare, CRM, and AI platforms. Expert in React, Next.js, Node.js, and cloud architecture. Open for remote collaborations worldwide.",
    url: "https://emon.dev",
    siteName: "Emon - Software Engineer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emon - Remote Software Engineer & Lead Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emon - Remote Software Engineer | Lead Developer",
    description:
      "Lead software engineer specializing in healthcare, CRM, and AI solutions. 20+ projects, 100+ engineers mentored. Available for remote work worldwide.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://iamemon.vercel.app",
  },
  metadataBase: new URL("https://iamemon.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Emon",
    "jobTitle": "Lead Software Engineer",
    "description": "Lead software engineer specializing in healthcare, CRM, and AI solutions. Expert in full-stack development with React, Next.js, Node.js, React Native, and cloud architecture.",
    "url": "https://emon.dev",
    "email": "emon.mhk69@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Octopi Digital"
    },
    "sameAs": [
      "https://www.linkedin.com/in/emon-engineer",
      "https://github.com/emon-dev"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9933453521767126"
          crossOrigin="anonymous"></script>
      </head>
      <body className={`${grotesk.variable} ${jetBrains.variable} antialiased bg-[#030409]`}>
        {children}
      </body>
    </html>
  );
}
