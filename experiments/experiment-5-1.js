//tone.js will go here. the idea is to make the sound change based on shape and size
//started off by using this https://github.com/Tonejs/Tone.js/blob/main/examples/simpleHtml.html
//and following this tutorial from youtube https://www.youtube.com/watch?v=7ZhbKclhDf4 + help creating the oscillator from https://ju.slides.com/garrit/cc2024-generative-sound?token=oNT3eWri#/3/1
//as well as ChatGPT for help with allowing AudioContext according to the Web Audio API to let the sounds show up + volume adjustment
const volume = new Tone.Volume(-10).toDestination();
const oscillator = new Tone.Oscillator({frequency: 440, type: "sine", }).connect(volume);
let isToneStarted = false;

function setup() {
    createCanvas(600, 600);
    background(0);
    frameRate(0.5);
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
        oscillator.start();
      });
    }
  }
}

  function drawShapes() {
    noStroke();
    //randomized position and size for each shape
    let xPosition = random(0, 400); 
    let yPosition = random(0, 400); 
    let size = random(10, 150); 
  
    //randomized color for each shape
    fill(random(100, 255), random(100, 255), random(100, 255));
  
    //type of shape and thereby the sound it emitts is randomized
    let shape = Math.floor(Math.random() * 2);
    if(shape === 0){
        rect(xPosition, yPosition, size, size);
        playSound(size, "square");
    } else {
        ellipse(xPosition, yPosition, size, size);
        playSound(size, "sine");
    }
  }
  

  function playSound(size, soundType) {
    //volume changes based on size to give the effect of different proximity
    const mappedVolume = map(size, 10, 150, -40, -5);
    volume.volume.value = mappedVolume; 
    oscillator.type = soundType;
    
  }
 
    function draw() {
      if (isToneStarted) {
        background(0);
        drawShapes();
      } else {
        textAlign(CENTER, CENTER);
        fill(0);
        textSize(16);
        text("Click here to start!", width / 2, height / 2 - 50);
      }
      } 
