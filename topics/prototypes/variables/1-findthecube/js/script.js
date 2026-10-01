/**
 * Find the cube
 * Matthew Brandon Thompson
 * 
 * Find the single slowly rotating cube in the field
 * 
 * Uses some code from The section entitled: The Default: Positioning Objects in a Scene
 * on the page: https://p5js.org/tutorials/coordinates-and-transformations/
 * 
 * Uses a color palette from https://www.colourlovers.com/palette/353921/day-dreaming
 */

"use strict";

/**
 * Define the 720p Canvas, WebGL rendering mode for 3D, and some variable arrays to hold the info for the cubes
*/

//Define empty arrays for position info
let positions = [], scales = [], rotations = [], colors = [];

//Define an array for the colors
// Pallette taken from https://www.colourlovers.com/palette/353921/day-dreaming
// Made by user Skyblue2u on 26 April 2008
let colorset = ["#FFA398", "#FFC48C", "#FCE5C0", "#9AD9D2", "#D0F7A6"];

// Set the number of cubes
let howmanycubes = 5000;

// Choose one magic cube
// Using int/floor to hopefully make it a whole number?
// let magiccube = random(1, howmanycubes);

function setup() {
  createCanvas(1280, 720, WEBGL);
  //Fill the arrays with random values
  //Run this the set number of times
  for (let i = 0; i < howmanycubes; i++) {
    //Create 3 random values for each entry to be the x,y,z axis
    positions.push(createVector(
      random(-width / 2, width / 2),
      random(-height / 2, height / 2),
      random(-width / 2, width / 2)
    ));
    // Create 3 random angles to be the x, y, z rotations for each cube
    // Not currently used in this version but leaving in place, in case I try a version where they all have different alignments to begin
    rotations.push(createVector(
      random(TWO_PI),
      random(TWO_PI),
      random(TWO_PI)
    ));
    // Create random scale values from .25 to 2.5
    scales.push(random(0.25, 2.5));
    // Choose a random color for each cube
    colors.push(random(colorset));
  }
}

/**
 * Draw a whole entire metric ton of cubes
*/
function draw() {
  //Black Background
  background(0);

  //Set default camera info
  // THIS ENABLES CAMERA CONTROL!! Scrolling, left drag and right drag!!
  orbitControl();
  noStroke();

  // Without the lights, there will be no shading on the sides of the cubes
  lights();

  // Run howmanycubes times to create the drawing
  for (let i = 0; i < howmanycubes; i += 1) {
    push();

    // Move to the randomly generated spot created in setup
    translate(
      positions[i].x,
      positions[i].y,
      positions[i].z
    );

    // Rotate the random values created in setup
    // Commenting this out to have all cubes have the same alignment
    // rotateX(rotations[i].x);
    // rotateY(rotations[i].y);
    // rotateZ(rotations[i].z);

    // Scale to the random sizes created in setup
    scale(scales[i]);

    // Set a random fill color chosen from the colorset
    fill(colors[i]);

    //Trying a different method for rotation
    //This one works! Commenting out the random rotation for now
    //Choose just one cube to go the opposite way
    if (i == floor(howmanycubes / 2)) {
      //The scale is a test line to see if the code is working by making the opposite cube bigger
      //scale(20);

      rotateX(frameCount * -0.02);
      rotateY(frameCount * -0.02);
    }
    //Make the rest of the cubes go the other way
    else {
      rotateX(frameCount * 0.02);
      rotateY(frameCount * 0.02);
    }

    // Draw a Cube
    box(20);
    // Clear out all the data for the next loop
    pop();

    // //Spin these boys
    // // This seems to make the entire field rotate at a smooth rate, commenting out for now to see if I can get the boxes to spin independently
    // let axis = [1, 1, 0];
    // let angle = frameCount * 0.0000001;
    // rotate(angle, axis);



  }
}