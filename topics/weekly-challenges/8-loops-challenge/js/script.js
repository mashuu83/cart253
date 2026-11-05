/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);

    background("pink");
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    //background("pink");
    
    let _index = 0;

    for (let i=0; i<=width; i++){
        const shade = map(i, 0, width, 50, 200);
        colorMode(HSB)
        stroke(309, 100, shade);
        line(i, 0, i, height);
    }

    while (_index < 11){

        stroke(_index * 25);
        line((_index * 50), 0, (_index * 50), height);

        //Make Horizontal lines
        line(0, (_index * 50), width, (_index * 50));
        
        //Increase the index by 1
        _index ++;
    }



    
    // stroke(0);
    // line(0, 0, 0, height);
    
    // stroke(25);
    // line(50, 0, 50, height);
    
    // stroke(50);
    // line(100, 0, 100, height);
    
    // stroke(75);
    // line(150, 0, 150, height);
    
    // stroke(100);
    // line(200, 0, 200, height);
    
    // stroke(125);
    // line(250, 0, 250, height);
    
    // stroke(150);
    // line(300, 0, 300, height);
    
    // stroke(175);
    // line(350, 0, 350, height);
    
    // stroke(200);
    // line(400, 0, 400, height);
    
    // stroke(225);
    // line(450, 0, 450, height);
    
    // stroke(250);
    // line(500, 0, 500, height);
}
