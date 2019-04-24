const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {

    asyncCall().then((data) => {
        console.log(data); // { ok: true, id: 'rabbit', ...
        res.send('Hello world'); 
    }).catch((err) => {
        console.log(err);
        res.send('No world'); 
    });
    
});

app.listen(port || 3000, () => { console.log(`Server is up at port ${port}`); });

async function asyncCall() {
    let cloudant = await utils.dbCloudantConnect();
    return cloudant.insert({ happy: true }, 'rabbit');
}