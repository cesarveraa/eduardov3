import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Eduardo Prudencio Recacoechea - Consultor en Estrategia Comercial",
  description: "Consultor en Estrategia Comercial, Marketing y Franquicias con más de 20 años de experiencia",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
