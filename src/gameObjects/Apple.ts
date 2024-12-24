import { Snake } from "./Snake";

export class Apple {
  horizontalTilesAmount: number;
  verticalTilesAmount: number;
  snake: Snake;
  x: number;
  y: number;

  constructor(horizontalTilesAmount: number, verticalTilesAmount: number, snake: Snake) {
    this.horizontalTilesAmount = horizontalTilesAmount;
    this.verticalTilesAmount = verticalTilesAmount;
    this.snake = snake;

    // Ideally, the respawn function should be called here, but TypeScript hates that
    const applePosition = this.createNewApplePosition();
    this.x = applePosition.x;
    this.y = applePosition.y;
  }
  createNewApplePosition() {
    // Not efficient, should only consider the spaces that are left
    const x = Math.floor(Math.random() * this.horizontalTilesAmount);
    const y = Math.floor(Math.random() * this.verticalTilesAmount);

    return { x: x, y: y };
  }
  respawn() {
    const applePosition = this.createNewApplePosition();
    this.x = applePosition.x;
    this.y = applePosition.y;
  }
}
