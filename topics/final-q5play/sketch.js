// Elevator Pitch: Digital Edition
// Matthew Brandon Thompson
// Final Project for CART 253
// Dr Pippin Barr, FAll 2026

//Draw the Canvas and set the gravity (Not needed here?)
//It seems like the canvas needs to be drawn before q5 commands work, so I'm putting this at the top
await Canvas();
world.gravity.y = 0;

//Load Card Names from JSON file
let gameCardText = undefined;
gameCardText = await loadJSON("./assets/data/gameNames.json");

// Settings constants and Variable declarations
const gameSettings = {
	starterTextRatio:30, //How much to divide screen by to get text size
	gameCardHeight:80,
	gameCardWidth:100,
	gameCardRounding:10,
	howManyGameCards:30,
	borderWidth:25,
	stackOffset:5,
	//TODO -- Add more colors
	gameCardColors:['#93DFB8','#FFC8BA','#E3AAD6','#B5D8EB','#FFBDD8']
}

// Draw "Table" Borders so Cards stay on screen
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
// Set paramaters that will apply to all cards
// This can make an image for the cards, emoji work
// gameCards.img = '🃏'
// Not defining a fill color makes it random
gameCards.textSize = 12;
gameCards.strokeWeight = 3;
gameCards.stroke = 'black';
gameCards.grabbable = true;
// Might need to change this to Kinematic to not bump other cards? Nope, use .overlaps or .passes for that
gameCards.physics = DYNAMIC;
// Drag works well to keep the physics a little more real for cards on a table but still able to 'toss' a bit
gameCards.drag = 5;
// Friction and Mass didn't seem to work as well as drag
// gameCards.friction = 100;
// gameCards.mass = 100;
//Keeps Cards from flying/Spinning around when you drag them
gameCards.rotationLock = true;

//Define a new Game card
//Loop to create stack
while (gameCards.length < gameSettings.howManyGameCards){
	//Sprites do not seem to support having rounded corners and having borders... but perhaps I will be replacing them with images anway
	let gameCard = new gameCards.Sprite(0, 0, gameSettings.gameCardHeight, gameSettings.gameCardWidth);
	// gameCard.text.x = -5;
	gameCard.fill = random(gameSettings.gameCardColors);
	gameCard.text = random(gameCardText.gameCardText);
	gameCard.x = gameCards.length * 5;
	gameCard.y = gameCards.length * 10;
	//Make it so the cards can overlap
	gameCard.overlaps(gameCards);
	gameCard.layer = gameCards.length;
	//Test
	// gameCard.rotation = (gameCards.length * (360/gameSettings.howManyGameCards));
}

//TODO - Draw some lines to make a background Grid (Memphis Style)

//Like the p5 Draw, runs every frame
q5.update = function () {
	//Draw the Background
	background('black');
		
	//Draw starting text
	textSize(width/gameSettings.starterTextRatio);
	text('My Game is Like...', -width/3, -height/4);

	// TODO - Using find sprites make the clicked card move to the highest layer
};

//TODO (End) - Explosion Effect

//TODO (End) - Leafblower effect (So many particles)

//TODO - Magnet/Follow/Flocking Effect

//TODO - Set all sprites to repel each other

//TODO - Mixup/Shuffle/Tornado