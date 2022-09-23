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
        swal({
            title: "Заполните поле имя!",
            background: "black",
            confirmButtonColor: "#169f4a",
        });
    } else if (document.getElementById("phone").value === "") {
        swal({
            title: "Запоните поле телефон!",
            background: "black",
            confirmButtonColor: "#169f4a",
        });
    } else if (document.getElementById("car").value === "") {
        swal({
            title: "Запоните поле автомобиль!",
            background: "black",
            confirmButtonColor: "#169f4a",
        });
    } else {
        swal({
            title: "Спасибо за заявку, мы свяжемся с вами в ближайшее время!",
            background: "black",
            confirmButtonColor: "#169f4a",
        });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 20) + 'px,' + ((event.clientY * 0.3) / 20) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});