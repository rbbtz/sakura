// Variables to store the particle and sakura systems.
// pollen array will store Pollen objects that represent pollen particles.
let pollen = [];
// sakura array will store Sakura objects that represent sakura petals.
let sakura = [];

// Mauve color in RGB format.
// This color will be used for drawing both pollen particles and sakura petals.
const mauve = [224, 176, 255];

function setup() {
  // This function is called once when the program starts.
  // It's used to define initial environment properties such as screen size
  // and to load media such as images and fonts as the program starts.
  
  createCanvas(windowWidth, windowHeight);
  // This will create a canvas that fills the window.
  
  noStroke();
  // Disables drawing the stroke (outline).

  // Generate pollen particles.
  // For loop runs 500 times to create 500 Pollen objects.
  for(let i = 0; i < 500; i++) {
    pollen.push(new Pollen(random(width), random(height), random(-0.5, 0.5), random(-0.5, 0.5)));
    // Each Pollen object is given random x,y coordinates within the canvas and a random velocity.
  }

  // Generate sakura petal structures.
  // For loop runs 5 times to create 5 Sakura objects.
  for(let i = 0; i < 5; i++) {
    sakura.push(new Sakura(width/5 * i + width/10, height));
    // Each Sakura object is given specific x,y coordinates to evenly distribute them across the canvas.

  // Generate additional sakura petal structures at the bottom
  for(let i = 0; i < 10; i++) {
    sakura.push(new Sakura(width/10 * i, height));
    }
  }
}

function draw() {
  // Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block 
  // until the program is stopped or noLoop() is called.
  
  background(0);
  // This will set the background color of the canvas to black.

  // Draw pollen particles.
  // For each Pollen object in the pollen array, we will move it and display it.
  for(let p of pollen) {
    p.move();
    p.display();
  }

  // Draw sakura.
  // For each Sakura object in the sakura array, we will make it grow and display it.
  for(let p of sakura) {
    p.grow();
    p.display();
  }
}

// Defining the Pollen class
class Pollen {
  constructor(x, y, vx, vy) {
    // The Pollen constructor takes in x, y coordinates and velocity (vx, vy).
    this.pos = createVector(x, y); // Position vector
    this.vel = createVector(vx, vy); // Velocity vector
  }
  
  move() {
    // The move function adds the velocity vector to the position vector.
    // This simulates movement by changing the position over time.
    // Also, it includes a boundary check where if the pollen reaches the edge of the canvas,
    // it will bounce back by reversing its velocity.
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  
  display() {
    // The display function draws a circle at the pollen's position with the "mauve" color.
    fill(mauve[0], mauve[1], mauve[2], 127);
    circle(this.pos.x, this.pos.y, 5);
      }
}

// Defining the Sakura class
class Sakura {
  constructor(x, y) {
    // The Sakura constructor takes in x, y coordinates as the base of the sakura petals.
    this.base = createVector(x, y);
    this.len = 0; // Initial length of the sakura petal is 0
    this.angle = 0; // Initial angle of the sakura petal is 0
  }

  grow() {
    // The grow function changes the length and angle of the sakura petals over time using noise function for natural randomness.
    this.len = (noise(this.base.x + millis() / 2000.0) - 0.5) * height / 3;
    this.angle = (noise(this.base.y + millis() / 2000.0) - 0.5) * PI;
  }
  
  display() {
    // The display function draws the tree from its base point, rotating it according to its angle and making it curve using bezierVertex.
    push();
    translate(this.base.x, this.base.y);
    rotate(this.angle);
    fill(mauve[0], mauve[1], mauve[2]);
    beginShape();
    vertex(0, 0);
    bezierVertex(-25, -this.len / 2, -50, -this.len, 0, -this.len);
    bezierVertex(50, -this.len, 25, -this.len / 2, 0, 0);
    endShape(CLOSE);
    pop();
  }
}

// The mousePressed function runs once after every time a mouse button is pressed.
// Every time the mouse is pressed, a new Sakura petal is added to the array at the mouse's x, y position.
function mousePressed() {
  sakura.push(new Sakura(mouseX, mouseY));
}

// The windowResized function is called once every time the browser window is resized,
// and it's used here to adjust the canvas size in response to window size.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

