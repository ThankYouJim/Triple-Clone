/* SELF NOTES
 * $(selector).css(property)
 * $(selector).css(property, value)
 * $(selector).css(property, function(index, currentvalue));
 */



// Block prototype object
function Blocks(size, x, y, id) {
    this.width = this.height = size;
    this.x = x;
    this.y = y;
    this.id = id;
    this.colour = '';         // block colour
    this.hasObject = false; // item on block cannot be replaced if true
    this.item = null;
}

// Block functionality
Blocks.prototype.draw = function () {
    // I don't know
};

// Buildable blocks - crushable
function LotBlocks(size, x, y, id) {
    Blocks.call(this, size, x, y, id);
    this.curve = 20;
    this.colour = 'lawngreen';
}

LotBlocks.prototype.draw = function () {
    drawRoundRect(this.width, this.height, this.curve);
    gameContext.fillStyle = this.colour;
    gameContext.fill();
};

//LotBlocks.prototype.place = function (cursorBlock) {
//    this.name = cursorBlock.name;
//    this.tier = cursorBlock.tier;
//    this.points = cursorBlock.points;
//    this.hasObject = true;
//}

// A single store block on upper leftmost of the game grid. Similar to GameBlocks but is apart from the grid.
function StoreBlock(size, id) {
    Blocks.call(this, size, size/2, size/2, id);
    this.radius = 45; // ***0ooo MaGiC NuMbERs oooo0***
    this.colour = 'brown';
}

StoreBlock.prototype.draw = function () {
    drawCircle(this);
}

// Player block. Probably will make it slightly transparent later.
function cursorBlock(size) {

}



// player block
function cursorBlock() {
    Blocks.call(this);
    this.hasObject = true;
    // TODO: flashes the current item
    // TODO: only is visible and gets placed on the gameblocks if the player tapped (TODO: determine time b/w click and release)
}


function Item() {
    this.itemName;
    this.itemID;
    this.crushable = true;
}

// Place current item with store space, and gets the store item if applicable
function switchItem() {

}

// Helpful functionalities

// Draws circle
function drawCircle(block) {
    gameContext.beginPath();
    gameContext.arc(block.x, block.y, block.radius, 0, 2 * Math.PI, false);
    gameContext.fillStyle = block.colour;
    gameContext.fill();
}

// Draws a rounded square
function drawRoundRect(width, height, curve) {
    var x = width, y = height, c = curve;

    gameContext.beginPath();
    gameContext.moveTo(c, 0);
    gameContext.lineTo(x - c, 0);
    gameContext.quadraticCurveTo(x, 0, x, c);
    gameContext.lineTo(x, y - c);
    gameContext.quadraticCurveTo(x, y, x - c, y);
    gameContext.lineTo(c, y);
    gameContext.quadraticCurveTo(0, y, 0, y - c);
    gameContext.lineTo(0, c);
    gameContext.quadraticCurveTo(0, 0, c, 0);
}

// var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var digits = "0123456789";

// function getRandomChar() {
//   var r = Math.random();
//   return r < 0.5 ? letters.charAt(Math.floor(r*letters.length*2)) : digits.charAt(Math.floor((r-0.5)*digits.length*2));
// }
