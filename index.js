const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cors = require('cors');
const postegresBd = require('./connections/postegresConnection')
const porta = 3001;

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const resultado = await postegresBd.query("SELECT * FROM nomes")
  res.send(resultado.rows)
})
/**
 * Criar um arquivo Docker compose e Dockerfile 
 * Colocar para rodar no Docker
 * Colocar no git
 * 
 * Criar Rota para usuarios
 * 
 * Cadastrar usuarios      C
 * Ver os usuarios         R
 * Atualizar um usuario    U
 * Deletar um usuario      D
 * 
 */

app.listen(porta,()=> console.log("Servidor Rodando"))



