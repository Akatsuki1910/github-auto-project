// ... (Existing code)
const toggleScientificPadButton = document.getElementById('toggle-scientific-pad') as HTMLButtonElement;
const scientificPad = document.getElementById('scientific-pad') as HTMLDivElement;
toggleScientificPadButton.addEventListener('click', () => {
    if (scientificPad.style.display === 'none') {
        scientificPad.style.display = 'block';
    }
    else {
        scientificPad.style.display = 'none';
    }
});
const toggleDarkModeButton = document.getElementById('toggle-dark-mode') as HTMLButtonElement;
document.body.classList.add('light-scheme'); // Initial theme
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const toggleHighContrastButton = document.getElementById('toggle-high-contrast') as HTMLButtonElement;
toggleHighContrastButton.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});
const toggleDyslexiaModeButton = document.getElementById('toggle-dyslexia-mode') as HTMLButtonElement;
toggleDyslexiaModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dyslexia-mode');
});
const toggleLargeFontButton = document.getElementById('toggle-large-font') as HTMLButtonElement;
toggleLargeFontButton.addEventListener('click', () => {
    document.body.classList.toggle('large-font');
});
// ... (Rest of the code)