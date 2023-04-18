const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/arhnath", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection Success")).catch((err) => console.log(err))



app.get('/', (req, res) => {
    res.send("Ok Boys");
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server");
    } else {
        console.log(error);
    }
})