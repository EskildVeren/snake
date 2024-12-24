import { SnakeHead } from "./SnakeHead";

export class SnakeBodypart {
  y: number;
  x: number;
  parentBodypart: SnakeBodypart | SnakeHead;
  constructor(startX: number, startY: number, parentBodypart: SnakeBodypart | SnakeHead) {
    this.x = startX;
    this.y = startY;
    this.parentBodypart = parentBodypart;
  }

  move() {
    this.x = this.parentBodypart.x;
    this.y = this.parentBodypart.y;
  }
}
