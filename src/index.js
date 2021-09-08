const express = require('express')
require('dotenv').config()

const app = express()

//Configuração para trabalhar com json
app.use(express.json())
//Configuração para trabalhar com URL codificada
app.use(express.urlencoded({extended: true}))

//Rotas
// Importando a constante router do arquivo routes
const router = require('./routes')
// Possibilitando o app a utilizar as rotas importadas 
// redirecionando com router(tatica de versionamento)
app.use('/api/v1', router)


// arrow function =>
// função dentro da outra = callback
app.listen(process.env.PORT, () => {
    console.log(`Servidor está rodando na porta ${process.env.PORT}`)
})