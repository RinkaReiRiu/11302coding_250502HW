# 11302coding_250502HW
Magic Fusion Camera

---


## Show view of the camera

> Create window-sized canvas in #170033 in a p5.js program.
> Capture view of the camera, show it at the center, size 80% of the window.

Here's a p5.js sketch that creates a full-window canvas with a deep purple background (#170033). It also captures the camera feed and displays it at the center, scaled to 80% of the window size.

![image](https://hackmd.io/_uploads/ryEJVobglg.png)

```javascript=
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
```

---


## 

