var user = {
    name: 'Jaemin',
    gender: 'male'
};

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    }
};

var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }

    return result;
};

var user2 = changeName(user, 'Jung');
user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
    console.log('User info has been changed');
}

console.log(user.name, user2.name);
console.log(user === user2);
