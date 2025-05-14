const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.closeBtn');

// Open modal with animation
openBtn.onclick = () => {
  modal.classList.add('show');
};

// Close modal when clicking "×"
closeBtn.onclick = () => {
  modal.classList.remove('show');
};

// Close modal when clicking outside content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
};
