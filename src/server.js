const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Some content');
});

app.listen(3000, function () {
  console.log('Application running on port 3000');
});
