//Задание 1. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.

let images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', FindAttribute);
}

function FindAttribute() {
    alert(this.getAttribute('src'));
}

//Задание 2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.

let links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', MakeTitle);
}

function MakeTitle() {
    this.title = this.innerHTML;
}

//Задание 3. Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество,
//то граница инпута становится зеленой, если неправильное - красной.</h4>

let findInput = document.getElementsByTagName('input');
for (var i = 0; i < findInput.length; i++) {
    findInput[i].addEventListener('blur', MaxValueInput);
}

function MaxValueInput() {
    if(this.value.length <= this.getAttribute('data-length')){
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}