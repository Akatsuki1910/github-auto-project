// ... (Existing code)
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
cubeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.pow(currentValue, 3);
        display.value = result.toString();
    }
});