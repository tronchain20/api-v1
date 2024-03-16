const express = require('express');

const app = express();

// Маршрут для обработки запросов на /ping
app.get('/ping', (req, res) => {
  const data = req.query.data;

  console.log(`Data => ${data}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`api-v1 runs on port ${PORT}`);
});