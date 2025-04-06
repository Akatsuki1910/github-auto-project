// ... (Existing code)
const squareRootNegativeButton = document.getElementById('square-root-negative') as HTMLButtonElement;
squareRootNegativeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number)) {
        display.value = 'Error';
        return;
    }
    if (number < 0) {
        display.value = 'Error: Negative Input';
        return;
    }
    const result = -Math.sqrt(number);
    display.value = result.toString();
});

// ... (Rest of the code)