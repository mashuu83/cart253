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
    speed:1
}

//Define the variables to be used for the ghosts movement
let floatingAngle = 0;
let floatingHeight = 200;
let floatingScale = 40;
let floatingSpeed = 0.005;

//How Many Ghosts to draw
const howManyGhosts = 10;
const howFarApartY = 20;
const howFarApartX = 150;
const howBig = 50;

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
    //Draw a new background each frame
    background(0);
    
    for (let i=1; i<howManyGhosts; i++){
        // Determine the y position based on 
        let yPosition = ((floatingHeight + (i * howFarApartY)) + sin(floatingAngle + (i * .25)) * floatingScale);
        ellipse((i * howFarApartX), yPosition, howBig);
        floatingAngle += floatingSpeed;
    }

}