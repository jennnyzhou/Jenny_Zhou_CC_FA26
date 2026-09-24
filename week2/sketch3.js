function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background("pink");
  fill("white");
  circle(250, 250, 300);

  push();
  translate(100, 250);
  rotate(25);
  fill("black");
  ellipse(0, 0, 120, 300);
  pop();

  push();
  translate(400, 250);
  rotate(-25);
  fill("black");
  ellipse(0, 0, 120, 300);
  pop();

  fill(250);
  ellipse(200, 250, 30);

  fill(0);
  let mx1 = map(mouseX, 0, width, 190, 205);
  ellipse(mx1, 250, 20, 20);
  
  fill(250);
  ellipse(300, 250, 30);

  fill(0);
  let mx2 = map(mouseX, 0, width, 290, 305);
  ellipse(mx2, 250, 20, 20);

  textSize(55);
  text('Y', 230, 400);

  textSize(30);
  text('III', 240, 115);
}