/**
 * Skill Tree
 * Matthew Thompson
 * 
 * A Sketch where the player has an inventory of materials which can be used to expand a skill tree, buttons will have a state to see if they are "affordable" or not
 */

"use strict";

//An Array for the skill buttons
let skillButtons = [];

//Constants for certain settings
const costTextSize = 14;

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
 * Create all of the buttons for the skill tree
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
    //Ok I am working on my windows PC at home now and the AI is definitely off
    newButton("farmer", 60, 5, 5, 5, 1100, 100, 150);
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
    //TURNING OFF THE AI BS IMMEDIATELY, I DONT WANT IT TO AUTOCOMPLETE MY CODE, I WANT TO LEARN HOW TO CODE, NOT HAVE IT DO IT FOR ME (The AI actually wrote that!)
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
    activeColor:"lightgreen",
    passiveColor:"grey"
    }
    skillButtons.push(button);
}

function drawSkill(_button){
    //Draw the Circle
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
    
    //Check if values are not zero and then display on button
    if (_button.costG > 0){
        textSize(costTextSize);
        fill(inventory.goldColor);
        text(_button.costG, -30, 15);
    }
    if (_button.costW > 0){
        textSize(costTextSize);
        fill(inventory.woodColor);
        text(_button.costW, 30, 15);
    }
    if (_button.costM > 0){
        textSize(costTextSize);
        fill(inventory.metalColor);
        text(_button.costM, -30, 35);
    }
    if (_button.costC > 0){
        textSize(costTextSize);
        fill(inventory.crystalColor);
        text(_button.costC, 30, 35);
    }
    pop();
}