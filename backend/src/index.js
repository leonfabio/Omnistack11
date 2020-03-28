const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
    Rota / recurso

*/

/*
  Metodos HTTP

  GET: buscar/listar informação do back-end
  POST: criar informação do back-end
  PUT: alterar informação do back-end
  DELETE: deletar informação do back-end

*/

/*
  Tipos de parametro:

  Query: parametros nomeados enviados na rota apos o '?'
    (filtros, paginação)
  Routes: parametros usados para identificar recursos
  Request body: corpo da requisição, criar ou alterar recursos
*/



