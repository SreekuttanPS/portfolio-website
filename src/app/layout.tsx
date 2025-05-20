import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

const geistSans = Geist({ subsets: ["latin"] });

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sreekuttan PS",
  url: "https://sreekuttan.netlify.app/",
  image: "https://sreekuttan.netlify.app/preview.webp",
  jobTitle: "Frontend Developer",
  description: "Frontend developer crafting sleek, high-performance web apps using modern tech.",
  sameAs: [
    "https://github.com/sreekuttanPS",
    "https://www.linkedin.com/in/sreekuttan-p-s",
    "https://www.instagram.com/zavian_._/",
  ],
  knowsAbout: ["Frontend Development", "React", "Next.js", "JavaScript", "TypeScript"],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sreekuttan.netlify.app",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sreekuttan PS Portfolio",
  url: "https://sreekuttan.netlify.app",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sreekuttan.netlify.app/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sreekuttan.netlify.app",
    },
  ],
};

export const metadata = {
  title: "Sreekuttan PS | Frontend Developer Portfolio",
  description:
    "Frontend developer crafting sleek, high-performance web apps using modern tech. Check out my page.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
  openGraph: {
    title: "Sreekuttan PS | Frontend Developer Portfolio",
    description:
      "Frontend developer crafting sleek, high-performance web apps using modern tech. Check out my page.",
    url: "https://sreekuttan.netlify.app",
    images: [
      {
        url: "https://sreekuttan.netlify.app/preview.webp",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Sreekuttan PS Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreekuttan PS | Fullstack Developer Portfolio",
    description: "Fullstack dev building sleek, modern apps. Check out my projects and skills.",
    images: ["https://sreekuttan.netlify.app/preview.png"],
  },
  alternates: {
    canonical: "https://sreekuttan.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdWebsite)}
        </script>
        <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
