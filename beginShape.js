function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(20, 60, 80);
  beginShape();
  for (let i = 0; i < 24; i++) {
    vertex(random(0, width), random(0, height));
  }
  endShape(CLOSE);
}
