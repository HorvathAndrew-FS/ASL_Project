const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
let quizzes = require('../models/quizzes_model');

router.get('/', (req, res) => {
    res.json(quizzes);
})

router.post('/', (req, res) => {
    quizzes.push({req.body})
    res.send("Quizzes#Create");
})

router.get('/:id', (req, res) => {
    res.send("Quizzes#Show");
})

router.post('/:id', (req, res) => {
    res.send("Quizzes#Update");
})

router.delete('/:id', (req, res) => {
    res.send("Quizzes#Delete");
})

module.exports = router;