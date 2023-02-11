const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// First Route
const firstRouter = require('./routes/first');
app.use('/first', firstRouter);

// Second Route
const secondRouter = require('./routes/second');
app.use('/second', secondRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
