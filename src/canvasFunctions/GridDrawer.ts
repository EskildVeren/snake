export class GridDrawer {
  ctx: CanvasRenderingContext2D;
  tileMargin: number;
  offsetX: number;
  tileWidth: number;
  offsetY: number;
  gridPixelWidth: number;
  gridPixelHeight: number;
  constructor(
    gridPixelWidth: number,
    gridPixelHeight: number,
    xTiles: number,
    yTiles: number,
    tileMargin: number,
    ctx: CanvasRenderingContext2D
  ) {
    this.gridPixelWidth = gridPixelWidth;
    this.gridPixelHeight = gridPixelHeight;
    this.ctx = ctx;
    this.tileWidth = Math.min(
      gridPixelWidth / xTiles,
      gridPixelHeight / yTiles
    );
    this.tileMargin = tileMargin;
    this.offsetX =
      (gridPixelWidth -
        this.tileWidth * Math.floor(gridPixelWidth / this.tileWidth)) /
      2;
    this.offsetY =
      (gridPixelHeight -
        this.tileWidth * Math.floor(gridPixelHeight / this.tileWidth)) /
      2;
  }
  drawTile(x: number, y: number, color: string) {
    const xPixelCoordinate =
      x * this.tileWidth + this.offsetX + this.tileMargin;
    const yPixelCoordinate =
      y * this.tileWidth + this.offsetY + this.tileMargin;

    this.ctx.fillStyle = color;

    this.ctx.fillRect(
      xPixelCoordinate,
      yPixelCoordinate,
      this.tileWidth - this.tileMargin * 2,
      this.tileWidth - this.tileMargin * 2
    );
  }
  clearBackground() {
    // Does not include xOffset and yOffset
    this.ctx.clearRect(0, 0, this.gridPixelWidth, this.gridPixelHeight);
  }
}
