// ... (Existing code)
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (1 / currentValue).toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of existing code)