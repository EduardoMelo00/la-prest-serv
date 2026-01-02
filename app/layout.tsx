import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layouts/header"
import { Footer } from "@/components/layouts/footer"
import { FloatingWhatsApp } from "@/components/features/floating-whatsapp"
import { COMPANY_INFO, SITE_CONFIG } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"], variable: "--font-display" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E31B23",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${COMPANY_INFO.name} | Construção e Reformas em Florianópolis`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    "reforma florianópolis",
    "drywall florianópolis",
    "piso laminado florianópolis",
    "eletricista florianópolis",
    "encanador florianópolis",
    "pintura residencial florianópolis",
    "azulejista florianópolis",
    "forro pvc",
    "construção civil santa catarina",
    "marido de aluguel floripa",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_CONFIG.url,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Construção e Reformas`,
    description: COMPANY_INFO.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Construção e Reformas`,
    description: COMPANY_INFO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
