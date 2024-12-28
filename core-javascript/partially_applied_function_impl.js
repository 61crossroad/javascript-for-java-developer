var partial = function () {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('First argument is not a function.');
    }
    return function () {
        var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        var restArgs = Array.prototype.slice.call(arguments);
        console.log(this);
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
var addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));

var dog = {
    name: 'Dog',
    greet: partial(function(prefix, suffix) {
        return prefix + this.name + suffix;
    }, 'bow wow, ')
};
dog.greet(' yield!');

Object.defineProperty(global, '_', {
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false
});

var partial2 = function () {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new Error('First argument is not a function.');
    }
    return function () {
        var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        var restArgs = Array.prototype.slice.call(arguments);
        for (var i  = 0; i < partialArgs.length; i++) {
            if (partialArgs[i] === _) {
                partialArgs[i] = restArgs.shift();
            }
        }
        return func.apply(this, partialArgs.concat(restArgs));
    };
};
var addPartial2 = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial2(3, 6, 7, 10));
