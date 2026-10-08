/**
 * The Only Move Is Not To Play
 * Pippin Barr
 * 
 * And Modified by Matthew T and Ilianna F
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
    window.addEventListener("offline", lose);
    window.addEventListener("online", lose);
    document.addEventListener("visibilitychange", lose);
    document.addEventListener("click", lose);
    document.addEventListener("keypress", lose);
    document.addEventListener("close", lose);
    document.addEventListener("mousemove", lose);
    document.addEventListener("wheel", lose);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();

    //If focus is false, lose
    // if (focus === false) {
    //     lose();
    // }
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

/**
 * Lose Function - Make gameOver True!
 */
function lose() {
    gameOver = true;
}

// function keyPressed() {
//     lose();
// }

// function mouseClicked() {
//     lose();
// }

// function mouseDragged() {
//     lose();
// }

// function mouseMoved() {
//     lose();
// }

// function mouseWheel() {
//     lose();
// }

