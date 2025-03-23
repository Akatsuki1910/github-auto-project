// ... (Existing code)
const fullscreenButton = document.getElementById('fullscreen') as HTMLButtonElement;
fullscreenButton.addEventListener('click', () => {
if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
} else {
if (document.exitFullscreen) {
    document.exitFullscreen();
}
}
});
// ... (Rest of the existing code)