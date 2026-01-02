import { HeroSection } from "@/components/features/hero-section"
import { StatsBar } from "@/components/features/stats-bar"
import { ServiceCard } from "@/components/features/service-card"
import { FeatureCard } from "@/components/features/feature-card"
import { TestimonialsSection } from "@/components/features/testimonials-section"
import { ContactSection } from "@/components/features/contact-section"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SERVICES, FEATURES, COMPANY_INFO } from "@/lib/constants"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      <Section id="servicos">
        <Container>
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              SOLUÇÕES COMPLETAS PARA SUA OBRA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de serviços com qualidade e profissionalismo.
              Desde pequenos reparos até reformas completas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <TestimonialsSection />

      <Section id="sobre" dark>
        <Container>
          <div className="text-center mb-12">
            <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
              Por Que Escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4">
              POR QUE A {COMPANY_INFO.name.toUpperCase()}?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Diferenciais que fazem toda a diferença no seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  )
}
