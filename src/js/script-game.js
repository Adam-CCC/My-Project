var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
pipeUp = new Image();
pipeBottom = new Image();

bird.src = "../resources/img/flappy_bird_bird.png";
bg.src = "../resources/img/flappy_bird_bg.png";  //background
fg.src = "../resources/img/flappy_bird_fg.png";  //Earth
pipeUp.src = "../resources/img/flappy_bird_pipeUp.png";
pipeBottom.src = "../resources/img/flappy_bird_pipeBottom.png";

document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= keyUp;
}

var gap = 120; //расстояние между препетствиями
var xPos = 40; //позиция птички по x
var yPos = 350;//позиция птички по y
var grav = 1;//значение для гравитации вниз
var keyUp = 30;//при нажатии на какую-либо кнпку, птичка летит верх

var xPosPipeDown = 150;
var yPosPipeDown = 350;

var xPosPipeUp = 150;
var yPosPipeUp = -200;

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeUp, xPosPipeUp, yPosPipeUp);
    ctx.drawImage(pipeBottom, xPosPipeDown, yPosPipeDown);
    ctx.drawImage(fg, 0, 460);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    requestAnimationFrame(draw);

}
pipeBottom.onload = draw;

