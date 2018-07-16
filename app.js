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
        console.log(answer.chosenID, answer.chosenQuantity);
        getProduct(answer.chosenID,answer.chosenQuantity);
       

        //---- Let's put to handle ID matching, checking if there is enough, then loggin the total of their transaction
        //  We will need to query to return a list of objects, then do a for loop + if statement to catch a matching id.
        // OR a better way would be to use a ? wild card in the query and have answer.chosenID fulfull that ? query
        // it would look something like dbquer('SELECT * FROM products WHERE item_id = ?', answer.chosenID, function(err,res){}...



        // db.query('SELECT * FROM products ', function (error, results, fields) {
        //   if (error) throw error;
        //   console.log(results);
        // });
        // db.end();


    });
}

function getProduct(chosenID,quantity) {
    db.query(
        'UPDATE products SET stock_quantity = (stock_quantity - ? ) WHERE item_id = ?', [quantity,chosenID], function(err, res) {
            console.log("You bought " + quantity + " of item ID: " + chosenID);
        }
    )

    db.query(
        'SELECT price FROM products WHERE item_id = ?', chosenID, function(err, res) {
            console.log("The total price is " + (parseFloat(res[0].price) * parseFloat(quantity)));
        }
    )
}

start();

