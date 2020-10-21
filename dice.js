var randomnumber=Math.ceil(6*Math.random());
var randomimage="images/dice"+randomnumber+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);

var randomnumber2=Math.ceil(6*Math.random());
var randomimage2="images/dice"+randomnumber2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);



var title=document.querySelector("h1");
if(randomnumber>randomnumber2){
    title.textContent="player1 won";
}
else if(randomnumber<randomnumber2){
    title.textContent="player2 won";
}
else{
    title.textContent="draw";
}