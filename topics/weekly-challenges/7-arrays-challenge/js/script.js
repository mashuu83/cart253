/**
 * Boingo
 * Pippin Barr edited by Matthew and Ilianna
 *
 * A ball that bounces around on the canvas
 */

//Define an array of balls
let balls = [];
//let ball1 = undefined; // Will create it with createBall()

/**
 * Create the canvas and the ball
 */
function setup() {
  // Create the canvas
  createCanvas(400, 400);
  // Create the ball
  balls.push(createBall());
}

/**
 * Creates a random ball
 */
function createBall() {
  // Create a ball object with appropriate properties
  const newBall = {
    // Position and dimensions
    //Set the dimensions to be the mouse position
    x: mouseX,
    y: mouseY,
    size: 20,
    // Colour
    fill: "#000000",
    // Movement
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
  
  //DEPRECATED - Did in definition instead
  //Create the ball at the mouse position
  //newBall.x = mouseX;
  //newBall.y = mouseY;
  
  return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
  background("#87ceeb");
  
  //This is a FOR OF loop which goes through each entry in an array
  for (let ball of balls){
  moveBall(ball);
  bounceBall(ball);
  drawBall(ball);
  }

}

/**
 * Moves the ball according to its velocity
 */
function moveBall(_ball) {
  _ball.x += _ball.velocity.x;
  _ball.y += _ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(_ball) {
  // Check if the ball has reached the left or right
  const bounceX = (_ball.x > width || _ball.x < 0);
  // Check if the ball has reached the top or bottom
  const bounceY = (_ball.y > height || _ball.y < 0);
  
  // Handle bouncing horizontally
  if (bounceX) {
    _ball.velocity.x *= -1;
  }
  // Handle bouncing vertically
  if (bounceY) {
    _ball.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(_ball) {
  push();
  noStroke();
  fill(_ball.fill);
  ellipse(_ball.x, _ball.y, _ball.size);
  pop();
}

//Add balls on click
function mouseClicked(){
    balls.push(createBall());
}
