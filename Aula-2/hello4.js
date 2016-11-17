// hello4.js
const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nomes = [];

function leianome(count){
    if(count--){
        rl.question("Digite um nome:\n",function(line){
            nomes.push(line);
            leianome(count);
        });
    } else{
        gravaarquivo();
        rl.close();
        console.log("Arquivo nomes.txt salvo!");
    } 
}

function gravaarquivo(){
    for(var i in nomes)
        fs.appendFile("nomes.txt",nomes[i]+"\n");
}

// chamar a função
leianome(3);

// Ao excutar o arquivo no terminal a seguinte mensagem de warning foi enviada:
// (node:28918) DeprecationWarning: Calling an asynchronous function without a callback is deprecated.