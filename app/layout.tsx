import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "One Detail At A Time LLC - Professional Car Detailing San Antonio TX",
    template: "%s | One Detail At A Time LLC"
  },
  description: "Professional car detailing services in San Antonio, TX. Exterior wash, interior cleaning, paint correction, ceramic coating, and full detail packages. Licensed & insured.",
  keywords: [
    "car detailing",
    "auto detailing", 
    "San Antonio car wash",
    "paint correction",
    "ceramic coating",
    "exterior wash",
    "interior cleaning",
    "headlight restoration",
    "car detailing San Antonio",
    "automotive detailing"
  ],
  authors: [{ name: "One Detail At A Time LLC" }],
  creator: "One Detail At A Time LLC",
  publisher: "One Detail At A Time LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://odaat1.com'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "One Detail At A Time LLC - Professional Car Detailing San Antonio TX",
    description: "Professional car detailing services in San Antonio, TX. We bring your vehicle back to showroom condition with attention to every detail.",
    url: "/",
    siteName: "One Detail At A Time LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "One Detail At A Time LLC - Professional Car Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Detail At A Time LLC - Professional Car Detailing San Antonio TX",
    description: "Professional car detailing services in San Antonio, TX. We bring your vehicle back to showroom condition with attention to every detail.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://odaat1.com",
    "name": "One Detail At A Time LLC",
    "image": "/images/logo.svg",
    "description": "Professional car detailing services in San Antonio, TX. We bring your vehicle back to showroom condition with attention to every detail.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11692 Bricken Circle",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78233",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.4241",
      "longitude": "-98.4936"
    },
    "url": "https://odaat1.com",
    "telephone": "(726) 207-1007",
    "email": "rromerojr1@gmail.com",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "29.4241",
        "longitude": "-98.4936"
      },
      "geoRadius": "50000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$100-$800",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "USD",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Detailing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Hand Wash & Sealant",
            "description": "Professional hand wash with premium sealant protection"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Deep Cleansing",
            "description": "Complete interior detailing and deep cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Paint Correction",
            "description": "Professional paint restoration and swirl removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating",
            "description": "Long-term paint protection with ceramic coating"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Headlight Restoration",
            "description": "Restore clarity to cloudy or yellowed headlights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Detail Package",
            "description": "Complete interior and exterior detailing service"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1",
      "bestRating": "5",
      "worstRating": "1"
    },
    "slogan": "Bringing every detail back to perfection",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "R Romero"
    },
    "foundingLocation": "San Antonio, TX",
    "areaServed": "San Antonio, TX and surrounding areas",
    "serviceType": ["Car Detailing", "Auto Detailing", "Paint Correction", "Ceramic Coating"],
    "knowsAbout": [
      "Car Detailing",
      "Paint Correction", 
      "Ceramic Coating",
      "Interior Cleaning",
      "Exterior Detailing",
      "Headlight Restoration",
      "Automotive Care"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00ae98" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Additional SEO and social meta tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}