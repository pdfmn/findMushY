const objects = [];
let eyeZ;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let cam;

function setup() {
  cam=createCapture(VIDEO);
  cam.hide();
  
  img1= loadImage('바닥.jpg');
  img2= loadImage('책.jpg');
  img3= loadImage('방한켠.jpg');
  img4= loadImage('10.png');
  img5= loadImage('ceiling.png');
  img6= loadImage('home.png');
  createCanvas(800, 800, WEBGL);

  eyeZ = height / 2 / tan((30 * PI) / 180); // 카메라가 원점에서 떨어진 기본 위치

  objects.push(new IntersectPlane(1, 0, 0, -100, 0, 0)); // 왼쪽 벽
  objects.push(new IntersectPlane(1, 0, 0, 100, 0, 0)); // 오른쪽 벽
  objects.push(new IntersectPlane(0, 1, 0, 0, -100, 0)); // 바닥
  objects.push(new IntersectPlane(0, 1, 0, 0, 100, 0)); // 천장
  objects.push(new IntersectPlane(0, 0, 1, 0, 0, 0)); // 뒷면 벽
  
  noStroke();
  
}

function draw() {
  texture(cam);
  background(255,0,0);
  

  // 조명들
  pointLight(255, 255, 255, 0, 0, 400);
  ambientLight(200, 200, 200);
  
  
  // 왼쪽 벽
  push();
  translate(-100, 0, 200);
  texture(img2);
  rotateY((90 * PI) / 180);
  plane(800, 200);
  pop();

  // 오른쪽 벽
  push();
  translate(100, 0, 200);
  texture(img3);
  rotateY((90 * PI) / 180);
  plane(800, 200);
  pop();

  // 바닥
  push();
  translate(0, 100, 200);
  texture(img1);
  rotateX((90 * PI) / 180);
  plane(200, 800);
  pop();

  // 천장
  push();
  translate(0, -100, 200);
  texture(img5);
  rotateX((90 * PI) / 180);
  plane(200, 800);
  pop();

  plane(200, 200); // 뒷면 벽

  const x = mouseX - width / 2;
  const y = mouseY - height / 2;

  const Q = createVector(0, 0, eyeZ); // 광선 위의 점과 카메라의 기본 위치
  const v = createVector(x, y, -eyeZ); // 광선의 방향 벡터

  let intersect; // 광선과 벽면의 교차점
  let closestLambda = eyeZ * 10; // 거리 그리기

  for (let x = 0; x < objects.length; x += 1) {
    let object = objects[x];
    let lambda = object.getLambda(Q, v); // 광선과 객체 간 교차점의  람다값

    if (lambda < closestLambda && lambda > 0) {
      // 광선과 객체의 교차점 위치 찾기
      intersect = p5.Vector.add(Q, p5.Vector.mult(v, lambda));
      closestLambda = lambda;
    }
  }

  // 커서
  push();
  translate(intersect);
  rotateY(millis() / 1000);
  rotateX(millis() / 1000);
  texture(img4);
  sphere(60);
  pop();
  
  imageMode(CENTER);
  image(img6,0,0,1400,1200);
  
}

// 무한대로 확장하는 벽면 생성을 위한 클래스
class IntersectPlane {
  constructor(n1, n2, n3, p1, p2, p3) {
    this.normal = createVector(n1, n2, n3); // 면의 기본 벡터
    this.point = createVector(p1, p2, p3); // 면 위의 점
    this.d = this.point.dot(this.normal);
  }

  getLambda(Q, v) {
    return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
      }
}
