/**
 * Challenge Landscape
 * Matthew Thompson and Ilianna Faoro
 * 
 * Draw a Landscape Challenge for week 2 CART 253
 */

"use strict";

/**
 Draw a Canvas 720p
*/
function setup() {
    createCanvas(1280, 720);

}


/**
 Draw a Mountain Landscape (Cuz I'm from Alberta!!)
*/
function draw() {
    //Draw the Sky
    background("#7cd3f2");

    //Draw a Mountain
    push();
    stroke("black")
    strokeWeight(3);
    fill("grey");
    // Draw a triangle that is sitting at the bottom of the canvas and goes off the canvas on the left
    triangle(-100, 720, 200, 360, 500, 720);
    pop();

    //Add a Snowcap
    push();
    noStroke();
    fill("white");
    //MATH!?! Heck no, we guess an check like MADMEN.
    triangle(117, 460, 200, 360, 300, 480);
    pop();
}