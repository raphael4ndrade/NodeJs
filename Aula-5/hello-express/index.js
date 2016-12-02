// index.js
const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send("<h1>Welcome to my first route with ExpressJs</h1>")
});

app.get("/hello", (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get("/hello/world", (req, res) =>{
    res.send("<h2>Acessando /world!!</h2><br/>");
    console.log("Sucesso!");
});

app.listen(3000, () => {
    console.log("Servidor iniciado em localhost:3000");
});

