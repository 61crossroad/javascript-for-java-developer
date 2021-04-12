const fruits = [{ name: 'apple', price: 100 }, { name: 'orange', price: 80 }, { name: 'banana', price: 120 }];

// Var 1
var countFruits = () => fruits.length;
// ES5
var countFruits = function() {
    return fruits.length;
}

// Var 2
fruits.filter(fruit => fruit.price > 100);
// ES5
fruits.filter(function (fruit) {
    return fruit.price > 100;
});

// Var 3
var inventory = fruits.map(fruit => ({ name: fruit.name, storage: 1 }));
// ES5
var inventory = fruits.map(function(fruit) {
    return {
        name: fruit.name,
        storage: 1
    };
});

// Var 4
var inventory = fruits.map(fruit => {
    console.log('Checking ' + fruit.name + ' storage');
    return { name: fruit.name, storage: 1 };
});
// ES5
var inventory = fruits.map(function(fruit) {
    console.log('Checking ' + fruit.name + ' storage');
    return { name: fruit.name, storage: 1 };
});
