function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  frameRate(2);
}

function draw() {
  text("foo", 50, 50);
  ellipse(random(0, width), random(0, height), random(255), random(255));
  print(frameCount); // global var that counts the frames rendered since start
}
