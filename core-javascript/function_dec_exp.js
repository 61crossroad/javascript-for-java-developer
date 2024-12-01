console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum (a, b) {
    return a + b;
}

var multiply = function (a, b) {
    return a * b;
};

/***** after hoisting *****/

var sum2 = function sum2 (a, b) {
    return a + b;
};

var multiply2;
console.log(sum2(1, 2));
console.log(multiply2(3, 4));

multiply2 = function (a, b) {
    return a * b;
};
