const express = require('express');
const app = express();
const { Quiz } = require('./src/models');
const quizzesCtrl = require('./src/controllers/quizzes');
const questionCtrl = require('./src/controllers/questions');
const choiceCtrl = require('./src/controllers/choices');
const authCtrl = require('./src/controllers/auth');
const bodyParser = require('body-parser');
const session = require('express-session');
app.use(session({
  saveUninitialized: false,
  secret: 'chunky monkey',
  cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');

app.get('/', async (req, res) => {
    res.render('home/home');
});

app.use('/quizzes', quizzesCtrl);
app.use('/questions', questionCtrl);
app.use('/choices', choiceCtrl);
app.use('/auth', authCtrl);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});