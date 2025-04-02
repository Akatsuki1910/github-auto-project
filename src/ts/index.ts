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
// ... (Rest of the code)