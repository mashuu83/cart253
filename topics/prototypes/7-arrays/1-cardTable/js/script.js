/**
 * Card Table
 * Matthew Thompson
 * 
 * A Sketch which creates cards using an array and lets the user drag them around on a table to arrange them
 */

"use strict";

// Define the objects and Variables which will be used in the Sketch

// Settings Constants
const gameCardSettings = {
    x:50,
    y:100,
    h:120,
    w:80,
    bg:"red",
    stroke:"black"
}
const connectorCardSettings = {
    x:250,
    y:100,
    h:60,
    w:100,
    bg:"black",
    stroke:"white"
}
const twistCardSettings = {
    x:450,
    y:100,
    h:85,
    w:85,
    bg:"#EDB92E",
    stroke:"#F85931"
}
//How offset the card stacks should be
const stackOffset = 5;

//Some "Starter" Text to be permanent on the table
let tableText = {
    message:"My Game is Like...",
    size:36,
    color:"#EDB92E",
    x:100,
    y:600
}

//Array to hold the cards
//Not Currently used but want to keep in for future
let cardDeck= [];

//TRY -- Making draggable cards using DIVS - Worked
let draggableCards = [];

//Make an Array with game names and choose a random one for each card (I know that it would be better to shuffle the array and then go in order... maybe there is a shuffle function?)
let gameNames = [
    "Super\nMario\nBrothers",
    "Portal",
    "Sonic\nThe\nHedgehog",
    "Street\nFighter",
    "Tomb\nRaider",
    "Wizardry",
    "Ms.\nPac-Man",
    "Tetris",
    "Hide\nAnd\nSeek",
    "Gran\nTurismo"
];

let twistNames = [
    "Marsh\nmallows",
    "Clouds",
    "Seals",
    "Fortune\nCookies",
    "City\nBuses",
    "Cattle\nHerders",
    "Flour-\nescent\nLights",
    "High\nSchool\nLockers",
    "Card-\nboard\nBoxes",
    "Urban\nDistricts",
    "Blades\nof\nGrass",
    "Bubble\nGum",
    "Dental\nSurgery",
    "Roller\nCoasters",
    "Screen\nPro-\ntectors",
    "Office\nChairs",
    "Crayons",
    "Garden\nHerbs",
    "Tea\nLeaves",
    "Haunted\nHouses",
    "Glass\nBlowing"
]

let connectorNames = [
    "MEETS",
    "BUT IT'S\nABOUT",
    "FEATUR-\nING",
    "EXCEPT\nIT'S ALL",
    "HAD A\nBABY WITH",
    "STARRING"
]

/**
 * Create the Canvas and the Cards, Set the canvas to be the same size as the users window, to ensure that the elements are drawn as desired on the table
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    //Shuffle the list of names - Using Fisher-Yates function from google
    mixUp(gameNames);
    mixUp(twistNames);
    
    //Create the Cards
    //(Card text, x, y, h, w, text color, size, card color)
    //Use a loop which is as long as the name lists
    
    //Game Cards
    for (let i=0; i<= gameNames.length -1; i++){
        newCard(gameNames[i], gameCardSettings.x + (i*stackOffset), gameCardSettings.y + (i*stackOffset), gameCardSettings.h, gameCardSettings.w, gameCardSettings.stroke, 10, gameCardSettings.bg);
    }
    
    //Connecting Cards 
    for (let i=0; i<= connectorNames.length -1; i++){
        newCard(connectorNames[i], connectorCardSettings.x + (i * stackOffset), connectorCardSettings.y + (i*stackOffset), connectorCardSettings.h, connectorCardSettings.w, connectorCardSettings.stroke, 10, connectorCardSettings.bg);
    }
    
    //Twist Cards are Square
    for (let i=0; i <= twistNames.length - 1; i++){
            newCard(twistNames[i], twistCardSettings.x + (i*stackOffset), twistCardSettings.y + (i*stackOffset), twistCardSettings.h, twistCardSettings.w, twistCardSettings.stroke, 4, twistCardSettings.bg);
    }

}

/**
 * Draw the Table background and Starter Text
*/
function draw() {
    background("#009989");

    //Display the table text
    push();
    noStroke();
    fill(tableText.color);
    textSize(tableText.size);
    text(tableText.message, tableText.x, tableText.y);
    pop();
}

// Define the functions which will be used in the sketch

//Create a new card object and add it to the Deck
function newCard(_text, _x, _y, _h, _w, _textColor, _textSize, _bgColor){
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
    }
    //Add the card to the deck
    cardDeck.push(card);
    
    //TRY and make a draggable element using DIV - This works!
    let draggableCard;
    //TRYING - Does this name the Div or create the content? (It creates the content)
    draggableCard = createDiv(card.text);
    draggableCard.position(card.x, card.y);
    //TRYING - Make sure size takes h, w in that order (It was w, h)
    draggableCard.size(card.w, card.h);
    //If these works pull these numbers out into variables
    
    //BUG -- Not sure if font size is working correctly...
    draggableCard.style('font-size', card.textSize);
    draggableCard.style('text-align', 'center');
    draggableCard.style('font-family', 'Comic Sans MS');
    //TRY - Can I give the card a border? - WORKS, but is same color as text, I can live with that for now.
    draggableCard.style('border-style', 'solid');
    //For HTML the 'Color' attribute is setting text color
    draggableCard.style('color', card.textColor);
    draggableCard.style('background', card.bgColor);
    draggableCard.style('padding', '5px');
    //Make the card Draggable - Works
    draggableCard.draggable();

    //Add the draggable card into the Array
    draggableCards.push(draggableCard);
}

//The function to shuffle the lists, according to our friend Google, this is the Fisher-Yates shuffle
function mixUp(_array){
    // Loop from the back of the array down to the second element
    for (let i = _array.length - 1; i > 0; i--) {
    // Pick a random position from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements array[i] and array[j] 
    [_array[i], _array[j]] = [_array[j], _array[i]];
  }
  return _array;
}
