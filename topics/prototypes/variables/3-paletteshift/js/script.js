/**
 * Palette Shift
 * Matthew Brandon Thompson
 * 
 * Draw a circle painting inspired by the works of Sonia Delauney which shifts between 6 scenes all having different color palettes
 */

"use strict";

// A pallette object that holds 6 colors
let palette = {
    c1: undefined,
    c2: undefined,
    c3: undefined,
    c4: undefined,
    c5: undefined,
    c6: undefined
}

// A State object that holds the current state
let state = ["monochromatic", "analogous", "complementary", "split-complementary", "double-complementary", "triadic"];

// Some variables to generate random spheres
let positions =[], scales = [], colors= [];

// Potentially add random detail levels

let minSize = 0.01, maxSize = .5; 

// How many spheres to Draw
const howManySpheres = 10000;

// Colorset with starting palette
let colorset = ["#FFA398", "#FFC48C", "#FCE5C0", "#9AD9D2", "#D0F7A6"];

/**
 * Draw a canvas here, 720p
*/
function setup() {
    createCanvas(1280, 720, WEBGL);
    //Fill the arrays with random values
  for (let i = 0; i < howManySpheres; i++) {
    //Create 3 random values for each entry to be the x,y,z axis
    positions.push(createVector(
      random(-width / 2, width / 2),
      random(-height / 2, height / 2),
      random(-width / 2, width / 2)
    ));
    // Create random scale values
    scales.push(random(minSize, maxSize));
    // Choose a random color for each cube
    colors.push(random(colorset));
  }
}

/**
 * Draw a painting which shifts between 6 palettes on click
*/
function draw() {
    //Set color function based on state
    //setColors();
    //Black Background
  background(0);
  //Allow Camera controls
  orbitControl();
  noStroke();
  // Without the lights, there will be no shading on the sides of the cubes
  lights();
  // Run loop to create the drawing
  for (let i = 0; i < howManySpheres; i += 1) {
    push();
    // Move to the randomly generated spot created in setup
    translate(
      positions[i].x,
      positions[i].y,
      positions[i].z
    );
    // Scale to the random sizes created in setup
    scale(scales[i]);
    // Set a random fill color chosen from the colorset
    fill(colors[i]);
    // Draw a Sphere
    sphere(20);
    // Clear out all the data for the next loop
    pop();
    let axis = [1, 1, 0];
    let angle = frameCount * 0.0000001;
    rotate(angle, axis);
  }

}

function setColors(){
    //Check the state and set the palette accordingly
}