//Задача 1. Алерт по нажатию на кнопку

function PressForHello() {
    alert('Привет!');
}

//Задача 2. Изменение текста в инпуте

function TextChanger() {
    var elem = document.getElementById('test');
    elem.value = '!!!';
}

//Задача 3. Вывод содержимого инпута

function TextInAlert() {
    alert(document.getElementById('test').value);
}

//Задача 4. Обмен содержимым между инпутами

function ChangeInputPlace() {
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var leftValue = left.value;
    var rightValue = right.value;
    left.value = rightValue;
    right.value = leftValue;
}

//Задача 5. По нажатию на кнопку меняется ее текст

function ButtonTextChanger() {
    var elem = document.getElementById('test');
    elem.value = 'Новый текст кнопки';
}

//Задача 6. Работа с CSS

function TextColorChanger() {
    var elem = document.getElementById('test');
    elem.style.color = 'red';
}

//Задача 7. Блокирование полей ввода

function TextBlocker(value) {
    var elem = document.getElementById('test');
    elem.disabled = value;
}
