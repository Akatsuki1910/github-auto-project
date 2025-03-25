// ... (Existing code)
const cubeButton = document.getElementById('cube');
if (cubeButton) {
    cubeButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = math.pow(currentValue, 3).toString();
        }
    });
}
// ... (Existing code)