const Tarefa = require('../models/Tarefa')

// Funções que irão acessar o banco de dados(CRUD)

exports.listarTodas = (req, res) => {

    try{
        // Concatenar atividade por causa da execução assincrona do js
        Tarefa.find().then((dados) => {
            res.status(200)
            res.send(dados)
        })

    }catch (erro) {
        res.status(500)
        res.send({ mensagem: erro.message})
    }
}

exports.listarPorId = (req, res) => {

    try {

        const id = req.params.id

        Tarefa.findById(id, (erro, dados) => {
            if (dados) {
                res.status(200)
                res.send(dados)
            } else {
                res.status(404)
                res.send({ mensagem : "Nenhuma tarefa encontrada para este id" })
            }
        })

    } catch (erro) {
        res.status(500)
        res.send({ mensagem: erro.message })
    }
}


exports.inserir = (req, res) => {

    try {

        const tarefa = new Tarefa({
            descricao: req.body.descricao,
            data: req.body.data,
            realizado: req.body.realizado
        })

        tarefa.save((erro, dados) => {
            res.status(201)
            res.send(dados)            
        })

    } catch (erro) {
        res.status(500)
        res.send({ mensagem: erro.message })
    }
}