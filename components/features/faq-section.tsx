import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const FAQ_ITEMS = [
  {
    question: "Qual a área de atendimento da LA Prest Serv?",
    answer: "Atendemos toda a Grande Florianópolis, incluindo Florianópolis, Palhoça, São José e Biguaçu. Entre em contato para confirmar disponibilidade para sua região específica.",
  },
  {
    question: "Quanto custa uma instalação de drywall em Florianópolis?",
    answer: "O valor varia de acordo com a metragem, tipo de drywall (comum, resistente à umidade ou verde) e complexidade do projeto. Fazemos orçamento gratuito e sem compromisso pelo WhatsApp.",
  },
  {
    question: "Vocês fazem orçamento sem compromisso?",
    answer: "Sim! Fazemos avaliação e orçamento totalmente gratuito. Entre em contato pelo WhatsApp e agende uma visita técnica sem custo.",
  },
  {
    question: "Qual o prazo para conclusão de uma reforma?",
    answer: "O prazo depende do tipo e tamanho da reforma. Pequenos reparos podem ser concluídos em 1-2 dias, enquanto reformas completas levam de 2 semanas a 2 meses. Definimos um cronograma claro no orçamento.",
  },
  {
    question: "Vocês fornecem os materiais ou apenas a mão de obra?",
    answer: "Podemos trabalhar das duas formas: fornecemos materiais de qualidade com preço competitivo ou trabalhamos com materiais fornecidos pelo cliente. Você escolhe a melhor opção.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Geralmente trabalhamos com pagamento parcelado conforme etapas da obra. Para serviços menores, o pagamento pode ser à vista. Conversamos sobre a melhor forma no orçamento.",
  },
  {
    question: "Vocês dão garantia nos serviços?",
    answer: "Sim! Todos os nossos serviços têm garantia de qualidade. O prazo varia conforme o tipo de serviço executado e está especificado no contrato de prestação de serviços.",
  },
  {
    question: "Atendem emergências elétricas ou hidráulicas?",
    answer: "Sim, atendemos emergências. Entre em contato pelo WhatsApp ou telefone para verificar disponibilidade imediata.",
  },
]

export function FAQSection() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
            PERGUNTAS E RESPOSTAS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de reforma e construção
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-lg overflow-hidden hover:border-brand-red transition-all"
            >
              <summary className="cursor-pointer p-6 font-bold text-gray-900 flex items-center justify-between">
                <span>{item.question}</span>
                <svg
                  className="w-5 h-5 text-brand-red transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
