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

// Busca dados produto
exports.buscaProd = async (id_produto, chave_estab) => {
    const cliente = new Client(conexao);
    const sql     = "SELECT * FROM prod WHERE id_produto = $1 AND chave_estab = $2";
    const values  = [id_produto, chave_estab];

    cliente.connect();    
        try{
            const res = await cliente.query(sql, values);
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