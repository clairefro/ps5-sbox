let sides = 3;
let angle, px, py;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes("antialias", true);
  fill(237, 34, 93);
  strokeWeight(3);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  ngon(sides, 0, 0, 80);
}

function mouseClicked() {
  if (sides > 6) {
    sides = 3;
  } else {
    sides++;
  }
}

function ngon(n, x, y, d) {
  beginShape(TESS);
  for (let i = 0; i < n + 1; i++) {
    angle = (TWO_PI / n) * i;
    px = x + (sin(angle) * d) / 2;
    py = y - (cos(angle) * d) / 2;
    vertex(px, py, 0);
  }
  for (let i = 0; i < n + 1; i++) {
    angle = (TWO_PI / n) * i;
    px = x + (sin(angle) * d) / 4;
    py = y - (cos(angle) * d) / 4;
    vertex(px, py, 0);
  }
  endShape();
}
