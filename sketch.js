let capture;
let gridSize = 20; // Size of each square

function setup() {
  createCanvas(windowWidth, windowHeight); // Full window canvas
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // Scale to 80% of window
  capture.hide(); // Hide default HTML element
}

function draw() {
  background('#170033'); // Refresh background each frame

  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;

  push(); // Start a new drawing state
  translate(x + capture.width, y); // Move to the right edge of the image
  scale(-1, 1); // Flip horizontally

  // Loop through grid
  for (let i = 0; i < capture.width-gridSize; i += gridSize) {
    for (let j = 0; j < capture.height-gridSize; j += gridSize) {
      let section = capture.get(i, j, gridSize, gridSize); // Extract part of the image
      rectMode(CORNER); // Ensure rectangles start at (x,y)
      fill(255);
      stroke(0);
      strokeWeight(2);
      rect(i, j, gridSize, gridSize, 15); // Draw with rounded corners
      image(section, i, j, gridSize, gridSize); // Display extracted part
    }
  }

  pop(); // Restore previous drawing state
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ensure canvas resizes dynamically
}
