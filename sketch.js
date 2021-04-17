var backgroundIMG;
var steve,steveImage;




function preload(){
steveImage=loadAnimation("unnamed (3).gif");
backgroundIMG=loadAnimation("unnamed (3).gif");
}

function setup() {
  createCanvas(800,400);
  steve = createSprite(400, 200, 50, 50);
  steve.addAnimation("run",steveImage);


}

function draw() {
  background(backgroundIMG);  



  

  drawSprites();
}
