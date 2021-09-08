const express = require('express')
const router = express.Router()
const tarefaController = require('./controllers/tarefaControllers')

// localhost/api/v1/tarefas
router.get('/tarefas', tarefaController.listarTodas)

module.exports = router

