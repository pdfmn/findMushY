let x = 0;
let y = 0;
let backmush;
let back;
let circle;
let mainText;
let real;
let persona;

function setup() {

  createCanvas(windowWidth, windowHeight);
  backmush=loadImage('asset/backmush.png');
  back=loadImage('asset/back.png');
  circle=loadImage('asset/circle.gif');
  
  mainText=loadImage('asset/main text.png');
  persona=loadImage('asset/persona.png');

  imageMode(CENTER);
  link = createA('/1. page/modal_ex.html', '','_top');
  real=createImg('asset/real.png',"www.naver.com").parent(link);
  

}

function draw() {

  real.position(windowWidth/2-real.width/2+20, windowHeight/2-real.height/2);
  real.size(windowWidth*0.3,windowHeight*0.6);
  
  x = lerp(x, mouseX, 0.005);
  y = lerp(y, mouseY, 0.005);
  image(back,windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  image(backmush,640+x,360+y,windowWidth+100, windowHeight+300);
  
  image(circle,windowWidth/2, windowHeight/2,windowWidth-300, windowHeight-300);
  image(mainText,windowWidth/4.5, windowHeight/1.9,windowWidth*0.4,windowHeight*0.85);
  
  frameRate(6);
  px=random(persona.width);
  py=random(persona.height);
  // let pixelRegion=get(px,py,60,60);
  let pixelRegion=persona.get(px,py,60,60);
  image(pixelRegion,mouseX,mouseY,120,120);
  // let pixelInfo=get(mouseX,mouseY);
}