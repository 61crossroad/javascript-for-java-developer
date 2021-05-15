var fibonacci_plain = function () {
    var count = 1;
    var fibo = function (n) {
        // console.log('fibo_plain: ' + count++);

        return n < 2 ? n : fibo(n - 1) + fibo(n - 2);
    };

    return fibo;
}();
console.log(fibonacci_plain(10));

var fibonacci = function () {
    var count = 1;
    var memo = [0, 1];
    var fib = function (n) {
        // console.log('fibo_memo: ' + count++);

        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };

    return fib;
}();
console.log(fibonacci(10));


var memoizer = function (memo, fundamental) {
    var count = 1;
    var shell = function (n) {
        // console.log('shell: ' + count++);

        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };

    return shell;
}

var fibonacci_memoizer = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) + shell(n - 2);
})
console.log(fibonacci_memoizer(10));

// memoization doesn't work with factorial calculation
var factorial_memoizer = memoizer([1, 1], function (shell, n) {
    return n * shell(n - 1);
})
console.log(factorial_memoizer(10));
