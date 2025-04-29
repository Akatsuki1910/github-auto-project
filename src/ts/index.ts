// ... (Existing code)
const log10eButton = document.getElementById('log10e') as HTMLButtonElement;
log10eButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = math.log10(Math.E).toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)