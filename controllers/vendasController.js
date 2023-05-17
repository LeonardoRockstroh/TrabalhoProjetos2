const express = require('express');
const jwt = require('jsonwebtoken');
const vendasRepository = require('../repository/vendasRepository');
const prodRepository   = require('../repository/prodRepository');

// Busca vendas
exports.busca = async (req, res) => {
    try {
        dados = await vendasRepository.busca();
        res.status(200).json(dados);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};

// Inserir uma venda
exports.inserir = async (req, res) => {
    // Requisição da API
    const dados = req.body;
    
    // Variáveis
    var valor_total_item = 0.00;
    var valor_total_venda = 0.00;

    console.log('---Dados da API---');
   
    // Lógica principal
    try {
        for (let x in dados) {
            dados_prod = await prodRepository.buscaProd(dados[x].id_produto, 'Ae123Qg');

            if (dados_prod[0].id_produto) {
                // Calcula valor total do item
                valor_total_item  = dados_prod[0].valor_prod * dados[x].qtd;
                valor_total_venda = valor_total_venda + valor_total_item;
            } 
        }

        res.status(200).json({ msg: "deu boa" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};