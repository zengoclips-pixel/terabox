const video = document.getElementById('vid');
const overlay = document.querySelector('.overlay');
const progressFill = document.querySelector('.progress-fill');

// Show overlay exactly when the video ends
video.addEventListener('ended', () => {
  overlay.style.display = 'flex'; // Show overlay
  startProgressBar(); // Start fake progress bar
});

// Prevent play while overlay is visible
video.addEventListener('play', () => {
  if (overlay.style.display === 'flex') {
    video.pause();
  }
});

// Fake progress bar loop
function startProgressBar() {
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      width = 0;
    }
    width += 2;
    progressFill.style.width = width + '%';
  }, 100);
}
