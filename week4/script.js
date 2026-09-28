// let wavesPerCanvas = 2
// let amplitude = 50
// //amplitude goes up, shape gets taller
// let offset = 0;
// let yLoc
// let speed = 0.01

let numWaves = 10

function setup(){
    createCanvas(windowWidth, windowHeight)
    // yLoc = height/2
    noFill()

}

function draw(){
    background(230)

    // let v = floor(random(3,20))
    // nShape(mouseX, mouseY, v, v*4)

    // sinWave(4, 150, height/2, 0.05)
    // this makes the sinWave function run

    //   sinWave(8, 80, height*0.8, 0.2)

    //   sinWave(100, 80, height*0.2, 0.01)

    // for(let i=0; i<numWaves; i++){

    //     let yLoc = map(i, 0, numWaves, 0, 1)*height
    //     let speed
    //     sinWave(i, 20, yLoc, 0.01)
    // }

    noiseWave(10,100,height/2,0.05)
    }

function sinWave(wavesPerCanvas, amplitude, yLoc, speed){
    //removed the offset from the function

    let offset = frameCount*speed
           
    push()

    translate(0,yLoc)

    beginShape()
    for(let i=0; i<width; i++){

        mappedI = map(i,0,width,0, wavesPerCanvas*TWO_PI)

        let y = sin(mappedI - offset)*amplitude
        let x = i

        vertex(x,y)
   
        }
        endShape()

        pop()

        //offset is what is making it move across the screen (mappedI - offset)
    }

    function nShape(xLoc, yLoc, numVertices, radius) {

       push()
        beginShape()
        translate (xLoc, yLoc)
        for(let i=0; i<numVertices; i++){
            let mappedI = map(i, 0, numVertices, 0, TWO_PI)
            let x = sin(mappedI)*radius
            let y = cos(mappedI)*radius

            vertex(x, y)
     
        }
        endShape(CLOSE)
        pop()
    }

    function noiseWave(density, amplitude, yLoc, speed){
        let offset = frameCount*speed
        push()
        translate(0, yLoc)

        beginShape()
        for(let x=0; x<width; x++){
            let seed =  map(x, 0, width, 0, density)+offset
            let y = noise(x)*amplitude
            vertex(x,y)
        }
        endShape()
        pop()
    }

    // function  mousePressed(){

    //     let v = floor(random(3,30))
    //     nShape(mouseX, mouseY, v, v*4)
    // }

