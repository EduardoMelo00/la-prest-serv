import { Container } from "@/components/ui/container"
import { TestimonialCard } from "@/components/features/testimonial-card"
import { TESTIMONIALS } from "@/lib/constants"

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
