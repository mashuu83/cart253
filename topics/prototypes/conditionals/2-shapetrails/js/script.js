/**
 * Shape Trails
 * Matthew Thompson
 * 
 * Drag the shapes around the canvas to leave colorful trails
 */

"use strict";

//Define Objects and variables for use in the sketch

let circle = {
    x:400,
    y:400,
    size:60,
    hue:291,
    saturation:95,
    brightness:95,
}

let rectangle = {
    x:100,
    y:200,
    h:100,
    w:200,
    hue:181,
    saturation:95,
    brightness:95
}

let circleFadeSpeed = .75, rectangleFadeSpeed = .75;

/**
 * Draw the Canvas
*/
function setup() {
    createCanvas(1280, 720);

    //Set the color mode to HSB
    colorMode(HSB);

    //Drawing the background in setup so that the draw refreshes leave trails
    //Kind of a golden yellow color in HSB
    background(50, 73, 94);

}


/**
 * Draw the Shapes
*/
function draw() {
    
    //Draw a Rectangle
    drawRectangle();
    
    //Draw a Circle
    drawCircle();

    //Fade the shapes in and out (to indicate to the user the portion that is draggable)
    circle.saturation -= circleFadeSpeed;
    if (circle.saturation < 50 || circle.saturation > 99){
        circleFadeSpeed *= -1;
    }
    rectangle.saturation -= rectangleFadeSpeed;
    if (rectangle.saturation < 50 || rectangle.saturation > 99){
        rectangleFadeSpeed *= -1;
    }
}

//Define functions used in sketch

function drawCircle(){
    push();
    noStroke();
    fill(circle.hue, circle.saturation, circle.brightness);
    ellipse(circle.x, circle.y, circle.size);
    pop();
}

function drawRectangle(){
    push();
    noStroke();
    fill(rectangle.hue, rectangle.saturation, rectangle.brightness);
    rect(rectangle.x, rectangle.y, rectangle.h, rectangle.w);
    pop();
}

// While Mouse is being dragged, check if the mouse is over a shape, and if so, update the position of that shape
function mouseDragged(){
    // Check if mouse is over the circle
    const d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.size/2){
        circle.x = mouseX;
        circle.y = mouseY;
        circle.saturation = 99;
    }

}