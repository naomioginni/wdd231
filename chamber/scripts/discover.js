// discover.js
// Module script for discover.html: renders 8 point-of-interest cards from
// data/discover.mjs, and shows a localStorage-based last-visit message.

import discoverItems from '../data/discover.mjs';

const cardContainer = document.getElementById('discoverGrid');

function renderCards(items) {
  cardContainer.innerHTML = items.map((item, index) => `
    <div class="discover-card item${index + 1}">
      <figure>
        <img src="images/discover/${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
      </figure>
      <div class="card-body">
        <h2>${item.name}</h2>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button type="button" class="learn-more-btn" data-id="${item.id}">Learn more</button>
      </div>
    </div>
  `).join('');
}

renderCards(discoverItems);

// ---------- Last-visit message (localStorage) ----------

function showVisitMessage() {
  const visitMessageEl = document.getElementById('visitMessage');
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  const oneDay = 1000 * 60 * 60 * 24;

  let message;

  if (!lastVisit) {
    message = 'Welcome! Let us know if you have any questions.';
  } else {
    const diff = now - Number(lastVisit);
    if (diff < oneDay) {
      message = 'Back so soon! Awesome!';
    } else {
      const days = Math.floor(diff / oneDay);
      message = `You last visited ${days} ${days === 1 ? 'day' : 'days'} ago.`;
    }
  }

  visitMessageEl.textContent = message;
  localStorage.setItem('lastVisit', now.toString());
}

showVisitMessage();

document.getElementById('visitMessageClose').addEventListener('click', () => {
  document.getElementById('visitMessage').parentElement.hidden = true;
});
