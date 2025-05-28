// Simulación de base de datos con todos los datos de la página
export interface PersonalData {
  id: string
  name: string
  lastName: string
  fullName: string
  title: string
  description: string
  profileImage: string
  phone: string
  email: string
  location: string
  education: {
    institution: string
    description: string
  }
}

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  gradients: {
    hero: string
    background: string
    cards: string
  }
  socialColors: {
    [key: string]: string
  }
}

export interface SocialLink {
  id: string
  name: string
  platform: string
  url: string
  handle: string
  color: string
  icon: string
}

export interface Experience {
  id: string
  company: string
  role: string
  description: string
  order: number
}

export interface Project {
  id: string
  name: string
  role: string
  description: string
  icon: string
  order: number
}

export interface Brand {
  id: string
  name: string
  description: string
  logo: string
  website: string
  buttonColor: string
  order: number
}

export interface BusinessCard {
  id: string
  name: string
  image: string
  alt: string
}

export interface WebsiteConfig {
  id: string
  siteName: string
  siteDescription: string
  whatsappMessage: string
  franchiseFormTitle: string
  franchiseFormSubtitle: string
  showBusinessCards: boolean
  showFranchiseForm: boolean
  showSocialMedia: boolean
}

// Base de datos simulada
export const database = {
  personalData: {
    id: "eduardo-001",
    name: "Eduardo Prudencio",
    lastName: "Recacoechea",
    fullName: "Eduardo Prudencio Recacoechea",
    title: "Consultor en Estrategia Comercial, Marketing y Franquicias",
    description:
      "Consultor en Estrategia Comercial, Marketing y Franquicias con más de 20 años de experiencia en empresas globales como The Coca-Cola Company, Petrobras y Samsung.",
    profileImage: "/images/eduardo-photo.jpg",
    phone: "+59172111600",
    email: "eprudencio@prudencioconsultores.com",
    location: "Bolivia",
    education: {
      institution: "Florida International University",
      description:
        "Estudios en esta prestigiosa institución que le proporcionaron una sólida base en negocios internacionales y estrategia comercial global.",
    },
  } as PersonalData,

  themeColors: {
    primary: "teal",
    secondary: "coral",
    accent: "amber",
    gradients: {
      hero: "from-teal-50 via-white to-coral-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
      background: "from-teal-50 to-coral-50 dark:from-gray-800 dark:to-gray-900",
      cards: "from-white to-gray-50 dark:from-gray-700 dark:to-gray-800",
    },
    socialColors: {
      Instagram: "from-pink-500 to-purple-600",
      LinkedIn: "from-blue-600 to-blue-700",
      Twitter: "from-blue-400 to-blue-500",
      Facebook: "from-blue-600 to-blue-800",
    },
  } as ThemeColors,

  socialLinks: [
    {
      id: "social-001",
      name: "Instagram",
      platform: "instagram",
      url: "https://www.instagram.com/eduardo.prudencio.recacoechea/",
      handle: "@eduardo.prudencio.recacoechea",
      color: "from-pink-500 to-purple-600",
      icon: "Instagram",
    },
    {
      id: "social-002",
      name: "LinkedIn",
      platform: "linkedin",
      url: "https://bo.linkedin.com/in/eduardoprudencio/es",
      handle: "Eduardo Prudencio Recacoechea",
      color: "from-blue-600 to-blue-700",
      icon: "Linkedin",
    },
    {
      id: "social-003",
      name: "Twitter",
      platform: "twitter",
      url: "https://x.com/eduprureca",
      handle: "@eduprureca",
      color: "from-blue-400 to-blue-500",
      icon: "Twitter",
    },
    {
      id: "social-004",
      name: "Facebook",
      platform: "facebook",
      url: "https://www.facebook.com/eduardo.prudencio.recacoechea/",
      handle: "Eduardo Prudencio Recacoechea",
      color: "from-blue-600 to-blue-800",
      icon: "Facebook",
    },
  ] as SocialLink[],

  experiences: [
    {
      id: "exp-001",
      company: "The Coca-Cola Company",
      role: "Experiencia en Marketing Estratégico",
      description: "Desarrollo de estrategias comerciales en una de las empresas más reconocidas globalmente.",
      order: 1,
    },
    {
      id: "exp-002",
      company: "Petrobras",
      role: "Consultor Comercial",
      description: "Implementación de estrategias de marketing y desarrollo comercial en el sector energético.",
      order: 2,
    },
    {
      id: "exp-003",
      company: "Samsung",
      role: "Especialista en Marketing",
      description: "Gestión de campañas y estrategias de posicionamiento de marca en tecnología.",
      order: 3,
    },
  ] as Experience[],

  projects: [
    {
      id: "proj-001",
      name: "Prudencio Consultores",
      role: "Fundador y Gerente General",
      description:
        "Firma especializada en consultoría de negocios y marketing, ofreciendo asesoría a empresas en crecimiento y expansión.",
      icon: "Building2",
      order: 1,
    },
    {
      id: "proj-002",
      name: "Biancopuro Gelato",
      role: "Impulsor de Marca",
      description:
        "Desarrollo de esta marca de gelato artesanal italiano en Bolivia, con presencia en La Paz y Cochabamba.",
      icon: "Award",
      order: 2,
    },
    {
      id: "proj-003",
      name: "Fiorentini",
      role: "Asociado Comercial",
      description:
        "Promoción de productos italianos de snacks saludables, incluyendo legumbres crocantes y galletas bio.",
      icon: "Users",
      order: 3,
    },
  ] as Project[],

  brands: [
    {
      id: "brand-001",
      name: "Biancopuro",
      description:
        "Gelato artesanal italiano auténtico. Sabores únicos y naturales que conquistan paladares en Bolivia.",
      logo: "/images/biancopuro-logo.jpg",
      website: "https://biancopurogelato.com/",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      order: 1,
    },
    {
      id: "brand-002",
      name: "Fiorentini",
      description: "Snacks saludables italianos. Legumbres crocantes y galletas bio que combinan sabor y bienestar.",
      logo: "/images/fiorentini-logo.png",
      website: "https://delivery.fiorentinispa.cl/",
      buttonColor: "bg-amber-700 hover:bg-amber-800",
      order: 2,
    },
  ] as Brand[],

  businessCards: [
    {
      id: "card-001",
      name: "Tarjeta Frontal",
      image: "/images/frontal.jpeg",
      alt: "Tarjeta de presentación frontal - Biancopuro y Fiorentini",
    },
    {
      id: "card-002",
      name: "Tarjeta Posterior",
      image: "/images/atras.jpeg",
      alt: "Tarjeta de presentación posterior - Información de contacto",
    },
  ] as BusinessCard[],

  websiteConfig: {
    id: "config-001",
    siteName: "Eduardo Prudencio Recacoechea",
    siteDescription: "Consultor en Estrategia Comercial, Marketing y Franquicias",
    whatsappMessage: "Hola Eduardo, me interesa conocer más sobre tus servicios de consultoría.",
    franchiseFormTitle: "¿Quieres tu propia sucursal?",
    franchiseFormSubtitle: "¿Quieres tu propia sucursal de Biancopuro o Fiorentini en Bolivia?",
    showBusinessCards: true,
    showFranchiseForm: true,
    showSocialMedia: true,
  } as WebsiteConfig,
}

// Funciones para simular consultas a la base de datos
export const getPersonalData = async (): Promise<PersonalData> => {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 100))
  return database.personalData
}

export const getThemeColors = async (): Promise<ThemeColors> => {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return database.themeColors
}

export const getSocialLinks = async (): Promise<SocialLink[]> => {
  await new Promise((resolve) => setTimeout(resolve, 80))
  return database.socialLinks.sort((a, b) => a.name.localeCompare(b.name))
}

export const getExperiences = async (): Promise<Experience[]> => {
  await new Promise((resolve) => setTimeout(resolve, 90))
  return database.experiences.sort((a, b) => a.order - b.order)
}

export const getProjects = async (): Promise<Project[]> => {
  await new Promise((resolve) => setTimeout(resolve, 70))
  return database.projects.sort((a, b) => a.order - b.order)
}

export const getBrands = async (): Promise<Brand[]> => {
  await new Promise((resolve) => setTimeout(resolve, 60))
  return database.brands.sort((a, b) => a.order - b.order)
}

export const getBusinessCards = async (): Promise<BusinessCard[]> => {
  await new Promise((resolve) => setTimeout(resolve, 40))
  return database.businessCards
}

export const getWebsiteConfig = async (): Promise<WebsiteConfig> => {
  await new Promise((resolve) => setTimeout(resolve, 30))
  return database.websiteConfig
}

// Función para obtener todos los datos de una vez
export const getAllData = async () => {
  const [personalData, themeColors, socialLinks, experiences, projects, brands, businessCards, websiteConfig] =
    await Promise.all([
      getPersonalData(),
      getThemeColors(),
      getSocialLinks(),
      getExperiences(),
      getProjects(),
      getBrands(),
      getBusinessCards(),
      getWebsiteConfig(),
    ])

  return {
    personalData,
    themeColors,
    socialLinks,
    experiences,
    projects,
    brands,
    businessCards,
    websiteConfig,
  }
}
