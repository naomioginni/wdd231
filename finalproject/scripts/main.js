// main.js — shared entry point loaded on every page (ES module)
import { initNav } from "./nav.js";

initNav();

const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
