// ... (Existing code)
const tenthButton = document.getElementById('tenth') as HTMLButtonElement;
tenthButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 10).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)