/**
 * Multidimensional
 * Matthew Thompson
 * 
 * A p5 sketch of a floating cloud of galactic donuts
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

let sketchSettings = {
    minDonuts: 100,
    maxDonuts: 200,
    donutMinSize: 40,
    donutMaxSize: 75,
    holeRatio:.55,
    orbitWidth:450,
    orbitHeight:150,
    movementSpeed:0.01,
    numberDonuts:100,
    cameraSpeed:1,
}

//Array to hold the donuts
let donuts = [];

//Hold the space background image
let spaceBG = undefined;

/**
 * Let's make a canvas! Not sure why I always default to 720p, nostalgia? Since this sketch is about dimensionality, lets go 3d this time
*/
async function setup() {
    //Load the image for the panorama
    spaceBG = await loadImage('./assets/images/NASANIRCam.png');

    createCanvas(1280, 720, WEBGL);

    //Choose random starting positions and angles for the donuts
    for (let i= 0; i<sketchSettings.numberDonuts; i++){
        generateDonut();
    }
}


/**
 * Draw the sketch elements
*/
function draw() {
    //Add the space panorama background
    panorama(spaceBG);
    
    //Camera Controls?
    //orbitControl();

    //Add some lights?
    lights();

    //Experiment with changing frame rate
    //frameRate(40);
    
    //Get X, Y, Z Positions to experiment with Sin/Cos. These settings roughly create movement in an Infinity Symbol shape
    //Not using Z currently
    let infinityX = sketchSettings.orbitWidth * cos(frameCount * sketchSettings.movementSpeed);
    let infinityY = sketchSettings.orbitHeight * sin(frameCount * (sketchSettings.movementSpeed * 2));

    //Galactic Donuts?
    // Torus arguments: Radius, Hole Size, Number of edges for hole (default:24), Number of triangles which make the height (default:16)
    for (let _donut of donuts){
        push();
        //Start at the default location
        translate(_donut.positionX, _donut.positionY, _donut.positionZ);
        //Rotate to the donuts generated rotation
        rotateX(_donut.rotationX);
        rotateY(_donut.rotationY);
        rotateZ(_donut.rotationZ);
        //Move by the Infinity amount (Changes every frame for animation)
        translate(infinityX, infinityY, 0);
        noStroke();
        fill(_donut.color);
        torus(_donut.size, (_donut.size* sketchSettings.holeRatio));
        pop();
    }

    //Slowly Pan the camera around
    let cameraX = width*2 * cos(frameCount * .005);
    camera(cameraX, -width, (-width*2));

}

//Define the functions for the sketch

function generateDonut(){
    const donut = {
    //Create a random starting position and rotation
    positionX:random(-width, width),
    positionY:random(-height, height),
    positionZ:random(-width,width),
    rotationX:random(TWO_PI),
    rotationY:random(TWO_PI),
    rotationZ:random(TWO_PI),
    //Choose a random size and color
    size:random(sketchSettings.donutMinSize, sketchSettings.donutMaxSize),
    color:random(donutColors),
    }
    //Add the donut to the array
    donuts.push(donut);
}