// Variables 
var bg,bgImg;
var ss,ssImg;
var alien,alien1,alien2,alien3,alien4,alien5,alien6,alien7;
var gameover,gameoverImg;
var restart,restartImg;
var score=0;
var gameState="play";
var alienGroup,laserGroup;
var laser;
var edges;


function preload(){
  
  // Loading Images
  bgImg=loadImage("assets/bg4.webp");
  ssImg=loadImage("assets/ss2.png");

  alien1=loadImage("assets/alien1.png");
  alien2=loadImage("assets/alien2.png");
  alien3=loadImage("assets/alien3.png");
  alien4=loadImage("assets/alien4.png");
  alien5=loadImage("assets/alien5.png");
  alien6=loadImage("assets/alien6.png");
  alien7=loadImage("assets/alien7.png");

  gameoverImg=loadImage("assets/gameover.png");
  restartImg=loadImage("assets/restart.png");

  
}

function setup() {
  createCanvas(1600,700);

  // Background Sprite
  bg = createSprite(800,350,1600,700);
  bg .addImage(bgImg);

  // Groups
  alienGroup=new Group();
  laserGroup=new Group();

  // Sapceship Sprite
  ss=createSprite(100,350);
  ss.addImage(ssImg);

  // Edge Sprite
  edges=createEdgeSprites();

  
}

function draw() {
  
  background(0);
  drawSprites();

  // Score 
  fill (255);
  textSize(30);
  text("Score :"+score,50,50);
  
  // GameState = "play"
  if (gameState==="play"){

    // Moving the spaceship upwards
    if(keyDown(UP_ARROW)){
      ss.y-=5;

    }
   // Moving the spaceship downwards
    if(keyDown(DOWN_ARROW)){
      ss.y+=5;

    }

    // Colliding with the edges 
    ss.collide(edges[2]);
    ss.collide(edges[3]);

    // Shooting the laser 
    if(keyDown("space")){
      releaseLaser();
    }
    
    // Calling the spawnAliens function 
    spawnAliens();
  

   
  }
  // GameState = "end"
   if (gameState === "end") {
    
  }
  
  
  
}
// Function to fire the laser
function releaseLaser(){
  laser=createSprite(200,ss.position.y,60,5);
  laser.shapeColor="lime";
  laser.velocityX=10;
  laser.lifetime=160;
  laserGroup.add(laser);
}

// Function to spawn the aliens 
function spawnAliens(){
  if(frameCount%150===0){
    var rand = Math.round(random(100,600));

    alien=createSprite(1600,rand);
    alien.velocityX=-4;

    // Random images for the alien 
    var randImg=Math.round(random(1,7));
    switch(randImg){
      case 1 :
        alien.addImage(alien1);
        alien.scale=0.75;
        break

        case 2 :
        alien.addImage(alien2);
        alien.scale=0.75;

        break
        case 3 :
        alien.addImage(alien3);

        break

        case 4 :
        alien.addImage(alien4);
        alien.scale=0.75;
        break

        case 5 :
        alien.addImage(alien5);
        alien.scale=0.75;

        break

        case 6 :
        alien.addImage(alien6);
        alien.scale=0.75;

        break

        case 7 :
        alien.addImage(alien7);
        alien.scale=0.75;

        

    }

    alien.lifetime=400;
    alienGroup.add(alien);
  }



}