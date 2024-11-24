let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);

let numbers = [1, 4, 9];
let mapped = numbers.map((v, i, lengths) => {
    console.log(v + ", " + i + ", " + lengths);
    return v * i * lengths[i];
});

console.log(mapped);