import { SnakeHead } from "./SnakeHead";

export class SnakeBodypart {
  y: number;
  x: number;
  parentBodyPart: SnakeBodypart | SnakeHead;
  constructor(startX: number, startY: number, parentBodyPart: SnakeBodypart | SnakeHead) {
    this.x = startX;
    this.y = startY;
    this.parentBodyPart = parentBodyPart;
  }

  move() {
    this.x = this.parentBodyPart.x;
    this.y = this.parentBodyPart.y;
  }
}
