let widthM = 10,
  heightM = 20,
  theta = 0.0,
  rotateSpeed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();

  push();
  translate(width / 2, height / 2);
  makeRect();
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(theta);
  makeRect();
  pop();
  theta += rotateSpeed;
}

function makeRect() {
  for (i = 0; i < 25; i++) {
    rect(0, 0, i * widthM, i * heightM);
  }
}
