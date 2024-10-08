let pendulums = [];
let pendulumCount = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < pendulumCount; i++){
    pendulums[i] = new Pendulum(i);
  }
}

function draw() {
	blendMode(NORMAL);
  background(255 );
  translate(width / 2, height / 2);
  for(let i = 0; i < pendulumCount; i++){
    pendulums[i].display();
    pendulums[i].update();
  }
}

class Pendulum {
  constructor(n){
    this.angle = 0;
    this.angleSpeed = 0.01 + n * 0.004; 
    this.radius = 30 + n * 6; 
  }
  
  update() {
    this.angle += this.angleSpeed;
  }
  
  display(){
    let x = this.radius * cos(this.angle);
    let y = this.radius * sin(this.angle);
    stroke(0,100);
    line(0, 0, x, y);
    fill(0);
    ellipse(x, y, 5, 5);
  }
}