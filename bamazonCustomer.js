var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection(
    {
        host: "localhost",
        port: "3606",
        user: "root",
        password: "root",
        database: "bamazonDB",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    }
);

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // start();
    console.log("\n🍭🍭🍭 WELCOME TO BAMAZON, YOUR ONE-CLICK SHOP FOR THE ULTIMATE CONVENIENCE 🍭🍭🍭\n");
    console.log("TODAY'S ⚡️⚡️LIGHTNING⚡️⚡️ DEALS\n");
    connection.query("SELECT * FROM products", function (err, data) {
        if (err) {
            throw err;
        }

        data.forEach(function (row) {
            console.log(`#${row.item_id} | ${row.product_name}  |  Price: $${row.price}`);
        });
        console.log();
        start();
    });
});

function start() {
    var cartTotal = 0;
    inquirer.prompt(
        [
            {
                name: "productID",
                type: "input",
                message: "Enter the ID of the product you wish to purchase",
            },
            {
                name: "amount",
                type: "input",
                message: "How many units you wish to purchase"
            }
        ]).then(function (answers) {
            var ID = parseInt(answers.productID);
            var amt = parseInt(answers.amount);
            if (amt < 1) {
                console.log("\nInvalid amount. Please select a different amount\n");
                start();
            } else if (ID > 0 && ID < 11) {
                connection.query("SELECT * FROM products WHERE item_id = ?", ID, function (err, data) {
                    if (err) throw err;
                    if (amt > data[0].stock_quantity) {
                        console.log("\nInsufficient inventory to fulfill order. Please try a lower amount\n");
                        start();
                    } else if (amt > 0 && amt < data[0].stock_quantity){
                        // console.log(data);
                        console.log(`\nYOUR PURCHASE ORDER: #${data[0].item_id} | ${data[0].product_name}  |  Price: $${data[0].price}  | Amount: ${amt} units`);
                        // console.log("data[0].price: ", data[0].price);
                        cartTotal = data[0].price * amt;
                        console.log("ORDER TOTAL: $", cartTotal);
                    } else {
                        console.log("\nInvalid amount. Please try again with valid amount\n");
                        start();
                    }
                });
            } else {
                console.log("\ninvalid ID. Please try again with valid ID\n");
                start();
            }
        });
}