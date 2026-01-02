import { COMPANY_INFO, SITE_CONFIG } from "@/lib/constants"

export const TARGET_LOCATIONS = [
  "Florianópolis",
  "Palhoça",
  "São José",
  "Biguaçu",
] as const

export const SERVICES_KEYWORDS = [
  "drywall",
  "piso laminado",
  "eletricista",
  "encanador",
  "hidráulica",
  "forro pvc",
  "pintura",
  "azulejista",
  "reforma",
  "pedreiro",
] as const

export function generateLocationKeywords(): string[] {
  const keywords: string[] = []

  SERVICES_KEYWORDS.forEach(service => {
    TARGET_LOCATIONS.forEach(location => {
      keywords.push(`${service} ${location.toLowerCase()}`)
      keywords.push(`${service} em ${location.toLowerCase()}`)
    })
  })

  TARGET_LOCATIONS.forEach(location => {
    keywords.push(`reforma ${location.toLowerCase()}`)
    keywords.push(`reforma apartamento ${location.toLowerCase()}`)
    keywords.push(`reforma casa ${location.toLowerCase()}`)
    keywords.push(`construção ${location.toLowerCase()}`)
    keywords.push(`marido de aluguel ${location.toLowerCase()}`)
  })

  return keywords
}

export const LONG_TAIL_KEYWORDS = [
  "instalação de drywall florianópolis",
  "instalação de piso laminado florianópolis",
  "serviços de elétrica florianópolis",
  "serviços de hidráulica florianópolis",
  "instalação de forro pvc florianópolis",
  "pintura residencial florianópolis",
  "pintura comercial florianópolis",
  "instalação de azulejos florianópolis",
  "reforma completa apartamento florianópolis",
  "reforma banheiro florianópolis",
  "reforma cozinha florianópolis",
  "pedreiro florianópolis preço",
  "eletricista 24 horas florianópolis",
  "encanador emergência florianópolis",
  "marido de aluguel floripa",
  "profissional drywall grande florianópolis",
  "empresa reforma florianópolis",
  "orçamento reforma florianópolis",
  "quanto custa reforma florianópolis",
  "melhor pedreiro florianópolis",

  "drywall palhoça",
  "piso laminado palhoça",
  "eletricista palhoça",
  "encanador palhoça",
  "reforma palhoça",
  "pintura palhoça",
  "azulejista palhoça",
  "pedreiro palhoça",

  "drywall são josé",
  "piso laminado são josé",
  "eletricista são josé",
  "encanador são josé",
  "reforma são josé",
  "pintura são josé sc",
  "azulejista são josé",
  "pedreiro são josé sc",

  "drywall biguaçu",
  "piso laminado biguaçu",
  "eletricista biguaçu",
  "encanador biguaçu",
  "reforma biguaçu",
  "pintura biguaçu",
  "azulejista biguaçu",
  "pedreiro biguaçu",

  "divisória drywall florianópolis",
  "forro drywall florianópolis",
  "parede drywall florianópolis",
  "drywall preço m2 florianópolis",

  "piso vinílico florianópolis",
  "piso laminado eucafloor florianópolis",
  "colocação piso laminado preço florianópolis",

  "instalação elétrica residencial florianópolis",
  "eletricista residencial florianópolis",
  "troca disjuntor florianópolis",
  "instalação chuveiro elétrico florianópolis",

  "vazamento água florianópolis",
  "desentupimento florianópolis",
  "instalação torneira florianópolis",
  "troca registro florianópolis",

  "forro pvc banheiro florianópolis",
  "forro pvc cozinha florianópolis",
  "forro pvc área de serviço florianópolis",

  "pintura residencial preço m2 florianópolis",
  "pintor residencial florianópolis",
  "pintura parede florianópolis",
  "pintura teto florianópolis",

  "assentamento cerâmica florianópolis",
  "assentamento porcelanato florianópolis",
  "revestimento parede florianópolis",

  "reforma apartamento pequeno florianópolis",
  "reforma apartamento aluguel florianópolis",
  "reforma kitnet florianópolis",
  "reforma sala florianópolis",
  "reforma quarto florianópolis",

  "pedreiro confiável florianópolis",
  "profissional reformas florianópolis",
  "serviços gerais construção florianópolis",
  "mão de obra construção florianópolis",
]

export const BASE_KEYWORDS = [
  "reforma florianópolis",
  "drywall florianópolis",
  "piso laminado florianópolis",
  "eletricista florianópolis",
  "encanador florianópolis",
  "hidráulica florianópolis",
  "pintura residencial florianópolis",
  "azulejista florianópolis",
  "forro pvc florianópolis",
  "construção civil santa catarina",
  "marido de aluguel floripa",
  "pedreiro florianópolis",
  "reforma grande florianópolis",
  "construção florianópolis",
  "reforma palhoça",
  "reforma são josé sc",
  "reforma biguaçu",
  "serviços construção florianópolis",
  "empresa reforma florianópolis",
  "profissional reforma florianópolis",
]

export function getAllKeywords(): string[] {
  return [
    ...BASE_KEYWORDS,
    ...LONG_TAIL_KEYWORDS,
    ...generateLocationKeywords(),
  ]
}

export function getServiceMetadata(serviceName: string, description: string) {
  const title = `${serviceName} em Florianópolis e Região | ${COMPANY_INFO.name}`
  const desc = `${description} Atendemos Florianópolis, Palhoça, São José e Biguaçu. Orçamento sem compromisso.`

  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      url: SITE_CONFIG.url,
      type: "website" as const,
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: desc,
    },
  }
}

export function generateCanonicalUrl(path: string = ""): string {
  return `${SITE_CONFIG.url}${path}`
}
