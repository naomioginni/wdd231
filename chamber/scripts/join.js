// join.js
// Sets the hidden timestamp field on page load and wires up the
// membership benefit modals (native <dialog> elements).

document.getElementById('timestamp').value = new Date().toISOString();

const modalLinks = document.querySelectorAll('.modal-link');
const modalCloseButtons = document.querySelectorAll('.modal-close');

modalLinks.forEach(link => {
  link.addEventListener('click', () => {
    const modal = document.getElementById(link.dataset.modal);
    modal.showModal();
  });
});

modalCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.modal);
    modal.close();
  });
});
