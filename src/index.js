const express = require('express')

const app = express()

//Configuração para trabalhar com json
app.use(express.json())
//Configuração para trabalhar com URL codificada
app.use(express.urlencoded({extended: true}))

//Rotas
app.get('/turmas', (req, res) => {
    
    const dados = [
        {"id":1, "Professor": "ADS 2021"},
        {"id":2, "Turma": "ADS 2020"},
        {"id":3, "Aluno": "ADS 2019"}
    ]
    //Retorno da  requisição
    res.status(200)
    res.send(dados)
    console.log('Consultando na rota /turmas')
})

const port = 3007


// arrow function =>
// função dentro da outra = callback
app.listen(port, () => {
    console.log('Servidor está rodando na porta 3007')
})