function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  const p = 50;
  textSize(18);
  text(key, random(p, width - p), random(p, height - p));
}
