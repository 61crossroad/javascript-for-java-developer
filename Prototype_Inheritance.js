function User(name, interests) {
    this.name = name;
    this.interests = interests;
}
User.prototype.greeting = function() {
    console.log('Hi, I\'m ' + this.name + '.');
}
console.log(User.constructor === Function); // true
console.log(User.prototype.constructor === User); // true

var user = new User();
console.log(user.__proto__ === User.prototype); // true

function TeamMember(name, interests, tasks) {
    User.call(this, name, interests);
    this.tasks = tasks;
}
TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function() {
    console.log('I\'m ' + this.name + '. Welcome to the team!');
};
TeamMember.prototype.work = function() {
    console.log('I\'m working on ' + this.tasks.length + ' tasks');
};
console.log(User.prototype === TeamMember.prototype); // false
console.log(User.prototype.constructor === TeamMember.prototype.constructor); // true

var member = new TeamMember('Sunny', ['Traveling'], ['Buy three tickets', 'Book a hotel']);
member.greeting();
member.work();

console.log(member instanceof TeamMember); // true
console.log(member instanceof User); // true
console.log(member instanceof Object); // true

User.prototype.eat = function() {
    console.log('What will I have for lunch?');
};
member.eat();

Object.prototype.move = function() {
    console.log('Every object can move now');
};
member.move();
var alien = {};
alien.move();
User.move();

console.log(TeamMember.prototype.isPrototypeOf(member));
console.log(member.hasOwnProperty('name')); // true
console.log(member.hasOwnProperty('move')); // false