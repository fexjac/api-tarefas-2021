## Mostrar banco de dados
show dbs

## Utilizar um banco de dados
use db_tarefas

## Collections
db.tarefas.insertOne({
    "descricao": "Pagar internet",
    "feito": false
})
db.tarefas.insertOne({
    "descricao": "Pagar luz",
    "feito": true
})


db.tarefas.find()

db.tarefas.find({ "feito": true })