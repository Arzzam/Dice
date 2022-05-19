
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var im1 = "images/dice" + randomNumber1 + ".png";
var im2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", im1);
document.querySelector(".dice .img2").setAttribute("src", im2);


if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Won";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Won";
} else {
    document.querySelector("h1").innerText = "Draw";
}

