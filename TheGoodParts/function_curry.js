Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
};

Function.method('curry', function() {
    // var args = arguments, that = this;

    console.log(arguments); // arguments of curry() itself
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    console.log(args);

    // outer function does kinds of pre-process

    return function () {
        console.log(arguments); // returned object of add()
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

var add1 = add.curry(1);
console.log(add1(6));
