// ... (Existing code)
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.pow(currentValue, 3).toString();
    } catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)