// ... (Existing code)
const expButton = document.getElementById('exp-button') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.exp(currentValue).toString();
    }
    catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)