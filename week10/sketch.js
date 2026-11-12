const FOLDER = 'clips/' 
const CLIPS = [
  { file: 'alstroemeria.mov',      col: '#ff7fc8' },
  { file: 'dianthus-chinensis.mov', col: '#f4a6d7' },
  { file: 'gladiolus.mov',         col: '#e6d9ff' },
  { file: 'hibiscus.mov',          col: '#ff3b3b' },
  { file: 'iris-x-hollandica.mov', col: '#3d5aff' },
  { file: 'lilium.mov',            col: '#c2278f' },
  { file: 'nigella-damascena.mov', col: '#4fb0ff' },
  { file: 'paeonia.mov',           col: '#d9a6e8' },
  { file: 'phalaenopsis.mov',      col: '#b79cf0' },
  { file: 'taraxacum-officinale.mov', col: '#f6f0a6' },
]
 
const CELL = 10
const CUTOFF = 110 

let queue = [] 
let current = null 
let vid             
let vidPlaying = false
 

let cam, handPose
let hands = []
let camX, camY, camW, camH
let handOpen = false
let openness = 0
 
 
async function setup() {
  createCanvas(windowWidth, windowHeight)
  pixelDensity(1)
 
  handPose = await ml5.handPose({ flipped: true })
 
  cam = createCapture(VIDEO)
  cam.size(640, 480)
  cam.hide()
  handPose.detectStart(cam, gotHands)
 
  nextClip()
}
 
 
function draw() {
  background(0)
 

  if (vid) image(vid, 0, 0, width, height)
 

  updateHandState()
 

  if (vid) {
    if (handOpen && !vidPlaying) { vid.play(); vidPlaying = true }
    if (!handOpen && vidPlaying) { vid.pause(); vidPlaying = false }
  }


  drawCamera()
}
 
 
function nextClip() {

  if (queue.length === 0) {
    queue = shuffle(CLIPS.slice())

    if (current && queue[0] === current && queue.length > 1) queue.push(queue.shift())
  }
 
  current = queue.shift()
 

  if (vid) vid.remove()
  vidPlaying = false
 
  vid = createVideo(FOLDER + current.file, () => {
    vid.volume(0)
    vid.hide()
    vid.elt.playsInline = true
  })
  vid.onended(nextClip)  
 

  pickCamRect()
}
 
function pickCamRect() {
  camW = constrain(width * 0.28, 220, 360)
  camH = camW * 0.75  
  camX = random(20, width - camW - 20)
  camY = random(20, height - camH - 20)
}
 
 

function updateHandState() {
  if (hands.length === 0) {
    handOpen = false
    return
  }
 
  let k = hands[0].keypoints
  let wrist = createVector(k[0].x, k[0].y)
  let palm = dist(k[0].x, k[0].y, k[9].x, k[9].y)  
 

  let tips = [8, 12, 16, 20]
  let total = 0
  for (let t of tips) total += wrist.dist(createVector(k[t].x, k[t].y))
  let ratio = total / tips.length / palm
 
  openness = lerp(openness, ratio, 0.3)  
 

  if (openness > 1.6) handOpen = true
  if (openness < 1.4) handOpen = false
}
 
 

function drawCamera() {

  push()
  translate(camX + camW, camY)
  scale(-1, 1)
  tint(255, 150)
  image(cam, 0, 0, camW, camH)
  noTint()
  pop()
 
  drawAscii()


  noFill()
  stroke(current.col)
  strokeWeight(2)
  rect(camX, camY, camW, camH)

  if (hands.length > 0) {
    noStroke()
    fill(current.col)
    for (let kp of hands[0].keypoints) {
      circle(camX + kp.x * camW / 640, camY + kp.y * camH / 480, 4)
    }
  }
}


function drawAscii() {
  cam.loadPixels()
  noStroke()
  fill(current.col)
  textSize(CELL)
  textAlign(LEFT, TOP)
 
  for (let y = 0; y < camH; y += CELL) {
    for (let x = 0; x < camW; x += CELL) {

      let cx = floor((camW - 1 - x) * 640 / camW)
      let cy = floor(y * 480 / camH)
      let i = (cy * 640 + cx) * 4
 

      let b = (cam.pixels[i] + cam.pixels[i + 1] + cam.pixels[i + 2]) / 3
 
      if (b > CUTOFF) text('.', camX + x, camY + y)
    }
  }
}
 

  if (hands.length > 0) {
    noStroke()
    fill(current.col)
    for (let kp of hands[0].keypoints) {
      circle(camX + kp.x * camW / 640, camY + kp.y * camH / 480, 4)
    }
  }

 
 

function gotHands(results) {
  hands = results
}
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  pickCamRect()
}
 