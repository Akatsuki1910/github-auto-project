// ... (Existing code)
const eighthButton = document.getElementById('eighth') as HTMLButtonElement;
eighthButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 8).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)