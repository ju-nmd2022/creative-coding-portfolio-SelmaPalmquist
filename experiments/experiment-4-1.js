//tone.js will go here. the idea is to make the sound change based on shape and size
function setup() {
    createCanvas(1000, 1000);
    background(0);
    frameRate(1);
  }
  
  function drawShapes() {
    noStroke();
    //randomized position and size for each ellipse
    let xPosition = random(0, 900); 
    let yPosition = random(0, 900); 
    let size = random(10, 150); 
  
    //randomized color for each ellipse
    fill(random(100, 255), random(100, 255), random(100, 255));
  
    let shape = Math.floor(Math.random() * 3);
    if(shape === 0){
        rect(xPosition, yPosition, size, size);
    } else {
        ellipse(xPosition, yPosition, size, size);
    }
  }
  
  function draw() {
    drawShapes();
    }
  
  