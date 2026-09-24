/**
 * Mr. Furious
 * Pippin Barr
 * Edited by:
 * Matthew Thompson and Iliana 
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    },
    rage: .5,
    rageRate: .005,
    maxrage: 10
};

// Our enemy the Sky
let sky = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
};

// Our frenemie the BIRD
let bird = {
    position: {
        x: -10,
        y: 100
    },

    fill: {
        r: 230,
        g: 208,
        b: 99
    },

    size: {
        h: 10,
        w: 20
    },

    velocity: 1,
    speed: .5
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    //Draw sky
    background(sky.fill.r -= .15, sky.fill.g -= .15, sky.fill.b -= .15);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    // Make mr.furious turn red over time
    fill(mrFurious.fill.r, mrFurious.fill.g -= 0.2, mrFurious.fill.b -= 0.2);
    // Move mr furious by a rage amount, which increases by the rage rate
    mrFurious.rage += mrFurious.rageRate;
    mrFurious.rageRate = constrain(mrFurious.rageRate, 0, mrFurious.maxrage);
    mrFurious.x = constrain(mrFurious.x, 0, width);
    mrFurious.y = constrain(mrFurious.y, 0, height);
    ellipse(mrFurious.x += random(-mrFurious.rage, mrFurious.rage), mrFurious.y += random(-mrFurious.rage, mrFurious.rage), mrFurious.size);
    pop();

    // Adding bird left to right
    push();

    fill(bird.fill.r, bird.fill.g, bird.fill.b);
    ellipse(bird.position.x += bird.speed, bird.position.y -= bird.speed * 0.25, bird.size.w, bird.size.h);

    pop();
}