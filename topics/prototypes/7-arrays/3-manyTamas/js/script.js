/**
 * Tama Incremental
 * Matthew Brandon Thompson
 * 
 * A Sketch for a Tamagotchi-Style virtual pet incremental game
 */

"use strict";

//Constants for settings
const howManyTamas = 18;
//I know this is horrifically janky, but it was the best I could figure out at the moment, can definitly do this much simpler
let positionsX = [0, 250, 250, 250, 250, 250, -1250, 250, 250, 250, 250, 250, -1250, 250, 250, 250, 250, 250];
let positionsY = [0, 0, 0, 0, 0, 0, 300, 0, 0, 0, 0, 0, 300, 0, 0, 0, 0, 0];
const tamaHeight = 220;

//Declare a font object
let fontMicro5 = undefined;

//Declare an Array of Tamas
let allTamas = [];

//An interaction message to tell the player what is happening
let interactionMessage = {
    x:1700,
    y:200,
    size:48,
    string:"Use Buttons to\nPlay/\nFeed/\nClean",
    color:'white'
}

//Define a player object to hold inventory
let player = {
    coins:{
        amount:0,
        x:1700,
        y:50,
        fontSize:24,
        fontColor:'yellow',
        label:"Coins: "
    },
    friendship:{
        amount:0,
        x:1700,
        y:90,
        fontSize:24,
        fontColor:'hotpink',
        label:"Friendship: "
    }
}

//Color sets
let shellColors = ['#F68009','#8E25F7','#F72525','#F725F7','#258EF7'];
let frameColors = ['#8EFBE3','#8EE0FB','#EFFDBA','#BAD2FD'];
let buttonColors = ['#F5EE1D','#1DF582','#1D24F5','#F51D90'];

//TODO - Button objects


/**
 * Create a Canvas - Bigger this time for a PC Game.. lets say 1080p
 * Load Retro font
 * Determine positions for tama elements based on shell position
 * Start countdown timers for stats
*/
async function setup() {
    createCanvas(1920, 1080);

    //Load font
    fontMicro5 = await loadFont('assets/fonts/Micro5.ttf');

    // Determine 2D vectors for positions of tamas 
    // Did this manually because my head currently hurts too much for math
    // Translate elements set by hand in opening declarations
    
    // Determine Tama elements and generate them
    for (let i=0; i<howManyTamas; i++){
        generateTama();
        determineElements(i);
    }

    //Start timers for all tamas
    for (let i=0; i<allTamas.length; i++){
        runTimer(allTamas[i].cleanliness);
        runTimer(allTamas[i].happiness);
        runTimer(allTamas[i].hunger);
    }
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

    //Draw the Tama objects
    for (let i=0; i<allTamas.length; i++){
        //Move to the next spot in the array
        //Currently Manually generated positions, but will do a 2D array for grid
        translate(positionsX[i], positionsY[i]);
        drawTama(i);
    }

    //Draw the Interaction Message
    drawMessage();

    push();
    stroke('white');
    text("Testing visible text", 1700, 400);
    pop();
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
//NEED TO REFACTOR

// function mouseClicked(){
//     //On mouse click run the wasIClicked function and send it each button
//     wasIClicked(tama.buttonA);
//     wasIClicked(tama.buttonB);
//     wasIClicked(tama.buttonC);
// }

// Define the funciton for drawing a Tama Object
function drawTama(i){
    push();
    noStroke();
    fill(allTamas[i].shell.color);
    ellipse(allTamas[i].shell.x, allTamas[i].shell.y, allTamas[i].shell.w, allTamas[i].shell.h);
    pop();
    
    // Rectangular Frame
    push();
    noStroke();
    fill(allTamas[i].frame.color);
    rectMode(CENTER);
    square(allTamas[i].shell.x, allTamas[i].shell.y- (allTamas[i].shell.h/8), allTamas[i].frame.size, allTamas[i].frame.rounding);
    pop();

    // Draw message on frame
    push();
    noStroke();
    fill(allTamas[i].message.color);
    textFont(fontMicro5);
    textSize(allTamas[i].message.size);
    text((allTamas[i].happiness.label + allTamas[i].happiness.value + "     \n" + allTamas[i].hunger.label + allTamas[i].hunger.value + "     \n" + allTamas[i].cleanliness.label + allTamas[i].cleanliness.value + "     "), allTamas[i].message.x, allTamas[i].message.y);
    pop();
    
    // 3 Circular buttons
    drawButton(allTamas[i].buttonA);
    drawButton(allTamas[i].buttonB);
    drawButton(allTamas[i].buttonC);
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
//NEED TO REFACTOR FOR ARRAY
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
    //console.log(interactionMessage.string);
    push();
    fill(interactionMessage.color);
    noStroke();
    textFont(fontMicro5);
    textSize(interactionMessage.size);
    textAlign(CENTER, CENTER);
    text(interactionMessage.string, interactionMessage.x, interactionMessage.y);
    pop();
}

//Generate a Tama Object
function generateTama(){
    //Use the same color for all 3 buttons
    let buttonColorSet = random(buttonColors);
    let tama = {
    shell: {
        color:random(shellColors),
        x:160,
        y:180,
        h:tamaHeight,
        w:tamaHeight *.8
    },
    frame:{
        size:100,
        color:random(frameColors),
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
        color:buttonColorSet,
        onClick:pressedA,
    },
     buttonB:{
        name:"B",
        x:0,
        y:0,
        size:undefined,
        color:buttonColorSet,
        onClick:pressedB,
    },
     buttonC:{
        name:"C",
        x:0,
        y:0,
        size:undefined,
        color:buttonColorSet,
        onClick:pressedC,
    },
    message: {
    x:100,
    y:100,
    size:24,
    color:'black',
    },
    visible:true
}
    //Add to the Array    
    allTamas.push(tama);
}

//Determine positions of Tama Elements
function determineElements(i){
    allTamas[i].message.x = allTamas[i].shell.x - allTamas[i].frame.size/2 + allTamas[i].frame.size*.1;
        allTamas[i].message.y = allTamas[i].shell.y - allTamas[i].frame.size/2 - 8;
    
        //Set the values for the button positions based on the parent tama object
        //Determine Size
        let buttonSize = allTamas[i].shell.w / 6;
        //Set size of all 3
        allTamas[i].buttonA.size = buttonSize;
        allTamas[i].buttonB.size = buttonSize;
        allTamas[i].buttonC.size = buttonSize;
        //Determine Left (Absolute)
        allTamas[i].buttonA.x = allTamas[i].shell.x - (allTamas[i].shell.w / 4);
        allTamas[i].buttonA.y = allTamas[i].shell.y + (allTamas[i].shell.h / 4);
        //Determine Center (Absolute)
        allTamas[i].buttonB.x = allTamas[i].shell.x;
        allTamas[i].buttonB.y = allTamas[i].shell.y + (allTamas[i].shell.h/ 3);
        //Determine Right (Absolute)
        allTamas[i].buttonC.x = allTamas[i].shell.x + (allTamas[i].shell.w / 4);
        allTamas[i].buttonC.y = allTamas[i].shell.y + (allTamas[i].shell.h / 4);

}