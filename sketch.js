var score=0 
var ship1,ship2
var astroid,gems,hearts,bonus
var backg
var bullet
var gameState = 0;
var wall1,wall2
function preload() {
  shipImg1=loadImage("./sprites/spaceship001.png")
  shipImg2=loadImage("sprites/spaceship002.png")
  astroidImg=loadImage("sprites/astroid.png")
  bg=loadImage("sprites/ bg.png")
}

function setup() {
  createCanvas(1450,900);
  backg=createSprite(400,0)
  backg.addImage(bg)
  backg.scale=1.5
  ship1=createSprite(750,700,50,50)
  ship1.addImage(shipImg1)
  ship1.scale=0.3
  ship2=createSprite(750,100,50,50)
  ship2.addImage(shipImg2)
  ship2.scale=0.3
  ship2.velocityX=-5
  bullet=createSprite(50,150,5,10)
  astroid=createSprite(random(50,1400),0,50,50)
  wall1=createSprite(300,100,10,100)
  wall1.visible=false
  wall2=createSprite(1100,100,10,100)
  wall2.visible=false
}



function draw() {
 background("blue");
  textSize(20);
  fill("white");
  text("Score: " + score, 50, 50);
 
  if (keyDown("right"))
  {ship1.x=ship1.x+15}
  if (keyDown("left"))
  {ship1.x=ship1.x-15}

  ship2.bounceOff(wall1)
  ship2.bounceOff(wall2)
  spawnAstroid()
  bullets()
  drawSprites()
  if(ship1.isTouching(bullet) || ship1.isTouching(astroid)){
    text("game_over",500,500)
   bullet.velocityY=0;
   astroid.velocityY=0;
   ship1.velocityX=0;
   
  }
}


function spawnAstroid(){
  if (frameCount%60===0) {
    
 astroid.addImage(astroidImg)
 astroid.scale=0.2
 astroid.velocityY=+5
  }
}

function bullets(){
  if (frameCount%45===0) {
    
   bullet.x=ship2.x
   bullet.shapeColor="red"
 bullet.velocityY=+5

  }
}