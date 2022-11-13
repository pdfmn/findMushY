let cloud;
let frame;
let posX=0

function setup() {
  createCanvas(300, 400);
  cloud=loadImage('cloud2.png');
  frame=loadImage('frame3.png');
}

function draw() {
  background(0);
  translate(0,0)
  image(cloud,posX,50,3600,300);
  image(frame,-30,-50,400,540);
  
  if (posX < -4800){
    posX = 0
  } else {
    posX -= 8
  }
  text('MushrOoM cLOud',width/2,50);
  let s = 'A mushroom cloud is a distinctive mushroom-shaped flammagenitus cloud of debris, smoke and usually condensed water vapor resulting from a large explosion.';
  fill(255);
  textSize(8);
  textAlign(LEFT);
  text(s, 10, 10, 100, 300);
  textSize(30);
  fill(0,255,0);
  textAlign(CENTER);
}