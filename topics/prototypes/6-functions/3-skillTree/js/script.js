/**
 * Skill Tree
 * Matthew Thompson
 * 
 * A Sketch where the player has an inventory of materials which can be used to expand a skill tree, buttons will have a state to see if they are "affordable" or not
 */

"use strict";

//An Array for the skill buttons
let skillButtons = [];

//Define the objects that will be used for the game
// let skillButton = {
//     name:undefined,
//     available:false,
//     owned:false,
//     //The Skill Cost in various currencies
//     costG:0,
//     costW:0,
//     costM:0,
//     costC:0,
//     x:100,
//     y:100,
//     size:50,
//     activeColor:"green",
//     passiveColor:"grey"
// }

let inventory = {
    x:50,
    y:650,
    textSize: 48,
    gold:100,
    goldColor:'yellow',
    wood:100,
    woodColor:'brown',
    metal:100,
    metalColor:'grey',
    crystals:100,
    crystalColor:'hotpink'
}


/**
 * Create A Canvas, back on my 720p bullshit
*/
function setup() {
    createCanvas(1280, 720);

    //Create the starting skill buttons
    //Buttons are: Name, cost(gold), wood, metal, crystals, x position, y position, size
    newButton("house", 10, 20, 0, 0, 100, 100, 150);
    newButton("shovel", 0, 2, 5, 0, 300, 100, 150);
    newButton("pickaxe", 0, 0, 10, 0, 500, 100, 150);
    newButton("magic staff", 0, 0, 0, 10, 700, 100, 150);
    newButton("castle", 500, 100, 100, 100, 900, 100, 150);
    //The AI is suggesting autocompletes now for the new buttons with uncanny accuracy, I thought I had turned it off, but apparently not yet.
}

/**
 * Display the skill buttons and player inventory
*/
function draw() {
    //Draw a background
    background('black');

    //Draw the player inventory
    displayInventory();

    //Draw the skill buttons
    for (const _button of skillButtons){
        drawSkill(_button);
    }

    //Today all the settings reset on my lab PC and the AI Agent turned on... It auto suggested this part, and it was extremely creepy because I typed "check if" and the agent autocompleted the rest.
    //THIS PARAGRAPH WAS AI AGENT DID IT
    //Check if player can afford the skill buttons and change their color accordingly
    for (const _button of skillButtons){
        if (inventory.gold >= _button.costG && inventory.wood >= _button.costW && inventory.metal >= _button.costM && inventory.crystals >= _button.costC){
            _button.passiveColor = _button.activeColor;
        } else {
            _button.passiveColor = "grey";
        }
    }
    //TURNING OFF THE AI BULLSHIT IMMEDIATELY, I DONT WANT IT TO AUTOCOMPLETE MY CODE, I WANT TO LEARN HOW TO CODE, NOT HAVE IT DO IT FOR ME (The AI actually wrote that)
}

function displayInventory(){
    push();
    textSize(inventory.textSize);
    noStroke();
    fill(inventory.goldColor);
    translate(inventory.x, inventory.y);
    text("Gold: " + inventory.gold, 0, 0);
    translate(width/5, 0);
    fill(inventory.woodColor);
    text("Wood: " + inventory.wood, 0, 0);
    translate(width/5, 0);
    fill(inventory.metalColor);
    text("Metal: " + inventory.metal, 0, 0);
    translate(width/5, 0);
    fill(inventory.crystalColor);
    text("Crystals: " + inventory.crystals, 0, 0);
    pop();
}

//Function to define a new button
function newButton(_name, _gCost, _wCost, _mCost, _cCost, _x, _y, _size){
    const button = {
    name:_name,
    available:false,
    owned:false,
    //The Skill Cost in various currencies
    costG:_gCost,
    costW:_wCost,
    costM:_mCost,
    costC:_cCost,
    x:_x,
    y:_y,
    size:_size,
    activeColor:"green",
    passiveColor:"grey"
    }
    skillButtons.push(button);
}

function drawSkill(_button){
    push();
    noStroke();
    fill(_button.passiveColor);
    translate(_button.x, _button.y);
    ellipse(0, 0, _button.size);
    //Show Name
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(16);
    text(_button.name, 0, -15);
    //TODO: Check if values are not zero and then display on button
    pop();
}