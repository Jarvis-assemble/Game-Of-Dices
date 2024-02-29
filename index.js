function roll{

var randomNumber1=Math.random()
randomNumber1=(randomNumber1*6)+1
randomNumber1=Math.floor(randomNumber1)

var randomNumber2=Math.floor((Math.random()*6))+1

var imageprefix="images/dice"
var imagepostfix=".png"

document.querySelector(".img1").setAttribute("src",imageprefix+randomNumber1+imagepostfix)
document.querySelector(".img2").setAttribute("src",imageprefix+randomNumber2+imagepostfix)

if(randomNumber1>randomNumber2)
{
    document.querySelector(".container h1").textContent="🏆 Player 1 wins!"
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector(".container h1").textContent="Player 2 wins! 🏆"
}
else
{
    document.querySelector(".container h1").textContent="Draw!"
}
}
