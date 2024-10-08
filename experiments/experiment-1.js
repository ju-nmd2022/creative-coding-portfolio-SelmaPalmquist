
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
}

function square(){
  fill(255);
  rect(100,100,100);
}

/*
let squareSize = 1;
let amount = 17;
let gap = 40;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
}

function squares() {
  noStroke();
  let square = 1;

  for (let y = 0; y < square; y++) {
    for (let x = 0; x < square; x++) {
      fill(255, 155);
      rect(x, y, 40);

      //rotate(PI / 5);
    }
  }
}

function draw() {
  // to center the grid in the canvas (y coordinates)
  let y = (height - squareSize * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    // to center the grid in the canvas (x coordinates)
    let x = (width - squareSize * amount - gap * (amount - 1)) / 2;
    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);
      squares();
      pop();
      x += squareSize + gap;
    }
    y += squareSize + gap;
  }
}
*/




/*
//my original zach liebermann bullsht
let gap = 2;
let stripeWidth = 3;
let amount = 1000;


function setup (){
    createCanvas(innerWidth, innerHeight);
    background(247,241,193);
    frameRate(10);
}

function shapes (){
  rotate(PI / random(0, 3));
  rect(random(0, 600), (random(0, 600)), random(10, 40));

}

function draw(){
  noStroke();

  for(let y = 0; y < 1; y++) {
    for (let x = 0; x < amount; x++) {
      fill(random(0, 255), random(0, 255), random(0, 255));
    rect(x,y,stripeWidth,innerHeight);
    x += stripeWidth + gap;
    }
    y += stripeWidth + gap;

    shapes();
}
}
*/