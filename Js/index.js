var Triangle = document.getElementById("Triangle");
var Nav = document.getElementById("Navigation");
Triangle.onclick = function () {
    var pos = -180;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        }
        else {
            pos++;
            Nav.style.marginLeft = pos + "px";
        }
    }
}
var Close = document.getElementById("Close")
Close.onclick = function () {
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == -180) {
            clearInterval(id);
        }
        else {
            pos--;
            Nav.style.marginLeft = pos + "px";
        }
    }
}
document.getElementsByClassName("Button1")[0].onclick = function () {
    Nav.style.top = "50%";
}
document.getElementsByClassName("Button2")[0].onclick = function () {
    Nav.style.top = "50%";
}
document.getElementsByClassName("Button3")[0].onclick = function () {
    Nav.style.top = "50%";
}
document.getElementsByClassName("Button4")[0].onclick = function () {
    Nav.style.top = "50%";
}
document.getElementsByClassName("Button5")[0].onclick = function () {
    Nav.style.top = "50%";
}
document.getElementsByClassName("button-submit")[0].onclick = function () {
    var userName = document.getElementById("FooterName").value;
    var email = document.getElementById("FooterEmail").value;
    var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    event.preventDefault();
    if (!userName) {
        var labelName = document.getElementsByClassName("ForName")[0];
        labelName.innerHTML = "Введите имя";
        labelName.style.color="red";
        labelName.style.fontSize="20px"
        return false;
    }
    if (userName.length <3) {
        document.getElementsByClassName("button-submit")[0].className = "button";
        var labelName = document.getElementsByClassName("ForName")[0];
        labelName.innerHTML = "Имя слишком короткое";
        labelName.style.color="red";
        labelName.style.fontSize="20px"
        return false;
    }
    if (!email) {
        var labelEmail = document.getElementsByClassName("ForEmail")[0];
        labelEmail.innerHTML = "Введите email";
        labelEmail.style.color="red";
        labelEmail.style.fontSize="20px"
        return false;
    }
    if (!regx.test(email) ) {
        document.getElementsByClassName("button-submit")[0].className = "button";
        var labelEmail = document.getElementsByClassName("ForEmail")[0];
        labelEmail.innerHTML = "Email введён неправильно";
        labelEmail.style.color="red";
        labelEmail.style.fontSize="20px"
        return false;
    }

    return true;
}
