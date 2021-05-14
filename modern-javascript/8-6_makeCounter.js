function makeCounter() {
    var count = 0;
    return f;
    function f() {
        return count++;
    }
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter);
console.log(counter.count);
console.log(makeCounter().count);

function getCount() {
    var count = 1;
    return count + 2;
}

var getCounter = getCount();
// console.log(getCounter());
console.log(getCounter);
console.log(getCounter.count);