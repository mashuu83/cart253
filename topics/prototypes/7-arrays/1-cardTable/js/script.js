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

//TRY -- Making draggable cards using DIVS - Worked
let draggableCards = [];

//Make an Array with game names and choose a random one for each card (I know that it would be better to shuffle the array and then go in order... maybe there is a shuffle function?)
//TODO -- Add shuffling
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
    "Marshmallows",
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

//Some "Starter" Text to be permanent on the table
let tableText = {
    message:"My Game is Like...",
    size:36,
    color:"#EDB92E",
    x:100,
    y:600
}

/**
 * Create the Canvas and the Cards, Set the canvas to be the same size as the users window, to ensure that the elements are drawn as desired on the table
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    //TODO Shuffle the card deck
    
    //Create the Cards
    //(Card text, x, y, w, h, text color, size, card color)
    //Game Cards are Tall
    //Use a loop which is as long as the game names
    for (let i=0; i<= gameNames.length -1; i++){
        newCard(gameNames[i], 100 + (i*5), 150 + (i*5), 120, 80, "black", 10, "#CE1836");
    }
    
    // newCard(gameNames[0], 100, 150, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[1], 105, 155, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[2], 110, 160, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[3], 115, 165, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[4], 120, 170, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[5], 125, 175, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[6], 130, 180, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[7], 135, 185, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[8], 140, 190, 120, 80, "black", 10, "#CE1836");
    // newCard(gameNames[9], 145, 195, 120, 80, "black", 10, "#CE1836");
    
    //Connecting Cards are Wide
    newCard("MEETS", 500, 150, 60, 100, "white", 24, "black");
    newCard("BUT IT'S\nABOUT", 720, 150, 60, 100, "white", 24, "black");
    
    //Twist Cards are Square
    for (let i=0; i <= twistNames.length - 1; i++){
            newCard(twistNames[i], 900 + (i*5), 150 + (i*5), 85, 85, "#F85931", 4, "#EDB92E");
    }

}

/**
 * Draw the Table and Starter Text
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

    //Draw the Cards -- Commenting out for now
    // for (const _card of cardDeck){
    //     displayCard(_card);
    // }
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

