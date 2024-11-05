//followed video provided by Garrit Shaap on perlin noise
//https://play.ju.se/media/Noise+examples%2C+and+Vera+Moln%C3%A1r/0_3pcpvm3q

function setup() {
  createCanvas(600, 600);
}

const size = 10;
const divider = 20;
const numRows = 60;
const numCols = 60;

function draw() {
  background(255);
  noStroke();

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const noiseValue = noise(x / divider, y / divider);
      const value = noiseValue * size;
      
      const r = random(0, 255);
      const g = random(0, 255);
      const b = random(0, 255);

      fill(r, g, b);
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }
  noLoop();
}



/*
let x = 0;
let y = 0;
let s = 40;
let d = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
}

function square(){
  fill(255);
  strokeWeight(3);
  rect(x,y,s - d);

  
  for (let s = 0; s < square; s++) {
    for (let d = 0; d < square; d++) {

      //rotate(PI / 5);
    }
  }
}

function draw(){
  square();
}
*/