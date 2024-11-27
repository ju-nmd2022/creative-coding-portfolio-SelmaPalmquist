//followed tutorial provided by Garrit Shaap on the later half of https://play.ju.se/media/Noise+examples%2C+and+Vera+Moln%C3%A1r/0_3pcpvm3q
function setup() {
  createCanvas(1000, 1000);
}

const size = 100; 
const layers = 10; 

function drawLayers(x, y, size, layers) {
  
  rectMode(CENTER);

  
  for (let i = 0; i < layers; i++) {
  push();
  translate(x, y);


    //random movement for the squares
    const rotation = random(0, 360);
    rotate(rotation);

    const s = (size / layers) * (layers - i); 

    //random color for each layer
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);
    fill(r, g, b);

    //random stroke thickness for each layer. Bassima showed me this specific randomisation syntax
    strokeWeight(random(1, 4));
    rect(0, 0, s, s);
    pop();
  }
}

function draw() {
  background(0);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
  }
  
  noLoop();
}



