var iss, spaceCraft ;
var bg, issImage, scImage;
var hasDocked = false;

function preload(){
  bg = loadImage("images/spacebg.jpg");
  issImage = loadImage("images/iss.png");
  scImage = loadImage("images/spacecraft1.png");
  scImage2 = loadImage("images/spacecraft2.png");
  scImage3 = loadImage("images/spacecraft3.png");
  scImage4 = loadImage("images/spacecraft4.png");

}


function setup() {
  createCanvas(800,400);
 spaceCraft =  createSprite(285, 240);
 spaceCraft.addImage(scImage);
 spaceCraft.scale = 0.15;

 iss = createSprite(330,130);
 iss.addImage(issImage);
 iss.scale = 0.25;


}

function draw() {
  background(bg);  
  spaceCraft.addImage(scImage);

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
  
  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y - 2
  }
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(scImage4);
    spaceCraft.x = spaceCraft.x - 1
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(scImage3);
    spaceCraft.x = spaceCraft.x + 1
  }

  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(scImage2)
  }
}
  if(spaceCraft.y<=(iss.y+45) && spaceCraft.x<=(iss.x+20)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("DOCKING SUCCESSFUL", 200, 300);
  }

  drawSprites();
}