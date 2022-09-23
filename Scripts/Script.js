document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}
var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons [i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}