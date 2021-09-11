const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cors = require('cors');
const postegresBd = require('./connections/postegresConnection');
const porta = 3001;

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const resultado = await postegresBd.query("SELECT * FROM usuarios")
  res.send(resultado.rows)
})

app.post('/', async (req,res) =>{
  const nome = req.body.nome
  const email = req.body.email
  const senha = req.body.senha

  try{
    const insert = await postegresBd.query(
      `Insert Into usuarios(nome,email,senha) Values ('${nome}', '${email}', '${senha}' )`
    )
    res.send("ok")
  } catch (err){
    res.send({error : err})
  }
  
  app.delete('/apagar/:id', async (req,res) =>{
    const id = req.params.id

    try{
      const Delete = postegresBd.query(`Delete From usuarios u where u.id = ${id}`)
      res.send("ok")
    } catch(err){
      res.send({error : err})
    }
  })
  /**
   * No banco de dados
   * Nome
   * Email
   * Senha
   */
})
/**
 * Criar um arquivo Docker compose e Dockerfile (feito)
 * Colocar para rodar no Docker (feito)
 * Colocar no git (feito)
 * 
 *
 * 
 * Cadastrar usuarios      C (feito)
 * Ver os usuarios         R (feito)
 * Atualizar um usuario    U
 * Deletar um usuario      D
 * 
 */

app.listen(porta,()=> console.log("Servidor Rodando"))



