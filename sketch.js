var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var orangeImg;
var redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
 createCanvas(400,400);
  //crear sprite de rabbit (conejo)
  garden=createSprite(200,200);
  rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function draw() {
  background(0);
  // Mover el fondo
garden.addImage(gardenImg);
rabbit.x = World.mouseX 
if (garden.x<0 ){
  garden.y = garden.width/2;
}
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
}
function spawfruits(){
  if(frameCount%60 ===0){
   var frutas = createSprite(160,400,20,40);
   frutas.velocityY = -4;
   var num= Math.round(random(1,3));
   switch (num){
     case 1: frutas.addImage(appleImg);break;
     case 2: frutas.addImage(orangeImg);break;
     case 3: frutas.addImage(redImg);break;
   }
  }
 } 