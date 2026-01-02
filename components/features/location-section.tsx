import { MapPin, CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const LOCATIONS = [
  {
    city: "Florianópolis",
    neighborhoods: ["Centro", "Trindade", "Canasvieiras", "Ingleses", "Lagoa da Conceição", "Campeche"],
  },
  {
    city: "Palhoça",
    neighborhoods: ["Pedra Branca", "Pagani", "Ponte do Imaruim", "Enseada de Brito"],
  },
  {
    city: "São José",
    neighborhoods: ["Kobrasol", "Campinas", "Forquilhinhas", "Barreiros"],
  },
  {
    city: "Biguaçu",
    neighborhoods: ["Centro", "Jardim Janaína", "São Miguel"],
  },
]

const SERVICES_LIST = [
  "Instalação de Drywall",
  "Piso Laminado",
  "Serviços Elétricos",
  "Serviços Hidráulicos",
  "Forro de PVC",
  "Pintura",
  "Azulejos e Cerâmica",
  "Reformas Completas",
]

export function LocationSection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
            Área de Atendimento
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
            ATENDEMOS TODA A GRANDE FLORIANÓPOLIS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Serviços de construção e reforma em toda a região metropolitana de Florianópolis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LOCATIONS.map((location) => (
            <div
              key={location.city}
              className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-brand-red transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-brand-red" />
                <h3 className="font-black text-lg text-gray-900">{location.city}</h3>
              </div>
              <ul className="space-y-2">
                {location.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand-red rounded-full" />
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Nossos Serviços em Toda a Região
              </h3>
              <ul className="space-y-3">
                {SERVICES_LIST.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Por Que Nos Escolher?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Atendimento Rápido</p>
                    <p className="text-sm text-gray-600">
                      Respondemos rapidamente e agendamos visita técnica sem compromisso
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Orçamento Gratuito</p>
                    <p className="text-sm text-gray-600">
                      Avaliamos seu projeto e fornecemos orçamento detalhado sem custo
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Garantia de Qualidade</p>
                    <p className="text-sm text-gray-600">
                      Trabalhamos com materiais de primeira e garantia nos serviços executados
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Preço Justo</p>
                    <p className="text-sm text-gray-600">
                      Valores competitivos e transparência total no orçamento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
