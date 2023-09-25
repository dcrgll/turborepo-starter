import cors from "@fastify/cors"
import Fastify from "fastify"

import { routes } from "./src/routes"

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin: ["*"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
})

await fastify.register(routes)
/**
 * Run the server!
 */
const startServer = async () => {
  try {
    const port = parseInt(process.env.PORT! || "8081")
    const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost"
    await fastify.listen({ port, host })

    fastify.log.info(`Server listening on port ${port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

await startServer()
