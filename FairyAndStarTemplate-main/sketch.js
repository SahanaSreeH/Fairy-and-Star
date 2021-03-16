var fairy,fairyImg;
var gameover,gameoverImg;
var star,starImg;
var sky,skyImg;

function preload()
{
   fairyImg = loadImage("images/fairy.png");
   gameoverImg = loadImage("gameOver.png");
   starImg = loadImage("images/star.png");
   skyImg = loadImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);
  
   fairy = createSprite(250,350,10,10);
   fairy.addImage("fairyImg");

   sky = createSprite(0,0,800,750);
   sky.addImage("skyImg");

   star = createSprite(700,5,10,10);
   star.addImage("starImg");
  }


function draw() {
  background(0);

  if(keyDown(LEFT_ARROW)){
    fairy.x = -2;
  }
  if(keyDown(RIGHT_ARROW)){
    fairy.x = 2;
  }

  drawSprites();

}
 