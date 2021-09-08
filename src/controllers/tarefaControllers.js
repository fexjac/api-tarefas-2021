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
        res.send({ mensagem: errp.message})
    }
}

exports.listarPorId = (req, res) => {

}


