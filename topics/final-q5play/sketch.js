// Elevator Pitch: Digital Edition
// Matthew Brandon Thompson
// Final Project for CART 253
// Dr Pippin Barr, FAll 2026

//Draw the Canvas
//It seems like the canvas needs to be drawn before q5 commands work, so I'm putting this at the top
await Canvas();
// let silomFont = await loadFont('./assets/fonts/Silom.ttf');
// let jerseyFont = await loadFont('./assets/fonts/Jersey.ttf');

// Declare Program Variables and settings
let grabber = undefined;
const gameSettings = {
	starterTextRatio:30, //How much to divide screen by to get text size
	gameCardHeight:80,
	gameCardWidth:100,
	gameCardRounding:2,
	howManyGameCards:30,
	borderWidth:25,
	stackOffset:5,
	gridSpacing:25,
	borderColor:'brown',
	//TODO -- Add more colors
	gameCardColors:['#93DFB8','#FFC8BA','#E3AAD6','#B5D8EB','#FFBDD8']
}

//Load Card Names from JSON file
let gameCardText = await loadJSON("./assets/data/gameNames.json");

// Draw "Table" Borders so Cards stay on screen
let borders = new Group();
borders.physics = STATIC;
borders.color = gameSettings.borderColor;
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
gameCards.textFont = 'sans-serif';
gameCards.textSize = 12;
gameCards.strokeWeight = 0;
gameCards.stroke = 'black';

// gameCards.grabbable = true;
// Might need to change this to Kinematic to not bump other cards? Nope, use .overlaps or .passes for that
gameCards.physics = DYNAMIC;
// Drag works well to keep the physics a little more real for cards on a table but still able to 'toss' a bit
gameCards.drag = 5;
gameCards.rotationDrag = 5;
// Friction and Mass didn't seem to work as well as drag
gameCards.friction = 1000;
// gameCards.mass = 100;
//Keeps Cards from flying/Spinning around when you drag them
gameCards.rotationLock = false;

//Define a new Game card
//Loop to create stack
while (gameCards.length < gameSettings.howManyGameCards){
	//Sprites do not seem to support having rounded corners and having borders... but perhaps I will be replacing them with images anway
	let gameCard = new gameCards.Sprite(0,0,[gameSettings.gameCardHeight,100,gameSettings.gameCardHeight,80,gameSettings.gameCardHeight,100,gameSettings.gameCardHeight,80]);
	// gameCard.text.x = -5;
	gameCard.fill = random(gameSettings.gameCardColors);
	// gameCard.text = random(gameCardText.gameCardText);
	
	//TODO - Get the cards to align across the screen
	
	//Stack the cards up
	// gameCard.x = gameCards.length * gameSettings.stackOffset;
	// gameCard.y = gameCards.length * gameSettings.stackOffset * 2;
	
	gameCard.x = random(-canvas.hw, canvas.hw);
	gameCard.y = random(-canvas.hh, canvas.hh);

	gameCard.rotation = random(0,360);

	//Make it so the cards can overlap
	//Using .overlaps didn't work with the custom shape, but .passes works
	gameCard.passes(gameCards);
	gameCard.layer = gameCards.length;
	//See if you can make text invisible
}

//Experiment with Drawing some shapes as Sprites
//Drawing a rhombus, you give x, then y, then an array with length-angle-length-angle etc.. you can add rounding after the array
// let experimentShape = new Sprite(0,0,[gameSettings.gameCardHeight,100,gameSettings.gameCardHeight,80,gameSettings.gameCardHeight,100,gameSettings.gameCardHeight,80], gameSettings.gameCardRounding);
// experimentShape.grabbable = true;
// experimentShape.text = "testing";
// experimentShape.rotationLock = true;
// experimentShape.drag = 4;

//TODO - Draw some lines to make a background Grid (Memphis Style)

//Like the p5 Draw, runs every frame
q5.update = function () {
	//Draw the Background
	background('white');
		
	//Draw starting text
	// fill('black');
	//textFont(silomFont);
	textSize(width/gameSettings.starterTextRatio);
	text('MY GAME IS...', -width/3, -height/4);

	// TODO - Using find sprites make the clicked card move to the highest layer
	
	//Set what happens when a sprite gets clicked
	if (mouse.presses()) {
    let _clickedSprite = world.getSpriteAt(mouse);
    if (_clickedSprite) {
      _clickedSprite.strokeWeight = 2;
	 //Add some text to the sprite 
	  _clickedSprite.text = random(gameCardText.gameCardText);
      grabber = new GrabberJoint(mouse, _clickedSprite);
	  //TODO Find highest layer and set to one above
    }
  }
    if (grabber) grabber.target = mouse;
  	if (mouse.released() && grabber) {
    grabber.sprite.strokeWeight = 0;
    grabber.delete();
    grabber = null;
  }
};

//TODO (End) - Explosion Effect

//TODO (End) - Leafblower effect (So many particles)

//TODO - Magnet/Follow/Flocking Effect

//TODO - Set all sprites to repel each other

//TODO - Mixup/Shuffle/Tornado

//TODO - "Cleanup" button that sorts the cards

//TODO - Clear options inspired by mario paint

//IDEA - Make the game name only appear when a box is clicked

