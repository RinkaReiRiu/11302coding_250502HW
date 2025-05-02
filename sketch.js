let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // Full window canvas
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // Scale to 80% of window
  capture.hide(); // Hide default HTML element
}

function draw() {
  background('#170033'); // Refresh background each frame

  // Position camera feed at the center and update continuously
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;

  push(); // Start a new drawing state
    translate(x + capture.width, y); // Move to the right edge of the image
    scale(-1, 1); // Flip horizontally
    image(capture, 0, 0, capture.width, capture.height); // Draw flipped image
  pop(); // Restore the previous drawing state
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ensure canvas resizes dynamically
}
