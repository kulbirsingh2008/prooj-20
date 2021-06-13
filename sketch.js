var garden,gardenImg;
var cat,catImg,catImg2,catHappy;
var mouse,mouseImg,mouseImg2,mouseImg3;


function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catHappy = loadImage("images/cat4.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");

}

function setup(){
    createCanvas(1000,775);

    garden = createSprite(500,389,20,20);
    garden.addImage("garden",gardenImg);
    garden.scale = 1.1

    //create tom and jerry sprites here
    cat = createSprite(650,680,20,20);
    cat.addImage("cat",catImg);
    cat.scale = 0.1

    mouse = createSprite(150,680,20,20);
    mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.1

     cat.debug = false;
     cat.setCollider("circle",0,0,700);
     mouse.debug = false;
     mouse.setCollider("circle",0,0,500)
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x -mouse.x < (cat.width - mouse.width)/2){
       cat.addAnimation("catHappy",catHappy)
       cat.changeAnimation("catHappy");
       cat.velocityX = 0

       cat.x = 250
      
       mouse.addAnimation("mouse",mouseImg);
       mouse.changeAnimation("mouse");
    }

    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){   
mouse.addAnimation("mouse1",mouseImg2);
mouse.changeAnimation("mouse1");
    
  //For moving and changing animation write code here
  cat.addAnimation("catImg2",catImg2);
  cat.changeAnimation("catImg2");

  cat.velocityX = -4
 }
}
