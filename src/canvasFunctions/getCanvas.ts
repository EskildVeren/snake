export function getCanvas() {
  const canvas = document.querySelector("canvas");
  if (canvas == null) {
    throw new Error("No canvas found");
  }
  return canvas;
}
export function getContext(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (ctx == null) {
    throw new Error("Canvas rendering context is null, somehow");
  }
  return ctx;
}
export function getBody() {
  const canvas = document.querySelector("body");
  if (canvas == null) {
    throw new Error("No body found");
  }
  return canvas;
}
