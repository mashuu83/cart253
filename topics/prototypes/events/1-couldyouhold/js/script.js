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
    smallerSize: 36,
    font: 'Courier New',
    fill: "white",
    x: 100,
    y: 200,
}

let backgroundColor = "#669999";

let timerDelay = 4 * 1000; // In Seconds

let requestedKey = 80;


/**
 * Create The Canvas 720p
*/
function setup() {
    createCanvas(1280, 720);

    // Start a Timer to make a request after specified seconds
    setTimeout(updateText, timerDelay);
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

// Define the update text function, choose a random key and ask the user to press it
function updateText() {
    //Choose a random Key (use floor?)
    requestedKey = floor(random(97, 122));
    //Turn the Code into a String
    let requestedKeyString = string.fromCharCode(requestedKey);
    // Request that the user hold the specified Key
    currentText.string = "Could you please hold " + requestedKeyString + " for me?";
    // Move the text slightly
    currentText.x = currentText.x + random(-50, 50);
    currentText.y = currentText.y + random(-30, 30);
    //Make the text smaller to fit
    currentText.size = smallerSize;
}

// Lowercase ASCII are 97-122