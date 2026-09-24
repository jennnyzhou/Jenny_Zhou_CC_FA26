
let redcol;
let greencol;
let bluecol;

let rellipse = 0;
let change = 1;
let gellipse = 0
let bellipse = 0

function setup() {
  
  createCanvas(500, 500);
  redcol = random(0,255)
  console.log(redcol)
  
  greencol = random(0,255)
  console.log(greencol)
  
  bluecol = random(0,255)
  console.log(bluecol)
  
   background(redcol,greencol,bluecol)
  
}

function draw() {

  rellipse = rellipse + change;
  console.log(rellipse)
  
  if (rellipse > 250){
    change = -1
  }
  
  if (rellipse < 0){
    change = 1
  }
  
  
  gellipse = gellipse + change;
  console.log(gellipse)
  
  if (gellipse > 250){
    change = -1
  }
  
  if (gellipse < 0){
    change = 1
  }
  
  
  bellipse = bellipse + change;
  console.log(bellipse)
  
  if (bellipse > 250){
    change = -1
  }
  
  if (bellipse < 0){
    change = 1
  }
  
  ellipse(mouseX, mouseY, 50, 50);
  fill (55,gellipse,120)
  strokeWeight(0)
}

