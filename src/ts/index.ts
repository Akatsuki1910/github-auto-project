// ... (Existing code)
const changeFontButton = document.getElementById('change-font') as HTMLButtonElement;
let currentFont = 'OpenDyslexic';

changeFontButton.addEventListener('click', () => {
    currentFont = currentFont === 'OpenDyslexic' ? 'Arial' : 'OpenDyslexic';
    document.body.style.fontFamily = currentFont;
});
// ... (Rest of existing code)