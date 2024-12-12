new Promise(function(resolve) {
    setTimeout(function () {
        var name = 'Espresso';
        console.log(name);
        resolve(name);
    }, 500);
}).then(function(prevName) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            var name = prevName + ', Americano';
            console.log(name);
            resolve(name);
        }, 500);
    });
}).then(function(prevName) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            var name = prevName + ', Caffe Mocha';
            console.log(name);
            resolve(name);
        }, 500);
    });
}).then(function(prevName) {
    return new Promise(function(resolve) {
        setTimeout(function () {
            var name = prevName + ', Caffe Latte';
            console.log(name);
            resolve(name);
        }, 500);
    });
});