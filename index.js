const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './app')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './app/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

module.exports = app;