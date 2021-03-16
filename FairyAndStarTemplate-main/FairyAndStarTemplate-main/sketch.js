var fairy,fairyImg,star,starImg,sky,skyImg;

function preload()
{
 fairyImg = loadImage("fairy.png");
 starImg = loadImage("star.png");
 skyImg = loadImage("starnight.png");

}
function setup() {
  createCanvas(600,600);
  
  fairy = createSprite(200,200,10,10);
  star = createSprite(550,550,10,10);
  sky = createSprite(300,300,10,10);

}


function draw() {
  background("black");


drawSprites();

}
