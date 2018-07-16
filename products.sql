CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE IF NOT EXISTS products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(25),
	price DOUBLE(10,2),
	stock_quantity INT(10),
	PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hamburger Helper", "Food and Grocery", 2.99, 4000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spiderman Undies", "Clothing", 6.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Electronics", 499.99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 299.99, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Meme Painting", "Home", 14.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("New Macbook Pro", "Electronics", 6700, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gatorade 12-Pack", "Food and Grocery", 8.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fedora", "Clothing", 20.50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tasteful Ikea Lamp", "Home", 9.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spiderman Undies", "Clothing", 6.99, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Bat", "Sports", 14.99, 14);
