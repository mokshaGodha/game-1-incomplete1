var playerImg, carriageImg, bgImg, logImg,stoneImg;
var player, carriage, bgSprite;
obstacleGroup=[];
var gameState=PLAY;
function preload()
{
playerImg=loadImage("Images/girl1.png");
carriageImg=loadImage("Images/carriage.png");
bgImg=loadImage("Images/bgImg.jpg");
logImg=loadImage("Images/log.png");
stoneImg=loadImage("Images/srone.png");
bg=loadImage("Images/Background.jpg")
}

function setup() {
  createCanvas(1000, 700);
  
  bgSprite = createSprite(width/2, height/2, width, height);
  bgSprite.addImage("background", bgImg);
  bgSprite.velocityY=5;
  bgSprite.scale = 4;

  carriage = createSprite(490,350,100,100);
  carriage.addImage("carriage", carriageImg);
  carriage.scale = 2.2;
	
  player = createSprite(520,475,100,100);
  player.addImage("player", playerImg);
  
  

  
}


function draw() {
  background("bg");

  if(bgSprite.y > height) {
    bgSprite.y = bgSprite.height/2;
  }

  if(keyDown("space")){
	  carriage.velocityY=-12;
	  player.velocityY=-12
  }

  carriage.velocityY=carriage.velocityY+0.8;
  player.velocityY = player.velocityY + 0.8;

  if(obstacleGroup.isTouching(carriage)){
	  gameState=END;

  }else if(gameState === END){

	carriage.velocityY = 0;
	carriage.velocityX=0;

	player.velocityY = 0;
	player.velocityX = 0;

		obstacleGroup.setVelocityXEach = 0;
		obstacleGroup.setVelocityYEach = 0;
  }

  spawnObstacles();
  
  drawSprites();

 
}

function spawnObstacles() {
  if(frameCount % 220 === 0) {
    var obstacle = createSprite(width/2, 0);
    var rand = Math.round(random(1,2));
    if(rand === 1) {
	  obstacle.addImage("stone", stoneImg)
	  
    } else {
      obstacle.addImage("log", logImg)
    }
	  obstacle.velocityY = 3;
	  obstacle.scale=0.3;

	  obstacleGroup.add(obstacle);
  
  }
  
}




