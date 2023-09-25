import { env } from "@/env.mjs"

export const sanitiseEmail = (email: string): string => {
  return email.trim().toLowerCase()
}

export const getBaseUrl = () => {
  if (typeof window !== "undefined") return "" // browser should use relative url
  if (env.VERCEL_URL) return env.VERCEL_URL // SSR should use vercel url

  return `http://localhost:${env.PORT}` // dev SSR should use localhost
}

export const getBaseApiUrl = () => {
  if (typeof window !== "undefined") return "" // browser should use relative url
  if (env.VERCEL_URL) return env.VERCEL_URL // SSR should use vercel url

  return `http://localhost:3001` // dev SSR should use localhost
}

export const api = async (
  route: string,
  options: {
    method: string
    headers?: Record<string, string>
    body?: string
  }
) => {
  return await fetch(`${getBaseApiUrl()}/${route}`, options)
}
