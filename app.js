const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => { res.send('Hello world'); });

app.listen(port || 3000, () => { console.log(`Server is up at port ${port}`); });