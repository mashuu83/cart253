/**
 * 3D Typography
 * Matthew Thompson
 * 
 * An exploration of various fonts in 3D Space
 */

"use strict";

// Create some empty objects to hold the fonts
let bitCount, creepster, fascinate, kablammo, schoolbell, silkscreen;

/**
 * Draw a nice juicy OpenGL Canvas, Load in the fonts
*/
async function setup() {
    createCanvas(1280, 720, WEBGL);
    // Load in the font objects
    bitCount = await loadFont('./assets/fonts/BitcountInk.ttf');
    background(0);
}


/**
 * Draw the 3D text
*/
function draw() {
    fill('deeppink');
    textFont(bitCount);
    textSize(36);
    text('Testing', 10, 50);
}