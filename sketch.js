
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

  ground =createSprite(200,585,900,10)
  ground.visible=false
}

function draw() {
  
  

  if(keyDown("right")){
    iron.velocityX = +5;
    
  }

  if(keyDown("left")){
    iron.velocityX = -5;
    
  }
 
  if(keyDown("up")){
    iron.velocityY = -10;
    
  }

    iron.velocityY = iron.velocityY + 0.5
    iron.collide(ground)
    
drawSprites();
   
}

