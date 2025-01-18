//this is what i tried that doenst work
//tone.js will go here. the idea is to make the sound change based on shape and size
const synth = new Tone.Synth().toDestination();




function setup() {
    createCanvas(600, 600);
    background(0);
    frameRate(0.01);
    fill(255,255,255);
    rect(200, 200, 200, 100);
}

let isToneStarted = false;



function mousePressed() {
    if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
      isToneStarted = true;
      console.log('Tone.js started!');
      Tone.start();
    }
  }

  function drawShapes() {
    noStroke();
    //randomized position and size for each shape
    let xPosition = random(0, 500); 
    let yPosition = random(0, 500); 
    let size = random(10, 150); 
  
    //randomized color for each shape
    fill(random(100, 255), random(100, 255), random(100, 255));
  
    let shape = Math.floor(Math.random() * 3);
    if(shape === 0){
        rect(xPosition, yPosition, size, size);
    } else {
        ellipse(xPosition, yPosition, size, size);
    }
  }
  
  function draw() {
    if (isToneStarted === true) {
        background(0);
        drawShapes();
      } else {
        console.log("Tone didnt start.")
      }
    }



    



    /* 
    playButton.addEventListener("click", () => {
        if(Tone.context.state !== "running"){
            Tone.start();
        }
        synth.triggerAttackRelease("C3", "8n");
    });
  
    console.log(Tone);


let oscillator = new Tone.Oscillator(440, "sine")
.toDestination().start();
*/