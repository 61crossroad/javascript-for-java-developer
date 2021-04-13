function workout({gym}, times) {
    console.log('Workout in ' + gym + ' for ' + times + ' times');
}
let thisWeek = {gym: 'Gym A'};
workout(thisWeek, 2);

function workout2({gym, todos}) {
    let [first] = todos;
    console.log('Start ' + first + ' in ' +gym);
}
let today = {gym: 'Gym A', todos: ['Treadmill']};
workout2(today);
// workout2({gym: 'Gym B'}); // TypeError: todos is not iterable

function workout3({gym, todos = ['Treadmill']}) {
    let [first] = todos;
    console.log('Start ' + first + ' in ' +gym);
}
workout3({gym: 'Gym A'});
// workout3(); // TypeError: Cannot destructure property 'gym' of 'undefined' as it is undefined.