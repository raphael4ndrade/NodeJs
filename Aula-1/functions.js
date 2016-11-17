/* Uso comum de funções */
function sum(x, y){
    return (x + y);
}
// sum(2, 2) ... 4

let times = function(x, y){
    return (x * y);
}
// time(5, 2) ... 10

function inception(x, y){
    return x(y,y);
}
// inception(sum, 4)    ... 8
// inception(times, 3)  ... 9

/* Fat arrows */

let inceptionArrow = (y) => console.log(y*y);

inceptionArrow(3);
//9
inceptionArrow(10);
//100