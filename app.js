/*
const express         = require('express')
const mongoose        = require('mongoose')
const rotaLogin       = require('./rotas/login')
const rotaCadastro    = require('./rotas/cadastro')
const rotaProduto     = require('./rotas/produto')
const rotaEstoque     = require('./rotas/estoque')
const loginMiddleware = require('./middleware/login_middleware')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const trataLog = (req, res, next) => {
  console.log("Metodo", req.method);  
  console.log("URI", req.originalUrl);
  next();
  console.log("Status",res.statusCode);
}

//Conexão com Mongo
mongoose.connect('mongodb://127.0.0.1:27017/produtos')
  .then(() => {
    console.log("Conectado ao Mongo..");
  }).catch((error) => { 
    console.log("Erro>:", error) 
  });

app.use(trataLog);

app.use('/api/cadastro', rotaCadastro);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/