Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i++) {
        a[i] = initial;
    }
    return a;
};
var myArray = Array.dim(10, 0);
var i;
for (i = 0; i < myArray.length; i++) process.stdout.write(myArray[i] + ' ');
process.stdout.write('\n');

var my_array = [];
for (i = 0; i < 3; i++) {
    my_array[i] = [];
}

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i++) {
        a = [];
        for (j = 0; j < n; j++) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
}
var myMatrix = Array.matrix(4, 4, 1);
console.log(myMatrix);
process.stdout.write(myMatrix[2][2] + '\n');

Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i++) {
        mat[i][i] = 1;
    }
    return mat;
}
myMatrix = Array.identity(4);
console.log(myMatrix);
