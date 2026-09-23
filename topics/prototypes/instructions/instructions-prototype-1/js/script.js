/**
 * Title of Project
 * Matthew Brandon Thompson
 * 
 * The First Prototype Illustration for the 'Instructions' Assignment
 * Initial idea is to make a field of rotating triangles
 */

"use strict";

/**
 * Create a 720p Canvas for Illustration
 * Uses WEBGL as the optional argument for renderer, as I am referencing the rotating triangle example from https://p5js.org/reference/p5/triangle/ and I assume WEBGL might be necessary for the animation
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
    push();
    rotateY(frameCount * 0.015);
    stroke("BurlyWood");
    strokeWeight(3);
    fill("Cornsilk");
    triangle(0, -340, -300, 220, 300, 220);
    pop();

    //Want to see if a new shape will also rotate
    //ellipse(0, 0, 100);
    //This is pretty cool, the Ellipse does not rotate (presumably becuase of the pop)
    //Yep, when I comment out the pop, the ellipse "inherits" the colors and rotation... this can be cool to decorate the rotating triangle....
}