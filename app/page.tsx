"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Briefcase,
  Building2,
  Users,
  Award,
  ExternalLink,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import {
  getAllData,
  type PersonalData,
  type ThemeColors,
  type SocialLink,
  type Experience,
  type Project,
  type Brand,
  type BusinessCard,
  type WebsiteConfig,
} from "@/lib/database"

// Mapeo de iconos
const iconMap = {
  Building2,
  Users,
  Award,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
}

export default function EduardoPortfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<{
    personalData: PersonalData | null
    themeColors: ThemeColors | null
    socialLinks: SocialLink[]
    experiences: Experience[]
    projects: Project[]
    brands: Brand[]
    businessCards: BusinessCard[]
    websiteConfig: WebsiteConfig | null
  }>({
    personalData: null,
    themeColors: null,
    socialLinks: [],
    experiences: [],
    projects: [],
    brands: [],
    businessCards: [],
    websiteConfig: null,
  })

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const allData = await getAllData()
        setData(allData)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("proyectos-actuales")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsAppContact = () => {
    if (data.personalData && data.websiteConfig) {
      const message = encodeURIComponent(data.websiteConfig.whatsappMessage)
      window.open(`https://wa.me/${data.personalData.phone.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
    }
  }

  const handleFranchiseSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    if (data.personalData) {
      const mensaje = `Hola ${data.personalData.name}, me interesa abrir una franquicia:
                        
Nombre: ${formData.get("nombre")}
Teléfono: ${formData.get("telefono")}
Email: ${formData.get("email")}
Ciudad: ${formData.get("ciudad")}
Marca: ${formData.get("marca")}
Mensaje: ${formData.get("mensaje")}`

      window.open(
        `https://wa.me/${data.personalData.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(mensaje)}`,
        "_blank",
      )
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-coral-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-teal-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300">Cargando información...</p>
        </div>
      </div>
    )
  }

  const { personalData, themeColors, socialLinks, experiences, projects, brands, businessCards, websiteConfig } = data

  if (!personalData || !themeColors || !websiteConfig) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900">
        <div className="text-center">
          <p className="text-lg text-red-600 dark:text-red-300">Error al cargar los datos</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className={`bg-gradient-to-br ${themeColors.gradients.hero} min-h-screen`}>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-teal-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 bg-gradient-to-r from-${themeColors.primary}-500 to-${themeColors.secondary}-500 rounded-full`}
              ></div>
              <span className="font-bold text-xl text-gray-800 dark:text-white">{personalData.name}</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-teal-300 hover:bg-teal-50 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge
                  className={`bg-${themeColors.primary}-100 text-${themeColors.primary}-800 dark:bg-${themeColors.primary}-900 dark:text-${themeColors.primary}-200 hover:bg-${themeColors.primary}-200 dark:hover:bg-${themeColors.primary}-800`}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Consultor Estratégico
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {personalData.name}
                  <span
                    className={`block text-3xl lg:text-5xl text-${themeColors.primary}-600 dark:text-${themeColors.primary}-400`}
                  >
                    {personalData.lastName}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{personalData.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleWhatsAppContact}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className={`border-${themeColors.secondary}-400 text-${themeColors.secondary}-600 hover:bg-${themeColors.secondary}-50 dark:border-${themeColors.secondary}-500 dark:text-${themeColors.secondary}-400 dark:hover:bg-${themeColors.secondary}-950`}
                  onClick={scrollToProjects}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Proyectos
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="relative w-80 h-80 mx-auto mb-4">
                  <Image
                    src={personalData.profileImage || "/placeholder.svg"}
                    alt={personalData.fullName}
                    fill
                    className="rounded-xl object-cover shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{personalData.fullName}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{personalData.title}</p>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-r from-${themeColors.primary}-400 to-${themeColors.secondary}-400 rounded-2xl transform rotate-6 opacity-20`}
              ></div>
            </div>
          </div>
        </section>

        {/* Business Cards Showcase */}
        {websiteConfig.showBusinessCards && businessCards.length > 0 && (
          <section className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Representante Oficial en {personalData.location}
              </h3>
            </div>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {businessCards.map((card) => (
                <div key={card.id} className="transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.alt}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experiencia Global</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Más de dos décadas desarrollando estrategias comerciales exitosas en empresas líderes mundiales
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br ${themeColors.gradients.cards}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r from-${themeColors.primary}-500 to-${themeColors.secondary}-500 rounded-full flex items-center justify-center`}
                      >
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.company}</h3>
                        <p
                          className={`text-${themeColors.primary}-600 dark:text-${themeColors.primary}-400 font-medium`}
                        >
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section id="proyectos-actuales" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos Actuales</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Liderando el crecimiento de marcas reconocidas y desarrollando nuevas oportunidades de negocio
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Building2
                return (
                  <Card
                    key={project.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r from-${themeColors.secondary}-500 to-${themeColors.primary}-500 rounded-full flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{project.name}</h3>
                          <p
                            className={`text-${themeColors.secondary}-600 dark:text-${themeColors.secondary}-400 font-medium`}
                          >
                            {project.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Brands Showcase */}
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Marcas Representadas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Descubre las marcas internacionales que represento en {personalData.location} y explora sus productos
                únicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="group cursor-pointer"
                  onClick={() => window.open(brand.website, "_blank")}
                >
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 bg-white dark:bg-gray-700">
                    <CardContent className="p-8 text-center">
                      <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={`${brand.name} Logo`}
                          width={240}
                          height={180}
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{brand.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{brand.description}</p>
                      <Button className={`${brand.buttonColor} text-white`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visitar Sitio Web
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise Inquiry Form */}
        {websiteConfig.showFranchiseForm && (
          <section className={`bg-gradient-to-br ${themeColors.gradients.background} py-16`}>
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {websiteConfig.franchiseFormTitle}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">{websiteConfig.franchiseFormSubtitle}</p>
                </div>

                <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                  <CardContent className="p-8">
                    <form className="space-y-6" onSubmit={handleFranchiseSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="nombre"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Nombre Completo *
                          </label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-${themeColors.primary}-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                            placeholder="Tu nombre completo"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="telefono"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            required
                            className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-${themeColors.primary}-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                            placeholder="+591 xxx-xxxxx"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-${themeColors.primary}-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="ciudad"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Ciudad de Interés *
                        </label>
                        <input
                          type="text"
                          id="ciudad"
                          name="ciudad"
                          required
                          className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-${themeColors.primary}-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                          placeholder="¿En qué ciudad te interesa abrir?"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="marca"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Marca de Interés *
                        </label>
                        <select
                          id="marca"
                          name="marca"
                          required
                          className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-${themeColors.primary}-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                        >
                          <option value="">Selecciona una marca</option>
                          {brands.map((brand) => (
                            <option key={brand.id} value={brand.name.toLowerCase()}>
                              {brand.name} - {brand.description.split(".")[0]}
                            </option>
                          ))}
                          <option value="ambas">Ambas marcas</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="mensaje"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Mensaje Adicional
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          rows={4}
                          className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-${themeColors.primary}-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                          placeholder="Cuéntanos más sobre tu interés en abrir una franquicia..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className={`w-full bg-gradient-to-r from-${themeColors.primary}-600 to-${themeColors.secondary}-600 hover:from-${themeColors.primary}-700 hover:to-${themeColors.secondary}-700 text-white py-3 text-lg`}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Consulta por WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Education & Contact */}
        <section className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className={`text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center`}>
                  <Briefcase
                    className={`w-8 h-8 mr-3 text-${themeColors.primary}-600 dark:text-${themeColors.primary}-400`}
                  />
                  Formación Académica
                </h2>
                <Card
                  className={`border-0 shadow-lg bg-gradient-to-br from-${themeColors.primary}-50 to-white dark:from-gray-700 dark:to-gray-800`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {personalData.education.institution}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{personalData.education.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact */}
              <div>
                <h2 className={`text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center`}>
                  <MessageCircle
                    className={`w-8 h-8 mr-3 text-${themeColors.secondary}-600 dark:text-${themeColors.secondary}-400`}
                  />
                  Contacto
                </h2>
                <div className="space-y-4">
                  <Card
                    className={`border-0 shadow-lg bg-gradient-to-br from-${themeColors.secondary}-50 to-white dark:from-gray-700 dark:to-gray-800`}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <MessageCircle
                            className={`w-5 h-5 text-${themeColors.secondary}-600 dark:text-${themeColors.secondary}-400 mr-3`}
                          />
                          <a
                            href={`mailto:${personalData.email}`}
                            className={`text-gray-700 dark:text-gray-300 hover:text-${themeColors.secondary}-600 dark:hover:text-${themeColors.secondary}-400`}
                          >
                            {personalData.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle
                            className={`w-5 h-5 text-${themeColors.secondary}-600 dark:text-${themeColors.secondary}-400 mr-3`}
                          />
                          <a
                            href={`tel:${personalData.phone}`}
                            className={`text-gray-700 dark:text-gray-300 hover:text-${themeColors.secondary}-600 dark:hover:text-${themeColors.secondary}-400`}
                          >
                            {personalData.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Building2
                            className={`w-5 h-5 text-${themeColors.secondary}-600 dark:text-${themeColors.secondary}-400 mr-3`}
                          />
                          <span className="text-gray-700 dark:text-gray-300">{personalData.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        {websiteConfig.showSocialMedia && socialLinks.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Sígueme en Redes Sociales
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Mantente al día con contenido sobre marketing, ventas, franquicias y estrategia comercial
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap] || ExternalLink
                  return (
                    <Card
                      key={social.id}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800"
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{social.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{social.handle}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className={`border-${themeColors.primary}-300 text-${themeColors.primary}-600 hover:bg-${themeColors.primary}-50 dark:border-${themeColors.primary}-500 dark:text-${themeColors.primary}-400 dark:hover:bg-${themeColors.primary}-950`}
                          onClick={() => window.open(social.url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Seguir
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div
                  className={`w-8 h-8 bg-gradient-to-r from-${themeColors.primary}-500 to-${themeColors.secondary}-500 rounded-full`}
                ></div>
                <span className="font-bold text-xl">{personalData.fullName}</span>
              </div>
              <p className="text-gray-400 mb-4">{personalData.title}</p>
              <p className="text-gray-500 text-sm">© 2024 {personalData.fullName}. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
