var n = Math.random();
var randomNumber1 = n * 6;
n = Math.random();
var randomNumber2 = n * 6;

var rounded1 = Math.round(randomNumber1);
var rounded2 = Math.round(randomNumber2);

if(rounded1 === 0)
{
  rounded1 = 1;
}

if(rounded2 === 0)
{
  rounded2 = 1;
}


document.querySelector(".img1").setAttribute("src","images/dice"+ rounded1 +".png");

document.querySelector(".img2").setAttribute("src","images/dice"+ rounded2 +".png");

if(rounded1 > rounded2){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (rounded1 < rounded2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
