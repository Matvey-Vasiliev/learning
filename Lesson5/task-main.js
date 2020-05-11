//ЗАДАНИЕ 1

let squareRoot = Math.sqrt(379);
Math.floor(squareRoot);
squareRoot.toFixed(1);
squareRoot.toFixed(2);
console.log(Math.floor(squareRoot), squareRoot.toFixed(1), squareRoot.toFixed(2));

//ЗАДАНИЕ 2

let squareRoot2 = Math.sqrt(587);
Math.ceil(squareRoot2);
Math.floor(squareRoot2);
console.log(Math.floor(squareRoot2), Math.ceil(squareRoot2));

//ЗАДАНИЕ 3

let numberRange = [4, -2, 5, 19, -130, 0, 10];
Math.min.apply(null, numberRange);
Math.max.apply(null, numberRange);
console.log(Math.min.apply(null, numberRange), Math.max.apply(null, numberRange));

//ЗАДАНИЕ 4

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 100));

//ЗАДАНИЕ 5

var arr = [];
while (arr.length < 10) {
    var n = Math.floor(Math.random() * 100);
    if (arr.push(n));
}

console.log(arr);
