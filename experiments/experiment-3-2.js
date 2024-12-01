//base code copied from the Complexity lesson https://ju.slides.com/garrit/cc2024-complexity?token=Nl2_bLqJ#/9/6
class Agent {
    constructor(x, y, maxSpeed, maxForce) {
      this.position = createVector(x, y);
      this.lastPosition = createVector(x, y);
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(0, 0);
      this.maxSpeed = maxSpeed;
      this.maxForce = maxForce;

      //randomize colors from selected colors that are similar to the inspo picture
      let c = Math.floor(Math.random() * 6);

      if (c === 0) {
        this.color = color(105, 100, 100, 100);
      } else if (c === 1) {
        this.color = color(56, 100, 100, 100);
      } else if (c === 2) {
        this.color = color(10, 100, 100, 100);
      } else if (c === 3) {
        this.color = color(254, 88, 100, 100);
      } else if (c === 4) {
        this.color = color(184, 100, 100, 100);
      } else {
        this.color = color(309, 100, 100, 100);
      }
    }
  
    follow(desiredDirection) {
      desiredDirection = desiredDirection.copy();
      desiredDirection.mult(this.maxSpeed);
      let steer = p5.Vector.sub(desiredDirection, this.velocity);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
  
    applyForce(force) {
      this.acceleration.add(force);
    }
  
    update() {
      this.lastPosition = this.position.copy();
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxSpeed);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  
    checkBorders() {
      if (this.position.x < 0) {
        this.position.x = innerWidth;
        this.lastPosition.x = innerWidth;
      } else if (this.position.x > innerWidth) {
        this.position.x = 0;
        this.lastPosition.x = 0;
      }
      if (this.position.y < 0) {
        this.position.y = innerHeight;
        this.lastPosition.y = innerHeight;
      } else if (this.position.y > innerHeight) {
        this.position.y = 0;
        this.lastPosition.y = 0;
      }
    }
  
    draw() {
      push();
      stroke(this.color);
      strokeWeight(5);
      line(
        this.lastPosition.x,
        this.lastPosition.y,
        this.position.x,
        this.position.y
      );
      pop();
    }
  }
  
  function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    colorMode(HSB, 360, 100, 100, 100);
    field = generateField();
    generateAgents();
  }
  
  function generateField() {
    let field = [];
    noiseSeed(Math.random() * 100);
    for (let x = 0; x < maxCols; x++) {
      field.push([]);
      for (let y = 0; y < maxRows; y++) {
        const value = noise(x / divider, y / divider) * Math.PI * 2;
        field[x].push(p5.Vector.fromAngle(value));
      }
    }
    return field;
  }
  
  function generateAgents() {
    for (let i = 0; i < 200; i++) {
      let agent = new Agent(
        Math.random() * innerWidth,
        Math.random() * innerHeight,
        4,
        0.3
      );
      agents.push(agent);
    }
  }
  
  const fieldSize = 50;
  const maxCols = Math.ceil(innerWidth / fieldSize);
  const maxRows = Math.ceil(innerHeight / fieldSize);
  const divider = 4;
  let field;
  let agents = [];
  
  function draw() {
    for (let agent of agents) {
      const x = Math.floor(agent.position.x / fieldSize);
      const y = Math.floor(agent.position.y / fieldSize);
      const desiredDirection = field[x][y];
      agent.follow(desiredDirection);
      agent.update();
      agent.checkBorders();
      agent.draw();
    }
  }


/*function setup() {
createCanvas(1000,1000);
colorMode(HSB, 360, 120, 100, 25);
background(0);
strokeWeight(3);
resolutionAngle = 0.03;
resolutionColor = 0.002;
gap = 15;
length = 8;

for (i=0; i < width; i += gap){
    for (j=0; j < height; j += gap){
        noise2 = noise(i * resolutionColor, j * resolutionColor);
        h = floor(noise2*5)*72;
        stroke(h, 90, 90, 150);
        x = i;
        y = j;
        
    for(k=0;k<10;k++){
        noise1 = noise(i * resolutionAngle, j * resolutionColor);
        angle = noise1 * PI * 2;
        newX = sin(angle) * length + x;
        newY = cos(angle) * length + y;
        line(x,y,newX, newY);
        x = newX;
        y = newY;
        }
    } 
}
}
*/
