import { addKeyInput } from "./canvasFunctions/addKeyInput";
import { CanvasView } from "./canvasFunctions/CanvasView";
import { drawGrid } from "./canvasFunctions/drawGrid";
import { getBody, getCanvas, getContext } from "./canvasFunctions/getCanvas";
import { GridDrawer } from "./canvasFunctions/GridDrawer";
import { InputHandler } from "./gameLogicFunctions/InputHandler";
import { Snake } from "./gameObjects/Snake";

// Getting canvas and canvascontext, and outsourcing null-checking to another function
const canvas = getCanvas();
const ctx = getContext(canvas);

// Setting canvas dimensions
const canvasWidth = 1205;
const canvasHeight = 675;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const xTiles = 16;
const yTiles = 16;

const gridDrawer = new GridDrawer(800, 675, xTiles, yTiles, 1, ctx);

const mark = new Snake(Math.floor(xTiles / 2), Math.floor(yTiles / 2), "right", xTiles, yTiles);

// Extracting body-element and adding keyinput handling to it
const body = getBody();
const inputHandler = new InputHandler(mark);
addKeyInput(body, inputHandler);

// Creates views for the hierarchy
const grid = new CanvasView(0, 0, 800, 675, () => drawGrid(gridDrawer, mark));

// Animation loop for  the game
let previousDrawing = 0;

function drawNextFrame(timestamp: number) {
  main(timestamp);
  requestAnimationFrame(drawNextFrame);
}

requestAnimationFrame(drawNextFrame);

function main(timestamp: number) {
  if (timestamp - previousDrawing <= 200) {
    return;
  }
  previousDrawing = timestamp;
  if (mark.isDead) {
    mark.removeTailTip();
    grid.draw();
    console.log("Helo");

    return;
  }
  mark.move();
  grid.draw();
}
