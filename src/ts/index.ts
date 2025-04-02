// ... (Existing code)
const toggleVibrantModeButton = document.getElementById('toggle-vibrant-mode') as HTMLButtonElement;
toggleVibrantModeButton.addEventListener('click', () => {
    document.body.classList.toggle('vibrant-mode');
});
// ... (Rest of the code)