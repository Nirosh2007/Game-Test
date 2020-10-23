var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  rect1 = createSprite(800,400,50,50);
  rect1.shapeColor = "green";
  rect2 = createSprite(400,400,50,50);
  rect2.shapeColor = "green";
  rect1.velocityX = -2;
  rect2.velocityX = 2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(rect1,movingRect)){
    rect1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    rect1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(rect1,rect2);
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;  
  }
  else {
    return false;
  }
}
function bounceOff(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX*(-1);
      object2.velocityX = object2.velocityX*(-1);
    }
  if(object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY*(-1);
      object2.velocityY = object2.velocityY*(-1);
  }
}