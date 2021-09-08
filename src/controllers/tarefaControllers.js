// Funções que irão acessar o banco de dados(CRUD)

exports.listarTodas = (req, res) => {
    const dados = [
        {id: 1, descricao: 'Pagar conta de luz'},
        {id: 2, descricao: 'Pagar conta de água'},
        {id: 3, descricao: 'Luta de galo'}
    ]
    res.status(200)
    res.send(dados)
}

exports.listarPorId = (req, res) => {

}


