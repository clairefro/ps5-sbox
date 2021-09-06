let cols = 3;
const colorRange = 200;
let h = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  noLoop();
}

function draw() {
  for (let i = 0; i < cols; i++) {
    const randomHue = random(h - colorRange, h + colorRange);
    fill(randomHue, 100, 100);
    rect((i * width) / cols, 0, width / cols, height);
  }
}

function keyPressed() {
  h = random(0, 360);
  redraw();
}

function redraw() {
  draw();
}
