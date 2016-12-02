//hello-knex-8.js
const knex = require('./db');

if(!process.argv[2]){
    console.log("usage: hello-knex-8.js: <nome>");
    process.exit(0);
}

knex.raw(`insert into convidado (idconvidado, nomeconvidado) 
    values (?)`, process.argv[2]).then(function(ret){
        let i = ret.length;
        while(i--){
            console.log(ret[i]);
        }
        process.exit(0);
    });