/**
 * Card Table
 * Matthew Thompson
 * 
 * A Sketch which creates cards using an array and lets the user drag them around on a table to arrange them
 */

"use strict";

// Define the objects and Variables which will be used in the Sketch

//Array to hold the cards
let cardDeck= [];

// let card = {
//     text:"Card Text",
//     x:0,
//     y:0,
//     h:0,
//     w:0,
//     textColor:"black",
//     textSize:36,
//     bgColor:"white",
//     textOffsetX:-20,
//     textOffsetY:0
// }

/**
 * Create the Canvas and the Cards
*/
function setup() {
    createCanvas(1280, 720);

    //Create the Cards
    newCard("Super Mario Brothers", 100, 100, 75, 60, "black", 36, "white", -20, 0);
}


/**
 * Draw the Table and cards
*/
function draw() {
    background("lightgreen");

    //Draw the Cards
    
}

// Define the functions which will be used in the sketch

//Create a new card object and add it to the Deck
function newCard(_text, _x, _y, _h, _w, _textColor, _textSize, _bgColor, _textOffsetX, _textOffsetY){
    //Define a card using all the parameters
    const card= {
        text:_text,
        x:_x,
        y:_y,
        h:_h,
        w:_w,
        textColor:_textColor,
        textSize:_textSize,
        bgColor:_bgColor,
        textOffsetX: _textOffsetX,
        textOffsetY: _textOffsetY
    }
    //Add the card to the deck
    cardDeck.push(card);
}