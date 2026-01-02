import { Star, Quote } from "lucide-react"
import type { Testimonial } from "@/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand-red/30 transition-all">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <Quote className="w-8 h-8 text-brand-red/30 mb-3" />

      <p className="text-gray-300 text-sm mb-4 line-clamp-4">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      <div className="border-t border-white/10 pt-4">
        <p className="font-bold text-white">{testimonial.customerName}</p>
        <p className="text-gray-400 text-sm">{testimonial.location}</p>
      </div>
    </div>
  )
}
