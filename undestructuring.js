let user = {name: 'Sunny', interests: ['Traveling', 'Swimming']};
let {interests: [, second]} = user;
console.log(second);
// console.log(interests); // ReferenceError

const fruits = [{name: 'Apple', price: 100}, {name: 'Orange', price: 80}];
let [,{name: secondFruitName}] = fruits;
console.log(secondFruitName);