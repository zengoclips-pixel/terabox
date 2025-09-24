const video = document.getElementById('vid');
const overlay = document.querySelector('.overlay');
const progressFill = document.querySelector('.progress-fill');

const OVERLAY_TIME = 15; // 10 seconds

let overlayShown = false;

video.addEventListener('timeupdate', () => {
  if (!overlayShown && video.currentTime >= OVERLAY_TIME) {
    overlayShown = true;
    overlay.style.display = 'flex'; // show overlay
    video.pause();                  // optional: pause video behind overlay
    startProgressBar();
  }
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
    if (width >= 100) width = 0;
    width += 2;
    progressFill.style.width = width + '%';
  }, 100);
}
