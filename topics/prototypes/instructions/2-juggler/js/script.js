/**
 * Juggler
 * Matthew Brandon Thompson
 * 
 * A very simple animation of a Juggler with a moving ball, hope to potentially use some of the things I learn in a future incremental game
 */

"use strict";

/**
 * Draw a 720p Canvas, this time, sticking with 2D, so not indicating a renderer
*/
function setup() {
    createCanvas(1280, 720);
}


/**
 * Draw The Juggler
*/
function draw() {
    //Set a soft pink background color (Using hex codes this time);
    background("#eba9ea");
    
    // Draw the Juggers Body
    push();
    stroke(0); //I think one argument should set for all colors and be solid black
    strokeWeight(4);
    fill("#1ed3e0");
    ellipse(width/2, height-175, 175, 300);
    pop();

}