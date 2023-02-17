var rNumber1=Math.floor(Math.random()*6)+1;

var rDiceImage="dice" + rNumber1 + ".png";
var rImageSource="images/" + rDiceImage;
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",rImageSource);
var rNumber2=Math.floor(Math.random()*6)+1;
var rImageSource2="images/dice" + rNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",rImageSource2);

if(rNumber1>rNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(rNumber1<rNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML="Try again!"
}
