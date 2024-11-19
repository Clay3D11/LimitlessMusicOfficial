window.onload = function() {
  // Hide the loader after content is loaded
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Simulate loading time
  setTimeout(() => {
      loader.style.display = 'none'; // Hide loader
      content.style.display = 'block'; // Show content
  }, 3000); // Adjust the time as needed
};