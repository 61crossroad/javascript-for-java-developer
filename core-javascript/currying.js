var curry3 = function (func) {
    return function (a) {
        return function (b) {
            return func(a, b);
        };
    };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8));
console.log(getMaxWith10(25));

var getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8));
console.log(getMinWith10(25));

var curry5 = func => a => b => c => d => e => func(a, b, c, d, e);
var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));

var test = curry3(Math.max);
console.log(test(11)(22));