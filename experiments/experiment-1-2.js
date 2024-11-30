//followed video provided by Garrit Shaap on perlin noise
//https://play.ju.se/media/Noise+examples%2C+and+Vera+Moln%C3%A1r/0_3pcpvm3q
//and the gradual opacity change was created based on https://p5js.org/reference/p5.Color/setAlpha/ 
function setup() {
  createCanvas(600, 600);
  frameRate(4);
}

const size = 10;
const divider = 20;
const numRows = 60;
const numCols = 60;

let counter = 0;
let c = color(255, 0, 0);

function draw() {
  background(255);
  noStroke();

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
    
      const value = noise(x / divider, y / divider, counter) * size;
     
      //changes opacity gradually. The first row here was completed with the help of ChatGPT
      const alpha = map(y, 10, numRows - 1, 0, 255);
      c.setAlpha(alpha);

      fill(c);
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
      
    }
  }
counter += 0.1;
}
