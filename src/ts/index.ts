// ... (Existing code)
const toggleSepiaModeButton = document.getElementById('toggle-sepia-mode') as HTMLButtonElement;
toggleSepiaModeButton.addEventListener('click', () => {
    document.body.classList.toggle('sepia-mode');
});
// ... (Rest of the code)