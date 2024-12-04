/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
const speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
//whcih sentence in the speech to display
let speechIndex = 0;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 100);
}


/**
 * display the current line of speech
*/
function draw() {
    background(0);

    let currentLine = speech[speechIndex];
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    //displaying in the center
    text(currentLine, width / 2, height / 2);

    pop();
}
//advances aour speech to the next line
function mousePressed() {
    //next line
    speechIndex = speechIndex + 1;
    if (speechIndex >= speech.length) {
        //start over
        speechIndex = 0;
    }
}