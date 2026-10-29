/**
 * Tama Incremental
 * Matthew Brandon Thompson
 * 
 * A Sketch for a Tamagotchi-Style virtual pet incremental game
 */

"use strict";

//Declare a font object
let fontMicro5 = undefined;

//TODO: Declare an Array of Tamas

//TODO: Check if Values Reach 0 and Do Stuff

//An interaction message to tell the player what is happening
let interactionMessage = {
    x: 10,
    y:360,
    size:48,
    string:"Use Buttons to Play/Feed/Clean",
    color:'white'
}

//Define the Tama object
let tama = {
    shell: {
        color:'pink',
        x:160,
        y:180,
        h:250,
        w:200
    },
    frame:{
        size:100,
        color:'lightblue',
        rounding:20,
    },
    happiness:{
       //??TODO: PUT EMOJIS AS LABELS
       value:100,
       delay: 1 *1000, // In Seconds 
       label: "H: ",
    },
    hunger:{
       value:100,
       delay: 2 *1000, // In Seconds 
       label: "F: ",
    },
    cleanliness:{
       value:100,
       delay: 3 *1000, // In Seconds
       label: "C: " 
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
    },
    message: {
    x:100,
    y:100,
    size:24,
    color:'black',
    }
}

//Define a player object
let player = {
    coins:{
        amount:0,
        x:310,
        y:50,
        fontSize:24,
        fontColor:'yellow',
        label:"Coins: "
    },
    friendship:{
        amount:0,
        x:310,
        y:90,
        fontSize:24,
        fontColor:'hotpink',
        label:"Friendship: "
    }
}

/**
 * Create a Canvas - Portrait Ratio for Mobile
 * iPhone Duo is 1.4:1 so trying 500x700
 * Load Retro font
 * Determine positions for tama elements based on shell position
 * Start countdown timers for stats
*/
async function setup() {
    createCanvas(500, 700);

    //Load font
    fontMicro5 = await loadFont('assets/fonts/Micro5.ttf');

    //TODO: Determine sizes for Frame

    //Determine Location for Message Box
    tama.message.x = tama.shell.x - tama.frame.size/2 + tama.frame.size*.1;
    tama.message.y = tama.shell.y - tama.frame.size/2 - 8;

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

    // Set timeouts for stats to change
    runTimer(tama.cleanliness);
    runTimer(tama.happiness);
    runTimer(tama.hunger);
}


/**
 * Main Draw function - runs every frame
*/
function draw() {
    //Draw the background
    background("black");

    //Show the player Stats
    displayStats(player.coins, player.coins.amount);
    displayStats(player.friendship, player.friendship.amount);

    //Draw the Tama object
    drawTama();

    //Draw the Interaction Message
    drawMessage();
}

//The function to decrement the stats based on their timers
function runTimer(stat){
    //Lower the stat by 1
    stat.value -=1;
    //Run again after the delay, need to pass the parameter for the function after the delay
    setTimeout(runTimer, stat.delay, stat);
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
    //On mouse click run the wasIClicked function and send it each button
    wasIClicked(tama.buttonA);
    wasIClicked(tama.buttonB);
    wasIClicked(tama.buttonC);
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

    // Draw message on frame
    push();
    noStroke();
    fill(tama.message.color);
    textFont(fontMicro5);
    textSize(tama.message.size);
    text((tama.happiness.label + tama.happiness.value + "     \n" + tama.hunger.label + tama.hunger.value + "     \n" + tama.cleanliness.label + tama.cleanliness.value + "     "), tama.message.x, tama.message.y);
    pop();
    
    // 3 Circular buttons
    drawButton(tama.buttonA);
    drawButton(tama.buttonB);
    drawButton(tama.buttonC);
}

//Define the function to check which button was pressed then run that function
function wasIClicked(_button){
    let d = dist(mouseX, mouseY, _button.x, _button.y);
    if (d<_button.size/2){
        console.log("The " + _button.name + " button got clicked");
        _button.onClick();
    }
}

//Function to draw a button
function drawButton(_button){
    push();
    noStroke();
    fill(_button.color);
    ellipse(_button.x, _button.y, _button.size);
    pop();
}

//What Happens when the buttons are clicked
function pressedA(){
    console.log("A Was pressed");
    tama.happiness.value = 100;
    //TODO Add variables for reward values
    player.coins.amount += 1;
    player.friendship.amount += 1;
    updateMessage("Happiness Refilled \nGain 1 Coin\nGain 1 Friendship");
}

function pressedB(){
    console.log("B Was pressed");
    tama.hunger.value = 100;
    player.coins.amount += 2;
    player.friendship.amount += 2;
    updateMessage("Hunger Refilled \nGain 2 Coins\nGain 2 Friendship");
}

function pressedC(){
    console.log("C Was pressed");
    tama.cleanliness.value = 100;
    player.coins.amount += 3;
    player.friendship.amount += 3;
    updateMessage("Tama Cleaned! \nGain 3 Coins\nGain 3 Friendship");
}

//Display a message to the user
function updateMessage(_message){
    interactionMessage.string = _message;
}

function drawMessage(){
    push();
    fill(interactionMessage.color);
    noStroke();
    textFont(fontMicro5);
    textSize(interactionMessage.size);
    text(interactionMessage.string, interactionMessage.x, interactionMessage.y);
    pop();
}