// get the client
let mysql = require('mysql2/promise');

const main = async ()=> {
 let connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'images'
});
return connection;
}


module.exports = main;