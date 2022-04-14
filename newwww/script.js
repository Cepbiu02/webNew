//alert("Привет, и я JS");
//var guessNum = 10;
//var ourNum = prompt("Введите число:");
////function guess() {
//    var guessNum = 10;
//    var ourNum = prompt("Введите число:");
//    if (guessNum== ourNum) {
//    return alert("Угадали!");
//} else if (guessNum >ourNum) {
//    alert("Число должно быть больше");
//    return guess();
//} else if (guessNum < ourNum) {
//    alert ("Число должно быть меньше");
//    return guess();
//}
//}
//guess();
//
//function reminder() {
//    alert("Ты здесь слишком долго!");
//    window.location.href = "";
//}
//setTimeout(reminder(),3000);
function validForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[0-9a-z]{5,100}/i;
    if (reg_name.test(name) ==false) {
        alert("Ошибка в поле ФИО");
    }
    if (reg_password.test(password) ==false) {
        alert("Ошибка в поле Пароль")
    }
}

document.querySelector(".send").addEventListener("click", validForm);
