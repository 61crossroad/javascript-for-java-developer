// new Object(); - Not recommended
var user = new Object();
user.name = 'Sunny';
user.interests = ['Traveling', 'Swimming'];
user.greeting = function() {
    console.log('Hi, I\'m ' + this.name + '.');
}
user.greeting();

// Object literal - Recommended
var user2 = {
    name: 'Sunny',
    interests: ['Traveling', 'Swimming'],
    greeting: function() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
}
user2.greeting();

// ES5: getter and setter in object literal
var user3 = {
    _role: 'Engineer',
    get role() {
        return this._role;
    },
    set role(role) {
        this._role = role;
    }
}
console.log(user3.role);
user3.role = 'Developer';
console.log(user3.role);

// Create constructor function
function User4(name, interests) {
    this.name = name;
    this.interests = interests;
    this.greeting = function() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
}
var user4 = new User4('Sunny', ['Traveling', 'Swimming']);
user4.greeting();

var user5 = new User4;
console.log(user5.name); // undefined

// Object.create() with prototy of User4
var user6 = Object.create(User4.prototype, {
    name: { value: 'Sunny' },
    interests: { value: ['Traveling', 'Swimming'] }
});
console.log(user6.name);
console.log(user6.interests);
// user6.greeting(); // is not a function
// add greeting() to the prototype object
User4.prototype.greeting = function() {
    console.log('Hi, I\'m ' + this.name + '.');
}
user6.greeting();

// Generating function
function createUser(name, interests) {
    var user = {};
    user.name = name;
    user.interests = interests;
    user.greeting = function() {
        console.log('Hi, I\'m ' + this.name + '.');
    };
    return user;
}
var user7 = createUser('Sunny', ['Traveling', 'Swimming']);
user.greeting();

// ES6: User class
class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    greeting() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
}
let user8 = new User('Sunny', ['Traveling', 'Swimming']);
user8.greeting();

// Class expression
let User = class {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    greeting() {
        console.log('Hi, I\'m ' + this.name + ',');
    }
}
