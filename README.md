# Projeto Interdisciplinar III - Sistemas de Informação ESPM

<p style="text-align: center;">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://avatars.githubusercontent.com/u/49880458?s=200&v=4" alt="Sistemas de Informação ESPM" style="height: 200px; width: 200px;"/></a>
</p>

### 2024-03

## Integrantes
- [Alex Macedo](https://github.com/Alexxmfs)
- [Débora Duarte](https://github.com/duartedebis)
- [Henrique Sardella](https://github.com/henrique-sdc)
- [Thiago Alonso](https://github.com/ThiagoAlonso05)
- [Rafa Ambrosio](https://github.com/rafaambrosio)

# Valorant Player Dashboard

Este é o frontend do projeto de Dashboard para visualização dos dados de jogadores do jogo Valorant, obtidos através do scraper implementado no backend.

## Instalação

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina. 
2. Clone ou baixe este repositório em sua máquina local.

## Configuração

1. No terminal, navegue até o diretório do projeto.
2. Execute o comando npm install para instalar as dependências do projeto.

Você deve criar as tabelas do banco de dados copiando esse código no terminal SQL do pgAdmin:

```bash
CREATE TABLE IF NOT EXISTS public.jogadores
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    tag VARCHAR(100),
    playtime NUMERIC(10,3),
    matches NUMERIC(10,3),
    rating VARCHAR(100),
    level VARCHAR(100),
    loses VARCHAR(100),
    damage_round VARCHAR(100),
    headshot VARCHAR(100),
    win VARCHAR(100),
    wins NUMERIC(10,3),
    kills NUMERIC(10,3),
    deaths NUMERIC(10,3),
    assists NUMERIC(10,3),
    kad_ratio VARCHAR(100),
    kills_round VARCHAR(100),
    clutches VARCHAR(100),
    top_agents_1 VARCHAR(255),
    top_hours_agent_1 VARCHAR(100),
    top_matches_agent_1 VARCHAR(100),
    top_win_agent_1 VARCHAR(100),
    top_kd_agent_1 VARCHAR(100),
    top_weapon_1 VARCHAR(255),
    top_weapon_headshot_1 VARCHAR(100),
    top_weapon_2 VARCHAR(255),
    top_weapon_headshot_2 VARCHAR(100),
    top_maps_1 VARCHAR(255),
    top_porcentagem_map_win_1 VARCHAR(100)
);
```

Execute os comandos:

```bash
tsc
npm start
```

## Uso

1. Após a instalação das dependências, execute o comando npm start para iniciar o servidor de desenvolvimento.
2. Abra o navegador e acesse http://localhost:3000/produto/Dashboard para visualizar o dashboard.

## Funcionalidades

- Visualização de estatísticas de jogadores do Valorant em gráficos interativos.
- Filtragem e ordenação dos dados por diferentes métricas.
- Interface amigável e responsiva para fácil navegação em diferentes dispositivos.

## Licença

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/inter-2sem-2023-eventos/blob/main/LICENSE).

<h2><b>Tecnologias Utilizadas</b></h2>

  <div style="display: inline_block"><br>
  <img align="center" alt="css" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" hspace="10">
  <img align="center" alt="JS" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" hspace="10">
  <img align="center" alt="EJS" height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" hspace="10">
  </div>
