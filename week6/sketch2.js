
let dots = []
let palette = ["#FFDED9", "#D9FFFE", "#FFD9B5", "#d6ffb3", "#e7d1f8"]
 
class Dot {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.xV = random(-3, 3)
    this.yV = random(-3, 3)
    this.size = random(10, 40)
    this.col = random(palette)  
  }
 
  move() {

    this.xV += (mouseX - this.x) * 0.0004
    this.yV += (mouseY - this.y) * 0.0004
 
    this.x += this.xV
    this.y += this.yV
 
  
    if (this.x < 0 || this.x > width) this.xV *= -1
    if (this.y < 0 || this.y > height) this.yV *= -1
  }
 
  display() {
    noStroke()
    fill(this.col)
    ellipse(this.x, this.y, this.size)
  }
}
 
function setup() {
  createCanvas(windowWidth, windowHeight)
 

  for (let i = 0; i < 30; i++) {
    dots.push(new Dot(random(width), random(height)))
  }
}
 
function draw() {
  background(181, 255, 229)
 

  for (let i = 0; i < dots.length; i++) {
    dots[i].move()
    dots[i].display()
  }
 

  fill(255)
  noStroke()
  textAlign(CENTER)
  textSize(14)
 
  drawNavButton()
}
 
function applyTextStyle() {
  textFont("Helvetica")
  textLeading(-0.1)
  drawingContext.letterSpacing = "-0.1px"
}

function drawNavButton() {
  rectMode(CORNER)
  noStroke()
  fill(0)
  rect(10, 10, 120, 32, 6)
 
  noStroke()
  fill(overButton() ? 20 : 255)
  textAlign(CENTER, CENTER)
  textSize(14)
  text("Sketch 2", 70, 26)
}
 
function overButton() {
  return mouseX > 10 && mouseX < 130 && mouseY > 10 && mouseY < 42
}
 
function mousePressed() {
  if (overButton()) {
    window.location.href = "week6_1.html"
  } else {
    dots.push(new Dot(mouseX, mouseY))
  }
}
 
function mouseDragged() {
  if (!overButton()) {
    dots.push(new Dot(mouseX, mouseY))
  }
}
 
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
 