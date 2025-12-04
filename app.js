const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Kubernetes!");
});

app.listen(8080, () => console.log("App running on 8080"));
