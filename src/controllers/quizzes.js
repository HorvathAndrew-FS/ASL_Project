const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { Quiz } = require('../models');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const quiz = await Quiz.create({ name });
    res.json(quiz);
    // const { id, name } = req.body
    // quizzes.push({
    //     id: Number(id),
    //     name
    // });
    // res.json(quizzes);
})

router.get('/:id', (req, res) => {
    // const id = req.params.id;
    // const quiz = quizzes.find(q => q.id == id);
    const quiz = Quiz.findByPk
    res.json(quiz);
})

router.post('/:id', (req, res) => {
    const id = Number(req.params.id);
    quizzes.map((q) => {
        if (id === q.id){
            q.name = req.body.name;
        }
        return q
    })
    res.json(quizzes)
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    quizzes = quizzes.filter(q => q.id != id);
    res.json(quizzes);
    
})

module.exports = router;