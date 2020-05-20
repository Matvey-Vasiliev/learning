//Задача 1. Дан элемент #elem1. Проверьте наличие у него класса www.

let elem1 = document.querySelector('#elem1');
elem1.onclick = ThisClassOrNot;


function ThisClassOrNot() {
    alert(elem1.matches('p.www'));
}

//Задача 2. Дан элемент #elem2. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.

let elem2 = document.querySelector('#elem2');

elem2.style.cssText = 'color: red; font-size: 30px; border: solid; width: 230px; text-align: center;';

//Задача 3. Дан элемент #elem3. По клику на него выведите название его тега в нижнем регистре.

let elem3 = document.querySelector('#elem3');
elem3.onclick = AlertTag;

function AlertTag() {
    alert(this.tagName.toLowerCase());
}

/*Задача 4. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.*/

let array = [1,22,333,4444,55555,666666];

let findId = document.getElementById('container');

for (var i=0; i<array.length; i++) {
    let addElem = document.createElement('li');
    addElem.innerHTML = array[i];
    addElem.addEventListener ('click', ShowText);
    findId.appendChild(addElem);
}

function ShowText() {
    alert(this.innerHTML);
}

//Задача 5. Дан элемент #elem4. Вставьте после него span с текстом '!!!'.

let findElement = document.querySelector('#elem4');
findElement.insertAdjacentHTML('afterEnd', '<span>Это &ltspan&gt</span>');

//Задача 6. Дан элемент #elem5. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

let parent = document.querySelector('#elem5');
let lastElem = parent.lastElementChild;
lastElem.style.cssText = 'color: red;';

//Задача 7. Дан элемент #elem6. Найдите его соседа снизу и добавьте ему в конец текст '!'.

let firstElem = document.querySelector('#elem6');
firstElem.nextElementSibling.innerHTML += '!';

//Задача 8. Дан элемент #elem7. Найдите его родителя и покрасьте его в красный цвет.

let childElem = document.querySelector('#elem7');
let getPar = childElem.parentElement;
getPar.style = 'background-color: red; width: 30px; height: 90px;';


//Задача 9. Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.

let testNineParent = document.querySelector('#parent');
let testNineChildren = document.querySelector('#child');

function DeleteChild() {
    testNineParent.removeChild(testNineChildren);
}