//save.js
// As duas formas de exportar funcionam.

const fs = require("fs");

// module.exports = {
//     toFile:  function(fileName, list){
//         for(var i in list)
//             fs.appendFile(fileName, list[i] + "\n");
//     }
// }

exports.toFile = function(fileName, list){
    for(var i in list)
        fs.appendFile(fileName, list[i] + "\n");
}