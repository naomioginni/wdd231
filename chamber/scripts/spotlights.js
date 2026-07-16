// spotlights.js
// Fetches chamber member data and displays 2-3 randomly selected
// gold or silver members as spotlight cards, using fetch + async/await.

const spotlightContainer = document.getElementById('spotlightContainer');

const membershipLabels = {
  2: 'Silver',
  3: 'Gold',
};

async function getSpotlightMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
    const data = await response.json();
    const eligible = data.members.filter(member => member.membership === 2 || member.membership === 3);
    const selected = pickRandomMembers(eligible, 3);
    displaySpotlights(selected);
  } catch (error) {
    spotlightContainer.innerHTML = '<p class="error-message">Spotlights are unavailable right now.</p>';
    console.error('Error fetching spotlight data:', error);
  }
}

function pickRandomMembers(members, count) {
  const shuffled = [...members].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = members.map(member => `
    <div class="spotlight-card">
      <span class="member-badge tier-${member.membership}">${membershipLabels[member.membership]}</span>
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="200" height="120">
      <div class="spotlight-info">
        <h3 class="member-name">${member.name}</h3>
        <p class="member-detail">${member.address}</p>
        <p class="member-detail">${member.phone}</p>
        <a class="member-link" href="${member.website}" target="_blank" rel="noopener noreferrer">Visit website</a>
      </div>
    </div>
  `).join('');
}

getSpotlightMembers();
