document.getElementsByClassName("ButtonLink")[0].onclick = function () { window.open("https://vk.com/white_power69", "_blank") }
document.getElementsByClassName("ButtonStyle")[0].onclick = function () {
    var el = document.querySelector("Link");
    if (el.className == "Slava") {
        el.href = "./SecondStyle.css";
        el.className = "NotSlava";
    }
    else {
        el.href = "./FirstStyle.css";
        el.className = "Slava";
    }
}
document.getElementsByClassName("ButtonMaket")[0].onclick = function (){
    var Cont=document.querySelector(".container")
    Cont.remove();
    var Body=document.body;
    var Div=document.createElement("div");
    Body.appendChild(Div);
    Div.className="New";
    var el = document.querySelector("Link");
    el.href = "./ThirdStyle.css";
}

