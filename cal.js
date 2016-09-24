// alert("text");
// document.getElementById("options").formId;
// var Rasberry Pi Zero = 5;
// var Particle Photon = 8;
// var Arduino Uno = 2;
// var total = Rasberry Pi Zero + Particle Photon
// document.getElementById("amount").innerHTML =
// "The total is: " + total
// alert("Harsss");
 // var App= {
 // 	calcuate: function{
 // 	App.price();
 // },
function price(){
var board = document.getElementById("options").value;
// var pp = document.getElementById("Ph");
// var au = document.getElementById("uno");
var qan = parseFloat(document.getElementById("quantity").value);
// var tot = document.getElementById("amount").innerHTML;


// var quantity = qan.value;
// quantity = parseInt(qan);
var costBoard;
switch(board){
case "pi": 
costBoard = 8;
break;
case "Ph": costBoard = 10;
break;


case "uno": costBoard = 5;
break;
}
var total = qan*costBoard;
//alert(total);
document.getElementById("amount").value=total;
}
window.onload = function(){
	document.getElementById("bot").onclick=price;
}