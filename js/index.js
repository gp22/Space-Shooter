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
