let tick = 0,
  maxHue = 360;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  const c = color(tick, (mouseY / height) * 100, (mouseX / width) * 100);
  colorMode(HSB, maxHue, 100, 100);
  background(c);
  fill(0, 0, 0);
  textSize(18);
  text(JSON.stringify(c.levels), width / 2, height / 2);
  if (tick === maxHue) tick = 0;
  tick++;
}
