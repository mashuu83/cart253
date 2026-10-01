/**
 * Psyduck Screensaver
 * Matthew Brandon Thompson
 * 
 * An old school DVD inspired screensaver but with a Psyduck Image
 */

"use strict";

//Define my psyduck object to bounce around
const psyduck = {
    x: 100,
    y: 100,
    image: undefined,
    speed: 1
}

/**
 * Set a Canvas, the same as DVD resolution (480p)
 * 
 * Load the psyduck image in setup
*/
async function setup() {
    psyduck.image = await loadImage('./assets/images/psyduck.png');
    createCanvas(720, 480);

    background("darkgrey");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Draw Psyduck
    image(psyduck.image, 100, 100);
}