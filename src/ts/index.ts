// ... (Existing code)
const toggleBoldButton = document.getElementById('toggle-bold') as HTMLButtonElement;
toggleBoldButton.addEventListener('click', () => {
    document.body.classList.toggle('bold-text');
});
// ... (Rest of the code)