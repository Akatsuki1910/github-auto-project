// ... (Existing code)
const toggleBoldButton = document.getElementById('toggle-bold') as HTMLButtonElement;
toggleBoldButton.addEventListener('click', () => {
    document.body.classList.toggle('bold-text');
});
const toggleItalicButton = document.getElementById('toggle-italic') as HTMLButtonElement;
toggleItalicButton.addEventListener('click', () => {
    document.body.classList.toggle('italic-text');
});
// ... (Rest of the code)