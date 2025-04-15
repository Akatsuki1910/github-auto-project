// ... (Existing code)
const asinButton = document.getElementById('asin') as HTMLButtonElement;
asinButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.asin(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});