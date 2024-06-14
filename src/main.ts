import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter, observerCounter } from './counter.ts'
import "./app.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <p id="counter-text">0</p>
      <button id="counter" type="button">count is 0</button>
      <button id="counter-decrease" type="button">count is 0</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`


observerCounter(
  document.querySelector("#counter-text")!,
  document.querySelector<HTMLButtonElement>('#counter')!,
  document.querySelector<HTMLButtonElement>('#counter-decrease')!
)
