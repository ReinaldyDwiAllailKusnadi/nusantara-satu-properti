import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "PT Nusantara Satu Properti Tbk | Pengembang The Amaya & Allstay Hotel (IDX: NUSA)",
  description: "Website resmi PT Nusantara Satu Properti Tbk (IDX: NUSA), perusahaan pengembang properti terintegrasi dan perhotelan di Indonesia. Mengembangkan kawasan The Amaya Home Resort Ungaran serta Allstay Hotel Semarang & Yogyakarta.",
  keywords: [
    "Nusantara Satu Properti",
    "PT Nusantara Satu Properti Tbk",
    "IDX NUSA",
    "The Amaya Home Resort Ungaran",
    "Allstay Hotel Semarang",
    "Allstay Ecotel Yogyakarta",
    "developer properti jawa tengah",
    "perumahan resort semarang",
    "investasi properti indonesia",
    "hubungan investor NUSA"
  ],
  authors: [{ name: "PT Nusantara Satu Properti Tbk" }],
  creator: "PT Nusantara Satu Properti Tbk",
  publisher: "PT Nusantara Satu Properti Tbk",
  metadataBase: new URL("https://nusantarasatuproperti.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT Nusantara Satu Properti Tbk | Membangun Harmoni Hunian & Hospitality",
    description: "Pengembang terkemuka The Amaya Home Resort dengan konsep green living serta jaringan hotel Allstay Semarang & Yogyakarta.",
    url: "https://nusantarasatuproperti.com",
    siteName: "PT Nusantara Satu Properti Tbk",
    images: [
      {
        url: "/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg",
        width: 1200,
        height: 630,
        alt: "PT Nusantara Satu Properti Tbk Corporate",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Nusantara Satu Properti Tbk (IDX: NUSA)",
    description: "Pengembang properti terkemuka The Amaya Home Resort Ungaran & Allstay Hotel.",
    images: ["/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg"],
  },
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
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://nusantarasatuproperti.com/#corporation",
        "name": "PT Nusantara Satu Properti Tbk",
        "legalName": "PT Nusantara Satu Properti Tbk",
        "tickerSymbol": "IDX:NUSA",
        "url": "https://nusantarasatuproperti.com",
        "logo": "https://nusantarasatuproperti.com/images/scott-graham-5fNmWej4tAA-unsplash-1-1-1024x683.jpg",
        "description": "Perusahaan terbuka pengembang properti residensial terintegrasi dan perhotelan modern di Indonesia.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Erlangga Raya No. 14, Pleburan",
          "addressLocality": "Semarang",
          "addressRegion": "Jawa Tengah",
          "postalCode": "50241",
          "addressCountry": "ID"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+62-24-8418888",
            "contactType": "corporate secretary",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian", "English"]
          }
        ]
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://nusantarasatuproperti.com/#realestate",
        "name": "The Amaya Home Resort Ungaran",
        "url": "https://nusantarasatuproperti.com/#unit-bisnis",
        "parentOrganization": {
          "@id": "https://nusantarasatuproperti.com/#corporation"
        },
        "telephone": "+62-24-6928888",
        "priceRange": "$$$$"
      }
    ]
  };

  return (
    <html lang="id" className={`${jakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
