function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  //   strokeWeight(5);
  let y = 0;
  beginShape(LINES);
  while (y < height) {
    let x = 0;
    while (x < width) {
      vertex(x, y);
      x += 10;
    }
    y += 10;
  }
  endShape();
}
