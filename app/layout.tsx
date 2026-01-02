import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layouts/header"
import { Footer } from "@/components/layouts/footer"
import { FloatingWhatsApp } from "@/components/features/floating-whatsapp"
import { COMPANY_INFO, SITE_CONFIG } from "@/lib/constants"
import { getAllKeywords } from "@/lib/seo/metadata"
import { getAllSchemas } from "@/lib/seo/structured-data"

const inter = Inter({ subsets: ["latin"], variable: "--font-display" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E31B23",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${COMPANY_INFO.name} | Drywall, Reforma, Elétrica e Hidráulica em Florianópolis, Palhoça, São José e Biguaçu`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: `${COMPANY_INFO.description} Atendemos Florianópolis, Palhoça, São José e Biguaçu. Especialistas em drywall, piso laminado, elétrica, hidráulica, pintura, azulejos e reformas completas. Orçamento gratuito pelo WhatsApp.`,
  keywords: getAllKeywords(),
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_CONFIG.url,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Drywall, Reforma e Construção em Florianópolis`,
    description: `Serviços de drywall, piso laminado, elétrica, hidráulica, pintura e reformas em Florianópolis, Palhoça, São José e Biguaçu. Qualidade garantida e preço justo.`,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - Serviços de Construção e Reforma`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Construção e Reformas em Florianópolis`,
    description: `Drywall, piso laminado, elétrica, hidráulica, pintura e reformas. Atendemos Grande Florianópolis.`,
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
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
  verification: {
    google: "",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemas = getAllSchemas()

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
