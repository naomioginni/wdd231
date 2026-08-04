// quote.js — pre-fills returning visitors' contact info from local storage
// and saves it again on submit if they opt in.
import { initNav } from "./nav.js";

initNav();

const STORAGE_KEY = "namcooprintz.contactInfo";

const form = document.querySelector("#quoteForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const rememberInput = document.querySelector("#remember");

// Restore saved contact info, if any, when the page loads.
function restoreSavedInfo() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const { name, email } = JSON.parse(saved);
    if (name) nameInput.value = name;
    if (email) emailInput.value = email;
    rememberInput.checked = true;
  } catch (error) {
    console.error("Could not read saved contact info:", error);
  }
}

// Save or clear contact info in local storage based on the checkbox.
function persistInfoOnSubmit() {
  if (rememberInput.checked) {
    const info = { name: nameInput.value, email: emailInput.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

if (form) {
  restoreSavedInfo();
  form.addEventListener("submit", persistInfoOnSubmit);
}
