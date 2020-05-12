//ЗАДАЧА 1
//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

//Решение 1

let str = 'howmuchisthefish';
let first = str[0];
let up = first.toUpperCase();
let remove = str.slice(1);
let summ = (up + remove);

console.log(summ);

//Решение 2

let str = 'howmuchisthefish';
str = str[0].toUpperCase() + str.substr(1).toLowerCase();
console.log(str);

//ЗАДАЧА 2
//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

var numbers = '123456';
var solution = numbers.split('').reverse().join('');
console.log(solution);

//ЗАДАЧА 3
//Проверьте, что строка начинается на http://

let string = 'http://';
if (string.slice(0, 7) === 'http://') {
    alert('Верно!');
} else {
    alert('Неверно!');
}

//ЗАДАЧА 4
//Проверьте, что строка заканчивается на .html

let string = 'http://sosiska.html';
if (string.substr(-5) === '.html') {
    alert('Верно!');
} else {
    alert('Неверно!');
}