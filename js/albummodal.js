const albummodalContainer = document.querySelector('.albummodal-container');
const albummodalOverlay = document.querySelector('.albummodal-overlay');
const albummodalButton = document.querySelector('.albummodal-button.albumshow');
const closeButton = document.querySelector('.close-btn');

modalButton.addEventListener('click', () =>
  albummodalContainer.classList.add('active'),
);
modalOverlay.addEventListener('click', () =>
  albummodalContainer.classList.remove('active'),
);
closeButton.addEventListener('click', () =>
  albummodalContainer.classList.remove('active'),
);