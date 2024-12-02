var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0];
numbers.forEach(function (number) {
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
});
console.log(min, max);

max = Math.max.apply(null, numbers);
min = Math.min.apply(null, numbers);
console.log(min, max);

max = Math.max(...numbers);
min = Math.min(...numbers);
console.log(min, max);