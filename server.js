const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/robot', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index1.html'));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
