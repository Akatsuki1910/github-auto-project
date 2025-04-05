// ... (Existing code)
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = 'Error';
            return;
        }
        display.value = (value / 100).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)