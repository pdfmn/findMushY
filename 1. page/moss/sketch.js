let img1

function setup() {
  
  
  img1 = loadImage('1_4.png');
  
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES)
  
}

function draw() {
  if(mouseIsPressed){
    
    let count = 0;
    while(count<20){
      brush();
      count = count +1;
    }
  }
}

function brush(){
  let x = randomGaussian(mouseX,20);
  let y = randomGaussian(mouseY,20);
  let s = random(1,15);
  let angle = random(0,360);
  
  push();
    translate(x,y);
    rotate(angle);
    image(img1,0,0);
  pop();
}