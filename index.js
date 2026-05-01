const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Expsress Server is Running!</h1>');
});

app.listen(process.env.PORT, () => {
  console.log('🚀 Server started on http://localhost:3000');
});
