export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  phone: string
  whatsapp: string
  whatsappLink: string
  location: string
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface NavLink {
  href: string
  label: string
}

export interface Testimonial {
  id: string
  customerName: string
  location: string
  rating: number
  review: string
}
