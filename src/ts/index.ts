// ... (Existing code)
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.abs(currentValue).toString();
    }
});
// ... (Rest of the code)