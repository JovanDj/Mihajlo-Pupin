var xPos = -120;
var intervalHandleFromLeft;
var intervalHandleFromRight;
var playSound = false;
var ctx;

var img = new Image();


function LoadBackground() {
  var canvasElement = document.getElementById("canvas");
  ctx = canvasElement.getContext("2d");
  var pupinHall = new Image();
  pupinHall.src = "slike/pupin_hall.jpg";
  pupinHall.onload = function () {
    ctx.drawImage(pupinHall,
      (canvasElement.width - pupinHall.width) / 2,
      (canvasElement.height - pupinHall.height) / 2)
  }

}

function clickCanvas(event) {
  var canvasElement = document.getElementById("canvas");
  var sound = document.getElementById('sound');

  if (playSound === false) {
    sound.play();
    playSound = true;
    clearInterval(intervalHandleFromLeft);
    clearInterval(intervalHandleFromRight);

    img.src = 'slike/phone.jpg';

  } else {
    sound.pause();
    sound.currentTime = 0;
    playSound = false;
    img.src = "slike/pupinovi_kalemovi.jpg";


    intervalHandleFromLeft = setInterval(PupinFromLeft, 30);
  }

}


function PupinFromLeft() {
  LoadBackground();
  img.src = "slike/pupinovi_kalemovi.jpg";
  img.onload = function () {
    ctx.drawImage(img, xPos, 50, 120, 60);
  }
  xPos += 5;

  if (xPos >= 350) {
    clearInterval(intervalHandleFromLeft);
    intervalHandleFromRight = setInterval(PupinFromRight, 30);

  }
}


function PupinFromRight() {
  LoadBackground();
  img.src = "slike/pupinovi_kalemovi.jpg";
  img.onload = function () {
    ctx.drawImage(img, xPos, 50, 120, 60);
  }
  xPos -= 5;
  if (xPos <= -120) {
    clearInterval(intervalHandleFromRight);
    intervalHandleFromLeft = setInterval(PupinFromLeft, 30);
  }
}

$(document).ready(function () {


  canvas.addEventListener("click", clickCanvas, false);

  intervalHandleFromLeft = setInterval(PupinFromLeft, 30);
});