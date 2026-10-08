/**
 * Shiny Planet
 * Matthew Thompson
 * 
 * Starting with the panorama() function in p5 and seeing where that ends up taking me...
 * Display a planet which you can click to receive random loot, maybe see if I can utilize the very cool sounding shininess() and metalness() functions... Maybe clicking will spawn a shiny object, more rare... more shiny....
 */

"use strict";

//--TODO-- When you click, spawn a new planet somewhere and display some text;
//bronze planet, kinda shiny; silver planet, pretty shiny; gold planet, so shiny; platinum planet, damn thats shiny.

//Declare the variables to be used in the sketch
let panoramaSky = undefined;
let yourPrize = undefined;

let shinyPlanet = {
    x: 0,
    y: 0,
    z: 0,
    shininess: 50,
    metalness: 50,
    specularness: 100,
    fill: "white",
}

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