const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { Question } = require('../models');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    const questions = await Quiz.findAll();
    res.json(questions);
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const question = await Question.create({ name });
    res.json(question);
})

router.get('/:id', async (req, res) => {
    const question = await Question.findByPk(req.params.id);
    res.json(question);
})

router.post('/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const question = await Question.update({ name }, {where: { id }});
    res.json(question);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await Question.destroy({
        where: { id }
    });
    res.redirect('/questions');
    
})

module.exports = router;