/**
 * Letter Cannon
 * Matthew Thompson
 * 
 * Use the mouse to aim a cannon and press any key to launch that character
 */

"use strict";

//Cannon Object
let cannon = {
    x: 100,
    w: 50,
    h: 200,
    angle: 90
}

//Bullet Object
let bullet = {
    pos: {
        x: 0,
        y: 0,
    },
    velocity: {
        x: 1,
        y: 1,
    },
    color: 'white',
    character: 'M',
}

/**
 * Draw a 720p canvas
*/
function setup() {
    createCanvas(1280, 720);
}

/**
 * Draw Cannon and Characters
*/
function draw() {
    background(0);
}
