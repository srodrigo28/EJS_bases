const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("./pages/index");
})

app.get("/cadastrar", function (req, res) {
    res.render("./pages/cadastrar");
})

app.get("/contato", function (req, res) {
    res.render("./pages/contato");
})

app.listen(8080);
console.log("Servidor Up!");