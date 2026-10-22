/**
 * Letter Cannon
 * Matthew Thompson
 * 
 * Use the mouse to aim a cannon and press any key to launch that character
 */

"use strict";

//Cannon Object
let cannon = {
    base: 80,
    w: 50,
    h: 200,
    angle: 90,
    color: 'deeppink',
    strokeWeight: 2,
    stroke: 'white',
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

    //Draw the Cannon
    push();
    strokeWeight(cannon.strokeWeight);
    stroke(cannon.stroke);
    fill(cannon.color);
    rect(width / 2, height - cannon.h, cannon.w, cannon.h);
    ellipse((width / 2) + (cannon.w / 2), height, cannon.base);
    pop();

    moveBullet();
}

//On Key Press, generate a bullet then fire it!
function keyPressed() {
    generateBullet();
}

function generateBullet() {

}

function moveBullet() {

}