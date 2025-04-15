// ... (Existing code)
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.tan(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});