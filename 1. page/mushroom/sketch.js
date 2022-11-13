let h = 0;
targetH = 0;
let img1;
let img2;
let img3;
let img4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cursor(HAND);
  
  imageMode(CENTER);
  
  img1=loadImage('1_5.png');
  img2=loadImage('2_2.png');
  img3=loadImage('3_2.png');
  img4=loadImage('5.png');
}

function draw() {
  let up = 0;
  if(mouseIsPressed){
     up = 30;
      }
  
  h = lerp(h,targetH,0.5);
  if(h > 200){
    h = 200;
  }
  
  background(225,0,0);
  

  flower(200,300);
}


function flower(x,y){
  push();
    translate(x+100,y+200);

    if(h>0){
      image(img1,0,50,50+h,50+h);
    }
  
    if(h>60){
      image(img2,0,0+20,70+h,120+h);
    }
  
    if(h>90){
      image(img3,0,-30,80+h,200+h);
    }
    
    if(h>120){
      image(img4,0,-200,200+h,100+h);
    }
  
  
  
  //if(조건)
  //h==v, h>v, h>=v
  }

function mousePressed(){
  targetH = targetH + 30;
  if(targetH > 150){
    targetH = 0;
  }
  
  console.log(targetH);
}