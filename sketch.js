var humanbaseimage
var zombieentranceimage
function setup() {
  createCanvas(1500,1000);
 
path7=createSprite(575,285,70,340)
path8=createSprite(825,420,570,70)
path9=createSprite(1075,270,70,370)
path10=createSprite(1140,100,200,70)
 path1=createSprite(350, 150, 520, 70);
 path2=createSprite(575,285,70,340)
 path3= createSprite(825,420,570,70)
 path4= createSprite(1075,270,70,370)
 path5=  createSprite(1140,100,200,70)
 path6=createSprite(330, 150, 480, 35);
 path7=createSprite(575,275,35,285)
path8=createSprite(809,420,500,35)
path9=createSprite(1075,268,35,340)
path10=createSprite(1142,100,170,35)
humanbase=createSprite(1250,100,170,35)
zombieentrance=createSprite(150,120,520,70)
}
function preload(){

  humanbaseimage=loadImage("bases.jpg")
  zombieentranceimage=loadImage("Zombie entrance.jpg")
}



  //if(frameCount%500===0){
  
  //}




function draw() {
  background(0);  
path6.shapeColor="blue"
path7.shapeColor="blue"
path8.shapeColor="blue"
path9.shapeColor="blue"
path10.shapeColor="blue"
drawSprites();
humanbase.addImage(humanbaseimage)
humanbase.scale=0.7

zombieentrance.addImage(zombieentranceimage)
zombieentrance.scale=0.7
for(var i=0;i=4;i++){
  zombie=createSprite(1000,20,50,50)
  zombie.velocityX=3}
}
