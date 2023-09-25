/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */

import type { FastifyInstance } from "fastify"

// eslint-disable-next-line @typescript-eslint/require-await
async function routes(fastify: FastifyInstance) {
  fastify.get("/healthz", async (req, res) => {
    return res.send({ message: "Hello from the server!" }).code(200)
  })
}

export { routes }
