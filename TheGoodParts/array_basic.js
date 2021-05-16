var empty = [];
var numbers = [
    'zero', 'one', 'two', 'tree', undefined, 'shi', 'go'
];
console.log(empty[1]);
console.log(numbers[1]);
console.log(empty.length);
console.log(numbers.length);

var numbers_object = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three'
};
console.log(numbers_object[2]);

var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN, Infinity
];
console.log(misc.length);

var myArray = [];
console.log(myArray.length);
myArray[1000000] = true;
console.log(myArray.length);

numbers.splice(2, 1);

var is_array = function (value) {
    return value &&
        typeof value === 'object' && // typeof null === 'object' ? true
        // value.constructor === Array;
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'));
};
console.log(is_array(numbers));
console.log(is_array(numbers_object));
