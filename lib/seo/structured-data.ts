import { COMPANY_INFO, SITE_CONFIG, SERVICES } from "@/lib/constants"

interface LocalBusiness {
  "@context": string
  "@type": string
  name: string
  description: string
  url: string
  telephone: string
  address: {
    "@type": string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  areaServed: Array<{
    "@type": string
    name: string
  }>
  priceRange: string
  openingHours: string
  hasOfferCatalog: {
    "@type": string
    name: string
    itemListElement: Array<{
      "@type": string
      itemOffered: {
        "@type": string
        name: string
        description: string
      }
    }>
  }
  sameAs: string[]
}

interface Organization {
  "@context": string
  "@type": string
  name: string
  url: string
  logo: string
  contactPoint: {
    "@type": string
    telephone: string
    contactType: string
    areaServed: string
    availableLanguage: string
  }
}

interface BreadcrumbList {
  "@context": string
  "@type": string
  itemListElement: Array<{
    "@type": string
    position: number
    name: string
    item?: string
  }>
}

export function getLocalBusinessSchema(): LocalBusiness {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: SITE_CONFIG.url,
    telephone: COMPANY_INFO.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Florianópolis" },
      { "@type": "City", name: "Palhoça" },
      { "@type": "City", name: "São José" },
      { "@type": "City", name: "Biguaçu" },
    ],
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-13:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Construção e Reforma",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    sameAs: [
      COMPANY_INFO.whatsappLink,
    ],
  }
}

export function getOrganizationSchema(): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  }
}

export function getBreadcrumbSchema(): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Serviços",
      },
    ],
  }
}

export function getServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      areaServed: [
        { "@type": "City", name: "Florianópolis" },
        { "@type": "City", name: "Palhoça" },
        { "@type": "City", name: "São José" },
        { "@type": "City", name: "Biguaçu" },
      ],
    },
  }
}

export function getAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "5",
    },
  }
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual a área de atendimento da LA Prest Serv?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atendemos toda a Grande Florianópolis, incluindo Florianópolis, Palhoça, São José e Biguaçu. Entre em contato para confirmar disponibilidade para sua região específica.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto custa uma instalação de drywall em Florianópolis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O valor varia de acordo com a metragem, tipo de drywall (comum, resistente à umidade ou verde) e complexidade do projeto. Fazemos orçamento gratuito e sem compromisso pelo WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês fazem orçamento sem compromisso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Fazemos avaliação e orçamento totalmente gratuito. Entre em contato pelo WhatsApp e agende uma visita técnica sem custo.",
        },
      },
      {
        "@type": "Question",
        name: "Qual o prazo para conclusão de uma reforma?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O prazo depende do tipo e tamanho da reforma. Pequenos reparos podem ser concluídos em 1-2 dias, enquanto reformas completas levam de 2 semanas a 2 meses. Definimos um cronograma claro no orçamento.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês fornecem os materiais ou apenas a mão de obra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Podemos trabalhar das duas formas: fornecemos materiais de qualidade com preço competitivo ou trabalhamos com materiais fornecidos pelo cliente. Você escolhe a melhor opção.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o pagamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Geralmente trabalhamos com pagamento parcelado conforme etapas da obra. Para serviços menores, o pagamento pode ser à vista. Conversamos sobre a melhor forma no orçamento.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês dão garantia nos serviços?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Todos os nossos serviços têm garantia de qualidade. O prazo varia conforme o tipo de serviço executado e está especificado no contrato de prestação de serviços.",
        },
      },
      {
        "@type": "Question",
        name: "Atendem emergências elétricas ou hidráulicas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, atendemos emergências. Entre em contato pelo WhatsApp ou telefone para verificar disponibilidade imediata.",
        },
      },
    ],
  }
}

export function getAllSchemas() {
  return [
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getBreadcrumbSchema(),
    getAggregateRatingSchema(),
    getFAQSchema(),
  ]
}
