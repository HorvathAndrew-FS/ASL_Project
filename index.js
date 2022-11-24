const express = require('express');
const app = express();
const quizzesCtrl = require('./src/controllers/quizzes');

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/quizzes', quizzesCtrl);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});