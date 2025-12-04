const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send("Hello v2!");
});

app.listen(8080, () => console.log("App running on 8080"));
