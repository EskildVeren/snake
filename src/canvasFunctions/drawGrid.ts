import { Snake } from "../gameObjects/Snake";
import { SnakeBodypart } from "../gameObjects/SnakeBodypart";
import { GridDrawer } from "./GridDrawer";

export function drawGrid(gridDrawer: GridDrawer, snake: Snake) {
  // Clears background and draws full grid
  //gridDrawer.clearBackground();
  for (let x = 0; x < 16; x += 1) {
    for (let y = 0; y < 16; y += 1) {
      gridDrawer.drawTile(x, y, "black");
    }
  }

  // Draws objects on the grid
  gridDrawer.drawTile(snake.apple.x, snake.apple.y, "red");
  gridDrawer.drawTile(snake.snakeHead.x, snake.snakeHead.y, "green");
  snake.bodyparts.forEach((snakeBodypart: SnakeBodypart) => {
    gridDrawer.drawTile(snakeBodypart.x, snakeBodypart.y, "green");
  });
}
