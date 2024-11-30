//followed video provided by Garrit Shaap on perlin noise
//https://play.ju.se/media/Noise+examples%2C+and+Vera+Moln%C3%A1r/0_3pcpvm3q
//and the gradual color change was created based on https://www.youtube.com/watch?v=-MUOweQ6wac&t=60s 
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
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

  let gradient = drawingContext.createLinearGradient(0, 0, 0, height);

  gradient.addColorStop(0, color(56, 100, 100, 0)); 
  gradient.addColorStop(1, color(0, 100, 100, 100));
  drawingContext.fillStyle = gradient;

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
    
      const value = noise(x / divider, y / divider, counter) * size;
   
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
      
    }
  }
counter += 0.1;
}
