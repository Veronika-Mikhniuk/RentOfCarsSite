document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}
var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons [i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}
document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Запоните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Запоните поле телефон!");
    } else if (document.getElementById("car").value === "") {
        alert("Запоните поле автомобиль!");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")
    }
}