//Задача 1. Создайте таймер с кнопкой остановки (см.видео)

function start(one, two) {
    window.timerId = window.setInterval(timer, 1000);
    let startButton1 = document.getElementById('on');
    let stopButton1 = document.getElementById('off');
    startButton1.disabled = one;
    stopButton1.disabled = two;
}

function stop(first, second) {
    window.clearInterval(window.timerId);
    let startButton2 = document.getElementById('on');
    let stopButton2 = document.getElementById('off');
    startButton2.disabled = second;
    stopButton2.disabled = first;
}

function timer(){
    let score = document.getElementById('counter');
    score.innerHTML = parseInt(score.innerHTML) + 1;
}
//^^^^^^^ ПО ЭТОЙ ЗАДАЧЕ НУЖНО РАЗОБРАТЬСЯ, ОБЯЗАТЕЛЬНО! ДА, ЭТО КАСАЕТСЯ ПЕРЕМЕННЫХ ВНУТРИ ФУНКЦИИ

//Задача 2. Создайте карусель из произвольных картинок (см.видео)

var images = ['1.png', '2.png', '3.png']
var slider = document.querySelector('#slider');
var allElements = slider.querySelectorAll('img');

var i = 0;
var j = 1;
var k = 2;

function carouselStart(){
    window.setInterval(function(){
        allElements[0].src = 'images/' + images[i];
        allElements[1].src = 'images/' + images[j];
        allElements[2].src = 'images/' + images[k];
        i++;
        j++;
        k++;
        if (i >= images.length) {
            i = 0;
        }
        if (j >= images.length) {
            j = 0;
        }
        if (k >= images.length) {
            k = 0;
        }
        console.log()
    }, 1000);
}