/**
 * 3D Type v2
 * Matthew Thompson
 * 
 * An updated version of my 3d typography explorer
 */

"use strict";

// Create some empty objects to hold the fonts
let fontCreepster, fontFascinate, fontKablammo, fontSchoolbell, fontSilkscreen, fontInconsolata;

// Define a Layer to sit above and hold the buttons
let buttonLayer = undefined;

//Various Settings
let bgColor = 'black';
let extrusionValue = 2;

// Create a userText object
let userText = {
    font: undefined,
    x: 0,
    y: 0,
    z: 0,
    size: 36,
    string: "3D Text",
    color: 'white',
    strokeWeight: 1,
    scale: 300
}

let textOptions = {
    extrude: 0,
    sampleFactor: 2
}

// An object to hold the 3D text
let textModel = undefined;

/**
 * 720p OpenGL Canvas, Load in the fonts, Create a text Model
*/
async function setup() {
    createCanvas(1280, 720, WEBGL);
    
    // Load in the font objects
    fontInconsolata = await loadFont('./assets/fonts/Inconsolata.ttf')
    fontCreepster = await loadFont('./assets/fonts/Creepster-Regular.ttf');
    fontFascinate = await loadFont('./assets/fonts/Fascinate-Regular.ttf');
    fontKablammo = await loadFont('./assets/fonts/Kablammo-Regular.ttf');
    fontSchoolbell = await loadFont('./assets/fonts/Schoolbell-Regular.ttf');
    fontSilkscreen = await loadFont('./assets/fonts/Silkscreen-Regular.ttf');

    // Will set user font with buttons
    userText.font = fontInconsolata;

    //Create the text model
    makeNewModel();

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

    //Draw the Model
    draw3DText(userText.color, userText.strokeWeight, userText.scale);
}

// Define the function to draw the model with the user's settings
function draw3DText(color, weight, scaling){
    push();
    fill(color);
    strokeWeight(weight);
    scale(min(width, height) / scaling);
    model(textModel);
    pop();
}

// Define the function to make a new model
function makeNewModel(){
    textModel = userText.font.textToModel(userText.string, userText.x, userText.y, textOptions);
    textModel.clearColors();
    textModel.normalize();
}

// The Button functions
function inconsolataClicked() {
    userText.font = fontInconsolata;
    console.log("Inconsolata Clicked");
    makeNewModel();
}

function creepsterClicked() {
    userText.font = fontCreepster;
    console.log("Creepster Clicked");
    makeNewModel();
}

function fascinateClicked() {
    userText.font = fontFascinate;
    console.log("Fascinate Clicked");
    makeNewModel();
}

function kablammoClicked() {
    userText.font = fontKablammo;
    console.log("Kablammo Clicked");
    makeNewModel();
}

function schoolbellClicked() {
    userText.font = fontSchoolbell;
    console.log("Schoolbell Clicked");
    makeNewModel();
}

function silkscreenClicked() {
    userText.font = fontSilkscreen;
    console.log("Silkscreen Clicked");
    makeNewModel();
}

//Update the Text from the Input Box
function updateText() {
    const textBox = document.getElementById('userText');
    userText.string = textBox.value;
    console.log("Update Clicked - content was " + textBox.value);
    makeNewModel();
}

//Check if the thicken checkbox has updated and then add or remove embossing
function thickenChanged(){
    console.log("Thicken was changed");
    //Check if the box is clicked .checked is a boolean value
    if (document.getElementById('embossed').checked){
        //Add the embossing to the text
        textOptions.extrude = extrusionValue;
        makeNewModel();
        console.log("Was Selected");
    }
    else {
        //remove the embossing
        console.log("was unselected");
        textOptions.extrude = 0;
        makeNewModel();
    }
}
