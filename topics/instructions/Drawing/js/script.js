/**
 * The greatest record of all time
 * Bianca Granata
 * 
 * record
 * practicing and learning drawing functions in p5
 */

"use strict";

/**
 * creates a square canvas
*/
function setup() {
    createCanvas(640, 640);
}

/**
 * displays the record
*/
function draw() {
    //grey background
    background(150);
    //main part of the record
    push();
    fill('black');
    stroke(255);
    ellipse(320, 320, 480, 480);
    pop();

    //label of the record
    push();
    fill('red');
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();
    //hole of the record
    push();
    fill('grey');
    noStroke();
    ellipse(320, 320, 20);
    pop();


}