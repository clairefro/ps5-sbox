function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  background(100);
}

let d = 10;
let up = true;

function draw() {
  ellipse(mouseX, mouseY, d, d);

  if (up) {
    d++;
  } else {
    d--;
  }
  if (d > 500) {
    up = false;
  }
  if (d < 2) {
    up = true;
  }
}
