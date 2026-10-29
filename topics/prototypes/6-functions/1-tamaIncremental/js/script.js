/**
 * Tama Incremental
 * Matthew Brandon Thompson
 * 
 * A Sketch for a Tamagotchi-Style virtual pet incremental game
 */

"use strict";

//Define the Tama object
let tama = {
    shell: {
        color:'pink',
        x:250,
        y:200,
        h:250,
        w:200
    },
    shellColor:'pink',
    frame:{
        size:100,
        color:'lightblue',
        rounding:20,
        image:undefined
    },
    happiness:{
       value:100,
       color:'green',
       delay: 30 *1000 // In Seconds 
    },
    hunger:{
       value:100,
       color:'red',
       delay: 120 *1000 // In Seconds 
    },
    cleanliness:{
       value:100,
       color:'grey',
       delay: 360 *1000 // In Seconds 
    },
    buttonA:{
        x:0,
        y:0,
        size:undefined,
        color:'yellow',
        onClick:undefined,
    },
     buttonB:{
        x:0,
        y:0,
        size:undefined,
        color:'yellow',
        onClick:undefined,
    },
     buttonC:{
        x:0,
        y:0,
        size:undefined,
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

/**
 * Create a Canvas - Portrait Ratio for Mobile
 * iPhone Duo is 1.4:1 so trying 500x700
*/
function setup() {
    createCanvas(500, 700);

    //Set the values for the button positions based on the parent tama object
    //Determine Size
    let buttonSize = tama.shell.w / 6;
    //Set size of all 3
    tama.buttonA.size = buttonSize;
    tama.buttonB.size = buttonSize;
    tama.buttonC.size = buttonSize;
    //Determine Left
    //Determine Center
    //Determine Right
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
    fill(tama.shell.color);
    ellipse(tama.shell.x, tama.shell.y, tama.shell.w, tama.shell.h);
    pop();
    
    // Rectangular Frame
    push();
    noStroke();
    fill(tama.frame.color);
    rectMode(CENTER);
    square(tama.shell.x, tama.shell.y- (tama.shell.h/8), tama.frame.size, tama.frame.rounding);
    pop();
    
    // 3 Circular buttons
    push();
    noStroke();
    //Center Button
    fill(tama.buttonA.color);
    ellipse(tama.shell.x, tama.shell.y + (tama.shell.h/3), tama.buttonA.size);
    //Left Button
    ellipse(tama.shell.x - (tama.shell.w/4), tama.shell.y + (tama.shell.h/5), tama.buttonB.size);
    //Right Button
    ellipse(tama.shell.x + (tama.shell.w/4), tama.shell.y + (tama.shell.h/5), tama.buttonC.size);
}