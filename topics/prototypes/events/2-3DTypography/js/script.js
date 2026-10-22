/**
 * 3D Typography
 * Matthew Thompson
 * 
 * An exploration of various fonts in 3D Space
 */

"use strict";

// Create some empty objects to hold the fonts
let bitCount, creepster, fascinate, kablammo, schoolbell, silkscreen;

//Various Settings
let bgColor = 'black';

// Create a userText object
let userText = {
    font: undefined,
    x: 0,
    y: 0,
    z: 0,
    size: 36,
    string: "Testerino",
    color: 'white',
    strokeWeight: 4,
}

let textOptions = {
    extrude: 2,
    sampleFactor: 2
}

// An object to hold the 3D text
let textModel = undefined;

/**
 * Draw a nice juicy OpenGL Canvas, Load in the fonts, Create a text Model
*/
async function setup() {
    createCanvas(1280, 720, WEBGL);
    // Load in the font objects
    bitCount = await loadFont('./assets/fonts/BitcountInk.ttf');
    creepster = await loadFont('./assets/fonts/Creepster-Regular.ttf');
    fascinate = await loadFont('./assets/fonts/Fascinate-Regular.ttf');
    kablammo = await loadFont('./assets/fonts/Kablammo-Regular.ttf');
    schoolbell = await loadFont('./assets/fonts/Schoolbell-Regular.ttf');
    silkscreen = await loadFont('./assets/fonts/Silkscreen-Regular.ttf');
    userText.font = silkscreen;

    //Create the text model
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();

    //Set the background color (add a skybox here later?)
    background(bgColor);
}


/**
 * Draw the 3D text
*/
function draw() {
    //Give camera controls
    orbitControl();

    //Draw the 3D Model
    fill(userText.color);
    strokeWeight(userText.strokeWeight);
    scale(min(width, height) / 300);
    //The Actual Draw part
    model(textModel);

}
// //Define the function to render the text
// function drawText(userText) {
//     textFont(userText.font);
//     textSize(userText.size);
//     text(userText.string, userText.x, userText.y);
// }