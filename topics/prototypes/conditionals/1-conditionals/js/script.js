/**
 * Ghost Scare
 * Matthew Thompson
 * 
 * A small interactive demo where cute ghosts float around the screen but are terrified of mouse clicks and will flee from the clicked position
 * 
 * Uses modified animation effect taken from online example at: https://editor.p5js.org/meganmckissack/sketches/kRmOxI7sG
 */

"use strict";

// Define a ghost object with image(s), positions, and "scared" state
let ghost = {
    x:0,
    y:0,
    scared:false,
    image:undefined,
    scaredImage:undefined,
    speed:1,
    size:50
}

//How Many Ghosts to draw
const howManyGhosts = 10;
const howFarApartY = 60;
const howFarApartX = 150;

// Declare an array of ghost objects and fill with empty ghosts
const ghosts = [];
for (let i = 0; i < howManyGhosts; i++){
    // The syntax of this was explained by my roomate, though I don't fully undertand the need for the {...} yet
    ghosts.push({...ghost});
}

//Define the variables to be used for the ghosts movement
let floatingAngle = 0;
let floatingScale = 50;
let floatingSpeed = 0.005;
let floatingSteps = 0.25;

/**
 * Add a Canvas 720p
*/
function setup() {
    createCanvas(1280, 720);
}

/**
 * Draw several cute ghosts which float around
*/
function draw() {
    //Redraw the background each frame
    background(0);
    
    //Run a loop based on how many ghosts and draw them
    for (let i=0; i<howManyGhosts; i++){
        //Set the y position for the current ghost starting at the bottom of the screen and moving up in increments of "how far apart y"  + the sin value of the floating angle times the floating scale
        ghosts[i].y = ((height - (i * howFarApartY)) + sin(floatingAngle + (i * floatingSteps)) * floatingScale);
        //Set the x position for each ghost starting at the left of the screen and going in increments of "how far apart x"
        ghosts[i].x = i * howFarApartX;
        //Draw the ghost
        ellipse(ghosts[i].x, ghosts[i].y, ghosts[i].size);
        //Increment the floating positions
        floatingAngle += floatingSpeed;
    }

}