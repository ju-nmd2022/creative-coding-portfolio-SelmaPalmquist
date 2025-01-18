//tone.js will go here. the idea is to make the sound change based on shape and size
const synth = new Tone.Synth().toDestination();
let isToneStarted = false;

function setup() {
    createCanvas(600, 600);
    background(0);
    frameRate(1);
    fill(255,255,255);
    rect(200, 200, 200, 100);
}

function mousePressed() {
  //check if the click is within the white square
  if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    if (!isToneStarted) {
      Tone.start().then(() => {
        isToneStarted = true;
        console.log("Tone.js started!");
      });
    }
  }
}

  function drawShapes() {
    noStroke();
    //randomized position and size for each shape
    let xPosition = random(0, width); 
    let yPosition = random(0, height); 
    let size = random(10, 150); 
  
    //randomized color for each shape
    fill(random(100, 255), random(100, 255), random(100, 255));
  
    let shape = Math.floor(Math.random() * 2);
    if(shape === 0){
        rect(xPosition, yPosition, size, size);
        playSound(size);
    } else {
        ellipse(xPosition, yPosition, size, size);
        playSound(size);
    }
  }

  function playSound(size) {
    //map the size of the shape to a frequency range between 200Hz and 800Hz
    const frequency = map(size, 10, 150, 200, 800); 
    synth.triggerAttackRelease(frequency, "8n");
  }
 
    function draw() {
      if (isToneStarted) {
        background(0);
        drawShapes();
      } else {
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(16);
        text("Click the white square to start!", width / 2, height / 2);
      }
      } 
