//followed tutorial provided by Garrit Shaap on the later half of https://play.ju.se/media/Noise+examples%2C+and+Vera+Moln%C3%A1r/0_3pcpvm3q

function setup() {
    createCanvas(1000, 1000);
  }
  
  const size = 100; 
  const layers = 10; 
  
  function drawLayers(x, y, size, layers) {
    noFill();
    rectMode(CENTER);
  
    //random movement for the squares
    const direction = Math.floor(Math.random() * 4); 
    let moveX = 0;
    let moveY = 0;

    if (direction === 0) moveY = -5; //move up
    if (direction === 1) moveY = 5; //move down
    if (direction === 2) moveX = -5; //move left
    if (direction === 3) moveX = 5; //move right
  
    for (let i = 0; i < layers; i++) {
      const s = (size / layers) * (layers - i); 
  
      //random stroke thickness for each layer. Bassima showed me this specific randomisation syntax
      strokeWeight(random(1, 5));
      rect(x + moveX, y + moveY, s, s);
    }
  }
  
  function draw() {
    background(255);
  
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
      }
    }
    
    noLoop();
  }
  