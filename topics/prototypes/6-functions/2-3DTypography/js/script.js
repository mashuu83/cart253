/**
 * 3D Type v2
 * Matthew Thompson
 * 
 * An updated version of my 3d typography explorer
 */

"use strict";

// Create some empty objects to hold the fonts
let bitCount, creepster, fascinate, kablammo, schoolbell, silkscreen, inconsolata;

// Define a Layer to sit above and hold the buttons
let buttonLayer = undefined;

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
    strokeWeight: 1,
}

let textOptions = {
    extrude: 0,
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
    inconsolata = await loadFont('./assets/fonts/Inconsolata.ttf')
    //This one doesnt turn 3D well, removing it
    //bitCount = await loadFont('./assets/fonts/BitcountInk.ttf');
    creepster = await loadFont('./assets/fonts/Creepster-Regular.ttf');
    fascinate = await loadFont('./assets/fonts/Fascinate-Regular.ttf');
    kablammo = await loadFont('./assets/fonts/Kablammo-Regular.ttf');
    schoolbell = await loadFont('./assets/fonts/Schoolbell-Regular.ttf');
    silkscreen = await loadFont('./assets/fonts/Silkscreen-Regular.ttf');

    // Make transparent 2d later here
    buttonLayer = createGraphics(width, height);

    // Will set user font with buttons
    userText.font = inconsolata;

    //Create the text model
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();

    //I think there may have been an existing funtion called createModel and it didn't like this name, will try again with different name and see if it fixes the issue
    //makeModel();

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
    // Investigate the workings of this section - Copied from p5.js example
    scale(min(width, height) / 300);
    //The Actual Draw part
    model(textModel);
}

// Create the model Function
// CURRENTLY UNUSED - Need to refactor
// function makeModel() {
//     textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
//     textModel.clearColors();
//     textModel.normalize();
// }

// The Button functions -- TO REFACTOR
function inconsolataClicked() {
    userText.font = inconsolata;
    console.log("Inconsolata Clicked");
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

function creepsterClicked() {
    userText.font = creepster;
    console.log("Creepster Clicked");
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

function fascinateClicked() {
    userText.font = fascinate;
    console.log("Fascinate Clicked");
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

function kablammoClicked() {
    userText.font = kablammo;
    console.log("Kablammo Clicked");
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

function schoolbellClicked() {
    userText.font = schoolbell;
    console.log("Schoolbell Clicked");
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

function silkscreenClicked() {
    userText.font = silkscreen;
    console.log("Silkscreen Clicked");
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

//Update the Text from the Input Box
function updateText() {
    const textBox = document.getElementById('userText');
    userText.string = textBox.value;
    console.log("Update Clicked - content was " + textBox.value);
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

// //Define the function to render the text
// function drawText(userText) {
//     textFont(userText.font);
//     textSize(userText.size);
//     text(userText.string, userText.x, userText.y);
// }