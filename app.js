const compression = require('compression');
const express = require('express');
const cors = require('cors');
const app = express();
const porta = process.env.PORT || 3000;

// Compress all HTTP responses
app.use(compression());

app.use(cors());
app.use(express.json()) // Tratar o bory do request como JSON
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Direciona rotas
const  vendas = require('./rotas/vendas');
app.use('/vendas', vendas);

// Servidor inciado
app.listen(porta,() => 
    console.log(`Iniciando servidor na porta ${porta}`)
);