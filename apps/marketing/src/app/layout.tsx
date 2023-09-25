import type { Metadata } from "next"

import "@dcrgll/ui/styles/globals.css"

import { Poppins } from "next/font/google"

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Create T3 Turbo",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Create T3 Turbo"
  },
  twitter: {
    card: "summary_large_image",
    site: "@jullerino",
    creator: "@jullerino"
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
