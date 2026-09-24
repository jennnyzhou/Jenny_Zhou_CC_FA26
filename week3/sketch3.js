let w, h;
let numRects = 20;

function setup(){
    createCanvas(500, 500)

    w = width/numRects
    h = height/numRects

    angleMode(DEGREES)

    background(0)
    frameRate(30) 
}


function draw(){

    background(255, 254, 214)

    translate(20,20)

    for(let x=0; x<numRects; x++){

        for(let y=0; y<numRects; y++){
            push()
            let px = w*x
            let py = h*y
            translate(px, py)

            let d = dist(mouseX-20, mouseY-20, px, py)

            let maxDist = 150
            let t = constrain(1 - d/maxDist, 0, 1)
            let size = lerp(w*0.5, w*1.5, t)

            noStroke()
            fill(191, 255, 255, 100)
            circle(0, 0, size + 5)

            stroke(0)
            strokeWeight(1)
            noFill()
            circle(0, 0, size)

            pop()
        }
    }

}