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
    hspeed: 1,
    vspeed: 1
}

/**
 * Set a Canvas, the same as DVD resolution (480p)
 * 
 * Load the psyduck image in setup
*/
async function setup() {
    psyduck.image = await loadImage('./assets/images/psyduck.png');
    createCanvas(720, 480);
    // Set background color
    background("darkgrey");
}


/**
 * Draw Psyduck and move him around
*/
function draw() {
    //Move Psyduck Leaving a glorious trail
    psyduck.x += psyduck.hspeed;
    psyduck.y += psyduck.vspeed;

    //Bounce psyduck if he hits the edge
    bouncePsyduck();

    // Draw Psyduck, not clearing between draws
    image(psyduck.image, psyduck.x, psyduck.y);
}

function bouncePsyduck() {
    //Check if he hits left/right and flip
    if (psyduck.x + psyduck.image.width >= width) {
        psyduck.hspeed = -psyduck.hspeed;
    }
    else if (psyduck.x < 0) {
        psyduck.hspeed = -psyduck.hspeed;
    }
    //Check if he hits top/bottom and flip
    if (psyduck.y < 0) {
        psyduck.vspeed = -psyduck.vspeed;
    }
    else if (psyduck.y + psyduck.image.height >= height) {
        psyduck.vspeed = -psyduck.vspeed;
    }
}