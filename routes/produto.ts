import app = require("teem");
import axios from 'axios';
import { Pool } from 'pg';
import { Request, Response } from 'express';

class LivroRoute {

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

    public async listarProduto(req: app.Request, res: app.Response) {
        try {
            const response = await axios.get('http://localhost:8080/produto');
            const produtoData = response.data;

            // console.log(produtoData); 

            res.render("index/listar", {
                produtoData: produtoData
            });
        } catch (error) {
            console.error('Erro ao obter produtos:', error);
            res.status(500).send('Erro interno do servidor');
        }
    };

    
    public async criarProduto(req: app.Request, res: app.Response) {
		res.render("index/criar");
	}
    

    public async Dashboard(req: app.Request, res: app.Response) {
        try {
            // Obtenha os dados dos jogadores
            const responseJogadores = await axios.get('http://localhost:8080/jogador');
            const jogadoresData = responseJogadores.data;
    
            // Obtenha a média de preço
            const responsePorcenVitoria = await axios.get('http://localhost:8080/jogador/porcen-vitoria');
            const porcenVitoria = responsePorcenVitoria.data;

            const responsePorcenVitAgente = await axios.get('http://localhost:8080/jogador/porcenVitAgent');
            const porcenVitAgent = responsePorcenVitAgente.data;
    
            const responseTotalJogadores = await axios.get('http://localhost:8080/jogador/total-jogadores');
            const totalJogadores = responseTotalJogadores.data;

            const responseHeadshotAcima30 = await axios.get('http://localhost:8080/jogador/jogadorHeadshotAcima30');
            const headshotAcima30 = responseHeadshotAcima30.data;

            res.render("Dashboard/index", {
                jogadoresData: jogadoresData,
                porcenVitoria: porcenVitoria,
                porcenVitAgent: porcenVitAgent,
                totalJogadores: totalJogadores,
                headshotAcima30: headshotAcima30
            });
        } catch (error) {
            console.error('Erro ao obter produtos:', error);
            res.status(500).send('Erro interno do servidor');
        }
    }
    
    
    public async Analytics(req: app.Request, res: app.Response) {
        
		res.render("Dashboard/analytics");
	}
    
    public async Statistics(req: app.Request, res: app.Response) {
		res.render("widget/w_statistics");
	}
    
    public async Data(req: app.Request, res: app.Response) {
		res.render("widget/w_data");
	}

    public async Chart(req: app.Request, res: app.Response) {
		res.render("widget/w_chart");
	}

    public async signUp(req: app.Request, res: app.Response) {
		res.render("index/signUp");
	}

    public async signIn(req: app.Request, res: app.Response) {
		res.render("index/signIn");
	}

    public async editarProduto(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.query.id as string);
            const valoresLivro = await this.obterValoresLivro(id); 
            res.render("index/editar", { id: id, valoresLivro: valoresLivro }); 
            } catch (error) {
            console.error('Erro ao renderizar página de edição:', error);
            res.status(500).send('Erro ao renderizar página de edição'); 
        }
    }

    private async obterValoresLivro(id: number): Promise<any> {
        try {
            const response = await axios.get(`http://localhost:8080/produto?id=${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter valores do livro:', error);
            throw error; 
        }
    }

    public async formCadastrar(req: Request, res: Response){
        res.render("forms/form_elements");
    }
}

export = LivroRoute;