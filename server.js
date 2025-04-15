const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let latestData = {};

app.post('/data', (req, res) => {
  latestData = req.body;
  console.log('Received data:', latestData);
  res.sendStatus(200);
});

app.get('/data', (req, res) => {
  res.json(latestData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
