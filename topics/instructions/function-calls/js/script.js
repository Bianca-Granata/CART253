/**
 * Function Calls
 * Bianca Granata
 * 
 * 
 * working on the Function calls examples.
 */

"use strict";

/**
 * Creates the canvas for our masterpiece
 * before each function add comment difining it
 *  happens immediately when starting the program, at once
 * will create a canvas on a page where we can draw stuff using p5
 * (to explain component pieces of the program)
 */
function setup() {
    // (for instructions lvl comments only) creates the canvas at a standard resolution
    createCanvas(640, 480);
}

/**
 * Draws the writer's desktop and a blank piece of paper
 * every frame that the program is on how it works with time
 * it starts with the name of a function and then the arguments
 */
function draw() {
    // the pink desktop
    background(255, 100, 100);
    // the blank piece of paper
    rect(200, 80, 240, 320);
}