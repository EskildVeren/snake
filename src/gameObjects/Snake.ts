import { HitboxDetector } from "../gameLogicFunctions/HitBoxDetector";
import { Apple } from "./Apple";
import { SnakeBodypart } from "./SnakeBodypart";
import { SnakeHead } from "./SnakeHead";

export class Snake {
  bodyparts: SnakeBodypart[];
  snakeHead: SnakeHead;
  apple: Apple;
  hitboxDetector: HitboxDetector;
  isDead: boolean;

  constructor(snakeLength: number, horizontalTilesAmount: number, verticalTilesAmount: number) {
    const x = Math.floor(horizontalTilesAmount / 2);
    const y = Math.floor(verticalTilesAmount / 2);
    this.apple = new Apple(horizontalTilesAmount, verticalTilesAmount, this);
    this.snakeHead = new SnakeHead(x, y, "right");
    this.bodyparts = [];
    this.isDead = false;

    for (let i = 0; i < Math.min(x - 1, snakeLength); i++) {
      let parentBodypart: SnakeHead | SnakeBodypart = this.snakeHead;
      if (i > 0) {
        parentBodypart = this.bodyparts[i - 1];
      }
      const newBodypart = new SnakeBodypart(parentBodypart.x - 1, y, parentBodypart);
      this.bodyparts.push(newBodypart);
    }

    this.hitboxDetector = new HitboxDetector(horizontalTilesAmount, verticalTilesAmount);
  }

  move() {
    // Moves body
    this.moveBody();
    this.moveHead();

    // Adds new positions to hitbox
    this.updateHitboxDetector();

    // Check for crashes
    this.checkForApple();
    this.checkCollisions();

    if (this.isDead) {
      this.snakeHead.moveHeadBack();
      return;
    }
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
    const newTailTip = new SnakeBodypart(tailTip.x, tailTip.y, tailTip);
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

  updateHitboxDetector() {
    this.hitboxDetector.reset();
    for (let i = 0; i < this.bodyparts.length; i++) {
      const x = this.bodyparts[i].x;
      const y = this.bodyparts[i].y;
      this.hitboxDetector.addOccupiedPosition(x, y);
    }
  }

  checkCollisions() {
    if (this.hitboxDetector.snakeHeadCollides(this.snakeHead)) {
      this.isDead = true;
    }
  }

  removeTailTip() {
    this.bodyparts.pop();
  }
}
