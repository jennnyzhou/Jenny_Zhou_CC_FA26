
const NUM_FRAMES = 13
 
let frames = []
let loaded = false
let sky                // pre-drawn gradient background
let clouds = []        // array of cloud objects
let sparkles = []      // array of sparkle objects
let sparkleColors = ["#ff6fb5", "#b388ff", "#ffc933", "#ffffff"]   // stronger than the sky so they show up
 
let counter = 0
let xLoc, yLoc
let speed = 2.5
let dir = 1
 
async function setup() {
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  noStroke()
 
  xLoc = width - 100
  yLoc = 100
 
  makeSky()
 
  for (let i = 0; i < 8; i++) {
    clouds.push({
      x: random(width),
      y: random(height * 0.7),
      size: random(80, 160),
      speed: random(0.2, 0.8)
    })
  }
 
  // load the frame sequence
  for (let i = 1; i <= NUM_FRAMES; i++) {
    frames[i - 1] = await loadImage("fly_cycle_png_sequence/" + i + ".png")
  }
  loaded = true
}
 
function draw() {
  applyTextStyle()
 
  if (!loaded) {
    background(232, 247, 252)
    fill(0)
    textAlign(CENTER)
    text("loading...", width / 2, height / 2)
    return
  }
 
  image(sky, width / 2, height / 2)
  drawClouds()
 
  // ----- controls -----
  let moving = false
 
  if (keyIsDown(RIGHT_ARROW)) {
    dir = -1
    xLoc += speed
    moving = true
  }
  if (keyIsDown(LEFT_ARROW)) {
    dir = 1
    xLoc -= speed
    moving = true
  }
  if (keyIsDown(UP_ARROW)) {
    yLoc -= speed
    moving = true
  }
  if (keyIsDown(DOWN_ARROW)) {
    yLoc += speed
    moving = true
  }
 
  // keep the bird on screen
  xLoc = constrain(xLoc, 50, width - 50)
  yLoc = constrain(yLoc, 50, height - 50)
 
  if (moving) {
    counter++
    // leave a sparkle behind the bird every few frames
    if (frameCount % 3 === 0) {
      let halfW = frames[0].width / 2          // how wide the bird is
      sparkles.push({
        x: xLoc + dir * random(halfW * 0.5, halfW),   // out behind the tail
        y: yLoc + random(-30, 30),
        xV: dir * random(0.2, 1),              // drift away from the bird
        yV: random(0.2, 0.8),                  // and slowly downward
        size: random(10, 22),
        life: 1,
        col: random(sparkleColors)
      })
    }
  }
 
  // ----- the bird -----
  // change sprite frame every 4th draw so the flap isn't too fast
  let currentFrame = frames[floor(counter / 4) % frames.length]
 
  // float up and down gently when not moving
  let bob = moving ? 0 : sin(frameCount * 0.08) * 6
 
  push()
  translate(xLoc, yLoc + bob)
  scale(dir, 1)
  image(currentFrame, 0, 0)
  pop()
 
  drawSparkles()   
 

  fill(255, 200)
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
 

function makeSky() {
  sky = createGraphics(width, height)
  let top = color(190, 225, 255)
  let bottom = color(255, 225, 240)
  for (let y = 0; y < height; y++) {
    sky.stroke(lerpColor(top, bottom, y / height))
    sky.line(0, y, width, y)
  }
}
 
function drawClouds() {
  noStroke()
  fill(255, 255, 255, 190)
  for (let c of clouds) {
    ellipse(c.x, c.y, c.size, c.size * 0.5)
    ellipse(c.x - c.size * 0.3, c.y + 5, c.size * 0.6, c.size * 0.4)
    ellipse(c.x + c.size * 0.3, c.y + 5, c.size * 0.7, c.size * 0.4)
 
    c.x += c.speed
    if (c.x > width + c.size) c.x = -c.size   
  }
}
 
function drawSparkles() {
  noStroke()

  for (let i = sparkles.length - 1; i >= 0; i--) {
    let s = sparkles[i]
    s.x += s.xV      
    s.y += s.yV
    s.life -= 0.012  
 
    if (s.life <= 0) {
      sparkles.splice(i, 1)
    } else {
      let c = color(s.col)
      fill(red(c), green(c), blue(c), 255 * s.life)
      star(s.x, s.y, s.size * s.life)
    }
  }
}
 

function star(x, y, r) {
  beginShape()
  for (let i = 0; i < 8; i++) {
    let angle = (TWO_PI / 8) * i
    let d = i % 2 === 0 ? r : r * 0.3
    vertex(x + cos(angle) * d, y + sin(angle) * d)
  }
  endShape(CLOSE)
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
  text("Sketch 1", 70, 26)
}
 
function overButton() {
  return mouseX > 10 && mouseX < 130 && mouseY > 10 && mouseY < 42
}
 
function mousePressed() {
  if (overButton()) {
    window.location.href = "week6_2.html"
  }
}
 
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  makeSky()
}
 