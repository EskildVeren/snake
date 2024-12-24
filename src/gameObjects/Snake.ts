import { Apple } from "./Apple";
import { SnakeBodypart } from "./SnakeBodypart";
import { SnakeHead } from "./SnakeHead";

export class Snake {
  x: number;
  y: number;
  direction: string;
  bodyparts: SnakeBodypart[];
  snakeHead: SnakeHead;
  apple: Apple;
  constructor(
    startX: number,
    startY: number,
    direction: string,
    horizontalTilesAmount: number,
    verticalTilesAmount: number
  ) {
    this.x = startX;
    this.y = startY;
    this.direction = direction;
    this.bodyparts = [];
    const snakeHead = new SnakeHead(this.x, this.y, this.direction);
    this.snakeHead = snakeHead;

    const bodyPart1 = new SnakeBodypart(startX - 1, startY, this.snakeHead);
    const bodyPart2 = new SnakeBodypart(startX - 2, startY, bodyPart1);
    const bodyPart3 = new SnakeBodypart(startX - 3, startY, bodyPart2);

    this.bodyparts.push(bodyPart1);
    this.bodyparts.push(bodyPart2);
    this.bodyparts.push(bodyPart3);

    this.apple = new Apple(horizontalTilesAmount, verticalTilesAmount, this);
  }

  move() {
    this.moveBody();
    this.moveHead();
    this.checkForApple();
  }

  moveHead() {
    this.snakeHead.moveHead();
  }

  moveBody() {
    for (let i = this.bodyparts.length - 1; i >= 0; i--) {
      this.bodyparts[i].move();
    }
  }

  grow() {
    // Must be called after snake eats fruit, but before its next move
    const tailTip = this.bodyparts[this.bodyparts.length - 1];
    const newTailTip = new SnakeBodypart(0, 0, tailTip);
    this.bodyparts.push(newTailTip);
  }

  checkForApple() {
    if (this.snakeHead.isAtApple(this.apple)) {
      this.grow();
      this.apple.respawn();
    }
  }

  setDirection(newDirection: string) {
    this.snakeHead.setDirection(newDirection);
  }
}
