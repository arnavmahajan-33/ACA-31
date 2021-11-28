
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  bg.scale=2
  iron = createSprite(450,400,400,10)
  iron.addImage(ironImage)
  iron.scale = 0.4

}

function draw() {
  if(bg.x<100){
    bg.x=bg.width/4
  }
  if(bg.x<-100){
    bg.x=bg.width/4
  }

  if(keyDown("right")){
    iron.velocityX = +5;
    bg.velocityX = -6
  }

  if(keyDown("left")){
    iron.velocityX = -5;
    bg.velocityX = +5
  }
 
  if(keyDown("up")){
    iron.velocityY = -10;
    bg.velocityY = +10
  }

    iron.velocityY = iron.velocityY + 0.5
    bg.velocityY = bg.velocityY - 0.5
    
drawSprites();
   
}

