# 11302coding_250502HW
Magic Fusion Camera

---


# Show view of the camera

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


# Explanation of the Horizontal Flip

## Key Concepts:
- **`push()` and `pop()`**: These functions help preserve the drawing state. Any transformations (such as scaling and translation) applied between them will not affect other parts of the sketch.
- **`translate(x + capture.width, y)`**: Moves the origin to the right edge of the image before flipping. This ensures that when we apply the scale transformation, the image flips properly.
- **`scale(-1, 1)`**: Flips the image horizontally by scaling the x-axis by `-1`.

## Transformation Steps:
1. **Push the drawing state** (`push()`) to isolate the transformations.
2. **Translate** the canvas so that the image is positioned correctly before the flip.
3. **Apply the scale transformation** to flip the image left and right.
4. **Draw the mirrored image** using `image()`.
5. **Restore the previous drawing state** (`pop()`) so that other elements are unaffected.

By following these steps, the camera feed appears mirrored without affecting other elements in the sketch.

---

