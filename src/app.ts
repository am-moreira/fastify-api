import fastify from "fastify";
import client from './config/db'

const app = fastify({ logger: true })

export default app
