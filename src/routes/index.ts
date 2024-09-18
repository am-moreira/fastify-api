// import app from '../app'
import { FastifyInstance } from 'fastify';
import client from '../config/db'

async function routes(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    return 'AVALIAÇÕES'
  })

  app.get('/avaliacoes', async (request, reply) => {
    try {
      // Executa a consulta SELECT
      const result = await client.query('SELECT * FROM avaliacoes');
      reply.send(result.rows); // Retorna os dados
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao buscar as avaliações' });
    }
  });
}

export default routes

