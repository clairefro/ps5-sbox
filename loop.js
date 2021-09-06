function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(0);
  for (i = 0; i < 100; i++) {
    rect(i * 20, 0, 100 % i, height / 2);
  }
}
