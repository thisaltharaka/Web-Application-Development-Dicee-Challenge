var randomNumberRaw = Math.random();
var randomNumber1 = Math.floor(6*randomNumberRaw)+1;
var imagePlayer1 = "images/dice"+randomNumber1+".png";
//alert(imagePlayer1);
var image1 = document.querySelector(".img1");
//alert(image1);
//image1.src = imagePlayer1;

image1.setAttribute("src" , imagePlayer1);


randomNumberRaw = Math.random();
var randomNumber2 = Math.floor(6*randomNumberRaw)+1;
var imagePlayer2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelector(".img2");

image2.setAttribute("src" , imagePlayer2);


if(randomNumber1==randomNumber2){
document.querySelector("h1").textContent = "Draw";
}
else {
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins !";
  }
  else {
    document.querySelector("h1").textContent = "🚩 Player 2 Wins !";
  }
}
