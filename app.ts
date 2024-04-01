import { Pool } from 'pg';
const app = require("teem");

// Configurações de conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'teste',
  password: 'root',
  port: 5432, // Porta padrão do PostgreSQL
});

// Verifica se a conexão com o banco de dados foi bem-sucedida
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida em:', res.rows[0].now);
  }
});

const PORT = 3000;

app.run({
  port: PORT
});

console.log(`O servidor está rodando na porta http://localhost:${PORT}`);
