const image = document.getElementById('animated-image');
const statusElement = document.getElementById('status');
let interval;

// Function to move the image randomly
function moveImageRandomly() 
{
  const container = document.querySelector('.container');
  const maxWidth = container.clientWidth - image.clientWidth;
  const maxHeight = container.clientHeight - image.clientHeight;

  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  image.style.left = `${randomX}px`;
  image.style.top = `${randomY}px`;
}

// Function to start the animation
function startAnimation() 
{
  if (!interval) 
  {
    image.style.display = 'block'; // Show the image
    interval = setInterval(moveImageRandomly, 1000); // Move every second
    statusElement.textContent = 'Status: Playing';
  } else 
  {
    statusElement.textContent = 'Status: Already playing';
  }
}

// Function to stop the animation
function stopAnimation() 
{
  if (interval) {
    clearInterval(interval); // Stop the interval
    interval = null;
    image.style.display = 'none'; // Hide the image
    statusElement.textContent = 'Status: Stopped';
  } else {
    statusElement.textContent = 'Status: Already stopped';
  }
}