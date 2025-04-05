// ... (Existing code)
const squaredButton = document.getElementById('squared') as HTMLButtonElement;
squaredButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseFloat(display.value);
        const result = value * value * value;
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)