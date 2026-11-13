// Elevator Pitch: Digital Edition
// Matthew Brandon Thompson
// Final Project for CART 253
// Dr Pippin Barr, FAll 2026

// Settings constants and Variable declarations
const stackOffset = 5;

const gameSettings = {
	starterTextRatio:30, //How much to divide screen by to get text size
	gameCardHeight:80,
	gameCardWidth:100,
	gameCardRounding:10
}
//TODO - Create JSON Files with the card names

//Define a new Game card
// gameCard = new Sprite(0, 0, gameSettings.gameCardHeight, gameSettings.gameCardWidth, gameSettings.gameCardRounding);
// gameCard.textSize = 12;

//Define a Group of GameCards
let gameCards = new Group();
gameCards.color = 'yellow';

//Draw the Canvas and set the gravity (Not needed here?)
await Canvas();
//world.gravity.y = 10;

//Like the p5 Draw, runs every frame
q5.update = function () {
	//Draw the Background
	background('#118014');
	


	
	//Draw starting text
	textSize(width/gameSettings.starterTextRatio);
	text('My Game is Like...', -width/3, -height/4);
};
