// hello-knex-1.js
// const knex = require("knex")({
//     client: "sqlite3",
//     connection: {
//         filename: "./hello.sqlite"
//     },
//     useNullAsDefault: true // coisas de sqlite.. ¯\_(ツ)_/¯
// });

const knex = require('./db');

// criar uma tabela
knex.createTable("convidado", (table) =>{
    table.increments("idconvidado");
    table.string("nomeconvidado");
}).then(() => {
    console.log("tabela criada");
    process.exit(0);
}).catch((err)=>{
    console.log(err);
    process.exit(1);
});