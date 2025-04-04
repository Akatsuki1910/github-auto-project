// ... (Existing code)
const sixthButton = document.getElementById('sixth') as HTMLButtonElement;
sixthButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 6).toString();
    } catch (error) {
        display.value = "Error";
    }
});
// ... (Rest of the code)