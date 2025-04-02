// ... (Existing code)
const toggleGrayscaleModeButton = document.getElementById('toggle-grayscale-mode') as HTMLButtonElement;
toggleGrayscaleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('grayscale-mode');
});
// ... (Rest of the code)