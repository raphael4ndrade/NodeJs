//hello5.js
const fs = require("fs"); //fs: file system
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let countriesName = [];
let fileName;

function getCountriesName(count){
    if(count--){
        rl.question("Digite o nome do país: \n", function(line){
            countriesName.push(line);
            getCountriesName(count);
        });
    } else {
        saveFile();
        rl.close();
        console.log(`Arquivo ${fileName} salvo com sucesso!\n`);
    }
}

function getFileName(){
    if(fileName == null){
        rl.question("Digite o nome do arquivo: ", function(line){
            fileName = line + '.txt';
            getCountriesName(5);
        });
    }
}

function saveFile(){
    for(var i in countriesName)
        fs.appendFile(`${fileName}`, countriesName[i] + "\n");
}

getFileName();