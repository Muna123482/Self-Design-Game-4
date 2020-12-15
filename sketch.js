var Aaron, backgroundImage, background1, background2;
var enemy,enemy1,enemy2,enemy3,enemy4,enemy5;
var arrow;
var AaronImg, form;
var gameState = 0;
var enemyGroup, arrowGroup, mother, motherImg, arrowImg;

function preload(){
  backgroundImage = loadImage("Kingdom.jpg");
  background2Image = loadImage("background2.png");
  enemy1 = loadImage("enemy1.png");
  enemy2 = loadImage("enemy2.png");
  enemy3 = loadImage("enemy3.png");
  enemy4 = loadImage("enemy4.png");
  enemy5 = loadImage("enemy5.png");
  AaronImg = loadImage("Aaron.png");
  motherImg = loadImage("mother.png");
  arrowImg = loadImage("arrow.png");
}

function setup() {
 //create the canvas
 createCanvas(displayWidth-60,displayHeight-60);
  
 //creating background
 
 background1 = createSprite(0, 0, 1200, 400);
 background1.addImage(backgroundImage);
 background1.scale = 2.7;
 background1.x = background1.width/2;
 background2 = createSprite(0, 0, displayWidth, displayHeight);
 background2.addImage(background2Image);
 background2.scale = 8.1;
 background2.x = background2.width/2;
 background2.visible = false;

 // creating bow to shoot arrow
 Aaron = createSprite(displayWidth/2, (displayHeight/2)-50, 50, 50);
 Aaron.addImage(AaronImg); 
 Aaron.scale = 0.5;
  form = new Form();
  arrowGroup = new Group();
  enemyGroup = new Group();
  mother = createSprite(displayWidth-180, (displayHeight/2)-300, 50, 50);
  mother.addImage("mother", motherImg);
  mother.scale = 0.2;
  mother.visible = false;
}

function draw() {
  if(gameState === 0){
    background(255);
    form.display();
  }
  else if(gameState === 1){
    background1.velocityX = -1;
    if(background1.x < 0){
      background1.x = background1.width/2;
    }
    spawnEnemies();
    
    console.log(Aaron.depth);
    console.log(background1.depth);

    if(enemyGroup.isTouching(Aaron)){
      enemyGroup.destroyEach();
      arrowGroup.destroyEach();
      gameState = 2;
     
    }

  }
  if(gameState === 2){
    background2.visible = true;
    background2.velocityX = -1;
    if(background2.x < 0){
      background2.x = background2.width/2;
    }
    mother.visible = true;
    console.log(mother.depth);
    console.log(background2.depth);
    mother.x = displayWidth-40;
  }
  Aaron_action();
}

function spawnEnemies(){
  if(frameCount%120 === 0){
    enemy = createSprite(displayWidth,displayHeight-40,50,50);
    enemy.velocityX = -4;
    enemy.y = Math.round(random(0, displayHeight));
    var rand = Math.round(random(2,3));
    switch(rand){
      case 1: enemy.addImage("enemy", enemy1);
      break;
      case 2: enemy.addImage("enemy", enemy2);
      break;
      case 3: enemy.addImage("enemy", enemy3);
      break;
      case 4: enemy.addImage("enemy", enemy4);
      break;
      case 5: enemy.addImage("enemy", enemy5);
      break;
      default: break;
    }
    enemy.scale = 0.2;
    enemyGroup.add(enemy);
    enemy.lifetime = displayWidth/4;
  }
}
function createArrow(){
  arrow = createSprite(Aaron.x,Aaron.y,60,10);
  arrow.addImage(arrowImg);
  arrow.velocityX = 4;
  arrow.lifetime = (displayWidth-60)/4;
  arrowGroup.add(arrow);
  arrow.scale = 0.2;
}

function Aaron_action(){
  if(keyDown("SPACE")){
    createArrow();
  }
  else if(keyDown(LEFT_ARROW)){
    Aaron.velocityX = -3;
  } 
  else if(keyDown(RIGHT_ARROW)){
    Aaron.velocityX = 3;
  } 
  else if(keyDown(UP_ARROW)){
    Aaron.velocityY = -3;
  }
  else if(keyDown(DOWN_ARROW)){
    Aaron.velocityY = 3;
  }
  drawSprites();
}