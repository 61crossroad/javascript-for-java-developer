var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
console.log(c);

a.push('d');
c = a.join('');
console.log(c);
c = a.pop();
console.log(a);
console.log(c);

Array.prototype.myPop = function () {
    return this.splice(this.length - 1, 1)[0];
};

c = a.push(b, true);
console.log(a);
console.log(c);
var d = a.myPop();
console.log(d);
console.log(a);

Array.prototype.myPush = function () {
    this.splice.apply(
        this,
        [this.length, 0].concat(Array.prototype.slice.apply(arguments))
    );
};

a.myPush(true);
console.log(a);

console.log(b);
c = b.reverse();
console.log(b);
console.log(c);

Array.prototype.myShift = function () {
    return this.splice(0, 1)[0];
};
