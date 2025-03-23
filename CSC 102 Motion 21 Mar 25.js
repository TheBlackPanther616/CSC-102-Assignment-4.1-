// Get the element with the ID 'animated-image' (the image to animate)
const image = document.getElementById('animated-image');

// Get the element with the ID 'status' (used to display the animation status)
const statusElement = document.getElementById('status');

// Declare a variable to store the interval ID for animation (to control start/stop)
let interval;

// Function to move the image to a random position within its container
function moveImageRandomly() {
  // Select the container element with the class 'container'
  const container = document.querySelector('.container');

  // Calculate the maximum horizontal position the image can move to (container width minus image width)
  const maxWidth = container.clientWidth - image.clientWidth;

  // Calculate the maximum vertical position the image can move to (container height minus image height)
  const maxHeight = container.clientHeight - image.clientHeight;

  // Generate a random horizontal position (X coordinate)
  const randomX = Math.random() * maxWidth;

  // Generate a random vertical position (Y coordinate)
  const randomY = Math.random() * maxHeight;

  // Update the CSS 'left' property of the image to move it to the random X position
  image.style.left = `${randomX}px`;

  // Update the CSS 'top' property of the image to move it to the random Y position
  image.style.top = `${randomY}px`;
}

// Function to start the animation (moving the image)
function startAnimation() {
  // Check if the animation is not already running
  if (!interval) {
    image.style.display = 'block'; // Make the image visible
    // Start a recurring timer to call the 'moveImageRandomly' function every 1000ms (1 second)
    interval = setInterval(moveImageRandomly, 1000);
    // Update the status element text to indicate that the animation is playing
    statusElement.textContent = 'Status: Playing';
  } else {
    // If the animation is already running, update the status element accordingly
    statusElement.textContent = 'Status: Already playing';
  }
}

// Function to stop the animation (moving the image)
function stopAnimation() {
  // Check if the animation is currently running
  if (interval) {
    clearInterval(interval); // Stop the recurring timer to halt the animation
    interval = null; // Reset the interval variable to indicate no animation is running
    image.style.display = 'none'; // Hide the image
    // Update the status element text to indicate that the animation has stopped
    statusElement.textContent = 'Status: Stopped';
  } else {
    // If the animation is already stopped, update the status element accordingly
    statusElement.textContent = 'Status: Already stopped';
  }
}