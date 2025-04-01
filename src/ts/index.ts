// ... (Existing code)
const medianButton = document.getElementById('median') as HTMLButtonElement;
medianButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numbers = display.value.split(',').map(Number).sort((a, b) => a - b);
    if (numbers.length < 1) {
        display.value = 'Error: Enter at least one number separated by commas.';
        return;
    }
    const mid = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 0) {
        display.value = ((numbers[mid - 1] + numbers[mid]) / 2).toString();
    }
    else {
        display.value = numbers[mid].toString();
    }
});
// ... (Rest of the code)