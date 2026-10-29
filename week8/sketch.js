// function setup () {
//     createCanvas(400,400)
//     pixelDensity(1)
// }

// function draw() {
//     // background(0)
//     loadPixels()

//     let px = pixels
//     // pixels[0] = 255

//     let index=0
//     for(let y = 0; y<height; y++){
//         for(let x=0; x<width; x++) {

//             let mappedX = map(x,0,width,0,PI*8)
//             let mappedY = map(y,0,height,0,PI*8)
//             // px[index]= map(x,0,width,0,255)
//             px[index]= abs (sin(mappedX))*255
//         //     let r = 255;
//             px[index+1]=0
//             px[index+2] = abs(sin(mappedY)*255)
//             px[index+3] = random(255)


//     //         px[index]=r;
//             index += 4;
//         }
//     }
//     updatePixels()

// }