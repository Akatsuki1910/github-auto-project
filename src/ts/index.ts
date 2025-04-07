// ... (Existing code)
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.log10(currentValue).toString();
    }
    catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)