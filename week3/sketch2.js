let r = 0

function setup(){
  createCanvas(500, 500)
  rectMode(CENTER)
  angleMode(DEGREES)
  noFill()
  strokeWeight(2)
  stroke(255)
  frameRate(0.5)
}

function draw(){
  background(255, 213, 251)
  fill(173, 255, 184, random(100, 255))

  let spacing = 60

  for(let x = spacing; x < width; x += spacing){
    for(let y = spacing; y < height; y += spacing){
      push()
      translate(x + random(-20, 20), y + random(-20, 20))
      rotate(random(360))
      strokeWeight(random(1, 3))
      stroke(255, random(120, 255))
      ellipse(0, 0, random(10, spacing))
      pop()
    }
  }
}