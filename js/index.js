var canvas

function setup(){
  canvas = createCanvas(700, 600);

  setupControls(); //TODO
  placeEnemies(); // TODO
  spaceship = placeSpaceShip(); //TODO
  gameObjects.push(spaceship);
  canvas.parent('canvas-game');
}

function draw(){
  background(0);
  updatePositions(); //TODO
  drawObjects(); //TODO
}

// for testing: mouse click on canvas stop and resume game

function mousePressed(){ loop(); }
function mouseReleased(){ noLoop(); }
