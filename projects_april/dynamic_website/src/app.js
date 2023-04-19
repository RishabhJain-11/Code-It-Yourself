const express = require('express');
const app = express();
const path = require('path');
require('./db/conn')
const port = process.env.PORT || 3000;

//setting the path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials")

// add middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticPath));
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.listen(port, (e) => {
    if (!e) {
        console.log(`Connection ${port}`)
    } else {
        console.log(e);
    }
});

