const express = require('express');
const vendasController = require('../controllers/vendasController');
const rota = express.Router();

/*rota.post('/', agendamentoController.inserir);
rota.get('/', agendamentoController.busca);
rota.get('/agendar', agendamentoEmailController.agendar)
rota.get('/confirmar/:hash_confirma', agendamentoController.confirma);
rota.get('/periodo',  agendamentoController.busca_por_periodo);
*/
rota.get('/', vendasController.busca);
rota.post('/', vendasController.inserir)

module.exports = rota;