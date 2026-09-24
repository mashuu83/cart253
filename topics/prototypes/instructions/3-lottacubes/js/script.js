/**
 * A Lotta Cubes
 * Matthew Brandon Thompson
 * 
 * A Drawing of lots and lots and lots of cubes, randomly placed on the canvas, with colors chosen from a curated selection
 * 
 * Uses some code from The section entitled: The Default: Positioning Objects in a Scene
 * on the page: https://p5js.org/tutorials/coordinates-and-transformations/
 */

"use strict";

/**
 * Define the 720p Canvas, WebGL rendering mode for 3D, and some variable arrays to hold the info for the cubes
*/

//Define empty arrays for position info
let positions = [], scales = [], rotations = [];

//Define an array for the colors
let colors = ["red", "green", "blue"];

function setup() {
    createCanvas(1280, 720, WEBGL);
    //Fill the arrays with random values
    //Run this loop 5 thousand times
    for (let i = 0; i < 5000; i++) {
    //Create 3 random values for each entry to be the x,y,z axis
    positions.push(createVector(
      random(-width / 2, width / 2),
      random(-height / 2, height / 2),
      random(-width / 2, width / 2)
    ));
    // Create 3 random angles to be the x, y, z rotations for each cube
    rotations.push(createVector(
      random(TWO_PI),
      random(TWO_PI),
      random(TWO_PI)
    ));
    // Create random scale values from .25 to 2.5
    scales.push(random(0.25, 2.5));

  }
}


/**
 * Draw a whole entire metric ton of cubes
*/
function draw() {
    //Black Background
    background(0);

    //Set default camera info
    orbitControl();
    noStroke();
    lights();

    for (let i = 0; i < 5000; i += 1) {
    push();
    translate(
      positions[i].x,
      positions[i].y,
      positions[i].z
    );
    rotateX(rotations[i].x);
    rotateY(rotations[i].y);
    rotateZ(rotations[i].z);
    scale(scales[i]);
    box(20);
    pop();
  }
}