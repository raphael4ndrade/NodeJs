const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send('<h1>Aeee!</h1>');
});

app.get("/hello", (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get("/hello/world", (req, res) =>{
    res.send("<h2>Acessando /world!!</h2><br/>");
    console.log("Sucesso!");
});

module.exports = app;
