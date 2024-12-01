console.log(sum(3, 4));

function sum(x, y) {
    return x + y;
}

var a = sum(1, 2);
console.log(a);

function sum (x, y) {
    return x + ' + ' + y + ' = ' + (x + y);
}

var c = sum(1, 2);
console.log(c);


/** best practice **/

// ERROR!!
// console.log(sum2(3, 4)); 

var sum2 = function (x, y) {
    return x + y;
};

var a2 = sum2(1, 2);
console.log(a2);

var sum2 = function (x, y) {
    return x + ' + ' + y + ' = ' + (x + y);
};

var c2 = sum2(1, 2);
console.log(c2);
