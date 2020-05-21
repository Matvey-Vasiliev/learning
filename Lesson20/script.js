//Задача 1. Дан элемент #elem1 с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding.

let elem1 = document.querySelector('#elem1');

function HowManyPx(){
    alert('Полная ширина: ' + elem1.offsetWidth + ' px');
}

//Задача 2. По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края.

let elem = document.querySelector('#elem2');

function GoToHundred() {
    let floor = Math.floor(elem.scrollTop);
    if (elem.scrollHeight - elem.clientHeight === floor){
        elem.scrollTop = 100;
    }
}

//Задача 3. Дан элемент #elem3. По клику на него увеличьте его ширину и высоту в 2 раза.

var elem3 = document.querySelector('#elem3');
elem3.addEventListener('click', IncreaseSize);

function IncreaseSize(){
    this.style.width = this.offsetWidth * 2 + 'px';
    this.style.height = this.offsetHeight * 2 + 'px';
}