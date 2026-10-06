/**
 * Palette Swap
 * Matthew Brandon Thompson
 * 
 * Explore Color floating through a cosmic field of spheres
 */

"use strict";

// A State object that holds the current state
// Might use this to cycle through and display poetry
let currentstate = 0;
let possiblestates = ["monochromatic", "analogous", "complementary", "split-complementary", "double-complementary", "tetradic"];
let state = possiblestates[currentstate];

//Variable to hold title of current palette
let titleText = undefined;

// Some variables to generate random spheres
let positions =[], scales = []; //xdetails = [], ydetails = [];

// Potentially add random detail levels
// let minDetailx = 1, maxDetailx = 20, minDetaily = 1, maxDetaily = 20;

let minSize = 0.03, maxSize = .25; 

// How many spheres to Draw
const howManySpheres = 15000;
let colors = new Array(howManySpheres).fill(0);
let colorset = [];
chooseColorset();

/**
 * Draw a canvas here, 720p
 * 
*/
function setup() {
    createCanvas(1280, 720, WEBGL);
    // Create all the circles
    createCircles();
}

/**
 * Draw a painting which shifts between 6 palettes on click
*/
function draw() {
    //Set color function based on state
    // let state = possiblestates[currentstate];

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
    //text('testing', 0, 0);
    }

    

}

//Check for mouse click, move to the next scene and change the colors
function mousePressed() {
    // Code to run.
    // Go next state by changing index
    currentstate += 1;
    if (currentstate === 6){
        currentstate = 0;
    }
    state = possiblestates[currentstate];
    console.log("current state is " + state);
    chooseColorset();
    //clear();
    createCircles();
}

function setColors(){
    //Check the state and set the palette accordingly
    colors.push(random(colorset));
}

function createCircles(){
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
    colors[i] = random(colorset);
    //setColors();
    }
}

function chooseColorset(){
if (state === "monochromatic"){
    colorset = ["#C84133", "#FA4D3D", "#FF957F", "#CE6A58", "#FFA591", "#E55E4B"];
    titleText = "monochromatic";
}
else if (state === "analogous"){
    //Set colors to anologous theme
    colorset = ["#FC968D", "#CC0558", "#FA3D8C", "#FA4D3D", "#FAAB3D", "#FEBA63"];
}
else if (state === "complementary"){
    //Complementary theme
    // Add more adjacent colors
    colorset = ["#FA4D3D", "#3DEAFA"];
}
else if (state === "split-complementary"){
    colorset = ["#FA4D3D", "#3DFAAB", "#3D8CFA"];
}
else if (state === "double-complementary"){
    colorset = ["#FA4D3D", "#3DEAFA", "#4A7EED", "#EDB94A"];
}
else if (state === "tetradic"){
    colorset = ["#FA4D3D", "#8CFA3D", "#3DEAFA", "#AB3DFA"]
}
}