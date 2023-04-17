const express = require('express');
require("./db/conn.js");
const Student = require('./models/students.js')
const app = express();
const port = 3000;
app.use(express.json());


// Create a Student
// app.post('/students', (req, res) => {
//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
// });
app.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
});

app.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
    console.log("Ok");
})

/**
 * BJP
 * SP
 * BSP
 * RLD
 * INC
 * AIMIM
 * AAP
 */