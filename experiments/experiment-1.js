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


