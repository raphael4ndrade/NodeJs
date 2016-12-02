// index.js

const express = require("express");
const knex = require("./db");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/participantes", (req, res) => {
    knex("participante").select().then( (ret) => res.send(ret));
});

app.get("/eventos", (req, res) => {
    knex("evento").select().then( (ret) => res.send(ret));
});

app.get("/evento/:id_evento/participante", (req, res) => {
    var id = knex("evento").select(id_evento).where({
        id_evento: req.params.id_evento
    });
    knex("participante").select().whereIn("id_participante", id).then( (ret) => res.send(ret));
});

app.get("/participantes/:id_participantes/eventos", (req, res) => {
    var id = kenx("participante").select("id_participante").where({
        id_participante : req.params.id_participante
    })
    knex("evento").select().whereIn("id_evento", id).then( (ret) => res.send(ret));
});

app.post("/evento", (req, res) => {
    var novo = req.body;
    knex("evento").insert(novo, "id_evento").then( (ret) => {
        novo.id_evento = ret[0];
        res.send(novo);
    }).catch((err) => {
        res.status(500).send(err);
        console.log(err);
    });
});

app.post("/participante", (req, res) => {
    var novo = req.body;
    knex("participante").insert(novo, "id_participante").then( (ret) => {
        novo.id_participante = ret[0];
        res.send(novo);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.post("/participante_evento", (req, res) => {
    var rel = req.body;
    knex("evento_participante").insert({
        id_participante : rel.id_participante,
        id_evento : rel.id_evento
    }).then( (ret) => {
        res.send("Ok!");
    }).catch( (err) => {
        res.status(500).send(err);
    })
})

knex.migrate.latest().then( () => {
    app.listen(3000);
    console.log("Aplicativo online!");
});