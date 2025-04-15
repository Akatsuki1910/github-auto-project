// ... (Existing code)
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.abs(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});