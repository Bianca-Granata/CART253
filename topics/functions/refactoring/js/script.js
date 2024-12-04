/**
 * Refactoring
 * Pippin Barr
 * 
 * A simulation of bouncing three balls off a paddle in zero gravity
 * with perfect restitution (bounce)...
 * 
 * This is a project that is intentionally repetitive so that we can practice
 * noticing repetition and using functions (with parameters and return
 * values) to reduce it. That is, modularity and reuse.
 */

"use strict";

let ball1 = undefined;
let ball2 = undefined;
let ball3 = undefined;
// The paddle the user controls
const paddle = {
    // Position
    x: undefined, // Will be mouseX
    y: undefined, // Will be set in setup,
    // Dimensions
    width: 100,
    height: 20
};

/**
 * Create the canvas and position the paddle
*/
function setup() {
    createCanvas(400, 400);

    //create the balls
    ball1 = createBall();
    ball2 = createBall();
    ball3 = createBall();

    // Position the paddle at the bottom
    paddle.y = height - paddle.height;
}

function createBall() {
    let ball = {
        x: random(50, width - 50),
        y: -50,
        size: 20,
        velocity: {
            x: 0,
            y: random(2, 30)
        }
    };
    return ball;
}

/**
 * Background, update balls and paddle, check bounces, display it all
*/
function draw() {
    // Black background!
    background(0);

    // Move balls
    moveBall(ball1);
    moveBall(ball2);
    moveBall(ball3);

    // Move paddle
    movePaddle();

    // Check for bounces
    checkBallBounce(ball1);
    checkBallBounce(ball2);
    checkBallBounce(ball3);

    // Display balls
    drawBall1();
    drawBall2();
    drawBall3();

    // Display paddle
    drawPaddle();
}

/**
 * Move ball 1 by its velocity
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}



/**
 * Move the paddle to the mouse location
 */
function movePaddle() {
    paddle.x = mouseX;
}

function checkBallBounce(ball) {
    // Check if ball1 overlaps the paddle
    const overlap = checkBallOverlap(ball, paddle);
    // If there is an overlap, bounce the ball back up
    if (overlap) {
        ball.velocity.y *= -1;
    }
}


function drawBall(ball) {
    push();
    noStroke();
    fill(255);
    rect(ball.x, ball.y, ball.size);
    pop();
}



/**
 * Draw the paddle as a white rectangle
 */
function drawPaddle() {
    push();
    noStroke();
    fill(255);
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}