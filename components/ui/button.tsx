import Link from "next/link"

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200"

  const variants = {
    primary: "bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-900 hover:bg-gray-800 text-white",
    outline: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
