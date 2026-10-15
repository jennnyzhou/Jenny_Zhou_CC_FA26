let frames = []

async function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(12)
    rectMode(CENTER)
    imageMode(CENTER)

    for( let i = 1; i <= 12; i++) {
    // let img = loadImage('walk_cycle_png_sequence/' + i + '.png')
    frames[i-1] = await loadImage("walk_cycle_png_sequence/" + i + '.png')
}
}

let counter = 0
let xLoc = 0
let xV = 7.5
let dir = 1

function draw(){
    background(200)

    let currentFrame = frames[counter % frames.length]

    push()
    translate(xLoc, height/2)
    scale(dir,1)

    if (keyIsDown(RIGHT_ARROW)) {
        // key++
        dir = 1
        xV = 7.5
        counter++
        xLoc+=xV

    }

    if (keyIsDown(LEFT_ARROW)) {
        // key++
        
        dir = -1
        xV = -7.5
        counter++
        xLoc+=xV

    }
    // if (xLoc>width){
    //     dir=-1
    //     xV = 7.5
    // }
    image(currentFrame, 0, 0)
    pop()
    
    fill (0)

    if(dist(xLoc, height/2, width/2, height/2)<50){
        fill(200,150,0)

        window.location.href = "../index.html"

    }
    rect(width/2, height/2, 100, 200)
}