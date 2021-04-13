// ES5
function workout5(exercise1) {
    var todos = Array.prototype.slice.call(arguments, workout5.length);
    console.log('Start from ' + exercise1);
    console.log(todos.length + ' more to do');
}
// ES6
function workout6(exercise1, ...todos) {
    console.log('Start from ' + exercise1);
    console.log(todos.length + ' more to do');
    console.log('Args length: ' + workout6.length);
}
workout5('Treadmill', 'Pushup', 'Spinning');
workout6('Treadmill', 'Pushup', 'Spinning');