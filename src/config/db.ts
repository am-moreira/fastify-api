import { Client } from 'pg'

// import * as dotenv from 'dotenv';
// dotenv.config();

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT } = process.env
const client = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: Number(DB_PORT), // Converte para número
});

client.connect()
    .then(() => console.log('Banco de Dados Conectado com Sucesso!'))
    .catch(err => console.error('Erro ao Conectar no Banco de Dados', err));

export default client
