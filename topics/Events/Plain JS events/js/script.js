/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    }
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);

    window.addEventListener("keydown", changeBG)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(bg.fill);
}
//switches the background from black to white
function changeBG() {
    if (bg.fill === bg.fills.black) {
        bg.fill = bg.fills.white;
    }
    else {
        bg.fill = bg.fills.black;
    }
}
//"mousedown" "mouseup" "mousemove" "mouseenter" 
//"mouseleave" "dbclick"