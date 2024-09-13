/**
 * Drawing Challenge #1
 *
 * 
 * Drawing challenge #1 - the Italian flag
 */

"use strict";

/**
 * creates canvas
*/
function setup() {
    createCanvas(1000, 500);
}
/**
 * draws sky and the Italian flag
*/
function draw() {
    drawSky();
    drawFlag();
}

function drawSky() {
    // The sky
    background(150, 200, 250);
}
function drawFlag() {
    //Draws the entire Italian flag
    push();
    noStroke();
    fill(77, 179, 46);
    rect(300, 100, 150, 300);
    pop();
    push();
    noStroke();
    fill(255, 255, 255);
    rect(450, 100, 150, 300);
    pop();
    push();
    noStroke();
    fill(212, 0, 0);
    rect(600, 100, 150, 300);
    pop();
}

