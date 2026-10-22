/**
 * Could You Hold This For Me?
 * Matthew Thompson
 * 
 * A P5 Sketch where the program asks the user to hold down more and more keys
 */

"use strict";

// Define some variables to be used in the program
//The text object to display the programs 'demands'
let currentText = {
    string: "Request Incoming....",
    size: 48,
    font: 'Courier New',
    fill: "white",
    alignment: undefined,
    x: 100,
    y: 100
}

let backgroundColor = "#669999";

/**
 * Create The Canvas 720p
*/
function setup() {
    createCanvas(1280, 720);
}

/**
 * Show Some Text, Requesting that the user hold down a key
*/
function draw() {
    //Draw a nice background color
    background(backgroundColor);

    //Draw the text
    push();
    textFont(currentText.font);
    textSize(currentText.size);
    fill(currentText.fill);
    //Draw the string with the current position
    text(currentText.string, currentText.x, currentText.y);
    pop();
}