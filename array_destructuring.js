let [first, second] = ['Traveling', 'Swimming', 'Shopping'];
console.log(first);
console.log(second);

let [,,third, fourth = 'default'] = ['Traveling', 'Swimming', 'Shopping'];
console.log(third);
console.log(fourth);
