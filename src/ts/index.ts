// ... (Existing code)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value += '**'; // Use ** for power operation
    }
});