// All modules separeted to facilite the testing...
const app = require('./app');

app.listen(3000, () => {
    console.log("Servidor iniciado em localhost:3000");
});

