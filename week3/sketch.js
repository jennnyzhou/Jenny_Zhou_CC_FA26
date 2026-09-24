let r = 0

function setup(){
    createCanvas(500,500)
    rectMode(CENTER)
    angleMode(DEGREES)
}

function draw(){
    background(0)
    noStroke()
    fill(250, 0, 0)

    push()
    translate(width/2+40,height/2-75)
    rotate(r)
    ellipse(0,0,50)

    translate(0,-40)
    rotate(r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(r)
    ellipse(0,0, 50)
    pop()

    push()
    translate(width/2-40,height/2-75)
    rotate(-r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(-r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(-r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(-r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(-r)
    ellipse(0,0, 50)

    translate(0,-40)
    rotate(-r)
    ellipse(0,0, 50)
    pop()

    push()
    noFill()
    stroke(255)
    strokeWeight(2)

    translate(width/2,height/2)
    fill(255,220,200)
    ellipse(0,0,150, 150)
    
    fill(0)
    ellipse(-25,-10,10)
    ellipse(25,-10,10)

    noFill()
    stroke(0)
    arc(0,20,50,40,0,180)
    pop()

    r+=1
}