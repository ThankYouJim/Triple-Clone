// Block prototype object
function Blocks() {
  this.name = "empty";
  this.x =
  this.y =
  this.width =
  this.height =
  this.curve = 0;           // really cute with 100px width
  this.colour = '';         // block colour
  // this.borderWidth = 0;  // block border width
  // this.strokeStyle = ''; // block border stuffs
}

// Block functionality
Blocks.prototype.draw = function(block) {
  drawRoundRect(block.width, block.height, block.curve);
};





// Player block. Probably will make it slightly transparent later.
function cursorBlock(size) {
  
}

// Buildable blocks - crushable
function LotBlocks(size) {
  Blocks.call(this, size);
  this.fillColour = 'Green';
  // new variables
  this.tier = "";         // determines type of items in block. 9 is the highest tier and will no evolve
  this.points = 0;
  this.crushable = true;
  this.hasObject = false; // item on block cannot be replaced if true
}

LotBlocks.draw = function(block) {
  drawRoundRect(block.width, block.height, block.curve);
  ctx.fillStyle(block.colour);
  ctx.fill();
};

LotBlocks.place = function(cursorBlock) {
  this.name = cursorBlock.name;
  this.tier = cursorBlock.tier;
  this.points = cursorBlock.points;
  this.hasObject = true;
}








// Playable blocks. May or may not have one item present
function GameBlock(x, y) {
  Blocks.call(this, x, y);
  this.x = x;
  this.y = y;
  this.width = this.height = gridSize/division;    // blocks are 50*50px each
  
  this.item; // new var: stores placed item info
}


// A single store block on upper leftmost of the game grid. Similar to GameBlocks but is apart from the grid.
function StoreBlock(x, y) {
  GameBlock.call(this, x, y);
}

// Store.Block is touched: get item from cursor, and only return current item if any

// Grid blocks where all playable blocks live
function GridBlock(x, y) {
  Blocks.call(this);
  this.x = x;
  this.y = y;
  this.fillColour = 'LightGreen'
  this.strokeStyle = ''
  this.index = [];  // stores the first item storeblock and the rest with gameblocks. I don't have a better name. WIP.
}


// TODO: convert function to draw the blockindex inside GridBlock
// GridBlock.populate = function() {
//   for(var j = 0; j <= division; j++) {
//     for(var i = 0; i < division; i++) {
//       drawRoundSq(blockNum, 20);
//       ctx.translate(blockNum, 0);
//     }
//     ctx.setTransform(1,0,0,1,0,0);  // reset context to default
//     ctx.translate(0, blockNum*j);
//   }
//   ctx.endPath();
// };

// player block
function cursorBlock() {
  Blocks.call(this);
  this.hasObject = true;
  // TODO: flashes the current item
  // TODO: only is visible and gets placed on the gameblocks if the player tapped (TODO: determine time b/w click and release)
}





// Relevant fuctionalities

// Draws a rounded square
function drawRoundRect(width, height, curve) {
  var x = width, y = height, c = curve;
  
  ctx.beginPath();
  ctx.moveTo(c, 0);
  ctx.lineTo(x-c, 0);
  ctx.quadraticCurveTo(x, 0, x, c);
  ctx.lineTo(x, y-c);
  ctx.quadraticCurveTo(x, y, x-c, y);
  ctx.lineTo(c, y);
  ctx.quadraticCurveTo(0, y, 0, y-c);
  ctx.lineTo(0, c);
  ctx.quadraticCurveTo(0, 0, c, 0);
  ctx.stroke();
}

// var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var digits = "0123456789";

// function getRandomChar() {
//   var r = Math.random();
//   return r < 0.5 ? letters.charAt(Math.floor(r*letters.length*2)) : digits.charAt(Math.floor((r-0.5)*digits.length*2));
// }