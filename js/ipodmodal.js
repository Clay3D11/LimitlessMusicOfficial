const ipodModal = document.getElementById('ipodModal');
const ipodBtn = document.getElementById('ipodmodal');
const ipodCloseBtn = document.querySelector('.ipodCloseBtn');

// Open modal
ipodBtn.onclick = () => {
  ipodModal.classList.add('show');
};

// Close modal
ipodCloseBtn.onclick = () => {
  ipodModal.classList.remove('show');
};

// Close when clicking outside
window.onclick = (event) => {
  if (event.target === ipodModal) {
    ipodModal.classList.remove('show');
  }
};
