/**
 * Funny Color Names and Slow Rotations
 * Matthew Brandon Thompson
 * 
 * The First Prototype Illustration for the 'Instructions' Assignment
 * Trying to choose colors for this project from the CSS color list that I think have the funniest/cutest names. Want to explore the concept of shapes rotating slowly. But not like, too slowly.
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
 * Want to start with a slowly rotating triangle and build from there
*/
function draw() {
    //Set the background color
    background("BlanchedAlmond");
    //Draw a spinning triangle in the middle of the canvas
    push();
    rotateY(frameCount * 0.004);
    stroke("BurlyWood");
    strokeWeight(3);
    fill("Cornsilk");
    //Because WEBGL uses a 3D coordinate system, the centre of the screen is 0,0
    triangle(0, -340, -300, 220, 300, 220);
    //Add some more shapes inside the triangle that should rotate with it
    stroke("LightCoral");
    fill("LemonChiffon");
    ellipse(-150, 150, 100);
    ellipse(0, -150, 100, 150);
    ellipse(-80, 150, 100, 75);
    pop();

    //Want to see if a new shape will also rotate
    //ellipse(0, 0, 100);
    //This is pretty cool, the Ellipse does not rotate (presumably becuase of the pop)
    //Yep, when I comment out the pop, the ellipse "inherits" the colors and rotation... this can be cool to decorate the rotating triangle....
}