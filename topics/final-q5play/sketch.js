// Elevator Pitch: Digital Edition
// Matthew Brandon Thompson
// Final Project for CART 253
// Dr Pippin Barr, FAll 2026

//Draw the Canvas and set the gravity (Not needed here?)
//It seems like the canvas needs to be drawn before q5 commands work, so I'm putting this at the top
await Canvas();
world.gravity.y = 0;

// Settings constants and Variable declarations
const stackOffset = 5;

const gameSettings = {
	starterTextRatio:30, //How much to divide screen by to get text size
	gameCardHeight:80,
	gameCardWidth:100,
	gameCardRounding:10,
	howManyGameCards:20,
	borderWidth:25
}
//TODO - Create JSON Files with the card names

//Draw "Table" Borders so Cards stay on screen
let borders = new Group();
borders.physics = STATIC;
borders.color = 'brown';
//Draw the 4 sides
new borders.Sprite(0, -canvas.hh, canvas.w, gameSettings.borderWidth);
new borders.Sprite(0, canvas.hh, canvas.w, gameSettings.borderWidth);
new borders.Sprite(-canvas.hw, 0, gameSettings.borderWidth, canvas.h);
new borders.Sprite(canvas.hw, 0, gameSettings.borderWidth, canvas.h);

//Define a Group of GameCards
let gameCards = new Group();
//Set paramaters that will apply to all cards
gameCards.fill = 'yellow';
gameCards.textSize = 12;
gameCards.strokeWeight = 4;
gameCards.stroke = 'red';
gameCards.grabbable = true;
//Might need to change this to Kinematic to not bump other cards
gameCards.physics = DYNAMIC;
// gameCards.friction = 100;
// gameCards.mass = 100;
//Keeps Cards from flying/Spinning around when you drag them
gameCards.rotationLock = true;

//Define a new Game card
while (gameCards.length < gameSettings.howManyGameCards){
	let gameCard = new gameCards.Sprite(0, 0, gameSettings.gameCardHeight, gameSettings.gameCardWidth, gameSettings.gameCardRounding);
	// gameCard.text.x = -5;
	gameCard.text = "hello";
	gameCard.x = gameCards.length * 5;
	gameCard.y = gameCards.length * 10;
	//Make it so the cards can overlap
	//gameCard.overlaps(gameCards);
	gameCard.layer = gameCards.length;
	//Test
	gameCard.rotation = (360/gameCards.length);
}

//Loop to create stack


//Like the p5 Draw, runs every frame
q5.update = function () {
	//Draw the Background
	background('#118014');
		
	//Draw starting text
	textSize(width/gameSettings.starterTextRatio);
	text('My Game is Like...', -width/3, -height/4);
};

//TODO (End) - Explosion Effect

//TODO (End) - Leafblower effect (So many particles)