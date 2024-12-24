import { InputHandler } from "../gameLogicFunctions/InputHandler";

export function addKeyInput(element: HTMLElement, inputHandler: InputHandler) {
  console.log("HELLO");

  element.addEventListener("keydown", (e) => {
    inputHandler.handleInput(e.key);
  });
}
