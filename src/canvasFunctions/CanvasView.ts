export class CanvasView {
  x: number;
  y: number;
  width: number;
  height: number;
  draw: () => void;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    draw: () => void
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = draw;
  }
}
