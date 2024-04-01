import app = require("teem");
import { Pool } from 'pg';

class IndexRoute {
    private pool: Pool;

    constructor() {
        // Configurações de conexão com o banco de dados
        this.pool = new Pool({
			user: 'postgres',
			host: 'localhost',
			database: 'teste',
			password: 'root',
			port: 5432, // Porta padrão do PostgreSQL
        });
    }

    public async index(req: app.Request, res: app.Response) {
        try {
            // Consulta SQL para calcular a média de vendido
            const queryResult = await this.pool.query('SELECT AVG(vendido) AS media_vendido FROM produtos');

            // Acessando o resultado da consulta
            const mediaVendido = queryResult.rows[0].media_vendido;

            // Renderiza o modelo index/index e passa a média de vendido como variável
            res.render("index/index", { mediaVendido });
        } catch (error) {
            console.error('Erro ao consultar o banco de dados:', error);
            res.status(500).send('Erro ao consultar o banco de dados.');
        }
    };
};

export = IndexRoute;
