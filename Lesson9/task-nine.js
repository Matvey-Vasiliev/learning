//Задача 1.
//Сделайте функцию, которая возвращает куб числа. Число передается параметром.

function cube(num) {
    return num * num * num
};
alert(cube(2));

//Задача 2.
//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function operation(one, two, three) {
    return (one - two) / three
};
alert(operation(60, 20, 2));

//Задача 3.
//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function DayOfWeek(day) {
    switch (day) {
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
        default:
            alert('Задайте число от 1 до 7');
            break;

    }
}
let setDay = (DayOfWeek(1));