import fastify from "fastify";
import routes from "./routes";
import client from './config/db'

const app = fastify({ logger: true })

app.register(routes)

export default app
