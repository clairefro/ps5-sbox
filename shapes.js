function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  background(100);
  //   rectMode(CENTER); // change the start point for rects
}

function draw() {
  point(10, 10);
  point(390, 10);
  point(10, 390);
  point(390, 390);

  line(10, 10, 250, 250); // ax, ay, bx, by

  ellipse(200, 200, 100, 200); // cx, cy, w, h

  rect(300, 300, 100, 100); // cx, cy

  quad(10, 500, 200, 500, 300, 600, 10, 600); // tlx, try, trx, try, brx, bry, blx, bly

  triangle(400, 500, 300, 600, 500, 600); // p1x, p1y, p2x, p2y, p3x, p3y

  arc(600, 600, 50, 50, 0, 2 * PI); // px, py, w, h, startAngle, endAngle (radians by default)
  // CHORD mode - draws shortest line between start and end
  arc(700, 600, 50, 50, 6, PI, CHORD); // px, py, w, h, startAngle, endAngle, CHORD (radians by default)
  // PI mode - stroke on the circum to center for start and end
  arc(800, 600, 50, 50, 6, PI, PIE); // px, py, w, h, startAngle, endAngle, CHORD (radians by default)
  arc(750, 600, 50, 50, 6, PI); // px, py, w, h, startAngle, endAngle, CHORD (radians by default)
}
