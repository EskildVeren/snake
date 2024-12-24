import { Snake } from "../gameObjects/Snake";

export class InputHandler {
  snake: Snake;
  constructor(snake: Snake) {
    this.snake = snake;
  }
  handleInput(key: string) {
    switch (key) {
      case "ArrowLeft":
        this.snake.setDirection("left");
        break;
      case "ArrowRight":
        this.snake.setDirection("right");
        break;
      case "ArrowUp":
        this.snake.setDirection("up");
        break;
      case "ArrowDown":
        this.snake.setDirection("down");
        break;

      default:
        break;
    }
  }
}
