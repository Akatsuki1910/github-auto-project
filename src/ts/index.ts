// ... (Existing code)
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(currentValue, 3).toString();
    }
});
// ... (Rest of existing code)