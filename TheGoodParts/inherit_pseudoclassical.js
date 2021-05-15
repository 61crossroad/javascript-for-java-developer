/* Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
Function.method('new', function () {
    var that = Object.create(this.prototype);
    var other = this.apply(that, arguments);
    return (typeof other === 'object' && other) || that;
}); */

// pseudo code of 'new'... maybe
Function.prototype.new = function() {
    var that = Object.create(this.prototype);
    var other = this.apply(that, arguments);
    return (typeof other === 'object' && other) || that;
}

var Mammal = function (name) {
    this.name = name;
};
Mammal.prototype.get_name = function () {
    return this.name;
}
Mammal.prototype.says = function () {
    return this.saying || '';
}

// var myMammal = new Mammal('herb the Mammal');
var myMammal = Mammal.new('Herb the Mammal');
console.log(myMammal);
console.log(myMammal.get_name());


var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
}
Cat.prototype = new Mammal();
Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i++) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
Cat.prototype.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
}
console.log(Cat);
console.log(Cat.prototype);
console.log(Object.getPrototypeOf(Cat.prototype));

var myCat = new Cat('Henrietta');
var says = myCat.says();
console.log(says);
var purr = myCat.purr(5);
console.log(purr);
var name = myCat.get_name();
console.log(name);


Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});

var ChainedCat = function (name) {
    this.name = name;
    this.saying = 'meow';
}
.inherits(Mammal)
.method('purr', function (n) {
    var i, s = '';
    for (i = 0; i < n; i++) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
})
.method('get_name', function () {
    return this.says() + ' ' + this.name + ' ' + this.says();
});
var chainedCat = new ChainedCat('Dead Cat');
console.log(chainedCat.purr(3));
console.log(chainedCat.get_name());
