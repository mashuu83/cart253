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
// Might use this to cycle through and display poetry
let possiblestates = ["monochromatic", "analogous", "complementary", "split-complementary", "double-complementary", "triadic"];
let state = possiblestates[0];

// Some variables to generate random spheres
let positions =[], scales = [], colors= [], xdetails = [], ydetails = [];

// Potentially add random detail levels
// let minDetailx = 1, maxDetailx = 20, minDetaily = 1, maxDetaily = 20;

let minSize = 0.03, maxSize = .25; 

// How many spheres to Draw
const howManySpheres = 15000;

let colorset = [];
// Colorset with starting palette
if (state === "monochromatic"){
    colorset = ["#C84133", "#FA4D3D", "#FF957F", "#CE6A58"]
}


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
    
    // Seems to break the renderer so removing for now
    // Create random detail levels
    //xdetails.push(random(minDetailx, maxDetailx));
    //ydetails.push(random(minDetaily, maxDetaily));
    
    // Choose a random color for each cube
    setColors();
  }
}

/**
 * Draw a painting which shifts between 6 palettes on click
*/
function draw() {
    //Set color function based on state
    
    //?? setColors();
    //Doing this in draw makes the colors flash, no bueno

    //set Background based on state
    
    background(0);
    
    //Add Camera controls
    orbitControl();
    noStroke();
    // Add lights
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
    // Set a random color based on the current colorset
    fill(colors[i]);
    // Draw a Sphere
    sphere(20);
    // Clear out all the data for the next loop
    pop();
    
    // Slow rotation
    let axis = [1, 1, 0];
    let angle = frameCount * 0.00000003;
    rotate(angle, axis);
  }

    //Check for mouse click, move to the next scene and change the colors

}

function setColors(){
    //Check the state and set the palette accordingly
    colors.push(random(colorset));
}