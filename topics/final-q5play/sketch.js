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
let triangles = new Group();
let gameCards = new Group();
let grabber = undefined;
let layerCounter = 1000;
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
	triangles: {
		amount:75,
		pointA:[0,0],
		pointB:[0, -100],
		pointC:[60, 0],
		color:'black',
	}
}

//Load Card Names from JSON file
let gameCardText = await loadJSON("./assets/data/gameNames.json");

// Draw "Table" Borders so Cards stay on screen
drawBorders(settings.general.borderWidth);

//Experimenting
//triangles.color = settings.triangles.color;
triangles.layer = -1;
triangles.drag = 5;
triangles.rotationDrag = 5;
triangles.strokeWeight = 0;
//Draw them all
while (triangles.length < settings.triangles.amount){
	let _triangle = new triangles.Sprite([settings.triangles.pointA, settings.triangles.pointB, settings.triangles.pointC, settings.triangles.pointA]);
	_triangle.passes(triangles);
	_triangle.passes(gameCards);
	_triangle.x = random(-canvas.hw, canvas.hw);
	_triangle.y = random(-canvas.hh, canvas.hh);
	_triangle.rotation = random(0, 360);
	_triangle.opacity = random(0.1, 1);
}

//Define a Group of GameCards

gameCards.strokeWeight = 0;
gameCards.textSize = 12;
gameCards.physics = DYNAMIC;

// Drag works well to keep the physics a little more real for cards on a table but still able to 'toss' a bit
gameCards.drag = settings.gCard.drag;
gameCards.rotationDrag = settings.gCard.rotationDrag;

//Loop to create all the game cards
while (gameCards.length < settings.gCard.amount){
	//Sprites do not seem to support having rounded corners and having borders... but perhaps I will be replacing them with images anway
	let _gameCard = new gameCards.Sprite(0,0,[settings.gCard.w, 100, settings.gCard.h, 80, settings.gCard.w, 100, settings.gCard.h, 80]);
	_gameCard.fill = random(settings.gCard.colors);
	// TODO - Get the cards to align across the screen
	_gameCard.x = random(-canvas.hw, canvas.hw);
	_gameCard.y = random(-canvas.hh, canvas.hh);
	_gameCard.rotation = random(0,360);
	// OPTION - Stack the cards up
	// _gameCard.x = gameCards.length * gameSettings.stackOffset;
	// _gameCard.y = gameCards.length * gameSettings.stackOffset * 2;
	//Make it so the cards can overlap
	//Using .overlaps didn't work with the custom shape, but .passes works
	_gameCard.passes(gameCards);
	_gameCard.layer = gameCards.length;
}
//TODO - Draw some lines to make a background Grid (Memphis Style)

//Like the p5 Draw, runs every frame
q5.update = function () {
	//Draw the Background
	background('white');
		
	//Draw starting text
	fill('black');
	textSize(width/settings.general.starterTextRatio);
	text('MY GAME IS...', -width/3, -height/4);
	//Helper Text
	text('(X)plode', (-canvas.hw + settings.general.borderWidth), (canvas.hh - settings.general.borderWidth));
	
	//Set what happens when a sprite gets clicked
	if (mouse.presses()) {
    let _clickedSprite = world.getSpriteAt(mouse);
    if (_clickedSprite) {
    	_clickedSprite.strokeWeight = 2;
	 	
		// TODO - Add a pulsing effect to border when mouse is being held
		
		//Add some text to the sprite 
	  	//Check and see if there is any text first so that it doesn't change each time you click
		// FIX - Will need to check and see if it is a gamecard... (Or make other shapes have text)
		if (_clickedSprite.text == undefined && _clickedSprite.groups.includes(gameCards)){
			_clickedSprite.text = random(gameCardText.gameCardText);
		}
		
		//Make a new Grabber to pull the card around
		grabber = new GrabberJoint(mouse, _clickedSprite);
	  	//Add one to the layer counter and then set it so the card ends up on top
		layerCounter ++;
		_clickedSprite.layer = layerCounter;
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

// Make a counter for the layers and then just increment the counter when you use it