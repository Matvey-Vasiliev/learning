//ЗАДАНИЕ 1

let letters = ['a', 'b', 'c'];
let numbers = [1, 2, 3];
let summ = letters.concat(numbers);
console.log(summ);

//ЗАДАНИЕ 2

let letters = ['a', 'b', 'c'];
letters.push(1, 2, 3);
console.log(letters);

//ЗАДАНИЕ 3

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let summ = num1.concat(num2);
console.log(summ);

//ЗАДАНИЕ 4

let number = [1, 2, 3];
number.reverse();
console.log(number);

//ЗАДАНИЕ 5

let number = [1, 2, 3];
number.unshift(4, 5, 6);
console.log(number);

//ЗАДАНИЕ 6

let langs = ['js', 'css', 'jq'];
console.log(langs[0]);
console.log(langs[2]);

//ЗАДАНИЕ 7

let numbers = [1, 2, 3, 4, 5];
let container1 = numbers.slice(0, 3);
let container2 = numbers.slice(3);
console.log(container1);
console.log(container2);

//ЗАДАНИЕ 8

let arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);

//ЗАДАНИЕ 9

let obj = {
    js:'test',
    jq: 'hello',
    css: 'world'
};
let arr = Object.keys(obj);
console.log(arr);

//ЗАДАНИЕ 10

//ВАР1

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

//ВАР2

let arr = [1, 2, 3, 4, 5];
let cut1 = arr.splice(0, 1);
let cut2 = arr.splice(-1, 1);
console.log(arr);