const marketingModal = document.getElementById('marketingModal');
const marketingBtn = document.getElementById('marketingbtn');
const marketingCloseBtn = document.querySelector('.marketingCloseBtn');

// Open modal
marketingBtn.onclick = () => {
  marketingModal.classList.add('show');
};

// Close modal
marketingCloseBtn.onclick = () => {
  marketingModal.classList.remove('show');
};

// Close when clicking outside
window.onclick = (event) => {
  if (event.target === marketingModal) {
    marketingModal.classList.remove('show');
  }
};
