const express = require('express');
const app = express();
const { Quiz } = require('./src/models');
const quizzesCtrl = require('./src/controllers/quizzes');
const questionCtrl = require('./src/controllers/questions');
const choiceCtrl = require('./src/controllers/choices');

app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');

app.get('/', async (req, res) => {
    const quiz = await Quiz.findByPk(11);
    res.render('index', {
      quiz
    });
});

app.use('/quizzes', quizzesCtrl);
app.use('/questions', questionCtrl);
app.use('/choices', choiceCtrl);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});