// ... (Existing code)
const sinDegreesButton = document.getElementById('sin-degrees') as HTMLButtonElement;
const display = document.getElementById('display') as HTMLInputElement;
sinDegreesButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.sin(currentValue * Math.PI / 180);
        display.value = result.toString();
    }
});
//...(rest of the code)