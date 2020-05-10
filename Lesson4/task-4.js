var text = ' - это ';
var obj = {
    Минск: 'Беларусь',
    Москва: 'Россия',
    Киев: 'Украина'};
for (key in obj) {
    alert(key + text + obj[key]);
}