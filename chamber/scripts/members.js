// members.js
// Fetches member data from data/members.json using fetch + async/await,
// renders member cards, and toggles between grid and list views.

const memberContainer = document.getElementById('memberContainer');
const memberCount = document.getElementById('memberCount');
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');

const membershipLabels = {
  1: 'Member',
  2: 'Silver',
  3: 'Gold',
};

async function getMemberData() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    memberContainer.innerHTML = `<p class="error-message">Sorry, member data could not be loaded right now.</p>`;
    console.error('Error fetching member data:', error);
  }
}

function displayMembers(members) {
  memberCount.textContent = members.length;

  memberContainer.innerHTML = members.map(member => `
    <div class="member-card">
      <span class="member-badge tier-${member.membership}">${membershipLabels[member.membership]}</span>
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" width="300" height="160">
      <div class="member-info">
        <h3 class="member-name">${member.name}</h3>
        <p class="member-category">${member.category}</p>
        <p class="member-detail">${member.address}</p>
        <p class="member-detail">${member.phone}</p>
        <a class="member-link" href="${member.website}" target="_blank" rel="noopener noreferrer">Visit website</a>
      </div>
    </div>
  `).join('');
}

gridViewBtn.addEventListener('click', () => {
  memberContainer.classList.remove('list-view');
  memberContainer.classList.add('grid-view');
  gridViewBtn.classList.add('active');
  gridViewBtn.setAttribute('aria-pressed', 'true');
  listViewBtn.classList.remove('active');
  listViewBtn.setAttribute('aria-pressed', 'false');
});

listViewBtn.addEventListener('click', () => {
  memberContainer.classList.remove('grid-view');
  memberContainer.classList.add('list-view');
  listViewBtn.classList.add('active');
  listViewBtn.setAttribute('aria-pressed', 'true');
  gridViewBtn.classList.remove('active');
  gridViewBtn.setAttribute('aria-pressed', 'false');
});

getMemberData();
