//Задача 1.
//Сделайте функцию, которая возвращает куб числа. Число передается параметром.

let cube = function(num) {
    return num * num * num
};
let result = (cube(4));
alert(result);

//Задача 2.
//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

let cube = function(one, two, three) {
    return (one - two) / three
};
let result = (cube(50, 20, 2));
alert(result);




//Задача 3.
//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.


let dayOfWeek = function (number) {
    switch (number) {
        case 1:
            alert('Понедельник');
            break;
        case 2:
            alert('Вторник');
            break;
        case 3:
            alert('Среда');
            break;
        case 4:
            alert('Четверг');
            break;
        case 5:
            alert('Пятница');
            break;
        case 6:
            alert('Суббота');
            break;
        case 7:
            alert('Воскресение');
            break;
    }
}
let result = (dayOfWeek(7));