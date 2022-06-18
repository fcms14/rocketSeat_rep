const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migratrionsRun(){
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection().then(db => db.exec(schemas))
    .catch(error => console.error(error));    
}

module.exports = migratrionsRun;