// hello-knex-5.js
"use strict"
const knex = require("./db");

//selecionando todos os itens da tabela
knex("convidado").select().then(function(ret){
    console.log("id\t\tnome")
    let i = ret.length;
    while(i--){
        let conv = ret[i];
        console.log(`${conv.idconvidado}\t\t${conv.nomeconvidado}`);
    }
    process.exit(0);
});