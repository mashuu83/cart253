/**
 * 3D Typography
 * Matthew Thompson
 * 
 * An exploration of various fonts in 3D Space
 */

"use strict";

// Create some empty objects to hold the fonts
let bitCount, creepster, fascinate, kablammo, schoolbell, silkscreen;

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
    strokeWeight: 4,
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
    bitCount = await loadFont('./assets/fonts/BitcountInk.ttf');
    creepster = await loadFont('./assets/fonts/Creepster-Regular.ttf');
    fascinate = await loadFont('./assets/fonts/Fascinate-Regular.ttf');
    kablammo = await loadFont('./assets/fonts/Kablammo-Regular.ttf');
    schoolbell = await loadFont('./assets/fonts/Schoolbell-Regular.ttf');
    silkscreen = await loadFont('./assets/fonts/Silkscreen-Regular.ttf');

    // Make transparent 2d later here
    buttonLayer = createGraphics(width, height);

    // Will set user font with buttons
    userText.font = kablammo;

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
    // Investigate the workings of this section - Copied from p5.js example
    scale(min(width, height) / 300);
    //The Actual Draw part
    model(textModel);

}


// Going to try moving the buttons into my HTML Instead to see if that is easier
// LEAVING THIS FOR POSTERITY

// // FROM GOOGLE: Clear and Render your 2D UI Buffer
// buttonLayer.clear(); // Keeps the buffer background transparent
// buttonLayer.noStroke();

// // UI Background Panel
// buttonLayer.fill(0, 0, 0, 150);
// buttonLayer.rect(10, 10, 220, 80, 5);

// // UI Text
// buttonLayer.fill(255);
// buttonLayer.textSize(16);
// buttonLayer.text("Engine Status: Active", 25, 40);
// buttonLayer.textSize(12);
// buttonLayer.text(`Frame Count: ${frameCount}`, 25, 65);

// // 3. Project the 2D Buffer onto the WebGL Canvas
// // Disabling depth lets us draw on top without clipping through 3D geometry
// // hint(DISABLE_DEPTH_TEST);

// push();
// // Can I disable the camera for this part?
// resetMatrix(); // Reset camera matrix to screen coordinates
// // Move to top-left corner of the WebGL clip space
// translate(-width / 2, -height / 2);
// image(buttonLayer, 0, 0);
// pop();

// hint(ENABLE_DEPTH_TEST); // Re-enable depth for the next frame's 3D render
// END OF COPIED SECTION


// //Define the function to render the text
// function drawText(userText) {
//     textFont(userText.font);
//     textSize(userText.size);
//     text(userText.string, userText.x, userText.y);
// }