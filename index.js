const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/products', (req, res) => {
    res.send('All Products');
})

app.post('/products', (req, res) => {
    res.send('Created a New Product');
});

app.post('/products/:id', (req, res) => {
    res.send('Updated a Product with and id of: ' + req.params.id);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});