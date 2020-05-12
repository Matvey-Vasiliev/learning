//ЗАДАНИЕ 1

let str = "aaa@bbb@ccc";
let temp = str.replace(/@/g,"!");
console.log(temp);

//ЗАДАНИЕ 2

//ВАР 1
let abc = 'aaa bbb ccc';
let aaa = abc.substr(0, 4);
let ccc = abc.substr(8, 3);
console.log(aaa + ccc);

//ВАР 2
let abc = 'aaa bbb ccc';
let aaa = abc.slice(0, 4);
let ccc = abc.slice(8);
console.log(aaa + ccc);

//ВАР 3
let abc = 'aaa bbb ccc';
let aaa = abc.substring(0, 4);
let ccc = abc.substring(8);
console.log(aaa + ccc);

//ЗАДАНИЕ 3

let date = '2025-12-31';
let arr1 = date.split(['-']);
let arr2 = arr1.reverse();
let result = arr2.join('/');

console.log(result);

//ЗАДАНИЕ 4

let learn = 'я учу javascript';
console.log(learn.length);