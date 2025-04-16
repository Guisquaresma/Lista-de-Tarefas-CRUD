const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize, DataType } = require('sequelize');
const app = express();

// const sequelize = new Sequelize('miqueias_tarefas', 'root', 'admin', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false,
// });

app.get('/usuarios', (rep,res) => {
    res.sendFile(path.join(__dirname, 'views/usuarios.html'))
});

app.get('/', (req,res) => {
    res.send("Olá, Mundo!");
})

app.listen(3030, () => console.log('Servidor rodando em http://localhost:3000'));