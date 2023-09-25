import type { Metadata } from "next"

import "@dcrgll/ui/styles/globals.css"

import { Poppins } from "next/font/google"

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "Turborepo starter",
  description: "Simple monorepo with shared backend for web & server apps",
  openGraph: {
    title: "Turborepo starter",
    description: "Simple monorepo with shared backend for web & server apps",
    url: "https://cargill.dev",
    siteName: "Turborepo starter"
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={["font-sans", fontSans.variable].join(" ")}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
