// ... (Existing code)
const cosDegreesButton = document.getElementById('cos-degrees') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
cosDegreesButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cos(currentValue * Math.PI / 180);
        display.value = result.toString();
    }
});