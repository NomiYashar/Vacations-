import db from "mysql"

const pool = db.createPool({
    host: "localhost",
    user: "root",
    database: "vacationsproject3",
    timezone: "utc"
});

function executeQueryAsync(sqlCmd) {
    return new Promise((resolve, reject) => {
        pool.query(sqlCmd, (err, result)=> {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}

export default {
    executeQueryAsync
};