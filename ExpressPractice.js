const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Home')
});

app.get('/recipes', function (req, res) {
    res.send('Página de recetas');
});

app.get('/recipes/search/:mode', function (req, res) {
    console.log(req.params);
    let mode = req.params.mode;
    let ingredient = req.query.ingredient;
    let filter = req.query.filter;
    res.send(`buscando receta con ${req.query.ingredient} with mode: ${mode}`)
});

app.get('/recipes/search', function (req, res) {
    console.log(req.query);
    let ingredient = req.query.ingredient;
    res.send(`Buscando receta con, ${ingredient}`)
});


app.listen(port, function() {
    console.log('Server launched:', port)
});