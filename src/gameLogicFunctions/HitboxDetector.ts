import { SnakeHead } from "../gameObjects/SnakeHead";

export class HitboxDetector {
  tileMap: { [position: string]: boolean };
  horizontalTilesAmount: number;
  verticalTilesAmount: number;

  constructor(horizontalTilesAmount: number, verticalTilesAmount: number) {
    this.horizontalTilesAmount = horizontalTilesAmount;
    this.verticalTilesAmount = verticalTilesAmount;
    this.tileMap = {};
  }

  reset() {
    this.tileMap = {};
  }

  private hashValue(x: number, y: number) {
    return x + "," + y;
  }

  addOccupiedPosition(x: number, y: number) {
    const hash = this.hashValue(x, y);
    this.tileMap[hash] = true;
  }

  isOccupied(x: number, y: number) {
    const hash = this.hashValue(x, y);
    if (hash in this.tileMap) {
      return true;
    }
    return false;
  }
  snakeHeadCollides(snakeHead: SnakeHead) {
    const x = snakeHead.x;
    const y = snakeHead.y;

    if (this.isOccupied(x, y)) {
      return true;
    }
    if (x < 0 || y < 0) {
      return true;
    }
    if (x >= this.horizontalTilesAmount || y >= this.verticalTilesAmount) {
      return true;
    }
    return false;
  }
}
