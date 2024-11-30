//followed video provided by Garrit Shaap on perlin noise
//https://play.ju.se/media/Noise+examples%2C+and+Vera+Moln%C3%A1r/0_3pcpvm3q

function setup() {
  createCanvas(600, 600);
  frameRate(4);
}

const size = 10;
const divider = 20;
const numRows = 60;
const numCols = 60;

let counter = 0;

function draw() {
  background(255);
  noStroke();

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
    
      const value = noise(x/divider, y/divider, counter) * size;
      rect(size / 2 + x * size, size / 2 + y * size, value);

      const r = random(0, 255);
      const g = random(0, 255);
      const b = random(0, 255);

      fill(r, g, b);
      
    }
  }
counter += 0.1;
}
