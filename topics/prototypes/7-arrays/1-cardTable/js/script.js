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
    //(Card text, x, y, w, h, text color, size, card color, text offsetx, y)
    newCard("Super\nMario\nBrothers", 100, 100, 120, 80, "black", 12, "white", 0, -35);
    newCard("Doom", 200, 100, 120, 80, "white", 16, "red", 0, -35);
}


/**
 * Draw the Table and cards
*/
function draw() {
    background("lightgreen");

    //Draw the Cards
    for (const _card of cardDeck){
        displayCard(_card);
    }
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

//Display the cards
function displayCard(_card){
    //Draw the card to the canvas
    push();
    noStroke();
    fill(_card.bgColor);
    //Set the rectangle to be positioned relative to it's centre
    rectMode(CENTER);
    rect(_card.x, _card.y, _card.w, _card.h);
    //Draw the Card Text
    textAlign(CENTER, CENTER);
    fill(_card.textColor);
    textSize(_card.textSize);
    text(_card.text, (_card.x + _card.textOffsetX), (_card.y + _card.textOffsetY));
    pop();
}

//Check if/what card is being clicked when the mouse is pressed down,
//Grab only the first card
//Update the location of the card while the mouse is down
//Drop the card on mouseUp, and move the card to the end of the array so that it gets drawn last
function mouseDragged(){
    for (const _card of cardDeck){
        if (mouseX > _card.x-(_card.w/2) && mouseX < _card.x+(_card.w/2) && mouseY > _card.y-(_card.h/2) && mouseY < _card.y+(_card.h/2)){
            //TODO Move card to top of stack so it is drawn last
            //Move the card around
            _card.x = mouseX;
            _card.y = mouseY;
            console.log("Card " + _card.text + " was dragged");
        }
    }
}