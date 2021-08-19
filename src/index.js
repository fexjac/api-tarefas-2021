const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Rotas
app.get('/turmas', (req, res) => {
    
    const dados = [
        {"id":1, "nome": "ADS 2021"},
        {"id":2, "nome": "ADS 2020"},
        {"id":3, "nome": "ADS 2019"}
    ]

    res.send(dados)
})


// arrow function =>
// função dentro da outra = callback
app.listen(3007, () => {
    console.log('Servidor está rodando na porta 3007')
})