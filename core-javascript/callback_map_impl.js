Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
        console.log(`myMap: ${i}, ${this[i]}`);
        var mappedValue = callback.call(thisArg || global, this[i], i, this);
        mappedArr[i] = mappedValue;
    }
    return mappedArr;
}

var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});
console.log(newArr);