# Semana OmniStack 11

A Semana OmniStack é um workshop online produzido pela Rocketseat. Esta é a versão 11, onde o [Diego Fernandes](https://github.com/diego3g) nos ensina a desenvolver uma aplicação desde o backend até o frontend web e mobile com uma única linguagem, o Javascript. O nome da aplicação desenvolvida é Be The Hero, que é uma aplicação para cadastro de ONGs e casos que essas ONGs cadastram para que outras pessoas possam ajudar a resolvê-los.

Para clonar o repositório, execute o seguinte comando no terminal:
```bash
git clone https://github.com/mateus-oliveira/omnistack11.git
``` 

## Banco de Dados 

A aplicação original foi feita com acesso ao banco de dados SQLite, mas nesta versão, fez-se uso do banco de dados [MySQL](https://www.mysql.com/) com o auxílio do [MySQL Workbench](https://www.mysql.com/products/workbench/) para visualização das tabelas diretamente no banco. Portanto, para rodar esta aplicação no seu host:
 
* Instale o MySQL e o Workbench. 
* Crie um banco de dados pelo Workbench com o nome omnistack;
* Selecione o Character Set uft8, e Collaction utf8_general_ci
* Clique em Aplly > Aplly > Close.

## Backend

API Restful desenvolvida em [NodeJS](https://nodejs.org/en/) com acesso a banco de dados relacional. Esta API faz uso do query builder [Knex](http://knexjs.org/). Para se conectar ao banco, mude suas credenciais user e password no arquivo knexfile.js.

Para executar a API na sua máquina e servir, execute no terminal:

```bash
cd backend
npm install --save
npm run dev
```

As rotas para acessar a API estão no arquivo routes.js no caminho omnistack/backend/src/routes.js. Na pasta omnistack/backend/insomnia/ está o arquivo requests.json exportado pelo software [Insomnia](https://insomnia.rest/download/). Você pode baixar e instalar o Insomnia na sua máquina. Após isso, basta importar o arquivo requests.json pelo Insomnia e acessar as rotas da aplicação. 

## Web

Frontend web, desenvolvido em [ReactJS](https://pt-br.reactjs.org/).

## Mobile

Frontend mobile, desenvolvido com o framework [React Native](https://reactnative.dev/) com o [EXPO](https://expo.io/).