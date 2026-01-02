import type { CompanyInfo, Service, Stat, Feature, NavLink, Testimonial } from "@/types"

export const COMPANY_INFO: CompanyInfo = {
  name: "LA Prest Serv",
  tagline: "Construção e Reformas em Geral",
  description: "Serviços de qualidade em drywall, piso laminado, elétrica, hidráulica, forro de PVC, pintura, azulejos e muito mais. Profissionalismo e dedicação em cada projeto.",
  phone: "(48) 8810-9690",
  whatsapp: "554888109690",
  whatsappLink: "https://wa.me/554888109690",
  location: "Florianópolis e Região",
}

export const SITE_CONFIG = {
  url: "https://laprestserv.com.br",
  name: "LA Prest Serv",
  locale: "pt_BR",
  author: "LA Prest Serv",
} as const

export const NAV_LINKS: NavLink[] = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export const STATS: Stat[] = [
  { value: "+100", label: "Projetos Realizados" },
  { value: "8", label: "Tipos de Serviços" },
  { value: "100%", label: "Satisfação" },
]

export const SERVICES: Service[] = [
  {
    id: "drywall",
    name: "Instalação de Drywall",
    description: "Paredes, forros e divisórias em drywall com acabamento perfeito. Ideal para ambientes modernos e funcionais.",
    icon: "layout-panel-left",
  },
  {
    id: "piso-laminado",
    name: "Colocação de Piso Laminado",
    description: "Instalação profissional de pisos laminados e vinílicos. Transforme seus ambientes com elegância.",
    icon: "square-stack",
  },
  {
    id: "eletrica",
    name: "Elétrica",
    description: "Instalações elétricas residenciais e comerciais. Segurança e qualidade garantidas.",
    icon: "zap",
  },
  {
    id: "hidraulica",
    name: "Hidráulica",
    description: "Serviços completos de encanamento, reparos e instalações hidráulicas.",
    icon: "droplets",
  },
  {
    id: "forro-pvc",
    name: "Instalação de Forro de PVC",
    description: "Forros em PVC de alta qualidade. Praticidade, beleza e durabilidade para sua casa.",
    icon: "panel-top",
  },
  {
    id: "pintura",
    name: "Pintura",
    description: "Pintura residencial e comercial com acabamento impecável. Cores que transformam ambientes.",
    icon: "paint-roller",
  },
  {
    id: "azulejos",
    name: "Instalação de Azulejos",
    description: "Assentamento de pisos e revestimentos cerâmicos com precisão e qualidade.",
    icon: "grid-3x3",
  },
  {
    id: "reformas",
    name: "Reformas em Geral",
    description: "Reformas completas ou parciais. Do projeto à execução com excelência.",
    icon: "hard-hat",
  },
]

export const FEATURES: Feature[] = [
  {
    icon: "shield-check",
    title: "Qualidade Garantida",
    description: "Trabalho realizado com materiais de primeira linha e mão de obra especializada.",
  },
  {
    icon: "clock",
    title: "Pontualidade",
    description: "Cumprimento rigoroso dos prazos acordados. Seu tempo é valioso.",
  },
  {
    icon: "tag",
    title: "Preço Justo",
    description: "Orçamentos transparentes e competitivos. Sem surpresas no final.",
  },
  {
    icon: "message-circle",
    title: "Atendimento Direto",
    description: "Comunicação clara e direta pelo WhatsApp. Tire suas dúvidas a qualquer momento.",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    customerName: "Carlos Eduardo",
    location: "Florianópolis, SC",
    rating: 5,
    review: "Excelente profissional! Fez toda a instalação de drywall da minha casa com muita qualidade. Super pontual e organizado.",
  },
  {
    id: "2",
    customerName: "Maria Aparecida",
    location: "Palhoça, SC",
    rating: 5,
    review: "Contratei para trocar o piso laminado e ficou perfeito! Trabalho limpo e bem feito. Recomendo!",
  },
  {
    id: "3",
    customerName: "Roberto Silva",
    location: "São José, SC",
    rating: 5,
    review: "Profissional muito competente. Resolveu toda a parte elétrica da minha casa com rapidez e segurança.",
  },
  {
    id: "4",
    customerName: "Ana Paula Santos",
    location: "Florianópolis, SC",
    rating: 5,
    review: "A pintura ficou impecável! Caprichoso no serviço e muito educado. Com certeza vou chamar novamente.",
  },
  {
    id: "5",
    customerName: "José Fernando",
    location: "Biguaçu, SC",
    rating: 5,
    review: "Instalou o forro de PVC do meu banheiro. Ficou show! Preço justo e trabalho de qualidade.",
  },
  {
    id: "6",
    customerName: "Luciana Mendes",
    location: "Santo Amaro da Imperatriz, SC",
    rating: 5,
    review: "Fez a reforma completa do meu apartamento. Profissional sério e dedicado. Resultado incrível!",
  },
]

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${COMPANY_INFO.whatsapp}`
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`
  }
  return baseUrl
}

export function getServiceWhatsAppLink(serviceName: string): string {
  const message = `Olá! Tenho interesse no serviço de ${serviceName}. Gostaria de solicitar um orçamento.`
  return getWhatsAppLink(message)
}
