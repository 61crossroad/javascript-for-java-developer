function User(name) {
    console.log('I\'m in "' + this.constructor.name + '" context.');
    this.name = name;
    this.speak = function() {
        console.log(this.name + ' is speaking from "' + 
            this.constructor.name + '" context.');
        var drink = function() {
            console.log('Drinking in "' + this.constructor.name + '"');
        }
        drink();
    };
    function ask() { // ask is not a property of the object!
        console.log('Asking from "' + 
            this.constructor.name + '" context.');
        console.log(this);
        console.log('Who am I? "' + this.name + '"');
    }
    ask();
    console.log(this);
    ask.call(this);
    ask.bind(this)();
}
var name = 'Unknown';
var user = new User('Ted');
user.speak();
user.speak.apply({name: 'Jack'});

console.log(Function.prototype.isPrototypeOf(user.speak)); // true
console.log(user.speak.hasOwnProperty('apply')); // false
console.log(user.speak.__proto__.hasOwnProperty('apply')); // true