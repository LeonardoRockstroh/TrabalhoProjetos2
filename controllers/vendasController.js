const express = require('express');
const jwt = require('jsonwebtoken');
const vendasRepository = require('../repository/vendasRepository');

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
exports.inserir = (req, res) => {
    message = 'API indisponível';
    res.status(500).json({ msg: message })
};
