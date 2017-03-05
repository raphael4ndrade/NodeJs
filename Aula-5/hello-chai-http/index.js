// All modules separeted to facilite the testing...
const app = require('./app');

app.listen(3000, () => {
    console.log("Server online at port 3000!!");
});

