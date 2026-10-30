/**
 * Skill Tree
 * Matthew Thompson
 * 
 * A Sketch where the player has an inventory of materials which can be used to expand a skill tree, buttons will have a state to see if they are "affordable" or not
 */

"use strict";

//Define the objects that will be used for the game
let skillButton = {
    name:undefined,
    available:false,
    owned:false,
    //The Skill Cost in various currencies
    costG:0,
    costW:0,
    costM:0,
    costC:0
    x:100,
    y:100,
    size:50,
    activeColor:"green",
    passiveColor:"grey"
}

let inventory = {
    gold:100,
    wood:100,
    metal:100,
    crystals:100
}


/**
 * Create A Canvas, back on my 720p nonsense
*/
function setup() {
    createCanvas(1280, 720)
}


/**
 * Display the skill buttons and player inventory
*/
function draw() {
    
    //Draw the player inventory
    displayInventory();
}