const fruits = [{name: 'Apple', price: 100}, {name: 'Orange', price: 80}];
let [...myFruits] = fruits;
console.log(myFruits[0].name);
myFruits.push({name: 'Banana', price: 90});
console.log(myFruits.length);
console.log(fruits.length);
myFruits[0].price = 110;
console.log(fruits[0].price);