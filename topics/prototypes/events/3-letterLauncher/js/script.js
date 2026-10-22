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
    // Starting from the top/middle of the Cannon
    pos: {
        x: 640 + (cannon.w / 2) - 15,
        y: 720 - (cannon.h),
    },
    velocity: {
        x: 1,
        y: 5,
    },
    color: 'white',
    character: 'M',
    size: 30,
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

    //Draw the Bullet
    push();
    //Temporary Circle
    //ellipse(bullet.pos.x, bullet.pos.y, bullet.size);
    fill(bullet.color);
    textSize(bullet.size);
    text(bullet.character, bullet.pos.x, bullet.pos.y);
    pop();

}

//On Key Press, generate a bullet then fire it!
function keyPressed() {
    generateBullet(key);
    //Reset the bullet position
    bullet.pos.y = 720 - cannon.h;
    bullet.pos.x = 640 + (cannon.w / 2) - 10;
}

function generateBullet(key) {
    bullet.character = key;
}

function moveBullet() {
    bullet.pos.y -= bullet.velocity.y;
}