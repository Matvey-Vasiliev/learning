//Задача 1
/*Дан массив с числами. Проверьте, что в этом массиве есть число 5.
Если есть - выведите 'да', а если нет - выведите 'нет'.*/

function ArrayNumberFinder(num) {
    var arr = [20, 1, 34, 88, 5];
    var flag = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            flag = true;
            break;
        }
    }
    if (flag === true) {
        alert('да');
    } else {
        alert('нет');
    }
}

ArrayNumberFinder(1)


//Задача 2
/*Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30.
Если число не делится - выведите 'false', а если делится - выведите 'true'.*/

//СДЕЛАЛ С ПОМОЩЬЮ ТРЕХ ПЕРЕМЕННЫХ И СВИТЧ КЕЙС, БЕЗ ФУНКЦИИ
/*
let number = 31;
let divisionValue = 31;
let divisionProcess = number / divisionValue;

switch (divisionProcess) {
    case number:
        alert('true');
        break;
    case 1:
        alert('true');
        break;
    default:
        alert('false');
        break;
}*/

// ПРИМЕРНО ТОТ ВАРИАНТ ПРО КОТОРЫЙ ГОВОРИЛИ ВЧЕРА

var num = 31;

function hasElem(arr) {
    if (num / 1 !== num) // ПРОВЕРКА 31 / 1 = 31
    {
        return false;
    }

    if (num / num !== 1) // ПРОВЕРКА 31 / 31 = 1
    {
        return false;
    }
    return true;
}

alert(hasElem(num));


//Задача 3
/*Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
Если есть - выведите 'да', а если нет - выведите 'нет'.*/


var arr = [1, 2, 2, 3, 5, 6, 5];

function findElement(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return 'true';
        }
    }
    return 'false';
}

console.log(findElement(arr));