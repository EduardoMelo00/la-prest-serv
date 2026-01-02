import { ShieldCheck, Clock, Tag, MessageCircle } from "lucide-react"
import type { Feature } from "@/types"

const iconMap: Record<string, React.ElementType> = {
  "shield-check": ShieldCheck,
  "clock": Clock,
  "tag": Tag,
  "message-circle": MessageCircle,
}

interface FeatureCardProps {
  feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || ShieldCheck

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-brand-red" />
      </div>
      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm">{feature.description}</p>
    </div>
  )
}
