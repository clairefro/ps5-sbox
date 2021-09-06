let cols = 100;
let colorFrom;
let colorTo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  colorFrom = color(0, 50, 100);
  colorTo = color(45, 80, 100);
}

function draw() {
  for (let i = 0; i < cols; i++) {
    const interpVal = map(mouseX * (i / 4), 0, width, 0.0, 1.0);
    const colorHue = lerpColor(colorFrom, colorTo, interpVal);
    fill(colorHue, 100, 100);
    rect((i * width) / cols, 0, width / cols, height);
  }
}
