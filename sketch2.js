let x, y;
let diameter = 100;
let yV = 5, xV = 3;
let rectY = 400; 

function setup(){
    createCanvas(500,500);
    y = diameter/2;
    x = width/2;
}

function draw(){
  background(197, 255, 236);

  fill(200, 162, 200);
  stroke(255, 254, 181); 
  strokeWeight(10); 
  circle(x, y, diameter);

  stroke(0);
  strokeWeight(0.1);
  fill(255, 255, 152);
  rect(0, rectY, 500, 200);

  x += xV;
  y += yV;

  if (y > rectY - diameter/2) {
    y = rectY - diameter/2; 
    yV = -yV;
  }
  if (y < diameter/2) {
    y = diameter/2;
    yV = -yV;
  }
  if (x > width - diameter/2) {
    xV = -xV;
  }
  if (x < diameter/2) {
    xV = -xV;
  }
}