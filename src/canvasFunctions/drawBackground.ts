export function drawBackground(
  pixelWidth: number,
  pixelHeight: number,
  ctx: CanvasRenderingContext2D
) {
  ctx.fillStyle = "burgundy";
  ctx.fillRect(0, 0, pixelWidth, pixelHeight);
}
