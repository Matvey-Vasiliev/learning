/*ЗАДАЧА 1.
Сделайте функцию, которая параметрами принимает 2 числа.
Если эти числа равны - пусть функция вернет true, а если не равны - false.*/

function CheckNumberEquality(one, two) {
    return one === two
}

alert(CheckNumberEquality(1, 1))

/*ЗАДАЧА 2.
Сделайте функцию, которая параметрами принимает 2 числа.
Если их сумма больше 10 - пусть функция вернет true, а если нет - false.*/

function SummOverTen(one, two) {
    return one + two > 10
}

alert(SummOverTen(9, 1))

/*ЗАДАЧА 3.
Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
Если отрицательное - пусть функция вернет true, а если нет - false.*/

function CheckNegativeValue(num) {
    return num < 0
}

alert(CheckNegativeValue(1))