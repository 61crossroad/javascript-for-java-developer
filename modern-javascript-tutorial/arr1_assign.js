let arr1 = new Array();
let arr2 = []; // use literal
console.log(arr1);
console.log(arr2);

let fruits = ['apple', 'orage', 'peach'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[2] = 'pear';
fruits[3] = 'banana';
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);
console.log(fruits);

let arr3 = ['apple', { name: 'purple' }, true, function() { console.log("Hello"); }];
console.log(arr3);