var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bg = new Image();
var bird = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bg.src = "../resources/img/flappy_bird_bg.png";
bird.src = "../resources/img/flappy_bird_bird.png";
fg.src = "../resources/img/flappy_bird_fg.png";
pipeUp.src = "../resources/img/flappy_bird_pipeUp.png";
pipeBottom.src = "../resources/img/flappy_bird_pipeBottom.png";

addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= jump;
}

var pipeAnim = [];
pipeAnim [0] = {
    x : cvs.width,
    y : 0
}

var jump = 30;
var pipeDistance = 80;
var xPos = 50;
var yPos = 80;
var grav = 2;


function draw(){
    ctx.drawImage(bg, 0, 0);
    for(var i = 0; i < pipeAnim.length; i++){
        ctx.drawImage(pipeUp, pipeAnim[i].x, pipeAnim[i].y);
        ctx.drawImage(pipeBottom, pipeAnim[i].x, pipeAnim[i].y + pipeUp.height + pipeDistance);
        pipeAnim[i].x--;

        if(pipeAnim[i].x == 125){
            pipeAnim.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    requestAnimationFrame(draw);

}
pipeBottom.onload = draw;

