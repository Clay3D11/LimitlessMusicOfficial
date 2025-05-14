document.addEventListener('DOMContentLoaded', (event) => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close');

  // Show the popup when the page loads
  popup.style.display = 'block';

  // Close the popup when the user clicks on the close button
  closeBtn.onclick = function() {
      popup.style.display = 'none';
  }

  // Close the popup if the user clicks anywhere outside of the popup content
  window.onclick = function(event) {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  }
});