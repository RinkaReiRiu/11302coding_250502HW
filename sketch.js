function setup() {
  createCanvas(windowWidth, windowHeight); // Full window canvas
  background('#170033'); // Set background color

  // Capture camera feed
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // Scale to 80% of window size
  capture.hide(); // Hide default HTML element
}

function draw() {
  background('#170033'); // Refresh background

  // Position camera feed at the center
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  image(capture, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ensure canvas resizes dynamically
}