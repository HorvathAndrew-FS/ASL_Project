const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { Choice } = require('../models');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
        const choices = await Choice.findAll();
    res.json(choices);
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const choices = await Choice.create({ name });
    res.json(choices);
})

router.get('/:id', async (req, res) => {
    const choices = await Choice.findByPk(req.params.id);
    res.json(choices);
})

outer.post('/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const choices = await Choice.update({ name }, { where: { id }});
    res.json(Choices);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await Choice.destroy({
        where: { id }
    });
    res.redirect('/choices');
    
})

module.exports = router;