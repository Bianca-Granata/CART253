/**
 * Introducing Variables
 * Bianca Granata
 * 
 * learning what a variable is and does
 */

"use strict";

/**
 * this function creates the canvas
*/
function setup() {
    createCanvas(640, 480);

}


/**
 * draws a circle in the center of the canvas
*/
function draw() {
    background(0);
    //draw the circle
    push();
    fill(mouseX, mouseY, 0);
    noStroke();
    // by writing that the circle is also in the center
    //ellipse(width / 2, height / 2, 100, 100)
    /** makes the circle follow the mouse
     * ellipse(mouseX, mouseY, 100, 100); */
    ellipse(width / 2, height / 2, 100, 100);
    pop();
}