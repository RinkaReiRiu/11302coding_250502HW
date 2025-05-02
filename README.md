# 11302coding_250502HW
Magic Fusion Camera

---


## Show view of the camera

> Create window-sized canvas in #170033 in a p5.js program.
> Capture view of the camera, show it at the center, size 80% of the window.

Here's a p5.js sketch that creates a full-window canvas with a deep purple background (#170033). It also captures the camera feed and displays it at the center, scaled to 80% of the window size.

![image](https://hackmd.io/_uploads/ryEJVobglg.png)

```javascript=
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
  image(capture, x, y, capture.width, capture.height); // Keep updating
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ensure canvas resizes dynamically
}
```

## Canvas & Drawing
- **`createCanvas(width, height)`**: Creates a drawing surface of the specified width and height.
- **`background(color)`**: Sets the background color of the canvas. Can take a color name, hex code, or RGB values.
- **`fill(color)`**: Sets the fill color for shapes drawn afterward.
- **`stroke(color)`**: Defines the outline color for shapes.

## Camera & Media
- **`createCapture(VIDEO)`**: Creates a live video feed from the device's camera.
- **`capture.size(width, height)`**: Sets the dimensions of the camera feed.
- **`capture.hide()`**: Hides the default HTML video element but keeps the feed accessible.

## Displaying Media
- **`image(img, x, y, w, h)`**: Draws an image (or video feed) at position `(x, y)` with size `(w, h)`.
- **`loadImage(path)`**: Loads an image file for display.
- **`video.play()`**: Plays a loaded video file.

## Screen & Interaction
- **`windowWidth`, `windowHeight`**: Stores the width and height of the browser window.
- **`windowResized()`**: A built-in function that executes when the window is resized.
- **`mouseX`, `mouseY`**: Gives the current x and y position of the mouse.

---


## 

