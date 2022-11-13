let grabbed = false;
let shapeX;
let shapeY;
const radius = 200;
const diameter = radius*2;
let img1;
let img2;
let img3;
let img4;

function setup() {
  createCanvas(375, 800);
  cursor(HAND);
  
  img1=loadImage('1.png');
  img2=loadImage('2.png');
  img3=loadImage('3.png');
  img4=loadImage('4.png');
  
  background(66,135,245);
  imageMode(CENTER);
  
  shapeX = width/2;
  shapeY = height/3;
}

function draw() {
  background(0,255,0);
  
  image(img3,150,570,110,136);
  image(img1,shapeX,shapeY,180,130);
  image(img2,200,600,200,200);
  text('Drag to basket',width/2,100);
  textSize(30);
  textAlign(CENTER);
  image(img4,190,150,60,80);
}

function mousePressed(){
  let d = dist(mouseX, mouseY, shapeX, shapeY);
  if (d < radius){
    grabbed = true;
  } else {
    grabbed = false;
  }
}

function mouseReleased(){
  grabbed = false;
}

function mouseDragged(){
  if(grabbed){
    shapeX = mouseX;
    shapeY = mouseY;
  }
}










