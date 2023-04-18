const express = require('express');
require("./db/conn.js");
const Student = require('./models/students.js')
const studentRouter = require('./routers/student.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log("Ok");
})
