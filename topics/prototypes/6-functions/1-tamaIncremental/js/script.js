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
    buttonA:{
        x:0,
        y:0,
        size:35,
        color:'yellow',
        onClick:undefined,
    },
     buttonB:{
        x:0,
        y:0,
        size:35,
        color:'yellow',
        onClick:undefined,
    },
     buttonC:{
        x:0,
        y:0,
        size:35,
        color:'yellow',
        onClick:undefined,
    }
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

//Boolean states to determine if the mouse is over a button
let mouseOnA = false;
let mouseOnB = false;
let mouseOnC = false;

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

    //Check if the mouse is over any Buttons
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
    if(mouseOnA){
        console.log("A Clicked");
    }
    //Check if Button B was clicked
    if(mouseOnB){
        console.log("B Clicked");
    }
    //Check if Button C was clicked
    if(mouseOnC){
        console.log("C Clicked");
    }
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
    square(tama.x, tama.y- (tama.h/8), tama.frameSize, tama.frameRounding);
    pop();
    
    // 3 Circular buttons
    push();
    noStroke();
    fill(tama.buttonColor);
    //Center Button
    ellipse(tama.x, tama.y + (tama.h/3), tama.buttonSize);
    //Left Button
    ellipse(tama.x - (tama.w/4), tama.y + (tama.h/5), tama.buttonSize);
    //Right Button
    ellipse(tama.x + (tama.w/4), tama.y + (tama.h/5), tama.buttonSize);
}