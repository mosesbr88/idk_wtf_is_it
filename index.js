const express = require('express');
//const axios = require('axios');

const app = express();
app.use(express.json());

//const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

app.get("/webhook", (req, res) => {
  console.log("tex");
  res.send(true);
});


app.post('/webhook', (req, res) => {
  console.log('Received:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on port 3000'));
