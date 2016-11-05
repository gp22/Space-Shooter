var canvas

function setup(){
  canvas = createCanvas(800,800);

  setupControls(); //TODO
  placeEnemies(); // TODO
  placeSpaceShip(); //TODO

  canvas.parent('canvas-game');
}

function draw(){
  background(0);
  updatePositions(); //TODO
  drawObjects(); //TODO
}
