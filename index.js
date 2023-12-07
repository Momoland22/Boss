var n1=Math.random();
n1*=6;
n1=Math.floor(n1)+1;
var dice1="dice"+n1+".png";
var image1="./images/"+dice1;
var a=document.querySelectorAll("img")[0].setAttribute("src",image1);

var n2=Math.random();
n2*=6;
n2=Math.floor(n2)+1;
var dice2="dice"+n2+".png";
var image2="./images/"+dice2;
var b=document.querySelectorAll("img")[1].setAttribute("src",image2);

if(n1>n2)
{
    document.querySelector("h1").innerHTML="Player 1 Won!😎";
}
else if(n2>n1)
{
    document.querySelector("h1").innerHTML="Player 2 Won!😎";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw.🫡";
}
