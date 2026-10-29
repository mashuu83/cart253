/**
 * Tama Incremental
 * Matthew Brandon Thompson
 * 
 * A Sketch for a Tamagotchi-Style virtual pet incremental game
 */

"use strict";

//Define the Tama object
let tama = {
    x:250,
    y:200,
    h:250,
    w:200,
    shellColor:'pink',
    frameSize:100,
    frameColor:'lightblue',
    frameRounding:20,
    happiness:100,
    happinessDelay: 30 * 1000, //In Seconds
    hunger:10,
    hungerDelay: 120 * 1000, //In Seconds
    cleanliness:10,
    cleanlinessDelay: 300 * 1000, //In Seconds
    buttonSize:35,
    buttonColor:'yellow',
    state:undefined,
}

//Define a player object
let player = {
    coins:{
        amount:0,
        x:360,
        y:50,
        fontSize:24,
        fontColor:'yellow'
    }
}

/**
 * Create a Canvas - Portrait Ratio for Mobile
 * iPhone Duo is 1.4:1 so trying 500x700
*/
function setup() {
    createCanvas(500, 700);
}


/**
 * Main Draw function - runs every frame
*/
function draw() {
    //Draw the background
    background("black");

    //Show how many coins the player has
    displayCoins(player.coins.amount);

    //Draw the Tama object
    drawTama();
}

//The function to display the players coin count
function displayCoins(amount){
    push();
    fill(player.coins.fontColor);
    noStroke();
    textSize(player.coins.fontSize);
    text("Coins: " + amount, player.coins.x, player.coins.y);
    pop();
}

// Define actions for when the player clicked
function mouseClicked(){
    console.log("Mouse Clicked");
    // Give the player a coin for clicking
    player.coins.amount += 1;
    //Check if Button A was clicked

    //Check if Button B was clicked

    //Check if Button B was clicked
}

// Define the funciton for drawing a Tama Object
function drawTama(){
    // Draw an Egg Shape
    push();
    noStroke();
    fill(tama.shellColor);
    ellipse(tama.x, tama.y, tama.w, tama.h);
    pop();
    
    // Rectangular Frame
    push();
    noStroke();
    fill(tama.frameColor);
    rectMode(CENTER);
    square(tama.x, tama.y-20, tama.frameSize, tama.frameRounding);
    pop();
    
    // 3 Circular buttons
    push();
    noStroke();
    fill(tama.buttonColor);
    //Center Button
    ellipse(tama.x, tama.y+80, tama.buttonSize);
    //Left Button
    ellipse(tama.x - 45, tama.y +60, tama.buttonSize);
    //Right Button
    ellipse(tama.x + 45, tama.y + 60, tama.buttonSize);
}