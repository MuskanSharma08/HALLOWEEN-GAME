var zombie, zombieImg;
var candy, candyImg;
var pumpkin, pumpkinImg;
var start, startImg;

function preload(){
zombieImg = loadImage("zombie.png");
candyImg = loadImage("candy.png");
pumpkinImg = loadImage("pumpkin.png");
startImg = loadImage("start.png")
}

function setup(){
createCanvas(1200, 400)
zombie = createSprite(100, 300, 20, 20);
zombie.addImage("zombie", zombieImg)
zombie.scale = 0.5;

candyGroup = new Group();
obstaclesGroup = new Group();

ground = createSprite(600, 385, 1200 ,10);

start = createSprite(600, 80, 100, 50)
start.addImage("game", startImg);
}
function draw(){
    background("white");
   
    food();
    obstacles();
    if(keyWentDown("space")) {
        zombie.velocityY = -14;
        start.visible = false;
      }
      if(keyWentUp("space")){
        zombie.velocityY = 14;
    }
    zombie.velocityY = zombie.velocityY + 0.8

    if(candyGroup.isTouching(zombie)){
        candyGroup.destroyEach();
     }
     if(obstaclesGroup.isTouching(zombie)){
         textSize(20)
         text("GAME OVER", 550, 40)
         ground.velocityX = 0;
         obstaclesGroup.setVelocityXEach(0);
         candyGroup.setVelocityXEach(0);
         
     }
      zombie.collide(ground);
  
drawSprites();
}
function food(){
if (frameCount % 250 === 0) {
    var candy = createSprite(1200, random(80, 200), 20, 20)
    candy.addImage("candy", candyImg);
     candy.scale = 0.1;
     candy.velocityX = -8;
      
      candyGroup.add(candy);
      }
    }
function obstacles(){
    if (frameCount % 150 === 0) {
      var pumpkin = createSprite(1200, 350, 20, 20)
      pumpkin.addImage("pumpkin", pumpkinImg);
     pumpkin.scale = 0.3;
      pumpkin.velocityX = -8;
    
      obstaclesGroup.add(pumpkin)
    }
    }