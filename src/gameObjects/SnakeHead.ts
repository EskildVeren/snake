import { Apple } from "./Apple";

export class SnakeHead {
  x: number;
  y: number;
  direction: string;

  constructor(startX: number, startY: number, direction: string) {
    this.x = startX;
    this.y = startY;
    this.direction = direction;
  }

  public moveHead() {
    switch (this.direction) {
      case "up":
        this.y -= 1;
        break;
      case "down":
        this.y += 1;
        break;
      case "left":
        this.x -= 1;
        break;
      case "right":
        this.x += 1;
        break;

      default:
        throw new Error(
          `Direction not supported. Was ${this.direction}, but only up, down, left or right is supported`
        );
    }
  }
  public setDirection(newDirection: string) {
    this.direction = newDirection;
  }
  public isAtApple(apple: Apple) {
    if (this.x == apple.x && this.y == apple.y) {
      return true;
    }
    return false;
  }
  public moveHeadBack() {
    switch (this.direction) {
      case "up":
        this.y += 1;
        break;
      case "down":
        this.y -= 1;
        break;
      case "left":
        this.x += 1;
        break;
      case "right":
        this.x -= 1;
        break;

      default:
        throw new Error(
          `Direction not supported. Was ${this.direction}, but only up, down, left or right is supported`
        );
    }
  }
}
