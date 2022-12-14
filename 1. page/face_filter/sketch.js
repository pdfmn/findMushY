let video;
let poseNet;
let noseX=0;
let noseY=0;
let eyelX=0;
let eyelY=0;
let img;


function setup() {
  createCanvas(800,800);
  img=loadImage('filter.png');
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose',gotPoses);
}


function gotPoses(poses){
  //console.log(poses);
  if (poses.length > 0){
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    noseX = lerp(noseX,nX,0.5);
    noseY = lerp(noseY,nY,0.5);
    eyelX = lerp(eyelX,eX,0.5);
    eyelY = lerp(eyelY,eY,0.5);
  }
}

function modelReady(){
  console.log('model ready');
}

function draw() {
  scale(1.5);
  image(video,-150,0);
  image(img,noseX-350,noseY-365,400,450);
  
  // fill(0,255,0);
  // ellipse(eyelX,eyelY,50,50);
}