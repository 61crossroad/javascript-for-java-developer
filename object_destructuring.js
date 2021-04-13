let user = {name: 'Sunny', interests: ['Traveling', 'Swimming']};
let {name, interests, tasks} = user;
console.log(name);
console.log(interests);
console.log(tasks); // undefined

let {name: firstName} = user;
console.log(firstName);