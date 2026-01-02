import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { COMPANY_INFO } from "@/lib/constants"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-brand-black pt-20"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-sm font-semibold">Atendimento em Florianópolis e Região</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            <span className="text-brand-red">Construção</span> e{" "}
            <span className="text-brand-red">Reformas</span> com{" "}
            Qualidade Garantida
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Drywall, piso laminado, elétrica, hidráulica, pintura, azulejos e muito mais.
            Transforme sua casa ou empresa com serviços de excelência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:shadow-red-900/20"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </Link>

            <Link
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
