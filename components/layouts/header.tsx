"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Container } from "@/components/ui/container"
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-black text-brand-black">LA</span>
              <span className="text-xl md:text-2xl font-black text-brand-red ml-1">Prest Serv</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-brand-red font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Orçamento
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <Container>
            <nav className="py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-red font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-brand-red text-white px-4 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors mt-2"
              >
                <Phone className="w-4 h-4" />
                Solicitar Orçamento
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
