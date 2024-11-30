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

    //random color for each layer with pretty selection of colors
    fill(random(100, 255), random(100, 255), random(100, 255));

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



