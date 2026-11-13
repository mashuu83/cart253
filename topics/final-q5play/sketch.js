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
	howManyGameCards:30,
	borderWidth:25,
	gameCardColors:['#93DFB8','#FFC8BA','#E3AAD6','#B5D8EB','#FFBDD8']
}

//TODO - Create JSON Files with the card names
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
    "Gran\nTurismo",
    "Pong",
    "Space\nInvaders",
    "Donkey\nKong",
    "Monkey\nBall",
    "Zelda",
    "Bubble\nBobble",
    "Punch\nOut",
    "Mega\nMan",
    "Golden\nAxe",
    "Prince\nof\nPersia",
    "SimCity",
    "Civiliz-\nation",
    "Lemmings",
    "Mario\nKart",
    "Doom",
    "Myst",
    "King's\nQuest",
    "Star\nFox",
    "Final\nFantasy",
    "Warcraft",
    "Worms",
    "Nights\nInto\nDreams",
    "PaRappa\nthe\nRapper",
    "Pokemon",
    "Castlevania",
    "Metroid",
    "Diablo",
    "Tactics\nOgre",
    "Crash\nBandicoot",
    "Metal\nGear\nSolid",
    "Panzer\nDragoon",
    "Crazy\nTaxi",
    "Shenmue",
    "Tony\nHawk",
    "Jet\nSet\nRadio",
    "The\nSims",
    "Devil\nMay\nCry",
    "Ico",
    "Rez",
    "Elder\nScrolls",
    "Kingdom\nHearts",
    "Wario\nWare",
    "Grand\nTheft\nAuto",
    "Wii\nSports",
    "Peggle",
    "Rock\nBand",
    "Border-\nLands",
    "Heavy\nRain",
    "Minecraft",
    "Stanley\nParable",
    "Magic\nthe\nGathering",
    "Rocket\nLeague",
    "Stardew\nValley",
    "Hades"
];

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
// This can make an image for the cards, emoji work
// gameCards.img = '🃏'
// Not defining a fill color makes it random
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
//Loop to create stack
while (gameCards.length < gameSettings.howManyGameCards){
	//Sprites do not seem to support having rounded corners and having borders... but perhaps I will be replacing them with images anway
	let gameCard = new gameCards.Sprite(0, 0, gameSettings.gameCardHeight, gameSettings.gameCardWidth);
	// gameCard.text.x = -5;
	gameCard.fill = random(gameSettings.gameCardColors);
	gameCard.text = random(gameNames);
	gameCard.x = gameCards.length * 5;
	gameCard.y = gameCards.length * 10;
	//Make it so the cards can overlap
	gameCard.overlaps(gameCards);
	gameCard.layer = gameCards.length;
	//Test
	// gameCard.rotation = (gameCards.length * (360/gameSettings.howManyGameCards));
}

//Like the p5 Draw, runs every frame
q5.update = function () {
	//Draw the Background
	background('#118014');
		
	//Draw starting text
	textSize(width/gameSettings.starterTextRatio);
	text('My Game is Like...', -width/3, -height/4);

	// TODO - Using find sprites make the clicked card move to the highest layer
};

//TODO (End) - Explosion Effect

//TODO (End) - Leafblower effect (So many particles)