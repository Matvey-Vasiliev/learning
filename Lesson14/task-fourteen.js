//Задача 1. Алерт по нажатию на кнопку

function PressForHello() {
    alert('Привет!');
}

//Задача 2. Изменение текста в инпуте

function TextChanger() {
    let textVary = document.getElementById('test2');
    textVary.value = '!!!';
}

//Задача 3. Вывод содержимого инпута

function TextInAlert() {
    alert(document.getElementById('test3').value);
}

//Задача 4. Обмен содержимым между инпутами

function ChangeInputPlace() {
    let leftInput = document.getElementById('left');
    let rightInput = document.getElementById('right');
    let leftValue = leftInput.value;
    let rightValue = rightInput.value;
    left.value = rightValue;
    right.value = leftValue;
}

//Задача 5. По нажатию на кнопку меняется ее текст

function ButtonTextChanger() {
    let newText = document.getElementById('test5');
    newText.value = 'Новый текст кнопки';
}

//Задача 6. Работа с CSS

function TextColorChanger() {
    let newColor = document.getElementById('test6');
    newColor.style.color = 'red';
}

//Задача 7. Блокирование полей ввода

function TextBlocker(value) {
    let blockInput = document.getElementById('test7');
    blockInput.disabled = value;
}
