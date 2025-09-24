const video = document.getElementById('vid');
const overlay = document.querySelector('.overlay');
const progressFill = document.querySelector('.progress-fill');
const SHOW_OVERLAY_AFTER = 5000; // show overlay after 5s teaser

setTimeout(() => {
  // Pause teaser video and show overlay
  video.pause();
  overlay.style.display = 'flex';
  startProgressBar();
}, SHOW_OVERLAY_AFTER);

// Prevent play while overlay is visible
video.addEventListener('play', () => {
  if(overlay.style.display === 'flex'){
    video.pause();
  }
});

// Fake progress bar loop
function startProgressBar(){
  let width = 0;
  const interval = setInterval(()=>{
    if(width >= 100){
      width = 0;
    }
    width += 2;
    progressFill.style.width = width + '%';
  }, 100);
}
