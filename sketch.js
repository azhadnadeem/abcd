var bg,bg2,form,system,code,security;
var score=0;
var fj;
var bu;

function preload() {
  //bg = loadImage("aladdin_cave2.jpg");
 //bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-150);
  system = new System()
  security = new Security()

fj=createSprite(500,300,50,50)




}

function draw() {
  background("red");
  clues();
  security.display();
  //textSize(20);
 // fill("white");
  //text("Score: " + score, 450, 50);

 // if(score === 3) {
   // clear();
    //background(bg2)
    //fill("black")
    //textSize(40);
    //text("TREASURE UNLOCKED",250, 200);
 // }

  drawSprites()
}