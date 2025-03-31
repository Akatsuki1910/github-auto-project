// ... (Existing code)
const toggleFullscreenButton = document.getElementById('toggle-fullscreen') as HTMLButtonElement;
toggleFullscreenButton.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
// ... (Rest of the code)