var x = Math.floor(Math.random() * 6 + 1);
console.log(x);

var y = "dice" + x + ".png";
var xy = "images/" + y;
document.getElementsByTagName("img")[0].setAttribute("src", xy);

var a = Math.floor(Math.random() * 6 + 1);
console.log(a);

var b = "dice" + a + ".png";
var ab = "images/" + b;
document.getElementsByTagName("img")[1].setAttribute("src", ab);

if (x > a) document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
if (x < a) document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins";
