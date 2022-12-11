const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { Choice } = require('../models');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    const choices = await Choice.findAll();
     if(req.headers.accept.indexOf('/json') > -1) {
        res.json(choices);
    } else {
    res.render('choice/index', { choices });
    }
})

router.get('/new', (req, res) => {
    res.render('choice/create')
})

router.post('/', async (req, res) => {
    const { name } = req.body;
    const choices = await Choice.create({ name });
    if(req.headers.accept.indexOf('/json') > -1) {
        res.json(choices)
    } else {
    res.redirect('/choices/' + choice.id);
    }
    res.json(choices);
})

router.get('/:id', async (req, res) => {
    const choices = await Choice.findByPk(req.params.id);
    res.json(choices);
})

router.post('/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const choices = await Choice.update({ name }, { where: { id }});
    res.json(choices);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await Choice.destroy({
        where: { id }
    });
    res.redirect('/choices');
    
})

module.exports = router;