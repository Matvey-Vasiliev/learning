//Задача 1. Изменение текста в span

function SpanChanger() {
    let textForChange = document.getElementById('test1');
    textForChange.innerHTML = '!!!';
}

//Задача 2. Замена span на тег b без изменения текста

function ChangeTagNotText() {
    let tagForChange = document.getElementById('test2');
    tagForChange.outerHTML = '<b>' + tagForChange.innerHTML + '</b>'
}

//Задача 3. На getElementsByTagName. Дан HTML код (см. под задачей).
//Поменяйте содержимое абзацев на их порядковый номер в коде.

function ChangeParagraphText() {
    let paragraph = document.getElementsByTagName('p');
    paragraph[0].innerHTML = '38';
    paragraph[1].innerHTML = '39';
    paragraph[2].innerHTML = '40';
}

//Задача 4. На getElementsByClassName
//Задача. Дан HTML код (см. под задачей). Поменяйте содержимое элементов с классом zzz на их порядковый номер в коде.

function ChangeTextByClass() {
    let requiredClass = document.getElementsByClassName('zzz');
    requiredClass[0].innerHTML = '59';
    requiredClass[1].innerHTML = '60';
    requiredClass[2].innerHTML = '61';
}

//Задача 5. На querySelectorAll
//Задача. Дан HTML код (см. под задачей). Поменяйте содержимое абзацев с классом zzz на их порядковый номер в коде.

function ChangeOnlyTagP() {
    let findClass = document.querySelectorAll('p.www');
    for (var i = 0; i < findClass.length; i++) {
        findClass[i].innerHTML = i + 82;
    }
}