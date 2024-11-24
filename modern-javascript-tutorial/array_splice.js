let arr = ["I", "go", "home"];
delete arr[1];
console.log(arr[1]);
console.log(arr.length);

arr = ["I", "study", "JavaScript"];
arr.splice(1);
console.log(arr);

arr = ["I", "study", "JavaScript"];
arr.splice(1, 1);
console.log(arr);

arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance");
console.log(arr);

let removed = arr.splice(0, 2);
console.log(removed);

arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "ambiguous", "language");
console.log(arr);

arr = [1, 2, 5];
arr.splice(-1, 0, 3, 4);
console.log(arr);
