const express = require('express');
const jwt = require('jsonwebtoken');

// Busca vendas
exports.busca = (req, res) => {
    message = 'API indisponível';
    res.status(500).json({ msg: message })
};
