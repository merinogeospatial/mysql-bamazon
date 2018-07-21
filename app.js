// Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");

// Initialize MySQL connection
const db = mysql.createConnection({
  host     : 'localhost',
  port     : 8889,
  user     : 'root',
  password : 'root',
  database : 'bamazon'
});
 
db.connect();
 


// Define subroutines
function start() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'chosenID',
            message: 'Please enter the ID of the product you wish to purchase:'
        },
        {
            type: 'input',
            name: 'chosenQuantity',
            message: 'Please enter how many you would like to purchase:'
        }
    ]).then(function(answer){
        getProduct(answer.chosenID,answer.chosenQuantity);
    });
}

function getProduct(chosenID,quantity) {

    db.query(
        'SELECT stock_quantity, price FROM products WHERE item_id = ?', chosenID, function(err, res) {
            if (res[0].stock_quantity < quantity) {
                console.log("Sorry, we don't have enough!");
            }
            else {
                db.query(
                    'UPDATE products SET stock_quantity = (stock_quantity - ? ) WHERE item_id = ?', [quantity,chosenID], function(err, res) {
                        console.log("You bought " + quantity + " of item ID: " + chosenID);
                    }
                )
                console.log("The total price is " + (parseFloat(res[0].price) * parseFloat(quantity)));
            }
        }
    )

    setTimeout(showTable,1000);
}



function showTable() {
    var Table = require('cli-table');
 
// instantiate
var table = new Table({
    head: ['id', 'product', 'department','price', 'stock']
  , colWidths: [5, 20, 20,20, 20]
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends
    db.query(
        'SELECT * FROM products', function(err,res) {

        for (let i = 0; i < res.length; i++) {
            
            table.push(
                [res[i].item_id.toString(), res[i].product_name.toString(), res[i].department_name.toString(), res[i].price.toString(), res[i].stock_quantity.toString()]
            );
        } 

console.log("                       ");
console.log(table.toString());
console.log("                       ");
start();

});
}


showTable();
