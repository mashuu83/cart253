/**
 * Tama Incremental
 * Matthew Brandon Thompson
 * 
 * A Sketch for a Tamagotchi-Style virtual pet incremental game
 */

"use strict";

//Declare an Array of Tamas

//Load in a very retro font

//Make a Message object to be drawn in the frame

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
        onClick:pressedA,
    },
     buttonB:{
        name:"B",
        x:0,
        y:0,
        size:undefined,
        color:'yellow',
        onClick:pressedB,
    },
     buttonC:{
        name:"C",
        x:0,
        y:0,
        size:undefined,
        color:'yellow',
        onClick:pressedC,
    }
}

//Define a player object
let player = {
    coins:{
        amount:0,
        x:350,
        y:50,
        fontSize:24,
        fontColor:'yellow',
        label:"Coins: "
    },
    friendship:{
        amount:0,
        x:350,
        y:90,
        fontSize:24,
        fontColor:'hotpink',
        label:"Friendship: "
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
    //Determine Left (Absolute)
    tama.buttonA.x = tama.shell.x - (tama.shell.w / 4);
    tama.buttonA.y = tama.shell.y + (tama.shell.h / 4);
    //Determine Center (Absolute)
    tama.buttonB.x = tama.shell.x;
    tama.buttonB.y = tama.shell.y + (tama.shell.h/ 3);
    //Determine Right (Absolute)
    tama.buttonC.x = tama.shell.x + (tama.shell.w / 4);
    tama.buttonC.y = tama.shell.y + (tama.shell.h / 4);

    // TODO: Set timeouts for stats to change
}


/**
 * Main Draw function - runs every frame
*/
function draw() {
    //Draw the background
    background("black");

    //Show how many coins the player has
    displayStats(player.coins, player.coins.amount);
    displayStats(player.friendship, player.friendship.amount);

    //Draw the Tama object
    drawTama();
}

//The functions to display the players Stats
function displayStats(stat, amount){
    push();
    fill(stat.fontColor);
    noStroke();
    textSize(stat.fontSize);
    text(stat.label + amount, stat.x, stat.y);
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
    ellipse(tama.buttonA.x, tama.buttonA.y, tama.buttonA.size);
    //Left Button
    ellipse(tama.buttonB.x, tama.buttonB.y, tama.buttonB.size);
    //Right Button
    ellipse(tama.buttonC.x, tama.buttonC.y, tama.buttonC.size);
}

//Define the function to check which button
function whichButton(_button){
    let d = dist(mouseX, mouseY, _button.x, _button.y);
    if (d<_button.size/2){
        console.log("The " + _button.name + " button got clicked");
        _button.onClick();
    }
}

//What Happens when the buttons are clicked
function pressedA(){
    console.log("A Was pressed");
}

function pressedB(){
    console.log("B Was pressed");
}

function pressedC(){
    console.log("C Was pressed");
}