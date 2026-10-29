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
    //shellColor:'pink',
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
        name:"A",
        x:0,
        y:0,
        size:undefined,
        color:'yellow',
        onClick:undefined,
    },
     buttonB:{
        name:"B",
        x:0,
        y:0,
        size:undefined,
        color:'yellow',
        onClick:undefined,
    },
     buttonC:{
        name:"C",
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
    whichButton(tama.buttonA);
    whichButton(tama.buttonB);
    whichButton(tama.buttonC);

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

//Define the function to check which button
function whichButton(_button){
    let d = dist(mouseX, mouseY, (tama.shell.x+_button.x), (tama.shell.y+_button.y))
    if (d<_button.size/2){
        console.log("This " + _button.name + " got clicked");
        _button.onClick();
    }
}