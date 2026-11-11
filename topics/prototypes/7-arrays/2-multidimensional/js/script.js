/**
 * Multidimensional
 * Matthew Thompson
 * 
 * A p5 sketch exploring the expressive potential of arrays within arrays
 */

"use strict";

//Define some Colors
let donutColors = [
    "#E893A6",
    "#D7C9C9",
    "#BEB692",
    "#F1AD9A",
    "#63383F"
]

let sprinkleColors = [
    "#920C69",
    "#CADD06",
    "#03CCC5",
    "#FC4A75",
    "#F4B40B"
]

let sketchSettings = {
    minDonuts: 100,
    maxDonuts: 200,
    minSprinkles: 50,
    maxSprinkles: 100,
    donutMinSize: 40,
    donutMaxSize: 75,
    sprinkleSize: 12,
    orbitWidth:450,
    orbitHeight:150,
    movementSpeed:0.01,
    numberDonuts:50
}



/**
 * Let's make a canvas! Not sure why I always default to 720p, nostalgia? Since this sketch is about dimensionality, lets go 3d this time
*/
function setup() {
    createCanvas(1280, 720, WEBGL);
}


/**
 * Draw the sketch elements
*/
function draw() {
    background("black");
    
    //Camera Controls
    orbitControl();

    //Experiment with changing frame rate
    //frameRate(40);
    
    //Get X, Y, Z Positions to experiment with Sin/Cos. Infinity Symbol?
    //Not using Z
    let x = sketchSettings.orbitWidth * cos(frameCount * sketchSettings.movementSpeed);
    let y = sketchSettings.orbitHeight * sin(frameCount * (sketchSettings.movementSpeed * 2));

    //Galactic Donuts?
    // Torus arguments: Radius, Hole Size, Number of edges for hole (default:24), Number of triangles which make the height (default:16)
    for (let i=0; i<sketchSettings.numberDonuts; i++){
        push();
        translate(x, y, 0);
        noStroke();
        fill(donutColors[0]);
        torus(50, 27);
        pop();    
    }

    //Galactic Sprinkle test
    push();

    pop();

}