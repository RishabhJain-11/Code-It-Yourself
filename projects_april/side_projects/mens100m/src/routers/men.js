const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/mens')

// we will handle post request
router.post("/mens", async (req, res) => {
    try {
        const addingRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingRecords.save();
        res.status(201).send(insertMens);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 });
        res.send(getMens);
    } catch (error) {
        res.status(400).send(error);
    }
})
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateMensById = await MensRanking.findByIdAndUpdate(_id, req.body);
        res.send(updateMensById);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteMensById = await MensRanking.findByIdAndDelete(_id);
        res.send(deleteMensById);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMensById = await MensRanking.findById({ _id });
        res.send(getMensById);
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;