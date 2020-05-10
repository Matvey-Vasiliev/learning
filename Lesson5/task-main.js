//ЗАДАНИЕ 1

let piss = Math.sqrt(379);
Math.floor(piss);
piss.toFixed(1);
piss.toFixed(2);
console.log(Math.floor(piss));

//ЗАДАНИЕ 2

let rock = Math.sqrt(587);
Math.ceil(rock);
Math.floor(rock);
console.log(Math.floor(rock));

//ЗАДАНИЕ 3

let what = [4, -2, 5, 19, -130, 0, 10];
Math.min.apply(null, what);
Math.max.apply(null, what);
console.log(Math.min.apply(null, what));

//ЗАДАНИЕ 4

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 100));

//ЗАДАНИЕ 5

var arr = [];
while (arr.length < 10) {
    var n = Math.floor(Math.random() * 100);
    if (arr.indexOf(n) === -1);
    arr.push(n);
}

console.log(arr);
