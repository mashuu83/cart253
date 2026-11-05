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

//TRY -- Making draggable cards using DIVS
let draggableCards = [];

/**
 * Create the Canvas and the Cards
*/
function setup() {
    createCanvas(1280, 720);

    //Create the Cards
    //(Card text, x, y, w, h, text color, size, card color, text offsetx, y)
    newCard("Super\nMario\nBrothers", 100, 150, 120, 80, "black", 12, "white", 0, -35);
    newCard("Doom", 200, 150, 120, 80, "white", 16, "red", 0, -35);
}


/**
 * Draw the Table and cards
*/
function draw() {
    background("lightgreen");

    //Draw the Cards -- Commenting out for now
    // for (const _card of cardDeck){
    //     displayCard(_card);
    // }
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
    
    //TTRY and make a draggable element using DIV - This works!
    let draggableCard;
    //TRYING - Does this name the Div or create the content? (It creates the content)
    draggableCard = createDiv(card.text);
    draggableCard.position(card.x, card.y);
    //TRYING - Make sure size takes h, w in that order (It was w, h)
    draggableCard.size(card.w, card.h);
    //If these works pull these numbers out into variables
    draggableCard.style('font-size', card.textSize);
    draggableCard.style('font-family', 'Comic Sans MS');
    draggableCard.style('background', card.bgColor);
    draggableCard.style('padding', '5px');
    //Make the card Draggable
    draggableCard.draggable();

    //Add the draggable card into the Array
    draggableCards.push(draggableCard);
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
        if (mouseX > _card.x-(_card.w/2) && mouseX < _card.x+(_card.w/2 )){

        }
    }
}