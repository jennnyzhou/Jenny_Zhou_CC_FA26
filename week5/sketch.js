let students = ['Hello', 'Yay', 'Woah', 'Yeepee']
let font
let student
let col = 0

async function setup() {
    createCanvas(windowWidth, windowHeight)
    font = await 
    loadFont('AppleGaramond-Light.ttf')
    textFont(font)
    textSize(36)
    textAlign(CENTER)
}

function draw() {
    background(255)
    fill(col)
    text(student,width/2, height/2)

    col = col*0.99
}

function mousePressed() {

    let length = students.length

    let i = floor(random (length-1))
    // print(i)

    if (students.length > 0){
        student = students[i]
        students.splice(i,1);
    }


    print(students);

    col = 255 

}