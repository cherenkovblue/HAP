const Cloudant = require('@cloudant/cloudant');
const vcap = require ('./vcap-local.json');

function dbCloudantConnect() {
    return new Promise((resolve, reject) => {
        Cloudant({url: vcap.services.cloudantNoSQLDB.credentials.url}, (err, cloudant) => {
            if(err) {
                console.log(err);
                reject(err);
            }
            else {
                let db = cloudant.use(process.env.HAP_DB || "hap-db-dev");
                resolve(db);
            }
        });
    });
}

module.exports.dbCloudantConnect = dbCloudantConnect;