require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./src/routes/UserRouter')
const cursoRouter = require('./src/routes/CursoRouter')
const anoLectivoRouter=require('./src/routes/AnoLectivoRouter')
const cors = require('cors')

//configurações

//Consumo de Api
app.use(cors())
//Uso de formulário
app.use(express.json());
app.use(express.urlencoded({ extends: false }))


// Rotas
app.use('/', userRouter)
app.use('/', cursoRouter)
app.use('/', anoLectivoRouter)


app.listen(process.env.PORT, function () {
    console.log(`Servidor backend está online:${process.env.PORT}`)
})