// scripts.js

// Function to add a random background color to the header
function randomizeHeaderColor() {
    const header = document.querySelector('header');
    const colors = ['#f44336', '#2196F3', '#4CAF50', '#FFC107', '#9C27B0', '#FF5722'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.backgroundColor = randomColor;
  }
  
  // Function to animate the header color change every 5 seconds
  function animateHeaderColor() {
    setInterval(randomizeHeaderColor, 5000);
  }
  
  // Function to display an alert when a clickable image is clicked
  function handleImageClick() {
    alert('You clicked an image!');
  }
  
  // Add event listeners for image click and header color animation
  document.querySelectorAll('img').forEach(img => img.addEventListener('click', handleImageClick));
  animateHeaderColor();
  