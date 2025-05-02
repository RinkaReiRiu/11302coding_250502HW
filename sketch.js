let capture;
let gridSize = 20; // size of each square

function setup() {
  rectMode(CORNER); // ensure rectangles start at (x,y)
  createCanvas(windowWidth, windowHeight); // full window canvas
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // scale to 80% of window
  capture.hide(); // hide default HTML element
  frameRate(30); // set frame rate
}

function draw() {
  background('#170033'); // refresh background each frame
  let x = (windowWidth - capture.width) / 2; // center horizontally
  let y = (windowHeight - capture.height) / 2; // center vertically 
  translate(x, y); // move origin to center of capture

  push();
    for(let i=0; i < capture.width - gridSize; i += gridSize) {
      for(let j=0; j < capture.height - gridSize; j += gridSize) {
        rectMode(CENTER); // draw from center
        let col = capture.get(i + gridSize/2, j + gridSize/2);
        fill(col); // use color from capture
        stroke('#170033');
        strokeWeight(2);
        rect(i + gridSize/2, j + gridSize/2, gridSize-1, gridSize-1, 15);
      }
    }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // ensure canvas resizes dynamically
}
