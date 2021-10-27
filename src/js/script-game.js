var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
pipeUp = new Image();
pipeBottom = new Image();

bird.src = "img/flappy_bird_bird.png";
bg.src = "img/flappy_bird_bg.png";
fg.src = "img/flappy_bird_fg.png";
pipeUp.src = "img/flappy_bird_pipeUp.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";

document.addEventListener("keydown", moveUp);

function moveUp() {
    
}

var gap = 120; //расстояние между препетствиями
var xPos = 40; //позиция птички по x
var yPos = 350;//позиция птички по y
var grav = 1;//значение для гравитации вниз
var keyUp = 20;//при нажатии на какую-либо кнпку, птичка летит верх

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(pipeUp, 150, 0);
    ctx.drawImage(pipeBottom, 150, 0 + pipeUp.height + gap);
    ctx.drawImage(fg, 0, 460);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    requestAnimationFrame(draw);
        
}
pipeBottom.onload = draw;



