// thankyou.js
// Reads the GET query string from the join.html form submission and
// displays the required fields on the thank-you page.

const params = new URLSearchParams(window.location.search);

const fields = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'email', label: 'Email Address' },
  { key: 'mobile', label: 'Mobile Phone' },
  { key: 'businessName', label: 'Business/Organization Name' },
  { key: 'timestamp', label: 'Submitted On' },
];

const summary = document.getElementById('applicationSummary');

summary.innerHTML = fields.map(field => {
  let value = params.get(field.key) || 'Not provided';

  if (field.key === 'timestamp' && params.get('timestamp')) {
    value = new Date(params.get('timestamp')).toLocaleString();
  }

  return `
    <dt>${field.label}</dt>
    <dd>${value}</dd>
  `;
}).join('');
