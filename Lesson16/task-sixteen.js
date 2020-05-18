//Задача 1. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

let date = new Date();
alert(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate()))

//Задача 2. Выведите на экран текущий месяц словом, по-русски

let date = new Date();
let month = date.getMonth();
let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
alert(months[month]);

//Задача 3. Выведите на экран текущий день недели (словом, по-русски).
//Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски

let date = new Date();
function ShowDay(which){
    let days = ['воскресение', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[which];
}
alert(ShowDay(date.getDay()));

//Задача 4.Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.

let dateInPast = Date.parse('1988-03-01T00:00:00');
let thisMoment = new Date();
let nowMsec = thisMoment.getTime();
let substraction = nowMsec - dateInPast;
let hours = (substraction / 3600000);
alert(hours);

//Задача5.Выведите на экран количество секунд с начала дня до настоящего момента времени.

let todayStart = Date.parse('2020-05-17T00:00:00');
let thisMoment = new Date();
let nowMsec = thisMoment.getTime();
let substraction = nowMsec - todayStart;
let seconds = (substraction / 1000);
alert(seconds);