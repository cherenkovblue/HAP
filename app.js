require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/create', (req, res) => {
    console.log(req.body);
    asyncCall(req.body).then((data) => {
        console.log(data); 
        res.send('write OK'); 
    }).catch((err) => {
        console.log(err);
        res.send('write NOT OK'); 
    });
});

app.listen(port || 3000, () => { console.log(`Server is up at port ${port}`); });

async function asyncCall(data) {
    let db = await utils.dbConnect();
    return db.insert({ roomName: data.roomName }, data.roomId);
}