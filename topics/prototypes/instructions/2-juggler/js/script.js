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
    
    //Time for the fun part, lets see if we can use rotation to get a moving ball
    push();
    stroke(0);
    strokeWeight(4);
    fill("#ed2767");
    // Move the origin to the top of the body
    translate(640, height-325); //Becuase the centre of the body is at height-175 and it is 300 tall, this should match the top point of the body, then I will draw the circle to the right of this to start
    let angle = frameCount * 0.01;
    rotate(angle);
    ellipse(-325, 0, 50);
    pop();
    
    //Make another ball going the opposite way
    push();
    stroke(0);
    strokeWeight(4);
    fill("#ed2767");
    // Move the origin to the top of the body
    translate(640, height-325); //Becuase the centre of the body is at height-175 and it is 300 tall, this should match the top point of the body, then I will draw the circle to the right of this to start
    let reverseangle = frameCount * 0.01;
    rotate(-reverseangle);
    ellipse(-325, 0, 50);
    pop();
    
    //Draw a big pink rectangle to hide the moving balls when they are below the juggers body
    push();
    noStroke();
    fill("#eba9ea");
    rect(0, height-325, width, height/2);
    pop();

    // Draw the Juggers Body
    push();
    stroke(0); //I think one argument should set for all colors and be solid black
    strokeWeight(4);
    fill("#1ed3e0");
    ellipse(width/2, height-175, 175, 300);
    pop();

    // Draw two simple rectangles for the jugglers arms, try rotating for angle?

    //Left Arm
    // Gotta move the origin, then rotate, then draw?
    push();
    translate(375, 360);
    rotate(PI/8);
    stroke(0);
    strokeWeight(4);
    fill("#1e9ce0");
    rect(0, 0, 200, 50);
    pop();

    //Right Arm
    push();
    translate(725, 450);
    rotate(TWO_PI-(PI/8)); // Just want the opposite rotation of the first arm, this is a silly way to calculate it, but I left my homework way too late and I'm making bad decisions
    stroke(0);
    strokeWeight(4);
    fill("#1e9ce0");
    rect(0, 0, 200, 50);
    pop();

    //Head, we going simple here, A big wide round head
    push();
    stroke(0);
    strokeWeight(4);
    fill("#e6dd5a");
    ellipse(640, 275, 200);
    pop();

}
