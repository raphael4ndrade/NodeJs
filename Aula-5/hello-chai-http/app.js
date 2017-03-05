const bodyParse = require('body-parser');
const express = require('express');

let app = express();

app.use(bodyParse.json());
app.use(express.static('public'));

let person = [{ id: 1, nome: 'Raphael' }, { id: 2, nome: 'Lucas' }, { id: 3, nome: 'Roland' }];
let car = [{ brand: 'ford', model: 'focus' }, { brand: 'honda', model: 'civic' }, { brand: 'hyundai', model: 'hb20' }];

app.get("/person", (req, res) => {
    res.send(person);
});

app.post("/person", (req, res) => {
    person.push(req.body);
    if (person[3] == { id: 4, nome: 'Douglas' })
        res.send().status(200);
    else
        res.send().status(500);
});




module.exports = app;
