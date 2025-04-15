// ... (Existing code)
const atanButton = document.getElementById('atan') as HTMLButtonElement;
atanButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.atan(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});