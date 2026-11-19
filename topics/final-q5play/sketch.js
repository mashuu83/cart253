// Elevator Pitch: Digital Edition
// Matthew Brandon Thompson
// Final Project for CART 253
// Dr Pippin Barr, FAll 2026

// Draw the Canvas
// NOTE - It seems like the canvas needs to be drawn before q5 commands work, so I'm putting this at the very top, unlike in p5 where I would declare variables first
await Canvas();

// FIX? - Fonts were working for screen text but not text on sprites... Maybe not supported
// let silomFont = await loadFont('./assets/fonts/Silom.ttf');
// let jerseyFont = await loadFont('./assets/fonts/Jersey.ttf');

// DECLARE Program Variables and settings

// These are the groups which will hold the variously shaped sprites
let triangles = new Group();
let gameCards = new Group();
let capsules = new Group();
let circles = new Group();
let borders = new Group();

// Declarations for the particle effects
let fallLeaf = new Visuals();
fallLeaf.addAni('./assets/images/ELR_FallLeaf.png', 5);
let springLeaf = new Visuals();
springLeaf.addAni('./assets/images/ELR_SpringLeaf.png', 5);
let blueFairy = new Visuals();
blueFairy.addAni('./assets/images/Fairy1.png', 8);

// Declarations for generic variables
let grabber = undefined;
let layerCounter = 1000;

// Constants for all the game settings
const settings = {
	general: {
		starterTextRatio:30, // How much to divide screen by to get text size
		gridSpacing:25,
		borderWidth:25,
		borderColor:'brown',
	},
	// Options for the game card/tiles
	gCard: {
		amount:25,
		h:100,
		w:120,
		rounding:2,
		textSize:12,
		drag:5,
		rotationDrag:5,
		// TODO -- Add more colors
		colors:['#93DFB8','#FFC8BA','#E3AAD6','#B5D8EB','#FFBDD8'],
		stackOffset:5,
	},
	triangles: {
		amount:50,
		pointA:[0,0],
		pointB:[0, -100],
		pointC:[60, 0],
		// TODO -- Set triangle Colors
		colors:['black'],
	},
	capsules: {
		amount:30,
		pointA:[-100,0],
		pointB:[0,0],
		rounding:15,
		variance:25,
	},
	leafBlower: {
		amount:60,
		wind:20,
		direction:-90,
		variance:10,
	},
	gravity: {
		amount:45,
	},
	circles: {
		amount:10,
		size:100,
		colors:['yellow'],
		variance:20,
		drag:5,
		rotationDrag:5,
		textSize:16,
		textColor:'white',
		strings:["MEETS", "MIXED\nWITH", "VS.", "BUT\nIT'S"],
	},
	helpText:"(X)plode (L)eaf lBlower (F)airies (G)ravity",
}

// Load Card Names from JSON file
let gameCardText = await loadJSON("./assets/data/gameNames.json");

// Draw "Table" Borders so Cards stay on screen
drawBorders(settings.general.borderWidth);

// Draw Circles
circles.color = random(settings.circles.colors);
circles.textColor = settings.circles.textColor;
circles.drag = settings.circles.drag;
circles.rotationDrag = settings.circles.rotationDrag;
circles.strokeWeight = 0;
circles.passes(circles);
circles.passes(gameCards);
circles.passes(triangles);
while (circles.length < settings.circles.amount){
	let _circle = new circles.Sprite(0, 0, settings.circles.size);
	_circle.x = random(-canvas.hw, canvas.hw);
	_circle.y = random(-canvas.hh, canvas.hh);
	_circle.textColor = 'white';
	//_circle.text = random(settings.circles.strings);
}

// CLEANUP - Experimenting with Triangles
// triangles.color = settings.triangles.color;

// KEEP? - Make triangles always underneath
triangles.layer = -1;

triangles.drag = 5;
triangles.rotationDrag = 5;
triangles.strokeWeight = 0;
// Draw them all
while (triangles.length < settings.triangles.amount){
	let _triangle = new triangles.Sprite([settings.triangles.pointA, settings.triangles.pointB, settings.triangles.pointC, settings.triangles.pointA]);
	_triangle.passes(triangles);
	_triangle.passes(gameCards);
	_triangle.x = random(-canvas.hw, canvas.hw);
	_triangle.y = random(-canvas.hh, canvas.hh);
	_triangle.rotation = random(0, 360);
	// Opacity doesn't seem to work, is it because of custom shape?
	_triangle.opacity = random(0.1, 1);
}

// GameCard universal settings
gameCards.strokeWeight = 0;
gameCards.textSize = 12;
// Dynamic is default
gameCards.physics = DYNAMIC;

// Drag works well to keep the physics a little more real for cards on a table but still able to 'toss' a bit
gameCards.drag = settings.gCard.drag;
gameCards.rotationDrag = settings.gCard.rotationDrag;

// Loop to create all the game cards
while (gameCards.length < settings.gCard.amount){
	// Sprites do not seem to support having rounded corners and having borders... but perhaps I will be replacing them with images anway
	let _gameCard = new gameCards.Sprite(0,0,[settings.gCard.w, 100, settings.gCard.h, 80, settings.gCard.w, 100, settings.gCard.h, 80]);
	_gameCard.fill = random(settings.gCard.colors);
	// TODO - Get the cards to align across the screen
	_gameCard.x = random(-canvas.hw, canvas.hw);
	_gameCard.y = random(-canvas.hh, canvas.hh);
	_gameCard.rotation = random(0,360);
	// OPTION - Stack the cards up
	// _gameCard.x = gameCards.length * gameSettings.stackOffset;
	// _gameCard.y = gameCards.length * gameSettings.stackOffset * 2;
	// Make it so the cards can overlap
	// Using .overlaps didn't work with the custom shape, but .passes works
	_gameCard.passes(gameCards);
}

// UPDATE FUNCTION
// Like the p5 Draw, runs every frame
// -------------------------------

q5.update = function () {
	// Draw the Background
	background('white');
		
	// TODO - Change text into Kinematic Sprites
	// Draw starting text
	fill('black');
	textSize(width/settings.general.starterTextRatio);
	text('MY GAME IS...', -width/3, -height/4);
	// Helper Text
	text(settings.helpText, (-canvas.hw + settings.general.borderWidth), (canvas.hh - settings.general.borderWidth));
	
	// Set what happens when a sprite gets clicked
	if (mouse.presses()) {
    
	// TODO - Refactor the click behavior into a function
	let _clickedSprite = world.getSpriteAt(mouse);
    if (_clickedSprite) {
    	// Show a border while clicked
		_clickedSprite.strokeWeight = 2;
	 	// TODO - Add a pulsing effect to border when mouse is being held
		
		// Add some text to the sprite 
	  	// Check and see if there is any text first so that it doesn't change each time you click
		// Will need to check and see if it is a gamecard... (Or make other shapes have text)
		if (_clickedSprite.text == undefined && _clickedSprite.groups.includes(gameCards)){
			_clickedSprite.text = random(gameCardText.gameCardText);
		}
		else if(_clickedSprite.text == undefined && _clickedSprite.groups.includes(circles)){
			_clickedSprite.text = random(settings.circles.strings);
		}
		
		// Make a new Grabber to pull the card around
		grabber = new GrabberJoint(mouse, _clickedSprite);
	  	
		// Add one to the layer counter and then set it so the card ends up on top
		layerCounter ++;
		_clickedSprite.layer = layerCounter;
    }
  }
    if (grabber){
		// If the grabber exists, the target is the mouse location
		grabber.target = mouse;
	} 
  	if (mouse.released() && grabber) {
    	// What to do when you let go
		// Get rid of the frame
		grabber.sprite.strokeWeight = 0;
    
		// Delete the Grabber
		grabber.delete();
    	grabber = null;
  	}

	// Explosion Effect
	if (kb.pressing('X')) {
		explosionStart();
		// TODO - Set timeout for explosion end, call reset after some time?
  	}

	// TODO - Make function called physicsReset()??
	gameCards.drag = settings.gCard.drag;
	gameCards.rotationDrag = settings.gCard.rotationDrag;

	// Leafblower Effect
	if (kb.pressing('L')){
		leafBlower();
	}

	// Spawn Fairies
	if (kb.pressing('F')){
		spawnFairies();
	}

	// Gravity Effect
	if (kb.pressing('G')){
		gravityOn(settings.gravity.amount);
	}
	if (kb.released('G')){
		gravityOff();
	}

	// CLEANUPS (After doing effects)
	fallLeaf.cull(8);
	fallLeaf.draw();

	blueFairy.cull(8);
	blueFairy.draw();
};

// FUNCTION DEFINITIONS
// -------------------

function drawBorders(_width){
	
	borders.physics = STATIC;
	borders.color = settings.general.borderColor;
	new borders.Sprite(0, -canvas.hh, canvas.w, _width);
	new borders.Sprite(0, canvas.hh, canvas.w, _width);
	new borders.Sprite(-canvas.hw, 0, _width, canvas.h);
	new borders.Sprite(canvas.hw, 0, _width, canvas.h);
}

function explosionStart(){
	gameCards.drag = 0;
	gameCards.rotationDrag = 0;
	world.explodeAt(pointer, 200, 100);
}

function leafBlower(){
	// Make a heckton of leaves
	// TODO - Pull settings out into declaration
	for (let i=0; i<settings.leafBlower.amount; i++) {
		let fl = new fallLeaf.Visual();
		fl.x = pointer.x;
		fl.y = pointer.y;
		fl.vx = pointer.delta.x * 0.1 + jit(.25);
		fl.vy = pointer.delta.y * 0.2 + random(0, -1);
	}
	let _blownSprite = world.getSpriteAt(mouse);
	if (_blownSprite){
		// Apply wind - strength, angle
		_blownSprite.applyWind(settings.leafBlower.wind, settings.leafBlower.direction + jit(settings.leafBlower.variance));
	}
	// SPICY - use raycasting to blow in a line
}

function spawnFairies(){
	for (let i=0; i<25; i++) {
		//Spawn Fairies in centre of screen
		let bf = new blueFairy.Visual();
		bf.x = 0;
		bf.y = 0;
		// TODO - Can I make them spawn in a circle instead?
		bf.vx = pointer.delta.x * 0.1 + jit(1);
		bf.vy = pointer.delta.y * 0.1 + jit(1);
		bf.layer = layerCounter;
		// TODO - Use Sin to make fairies flight paths more interesting
	}
}


function gravityOn(_strength){
	world.gravity.y = _strength;
	allSprites.collides(allSprites);
// 	triangles.collides(triangles);
// 	triangles.collides(gameCards);
// 	gameCards.collides(gameCards);
}

function gravityOff(){
	world.gravity.y = 0;
	allSprites.passes(allSprites);
	allSprites.collides(borders);
	// triangles.passes(triangles);
	// triangles.passes(gameCards);
	// gameCards.passes(gameCards);
}

// TODO - Get cards to move into neat stacks
function stackCards(){
}

// TODO - Hide all the text on the screen to enjoy the shapes/graphics
function hideText(){

}

// OPTIONAL - Make the game name only appear when a box is clicked (Currently Implemented)

// TODO - Magnet/Follow/Flocking Effect

// TODO - Set all sprites to repel each other

// TODO - Mixup/Shuffle/Tornado

// TODO - Clear options inspired by mario paint

// TODO - Draw some lines to make a background Grid (Memphis Style)
// TODO - Add squiggle shapes which are not affected by physics, use scale randomness?

// TODO - STICKY - Connect cards with joints

// TODO - Move settings into JSON

// Experimenting with Capsules
// let capsule = new capsules.Sprite([settings.capsules.pointA, settings.capsules.pointB], settings.capsules.rounding);
// Hmmm.. text on capsules is problematique appears on one side instead of centered
// capsule.text = 'meets';
// Might be time to explore using img's

// 1 - Add connector words on circles?