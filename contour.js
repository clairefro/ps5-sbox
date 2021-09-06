let angle,
  r,
  step,
  colorStep,
  colorRev = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  angle = 0;
  r = 100;
  step = TWO_PI / 360;
  colorStep = 0;
}

function draw() {
  const x = r * sin(angle);
  const y = r * cos(angle);
  translate(width / 2, height / 2);
  stroke(colorStep, 0, 0);
  beginShape();
  // Exterior part of shape, clockwise winding
  vertex(-40, -40);
  vertex(40, -40);
  vertex(40, 40);
  vertex(-40, 40);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(x + mouseX / 2, y + mouseY / 2);
  vertex(-20, 20);
  vertex(20, 20);
  vertex(20, -20);
  endContour();
  endShape(CLOSE);

  if (colorStep > 255 || colorStep < 1) {
    colorRev = !colorRev;
  }
  colorRev ? colorStep++ : colorStep--;
  angle = angle + step;
}
