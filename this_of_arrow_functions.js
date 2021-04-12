var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0 },
    checkout() {
        // console.log(this);
        this.items.forEach(item => {
            if (!this.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
            }
        });
    }
};
shoppingCart.checkout();

// ES5
var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0},
    checkout() {
        // console.log(this);
        var that = this;
        this.items.forEach(function(item) {
            // console.log(this);
            // console.log(that);
            if (!that.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
            }
        });
    }
}
shoppingCart.checkout();

// doesn't have this, call, apply, bind doesn't work
var name = 'Unknown';
var greeting = () => {
    console.log('Hi, I\'m ' + this.name);
}
greeting.call({ name: 'Sunny' });
greeting.apply({ name: 'Tod' });
var newGreeting = greeting.bind({ name: 'James' });
newGreeting();

// execution context?
var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: { Apple: 1, Orange: 0 },
    checkout: () => {
        console.log(this);
        this.items.forEach(item => { // TypeError
            if (!this.inventory[item]) {
                console.log('Item ' + item + ' has sold out.');
            }
        });
    }
}
// TypeError: Cannot read property 'forEach' of undefined
// shoppingCart.checkout();

class User {
    constructor(name) {
        this.name = name;
    }
}
User.prototype.swim = () => {
    console.log(this.name + ' is swimming');
}
var user = new User();
console.log(user.swim());

const WorkoutPlan = () => {};
// TypeError: WorkoutPlan is not a constructor
// let workoutPlan = new WorkoutPlan();
console.log(WorkoutPlan.prototype);