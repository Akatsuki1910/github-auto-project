// ... (Existing code)
const goldenRatioButton = document.getElementById('golden-ratio') as HTMLButtonElement;
goldenRatioButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += (1 + Math.sqrt(5)) / 2;
});
// ... (Rest of the code)