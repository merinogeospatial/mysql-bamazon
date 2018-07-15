const inquirer = require("inquirer");
const mysql = require("mysql");

let db = mysql.createConnection({
  host     : 'localhost',
  port     : 8889,
  user     : 'root',
  password : 'root',
  database : 'bamazon'
});
 
db.connect();
 
db.query('SELECT * FROM products ', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
db.end();