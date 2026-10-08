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
let shinyState = undefined;
let shinyFont = undefined;
let shinyText = "Click to Shine";
const wordsColor = "white";

//The Planet object that will be drawn on click
let shinyPlanet = {
    x: 0,
    y: 0,
    z: 0,
    shininess: 200,
    metalness: 0,
    specularness: 100,
    fill: "black",
    size: 200,
}

/**
 * Loads images, Draws the Canvas and sets WEBGL Mode
*/
async function setup() {
    panoramaSky = await loadImage('./assets/images/noirlab2430b.jpg');
    createCanvas(1280, 720, WEBGL);

    //Load the Font
    shinyFont = await loadFont('./assets/fonts/SF_Cartoonist_Hand.ttf');
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
    lights();

    //Draw the planet?
    drawPlanet();

    //Make some text happen
    drawText();
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
 * --TODO ADD FILL COLORS IN EACH CONDITION--
 */
function diamondState() {
    shinyState = "diamond";
    shinyText = "Wow, That's *&^%'n Shiny";
    shinyPlanet.shininess = 200;
    shinyPlanet.metalness = 200;

    //Test Line
    consoleTest();
}

/**
 * When State becomes gold, set some stuff and draw a planet
 */
function goldState() {
    shinyState = "gold";
    shinyText = "Very Shiny! Alright!!";
    shinyPlanet.shininess = 150;
    shinyPlanet.metalness = 150;

    //Test Line
    consoleTest();
}

/**
 * When State becomes silver, set some stuff and draw a planet
 */
function silverState() {
    shinyState = "silver";
    shinyText = "Kinda shiny, I dig it";
    shinyPlanet.shininess = 80;
    shinyPlanet.metalness = 100;

    //Test Line
    consoleTest();
}

/**
 * When State becomes bronze, set some stuff and draw a planet
 */
function bronzeState() {
    shinyState = "bronze";
    shinyText = "It's a little shiny, I guess";
    shinyPlanet.shininess = 25;
    shinyPlanet.metalness = 75;

    //Test Line
    consoleTest();
}

//Set the various material values based on the state and draw the planet
function drawPlanet() {
    push();
    noStroke();
    //fill(shinyPlanet.fill);
    specularMaterial(shinyPlanet.specularness);
    shininess(shinyPlanet.shininess);
    metalness(shinyPlanet.metalness);
    //--TODO-- Temporary values
    //translate(100, 100, -100);
    //Draw the dang thing
    sphere(shinyPlanet.size);
    pop();
}

/**
 * Print a testing line to the console
 */
function consoleTest() {
    console.log("Current State is " + shinyState);
}

/**
 * Set the details and Draw the text
 */
function drawText() {
    push();
    fill(wordsColor);
    textFont(shinyFont);
    textSize(50);
    text(shinyText, 200, 200);
    pop();
}