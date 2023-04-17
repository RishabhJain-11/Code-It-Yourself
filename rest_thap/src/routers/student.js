const express = require('express');
const router = new express.Router();
const Student = require("../models/students")

router.get('/thapa', (req, res) => {
    res.send("Hello Bro");
});

router.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
});

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);
    } catch (error) {
        res.send(error);
    }
})

router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudent);
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = router;