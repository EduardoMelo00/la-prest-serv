import Link from "next/link"
import {
  LayoutPanelLeft,
  Layers,
  Zap,
  Droplets,
  PanelTop,
  PaintRoller,
  Grid3x3,
  HardHat,
  Phone,
} from "lucide-react"
import type { Service } from "@/types"
import { getServiceWhatsAppLink } from "@/lib/constants"

const iconMap: Record<string, React.ElementType> = {
  "layout-panel-left": LayoutPanelLeft,
  "square-stack": Layers,
  "zap": Zap,
  "droplets": Droplets,
  "panel-top": PanelTop,
  "paint-roller": PaintRoller,
  "grid-3x3": Grid3x3,
  "hard-hat": HardHat,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || HardHat

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20">
      <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-brand-red group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {service.name}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {service.description}
      </p>

      <Link
        href={getServiceWhatsAppLink(service.name)}
        target="_blank"
        className="inline-flex items-center gap-2 text-brand-red font-semibold text-sm hover:text-red-700 transition-colors"
      >
        <Phone className="w-4 h-4" />
        Solicitar Orçamento
      </Link>
    </div>
  )
}
