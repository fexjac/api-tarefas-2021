const express = require('express')
const router = express.Router()
const tarefaController = require('./controllers/tarefaControllers')

// localhost/api/v1/tarefas
router.get('/tarefas', tarefaController.listarTodas)
router.get('/tarefas/:id', tarefaController.listarPorId)
router.post('/tarefas', tarefaController.inserir)


module.exports = router

