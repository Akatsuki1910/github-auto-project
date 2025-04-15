// ... (Existing code)
const acosButton = document.getElementById('acos') as HTMLButtonElement;
acosButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.acos(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});