p5.disableFriendlyErrors = true;
let bDoExportSvg = false;

const SPACING = 70;
let pts = [];
let seed = 1;

function setup() {
  createCanvas(576, 384);
  noFill();
  stroke(0);
  strokeWeight(1);
  generate();
}

function generate() {
  randomSeed(seed);
  pts = [];
  for (let x = SPACING / 2; x < width; x += SPACING) {
    for (let y = SPACING / 2; y < height; y += SPACING) {
      pts.push({
        x: x + random(-20, 20),
        y: y + random(-20, 20),
        d: random(8, SPACING * 0.7),
      });
    }
  }
}

function draw() {
  background(255);

  if (bDoExportSvg) {
    beginRecordSvg(this, "circle_web.svg");
  }


  let reach = map(mouseX, 0, width, 0, 160, true);


  let circles = pts.map((p) => {
    let grow = map(dist(mouseX, mouseY, p.x, p.y), 0, 120, 1.8, 1, true);
    return { x: p.x, y: p.y, r: (p.d * grow) / 2 };
  });


  for (let i = 0; i < circles.length; i++) {
    for (let j = i + 1; j < circles.length; j++) {
      let a = circles[i];
      let b = circles[j];
      let d = dist(a.x, a.y, b.x, b.y);
      if (d < reach && d > a.r + b.r) {
        let ux = (b.x - a.x) / d;
        let uy = (b.y - a.y) / d;
        line(a.x + ux * a.r, a.y + uy * a.r, b.x - ux * b.r, b.y - uy * b.r);
      }
    }
  }

  for (let c of circles) circle(c.x, c.y, c.r * 2);

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}

function keyPressed() {
  if (key == "s") {
    bDoExportSvg = true;
  }
  if (key == "r") {
    seed = floor(random(100000));
    generate();
  }
}