interface SectionProps {
  children: React.ReactNode
  id?: string
  dark?: boolean
  className?: string
}

export function Section({ children, id, dark = false, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? "bg-gray-900 text-white" : "bg-white"} ${className}`}
    >
      {children}
    </section>
  )
}
