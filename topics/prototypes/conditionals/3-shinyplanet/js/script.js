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
let shinyState = undefined;

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

/**
 * When the mouse is clicked, set a random state
 */
function mousePressed() {
    let r = random();
    if (r < 0.45) {
        bronzeState();
    }
    else if (r >= 0.45 && r < 0.75) {
        silverState();
    }
    else if (r >= 0.75 && r < 0.9) {
        goldState();
    }
    if (r >= 0.9) {
        diamondState();
    };
}

/**
 * When State becomes diamond, set some stuff and draw a planet
 */
function diamondState() {
    shinyState = "diamond";
    shinyText = "Wow, That's *&^%'n Shiny";
    shinyPlanet.metalness = 100;
    drawPlanet();

    //Test Line
    console.log("Diamond Click");
}

/**
 * When State becomes gold, set some stuff and draw a planet
 */
function goldState() {
    shinyState = "gold";
    shinyText = "Very Shiny! Alright!!";
    shinyPlanet.metalness = 70;
    drawPlanet();

    //Test Line
    console.log("Gold Click");
}

/**
 * When State becomes silver, set some stuff and draw a planet
 */
function silverState() {
    shinyState = "silver";
    shinyText = "Kinda shiny, I dig it";
    shinyPlanet.metalness = 45;
    drawPlanet();

    //Test Line
    console.log("Silver Click");
}

/**
 * When State becomes bronze, set some stuff and draw a planet
 */
function bronzeState() {
    shinyState = "bronze";
    shinyText = "It's a little shiny, I guess";
    shinyPlanet.metalness = 20;
    drawPlanet();

    //Test Line
    console.log("Bronze Click");
}

//--TODO--
function drawPlanet() {

}