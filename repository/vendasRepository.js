// Conexão com banco de dados
const res = require('express/lib/response');
const { Client } = require('pg');

// JSON conexão ao banco
const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'vendas',
    user: 'postgres',
    password: 'admin'   
};

// Busca dados header venda
exports.busca = async () => {
    const cliente = new Client(conexao);
    const sql     = "SELECT * FROM vend_header";
    //const values  = [data];

    cliente.connect();    
        try{
            const res = await cliente.query(sql);
            cliente.end();
            return (res.rows);
         }
         catch(err){
            let error = {};
            error.name = err.name;
            error.message = err.message;
            error.status = 500;
            throw error;
         }
};