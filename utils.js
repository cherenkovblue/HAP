const Database = require('@cloudant/cloudant');

const dbUrl = process.env.NODE_ENV == 'development' ? process.env.COUCH_DB_URL : JSON.parse(process.env.VCAP_SERVICES).cloudantNoSQLDB[0].credentials.url;

function dbConnect() {
    return new Promise((resolve, reject) => {
        Database({url: dbUrl}, (err, database) => {
            if(err) {
                console.log(err);
                reject(err);
            }
            else {
                let db = database.use(process.env.HAP_DB_NAME);
                resolve(db);
            }
        });
    });
}

module.exports.dbConnect = dbConnect;