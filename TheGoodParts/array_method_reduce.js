Array.prototype.reduce = function (f, value) {
    var i;
    for (i = 0; i < this.length; i++) {
        value = f(value, this[i]);
    }
    return value;
};

var add = function (a, b) {
    return a + b;
};
var mult = function (a, b) {
    return a * b;
};

var data = [4, 8, 15, 16, 23, 42];
var sum = data.reduce(add, 0);
console.log(sum);
var product = data.reduce(mult, 1);
console.log(product);

data.total = function () {
    return this.reduce(add, 0);
}
console.log(data.total());
