import { Container } from "@/components/ui/container"
import { STATS } from "@/lib/constants"

export function StatsBar() {
  return (
    <section className="bg-brand-red py-8">
      <Container>
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-4xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/80 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
