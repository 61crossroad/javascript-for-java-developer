var user = {
    name: 'Jaemin',
    gender: 'male'
};

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('User info has been changed');
}

console.log(user.name, user2.name);
console.log(user === user2);
