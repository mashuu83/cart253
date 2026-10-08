/**
 * Panorama something something?
 * Matthew Thompson
 * 
 * Starting with the panorama() function in p5 and seeing where that ends up taking me...
 */

"use strict";

//Declare the variables to be used in the sketch
let panoramaSky = undefined;

/**
 * Loads images, Draws the Canvas and sets WEBGL Mode
*/
async function setup() {
    panoramaSky = await loadImage('./assets/images/noirlab2430b.jpg');
    createCanvas(1280, 720, WEBGL);
}


/**
 * Draws the Panorama Sky and enables camera controls
*/
function draw() {
    //Draws the Panorama
    panorama(panoramaSky);

    //Add mouse camera controls
    orbitControl();

    //Make the image itelf the light source
    imageLight(panoramaSky);


}