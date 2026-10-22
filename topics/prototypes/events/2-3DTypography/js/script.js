/**
 * 3D Typography
 * Matthew Thompson
 * 
 * An exploration of various fonts in 3D Space
 */

"use strict";

// Create some empty objects to hold the fonts
let bitCount, creepster, fascinate, kablammo, schoolbell, silkscreen;

// Create a userText object
let userText = {
    font: undefined,
    x: 0,
    y: 0,
    z: 0,
    size: 36,
    string: "Testing",
    color: 'white',
}

/**
 * Draw a nice juicy OpenGL Canvas, Load in the fonts
*/
async function setup() {
    createCanvas(1280, 720, WEBGL);
    // Load in the font objects
    bitCount = await loadFont('./assets/fonts/BitcountInk.ttf');
    userText.font = bitCount;
    background(0);
}


/**
 * Draw the 3D text
*/
function draw() {
    drawText(userText);
}

//Define the function to render the text
function drawText(userText) {
    textFont(userText.font);
    textSize(userText.size);
    text(userText.string, userText.x, userText.y);
}