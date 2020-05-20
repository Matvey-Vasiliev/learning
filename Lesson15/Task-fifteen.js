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
//Поменяйте содержимое абзацев на их порядковый номер.

function ChangeParagraphText() {
    let paragraph = document.getElementsByTagName('p');
    for (var i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = i + 1;
    }
}

//Задача 4. На getElementsByClassName
//Задача. Дан HTML код (см. под задачей). Поменяйте содержимое элементов с классом zzz на их порядковый номер.

function ChangeTextByClass() {
    let requiredClass = document.getElementsByClassName('zzz');
    for (var i = 0; i < requiredClass.length; i++) {
        requiredClass[i].innerHTML = i + 1;
    }
}

//Задача 5. На querySelectorAll
//Задача. Дан HTML код (см. под задачей). Поменяйте содержимое абзацев с классом zzz на их порядковый номер.

function ChangeOnlyTagP() {
    let findClass = document.querySelectorAll('h3.www');
    for (var i = 0; i < findClass.length; i++) {
        findClass[i].innerHTML = i + 1;
    }
}
