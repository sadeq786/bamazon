DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(40) NULL,
    department VARCHAR(20) NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Stash Earl Grey Tea", "Coffee and Tea", 3.99, 2000);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Kronung Instant Coffee", "Coffee and Tea", 6.99, 1400);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("15 in. MacBook Pro with Touchbar", "Laptops", 1700, 135);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("15 in. DELL XPS with 4K Touchscreen", "Laptops", 1500, 450);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Logitech MX Anywhere2", "Keyboard and Mice", 64.99, 1280);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Microsoft Wireless Desktop 850", "Keyboard and Mice", 20.99, 2600);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("President Feta Cheese Crumbles", "Dairy", 8, 3125);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("KerryGold Dubliner Cheese", "Dairy", 12, 840);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("iPhone X", "Cell Phones", 1000, 23400);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Samsung S9", "Cell Phones", 719.99, 29000);

