import { InputHandler } from "../gameLogicFunctions/InputHandler";

export function addKeyInput(element: HTMLElement, inputHandler: InputHandler) {
  element.addEventListener("keydown", (e) => {
    inputHandler.handleInput(e.key);
  });
}
