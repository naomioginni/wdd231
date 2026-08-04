// services.js — fetches the service catalog, renders cards, handles filtering,
// the detail modal, and remembers the visitor's last filter choice in local storage.
import { initNav } from "./nav.js";

initNav();

const CARD_GRID = document.querySelector("#cardGrid");
const STATUS_EL = document.querySelector("#servicesStatus");
const FILTER_BAR = document.querySelector("#filterBar");
const MODAL_OVERLAY = document.querySelector("#serviceModal");
const MODAL_BODY = document.querySelector("#modalBody");
const MODAL_CLOSE_BTN = document.querySelector("#modalClose");

const STORAGE_KEY = "namcooprintz.lastFilter";

const CATEGORY_ICONS = {
  Print: "images/icon-print.svg",
  Signage: "images/icon-signage.svg",
  Apparel: "images/icon-apparel.svg",
  Packaging: "images/icon-packaging.svg",
  Design: "images/icon-design.svg",
};

let allServices = [];

// Build one service card as an HTML string using a template literal.
function serviceCardTemplate(service) {
  const iconSrc = CATEGORY_ICONS[service.category] || "images/icon-print.svg";
  return `
    <button class="service-card" type="button" data-id="${service.id}">
      <img src="${iconSrc}" alt="" loading="lazy" width="40" height="40">
      <span class="category-tag">${service.category}</span>
      <h3>${service.name}</h3>
      <p class="price">${service.priceRange}</p>
      <p>${service.turnaround}</p>
    </button>
  `;
}

// Render a list of services into the grid.
function renderServices(list) {
  if (!CARD_GRID) return;

  if (list.length === 0) {
    CARD_GRID.innerHTML = "";
    STATUS_EL.textContent = "No services match that filter yet.";
    return;
  }

  CARD_GRID.innerHTML = list.map(serviceCardTemplate).join("");
  STATUS_EL.textContent = `Showing ${list.length} service${list.length === 1 ? "" : "s"}.`;
}

// Filter the full list by category using the array filter method.
function applyFilter(category) {
  const filtered =
    category === "All"
      ? allServices
      : allServices.filter((service) => service.category === category);

  renderServices(filtered);
  localStorage.setItem(STORAGE_KEY, category);

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.category === category));
  });
}

// Open the modal with a given service's full details.
function openModal(service) {
  MODAL_BODY.innerHTML = `
    <h2 id="modalTitle">${service.name}</h2>
    <span class="category-tag">${service.category}</span>
    <dl>
      <dt>Price range</dt>
      <dd>${service.priceRange}</dd>
      <dt>Typical turnaround</dt>
      <dd>${service.turnaround}</dd>
      <dt>Details</dt>
      <dd>${service.description}</dd>
    </dl>
  `;
  MODAL_OVERLAY.hidden = false;
  MODAL_CLOSE_BTN.focus();
  document.body.style.overflow = "hidden";
}

function closeModal() {
  MODAL_OVERLAY.hidden = true;
  document.body.style.overflow = "";
}

// Event delegation: one listener handles clicks on any card, present or future.
if (CARD_GRID) {
  CARD_GRID.addEventListener("click", (event) => {
    const card = event.target.closest(".service-card");
    if (!card) return;
    const service = allServices.find((s) => s.id === card.dataset.id);
    if (service) openModal(service);
  });
}

if (MODAL_CLOSE_BTN) {
  MODAL_CLOSE_BTN.addEventListener("click", closeModal);
}

if (MODAL_OVERLAY) {
  MODAL_OVERLAY.addEventListener("click", (event) => {
    if (event.target === MODAL_OVERLAY) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !MODAL_OVERLAY.hidden) closeModal();
  });
}

if (FILTER_BAR) {
  FILTER_BAR.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    applyFilter(btn.dataset.category);
  });
}

// Fetch the data source with proper async/await + try...catch error handling.
async function loadServices() {
  STATUS_EL.textContent = "Loading services...";
  try {
    const response = await fetch("services.json");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    allServices = await response.json();

    const savedFilter = localStorage.getItem(STORAGE_KEY) || "All";
    applyFilter(savedFilter);
  } catch (error) {
    console.error("Could not load services:", error);
    STATUS_EL.textContent =
      "Sorry, we couldn't load the service list right now. Please refresh the page.";
  }
}

loadServices();
