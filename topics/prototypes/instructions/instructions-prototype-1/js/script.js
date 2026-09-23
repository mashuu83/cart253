/**
 * Title of Project
 * Matthew Brandon Thompson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Create a 720p Canvas for Illustration
 * Uses WEBGL as the optional argument for renderer, as I am referencing the rotating triangle example from https://p5js.org/reference/p5/triangle/ and I assume WEBGL might be necessary for the animation aspects
*/
function setup() {
    createCanvas(1280, 720, WEBGL)
}


/**
 * Create the Illustration
 * ADD MORE DETAILS WHEN I KNOW WHAT I ACTUALLY DREW:
*/
function draw() {
    //Set the background color
    background("BlanchedAlmond");
    //Draw a spinning triangle in the middle of the canvas
    //Because WEBGL uses a 3D coordinate system, the centre of the screen is 0,0
    rotateY(frameCount * 0.01);
    triangle(0, -240, -200, 120, 200, 120);

}