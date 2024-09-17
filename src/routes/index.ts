import app from '../app'
import client from '../config/db'

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
