const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('', (_, res) => {
  res.sendFile('public/index.html');
});


app.listen(8787, () => {
  console.log(`listening 8787`);
});