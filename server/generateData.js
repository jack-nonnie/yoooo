var faker = require("faker");
var database = { products: [] };
for (var i = 1; i <= 100; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    priority: faker.random.number(),
  });
}
console.log(JSON.stringify(database));