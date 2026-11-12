/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let donkeyData = undefined;
let langData = undefined;
let lang = "en";

// Starts with the instruction
let carName = "Click to generate a car name.";
let nameList = [];

/**
 * Load the car and dinosaur data
 */
async function preload() {
    carData = await loadJSON("assets/data/cars.json");
    donkeyData = await loadJSON('assets/data/donkeys.json');
}

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(800, 600);
    
    await preload();
    background(0);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {

    
}

/**
 * Generate a new car name
 */
function mousePressed() {
    let manufacturer = random(carData.cars);
    let donkeyType = random(donkeyData.donkeys);
    carName = manufacturer + " " + donkeyType;
    nameList.push(carName);
    drawName();
}

function drawName(){
    push();
    fill("hotpink");
    textAlign(CENTER, CENTER);
    textSize(36);
    text(carName, random(100, width-100), random(50, height-50));
    pop();
}
