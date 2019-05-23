document.getElementsByClassName("ButtonLink")[0].onclick = function () { window.open("https://vk.com/white_power69", "_blank") }
function First() {
    var el = document.querySelector("#Slava");
    el.href = "./SecondStyle.css";
}
function Second() {
    var el = document.querySelector("#Slava");
    el.href = "./FirstStyle.css";
}
document.getElementsByClassName("ButtonStyle")[0].onclick = function(){
        var el = document.querySelector("#Slava");
        if(el.href = "./FirstStyle.css"){
            el.href = "./SecondStyle.css"
        }
        else{
            el.href = "./FirstStyle.css";
        }
}

