function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name;
};
function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}
// console.log(Bar.prototype);
// console.log(Bar.prototype.constructor);
// console.log(Foo.prototype);
// console.log(Foo.prototype.constructor);

// ES5
Bar.prototype = Object.create(Foo.prototype);

// ES6
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);

// console.log(Bar.prototype);
// console.log(Bar.prototype.constructor);
// console.log(Bar.prototype === Foo);
// console.log(Bar.prototype === Foo.prototype);

Bar.prototype.myLabel = function() {
    return this.label;
}

var a = new Bar("a", "obj a");
console.log(a.myName());
console.log(a.myLabel());
