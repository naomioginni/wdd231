// quote-action.js — reads the submitted quote form values from the URL
// query string and displays them back to the visitor as a summary table.
import { initNav } from "./nav.js";

initNav();

const FIELD_LABELS = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  service: "Service needed",
  budget: "Budget range",
  deadline: "Preferred deadline",
  details: "Project details",
};

const tableBody = document.querySelector("#summaryBody");
const params = new URLSearchParams(window.location.search);

if (tableBody) {
  const rows = Object.entries(FIELD_LABELS)
    .filter(([key]) => params.has(key) && params.get(key) !== "")
    .map(([key, label]) => {
      const value = params.get(key);
      return `<tr><th scope="row">${label}</th><td>${value}</td></tr>`;
    });

  tableBody.innerHTML = rows.length
    ? rows.join("")
    : `<tr><td colspan="2">No form data was found. Please submit the quote form first.</td></tr>`;
}
