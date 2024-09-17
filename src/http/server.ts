import fastify from "fastify";
import client from '../config/db'

const app = fastify({ logger: true })

app.get('/', () => {
    return 'AVALIAÇÕES'
})

app.get('/avaliacoes', async (req, reply) => {
    try {
      // Executa a consulta SELECT
      const result = await client.query('SELECT * FROM avaliacoes');
      return result.rows; // Retorna os dados
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao buscar as avaliações' });
    }
});

app.listen({ port: 3333, host: '0.0.0.0' }).then((address) => {
    console.log(`🔥🔥 HTTP Server is Running on ${address}`)
    console.log('http://localhost:3333')
})
