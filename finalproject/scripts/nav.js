// nav.js — handles the responsive hamburger navigation (ES module)

export function initNav() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (!toggleBtn || !navList) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu automatically if the viewport grows past the breakpoint
  const mq = window.matchMedia("(min-width: 700px)");
  mq.addEventListener("change", (e) => {
    if (e.matches) {
      navList.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  const yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
