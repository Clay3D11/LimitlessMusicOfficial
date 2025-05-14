const ticketsModal = document.getElementById('ticketsModal');
const ticketsBtn = document.getElementById('tickets');
const ticketsCloseBtn = document.querySelector('.ticketsCloseBtn');

// Open modal
ticketsBtn.onclick = () => {
  ticketsModal.classList.add('show');
};

// Close modal
ticketsCloseBtn.onclick = () => {
  ticketsModal.classList.remove('show');
};

// Close on background click
window.onclick = (event) => {
  if (event.target === ticketsModal) {
    ticketsModal.classList.remove('show');
  }
};
