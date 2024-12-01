var user = {
    name: "Jaenam",
    urls: {
        portfolio: 'http://github.com/61crossroad',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/61crossroad'
    }
};

var copyObject  = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }

    return result;
};

var user2 = copyObject(user);

user2.name = 'Jung';
console.log(user.name === user2.name);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);


var copyObjectDeep = function(target) {
    var result = {};

    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }

    return result;
};

var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);

var copyObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
};

var obj3 = {
    a: 1,
    b: {
        c: null,
        d: [1, 2],
        func1: function () { console.log(3); }
    },
    func2: function () { console.log(4); }
};

var obj4 = copyObjectViaJSON(obj3);
obj4.a = 3;
obj4.b.c = 4;
obj3.b.d[1] = 3;

console.log(obj3);
console.log(obj4);
