// ... (Existing code)
const toggleUnderlineModeButton = document.getElementById('toggle-underline-mode') as HTMLButtonElement;
toggleUnderlineModeButton.addEventListener('click', () => {
    document.body.classList.toggle('underline-mode');
});
// ... (Rest of the code)