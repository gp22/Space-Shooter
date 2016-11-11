var canvas

function setup(){
    canvas = createCanvas(windowWidth, windowHeight-10);

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
