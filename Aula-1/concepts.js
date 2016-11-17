//Funções
function greet(greet){
    console.log(greet);
}

let name = function(x, y){  //'name' se torna a assinatura desta função.
    return x + y;
}

function bar(x, y){
    return x(y);
}

let fullName = function (){
    return firstName + middleName + lastName;
}

//Variáveis
let firstName = "Raphael";
var lastName = "Andrade";
const middleName = " \"R4GE\" ";

//Coleções
let list = [];

list.push(4);
list.push("Alo!");
list.push(1.1);

list.sort();
//1.1, 4, "Alo"

list.push([-1, 0, "oi"]);
//1.1, 4, "Alo", Array[3]

//Lacos
let listNumbers = [5, 10, 15, 20, 25, 30, 35, 110];
let map = {a:1, b:2, c:3, d:4};

for(let x in listNumbers)
    console.log(listNumbers[x]);

for(let x in map)
    console.log("%s:%s, ", x, map[x]);

console.log("a" in map);
console.log("e" in map);

