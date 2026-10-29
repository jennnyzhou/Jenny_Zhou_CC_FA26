let cam

scale = 16

function setup(){
    createCanvas(400,400)
    // pixelDensity(1)
    // cam = createCapture(VIDEO)
    // cam.size(width/scale, height/scale)

    // print(s)
    // print(cam.height)
}

function draw(){
    loadPixels()

    let px = pixels
    let index = 0

    for(let x = 0; x<width; x++){
        for(let y = 0; y<height; y++){

            let r = px[index]

            index += 4

        }
    }
}