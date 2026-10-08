/**
 * Ghost Scare
 * Matthew Thompson
 * 
 * A small interactive demo where cute ghosts float around the screen but are scared of the mouse and change color or image when hovered over
 * 
 * Uses modified animation effect taken from online example at: https://editor.p5js.org/meganmckissack/sketches/kRmOxI7sG
 */

"use strict";

// Define a ghost object with image(s), positions, and "scared" state
let ghost = {
    x:0,
    y:0,
    scared:false,
    image:undefined,
    scaredImage:undefined,
    speed:2.5,
    size:50,
    fill:"white",
    scaredFill:"red",
    floatingAngle:0,
    floatingScale:50,
    floatingSpeed:0.05,
    floatingSteps:0.25
}

//Declare a sound variable
let waterBloop = undefined;

//How Many Ghosts to draw
const howManyGhosts = 10;

//Declare variables which will be set in setup function based on how many ghosts
let howFarApartY = undefined;
let howFarApartX = undefined;

// Adding a variable to introduce randomness into the spacing of the ghosts
const spacingVariance = 10;
const sizeVariance = 15;

// Declare an array of ghost objects and fill with empty ghosts
const ghosts = [];
for (let i = 0; i < howManyGhosts; i++){
    // The syntax of this was explained by my roomate, though I don't fully undertand the need for the {...} yet
    ghosts.push({...ghost});
}

/** 
 * Add a Canvas 720p
 * Define the spacing between ghosts dynamically based on the size of the canvas and how many * ghosts are being drawn
 * Load the sound for the project
*/
async function setup() {
    
    //Create the canvas
    createCanvas(1280, 720);
    
    //Load the sound file
    waterBloop = await loadSound('./assets/sounds/wb.mp3');

    //Set the distances between ghosts dynamically
    howFarApartY = height / howManyGhosts;
    howFarApartX = width / howManyGhosts;

    //Randomly vary the sizes of the ghosts
    //For each ghost size add or subtract a random number based on size variance
    for (let i=0; i<howManyGhosts; i++){
        ghosts[i].size += random(-sizeVariance, sizeVariance);

        //Set the starting x position for each ghost starting at the left of the screen and going in increments of "how far apart x"
        ghosts[i].x = ghosts[i].size + (i * howFarApartX);

        //Reverse the direction of half the ghosts at random
        let r = random(0, 1);
        if (r > 0.5){
            ghosts[i].speed *= -1;
        }
    }
}

/**
 * Draw several cute ghosts which float around
*/
function draw() {
    //Redraw the background each frame
    background(0);
    
    //Run a loop based on how many ghosts
    for (let i=0; i<howManyGhosts; i++){
        
        //Set the y position for the current ghost starting at the bottom of the screen and moving up in increments of "how far apart y"  + the sin value of the floating angle times the floating scale (Math adapted from example cited in intro comment)
        ghosts[i].y = ((height - (i * howFarApartY)) + sin(ghosts[i].floatingAngle + (i * ghosts[i].floatingSteps)) * ghosts[i].floatingScale);
        
       
        
        //Check if the mouse is overtop of a ghost and set the scared state
        //Is the distance between the mouse position and the ghost less than half of the size of the ghost?
        const d = dist(mouseX, mouseY, ghosts[i].x, ghosts[i].y);
        if(d < ghosts[i].size/2){
            // If so, set the ghost to scared
            ghosts[i].scared = true;
        }
        else{
            ghosts[i].scared = false;
        }
        
        //Set the fill (or image) based on the ghosts scared state -- COULD UPDATE WITH IMAGES
        if (ghosts[i].scared){
            fill(ghosts[i].scaredFill);
        }
        else {
            fill(ghosts[i].fill);
        }
        
        //Move Ghosts horizontally
        ghosts[i].x += ghosts[i].speed;
        
        //Reverse ghost direction if it reaches EITHER edge of the screen (|| is OR) and play bouncing sound
        if (ghosts[i].x > width || ghosts[i].x < 0){
            ghosts[i].speed = -ghosts[i].speed;
            waterBloop.play();
        }
    
        // Draw the ghosts
        ellipse(ghosts[i].x, ghosts[i].y, ghosts[i].size);
        
        //Increment the floating positions (From example cited in intro comment)
        ghosts[i].floatingAngle += ghosts[i].floatingSpeed;
    }

}