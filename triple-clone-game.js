/** 
 * Base class for ALL drawable objects in the game
 */
function Drawable() {
    this.init = function (x, y) {
        this.x = x;
        this.y = y;
        this.id = 0;
    }

    this.draw = function () {
    };
}

/**
 * Background object
 * Do static for now, later feature may includes minor animation or day change?
 */
function Backgound() {

    this.draw = function () {

    }
}

/**
 * The animation loop. Calls the requestAnimationFrame shim to
 * optimize the game loop and draws all game objects. This
 * function must be a gobal function and cannot be within an
 * object.
 * http://blog.sklambert.com/html5-canvas-game-panning-a-background/
 */
function animate() {
    requestAnimFrame(animate);
    game.background.draw();
}

/**
 * requestAnim shim layer by Paul Irish
 * Finds the first API that works to optimize the animation loop,
 * otherwise defaults to setTimeout().
 * http://blog.sklambert.com/html5-canvas-game-panning-a-background/
 */
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (/* function */ callback, /* DOMElement */ element) {
			    window.setTimeout(callback, 1000 / 60);
			};
})();

/**
 * Game object
 */
function Game() {
/*
 * Gets canvas info and context
 * Returns true if canvas is supported, and false if not and nothing is loaded
 */
    this.init = function () {
        this.bgCanvas = document.getElementById('bgCanvas');

        if (this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');

            Backgound.prototype.context = this.bgContext;
            Backgound.prototype.canvasWidth = this.bgCanvas.width;
            Backgound.prototype.canvasHeight = this.bgCanvas.height;

            // init background object
            this.background = new Backgound();
            this.background.init(0, 0);

            // TODO: init the grid and items and etc

            return true;
        } else {
            return false;
        }
    };

    this.start = function () {
        animate();
    }

}
