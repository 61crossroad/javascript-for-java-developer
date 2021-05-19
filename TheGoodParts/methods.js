var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
console.log(c);

a.push('d');
c = a.join('');
console.log(c);
c = a.pop();
console.log(a);
console.log(c);

Array.prototype.myPop = function () {
    return this.splice(this.length - 1, 1)[0];
};

c = a.push(b, true);
console.log(a);
console.log(c);
var d = a.myPop();
console.log(d);
console.log(a);

Array.prototype.myPush = function () {
    this.splice.apply(
        this,
        [this.length, 0].concat(Array.prototype.slice.apply(arguments))
    );
};

a.myPush(true);
console.log(a);

console.log(b);
c = b.reverse();
console.log(b);
console.log(c);

Array.prototype.myShift = function () {
    return this.splice(0, 1)[0];
};

Array.prototype.mySplice = function (start, deleteCount) {
    var max = Math.max,
        min = Math.min,
        delta,
        element,
        insertCount = max(arguments.length - 2, 0);
        k = 0,
        len = this.length,
        new_len,
        result = [],
        shift_count;
    
    start = start || 0;
    if (start < 0) {
        start += len;
    }
    start = max(min(start, len), 0);
    deleteCount = max(min(typeof deleteCount === 'number' ? deleteCount : len, len - start), 0);
    delta = insertCount - deleteCount;
    new_len = len + delta;
    while (k < deleteCount) {
        element = this[start + k];
        if (element !== undefined) {
            result[k] = element;
        }
        k++;
    }
    shift_count = len - start - deleteCount;
    if (delta < 0) {
        k = start + insertCount;
        while (shift_count) {
            this[k] = this[k - delta];
            k++;
            shift_count--;
        }
        this.length = new_len;
    } else if (delta > 0) {
        k = 1;
        while (shift_count) {
            this[new_len - k] = this[len - k];
            k++;
            shift_count--;
        }
    }
    for (k = 0; k < insertCount; k++) {
        this[start + k] = arguments[k + 2];
    }
    return result;
};

Function.prototype.myBind = function(thiat) {
    var method =  this,
        slice = Array.prototype.slice,
        args = slice.apply(arguments, [1]);
    return function () {
        return method.apply(that, args.concat(slice.apply(arguments, [0])));
    };
};

var x = function () {
    return this.value;
}.bind({value: 777});
console.log(x());
