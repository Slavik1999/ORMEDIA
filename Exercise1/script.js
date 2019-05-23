var Name = prompt('Введите ваше имя');
var reg = /\d/g;
if (Name.match(reg) === null) {
    function reverse(Name){
        return Name.split("").reverse().join("");
    }
    alert(reverse(Name));
}
else {
    function toUpperCase(Name) {
        return Name.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('');
    }
    alert(toUpperCase(Name));
}