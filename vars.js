function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  const bgRed = random(0, 255);
  // big rect
  fill(bgRed, 0, 0);
  rect(50, 50, 500, 400);
  // little rect
  fill(bgRed / 2, 0, 0);
  rect(50, 50, 250, 200);
}
