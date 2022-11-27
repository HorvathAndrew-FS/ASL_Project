const express = require('express');
const app = express();
const quizzesCtrl = require('./src/controllers/quizzes');
const questionCtrl = require('./src/controllers/questions');
const choiceCtrl = require('./src/controllers/choices');

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/quizzes', quizzesCtrl);
app.use('/questions', questionCtrl);
app.use('/choices', choiceCtrl);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});