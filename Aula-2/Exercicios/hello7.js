//hello7.js
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let save = require("./save");
let list = [];
let fileName;

function getListName(count){
    if(count--){
        rl.question("Digite um nome: \n", function(line){
            list.push(line);
            getListName(count);
        });
    } else {
        save.toFile(fileName, list);
        rl.close();
        console.log(`Arquivo ${fileName} salvo com sucesso! \n`);
    }
}

function getFileName(){
    if(fileName == null){
        rl.question("Digite o nome do arquivo: \n", function(line){
            fileName = line + '.txt';
            getListName(3);
        });
    }
}

getFileName();