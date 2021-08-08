var garden,rabbit;
var gardenImg,rabbitImg;
var apples;
var leaves;
var apple_Img;
var leaves_Img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_Img = loadImage("apple.png");
  leaves_Img = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
   
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){

  if (select_sprites == 1) {
      spawnApples();
    } else if (select_sprites == 2){
      spawnleaves();
    }}

  drawSprites();
}

function spawnApples(){

  apples=createSprite(random(50,350),10,10,10);
  apples.addImage(apple_Img);
  apples.scale = 0.1;
  apples.velocityY = 3;
  apples.lifetime = 134; 
  
}

function spawnleaves(){

  leaves=createSprite(random(50,350),10,10,10);
  leaves.addImage(leaves_Img);
  leaves.scale = 0.1;
  leaves.velocityY = 3;
  leaves.lifetime = 134; 
  
}

