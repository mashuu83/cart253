// Elevator Pitch: Digital Edition
// Matthew Brandon Thompson
// Final Project for CART 253
// Dr Pippin Barr, FAll 2026

// Draw the Canvas
// NOTE - It seems like the canvas needs to be drawn before q5 commands work, so I'm putting this at the top
await Canvas();

// FIX? - Fonts were working for screen text but not text on sprites...
// let silomFont = await loadFont('./assets/fonts/Silom.ttf');
// let jerseyFont = await loadFont('./assets/fonts/Jersey.ttf');

// Declare Program Variables and settings
let grabber = undefined;
const settings = {
	general: {
		starterTextRatio:30, //How much to divide screen by to get text size
		gridSpacing:25,
		borderWidth:25,
		borderColor:'brown',
	},
	//Options for the game card/tiles
	gCard: {
		amount:30,
		h:100,
		w:120,
		rounding:2,
		textSize:12,
		drag:5,
		rotationDrag:5,
		//TODO -- Add more colors
		colors:['#93DFB8','#FFC8BA','#E3AAD6','#B5D8EB','#FFBDD8'],
		stackOffset:5,
	},
}

//Load Card Names from JSON file
let gameCardText = await loadJSON("./assets/data/gameNames.json");

// Draw "Table" Borders so Cards stay on screen
drawBorders(settings.general.borderWidth);

//Define a Group of GameCards
let gameCards = new Group();
gameCards.strokeWeight = 0;
gameCards.textSize = 12;
gameCards.physics = DYNAMIC;
// Drag works well to keep the physics a little more real for cards on a table but still able to 'toss' a bit
gameCards.drag = settings.gCard.drag;
gameCards.rotationDrag = settings.gCard.rotationDrag;

//Keeps Cards from flying/Spinning around when you drag them
//gameCards.rotationLock = false;

//Define a new Game card
//Loop to create stack
while (gameCards.length < settings.gCard.amount){
	//Sprites do not seem to support having rounded corners and having borders... but perhaps I will be replacing them with images anway
	let gameCard = new gameCards.Sprite(0,0,[settings.gCard.h,100,settings.gCard.h,80,settings.gCard.h,100,settings.gCard.h,80]);
	// gameCard.text.x = -5;
	gameCard.fill = random(settings.gCard.colors);
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
	// gameCard.passes(gameCards);
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
	fill('black');
	//textFont(silomFont);
	textSize(width/settings.general.starterTextRatio);
	text('MY GAME IS...', -width/3, -height/4);

	// TODO - Using find sprites make the clicked card move to the highest layer
	
	//Set what happens when a sprite gets clicked
	if (mouse.presses()) {
    let _clickedSprite = world.getSpriteAt(mouse);
    if (_clickedSprite) {
    	_clickedSprite.strokeWeight = 2;
	 	
		//Add some text to the sprite 
	  	//Check and see if there is any text first so that it doesn't change each time you click
		if (_clickedSprite.text == undefined){
			_clickedSprite.text = random(gameCardText.gameCardText);
		}
		
		//Make a new Grabber to pull the card around
		grabber = new GrabberJoint(mouse, _clickedSprite);
	  	//TODO Find highest layer and set to one above
    }
  }
    if (grabber){
		//If the grabber exists, the target is the mouse location
		grabber.target = mouse;
	} 
  	if (mouse.released() && grabber) {
    	//What to do when you let go
		//Get rid of the frame
		grabber.sprite.strokeWeight = 0;
    
		// Delete the Grabber
		grabber.delete();
    	grabber = null;
  	}

	//Explosion Effect
	if (kb.pressing('X')) {
		gameCards.drag = 0;
		gameCards.rotationDrag = 0;
		world.explodeAt(pointer, 200, 100);
  	}
	else{
		gameCards.drag = settings.gCard.drag;
		gameCards.rotationDrag = settings.gCard.rotationDrag;
	}

};

//TODO (End) - Leafblower effect (So many particles)

//TODO - Magnet/Follow/Flocking Effect

//TODO - Set all sprites to repel each other

//TODO - Mixup/Shuffle/Tornado

//TODO - "Cleanup" button that sorts the cards

//TODO - Clear options inspired by mario paint

//IDEA - Make the game name only appear when a box is clicked

// Function definitions

function drawBorders(_width){
	let borders = new Group();
	borders.physics = STATIC;
	borders.color = settings.general.borderColor;
	new borders.Sprite(0, -canvas.hh, canvas.w, _width);
	new borders.Sprite(0, canvas.hh, canvas.w, _width);
	new borders.Sprite(-canvas.hw, 0, _width, canvas.h);
	new borders.Sprite(canvas.hw, 0, _width, canvas.h);
}